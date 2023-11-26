import React, { useState, useEffect } from 'react';
import TreeTemplate from './TreeTemplate';
import * as RelaAPI from '../../../../logic/services/RelationshipAPI';
import * as MemberAPI from '../../../../logic/services/MemberAPI';
import * as APIConstants from '../../../../logic/constants/APIConstant';


export default function Tree () {
	const defaultDateStr = APIConstants.DEFAULT_DATETIME;
	const [allMembers, setAllMembers] = useState([]);
	const [allRelas, setAllRelas] = useState([]);
	const [nodes, setNodes] = useState([]);

	useEffect(() => {
		MemberAPI.GetAll()
			.then((res) => {
				if (Array.isArray(res)) {
					setAllMembers(res);
				}
			})
			.catch((err) => {
				console.log(err)
			});
		// console.log(allMembers);
	}, []);

	useEffect(() => {
		RelaAPI.GetAll()
			.then((res) => {
				if (Array.isArray(res)) {
					setAllRelas(res);
				}
			})
			.catch((err) => {
				console.log(err)
			});
	}, []);

	useEffect(() => {
		getListNode();
	}, [allMembers, allRelas]);


	async function getListNode() {
		const mappedNodes = [];
		allMembers.forEach((member) => {
			member.graphOrder = member.childOrder * 10 + member.gender;
		})
		allMembers.sort((a, b) => (a.graphOrder > b.graphOrder) ? 1 : -1);

		allMembers.forEach((member) => {
			// console.log(member);
			let node = {};
			node.id = member.id;
			node.pids = [];
			node.name = member.surname + ' ' + member.lastname;
			if((member.surname === null) && (member.lastname === null)) {
				// if(member.note !== '') {
				// 	node.name = member.note
				// } else {
					node.name = "Không nhớ tên"
				// }
			}
			if(member.note.includes("Tự") || member.note.includes("Hiệu") || member.note.includes("Bà")) {
				node.deathName = member.note.split(' ').slice(0, 3).join(' ');
			}

			node.gender = (member.gender === APIConstants.MEMBER_GENDER_enum.MALE) ? 'male' : 'female';
			if(member.gender === APIConstants.MEMBER_GENDER_enum.MALE) {
				node.tags = ["Male"];
			} else {
				node.tags = ["Female"]
			}
			node.dob = member.dob;
			node.dod = member.dod;
			node.birth_place = member.birthPlace;
			node.current_place = member.currentPlace;
			node.is_clan_leader = member.isClanLeader;
			if(node.is_clan_leader) {
				node.tags = ["Leader"];
			}
			node.gen_no = member.genNo;
			node.child_order = member.childOrder;
			node.note = member.note;
			allRelas.forEach((rela) => {
				if((member.id === rela.subMemId)) {
					let mainMem = allMembers.find(mainMember => {
						return mainMember.id === rela.mainMemId;
					})
					switch (rela.relateCode) {
						case APIConstants.RELATIONSHIP_enum.MARRY:
							{
								node.pids.push(rela.mainMemId);
								break;
							}
						case APIConstants.RELATIONSHIP_enum.PARENT_CHILD:
							{
								if(mainMem.gender === APIConstants.MEMBER_GENDER_enum.MALE) {
									node.fid = rela.mainMemId;
								} else {
									node.mid = rela.mainMemId;
								}
								break;
							}
	
						default:
							{
								// do nothing
								break;
							}
					}
				}
			});
			// node.img = member.image;


			node.field0 = node.name;
			node.field1 = node.deathName;

			//field 1 format
			let formattedDateTimeBirth = FormatDateTime(node.dob);
			let formattedDateTimeDead = FormatDateTime(node.dod);
			node.field2 = "Sinh: " + formattedDateTimeBirth.year;

			let lunarDeathday = "";
			if(member.note.includes("mất") || member.note.includes("Mất")) {
				const regex = /ngày (\d+-\d+)/;
				const match = member.note.match(regex);

				if (match && match[1]) {
					const day = match[1];
					lunarDeathday = day;
				} else {
					lunarDeathday = "?-?";
				}
			}
			if(node.dod === defaultDateStr && lunarDeathday === "") {
				node.field3 ="";
			} else {
				node.field3 = "Mất: " + lunarDeathday + '-' + formattedDateTimeDead.year;
			}
			
	
			mappedNodes.push(node);
		})
		setNodes(mappedNodes);
		return mappedNodes;
	}


	function Summarize() {
		var member_number = nodes.length;

		return (
			<>
				<div>
					<b>Tổng số thành viên: {member_number}</b>
				</div>
			</>
		);
	}

	return (
		<>
			{/* <Summarize /> */}
			<TreeTemplate nodes={nodes} />
		</>
	);
}

function FormatDateTime(input_datetime_string) {
	let arrayDateTime = input_datetime_string.split("T");
	let arrayDate = arrayDateTime[0].split("-");
	let arrayTime = arrayDateTime[1].split(":");
	return {
		year: arrayDate[0] === "0001" ? "?" : arrayDate[0],
		month: arrayDate[1] === "01" ? "?" : arrayDate[1],
		day: arrayDate[2] === "01" ? "?" : arrayDate[2],
		hour: arrayTime[0] === "00" ? "Không rõ giờ" : arrayTime[0],
		minute: arrayTime[1] === "00" ? "Không rõ phút" : arrayTime[1],
		second: arrayTime[2] === "00" ? "Không rõ giây" : arrayTime[2],
	}
}



