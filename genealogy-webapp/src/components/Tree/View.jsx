import React, { useState, useEffect } from 'react';
import TreeTemplate from './Template';
import ButtonAdd from './ButtonAdd';
import * as RelaAPI from '../API/RelationshipAPI';
import * as MemberAPI from '../API/MemberAPI';
import axios from 'axios';
import * as APIConstant from '../API/Constant';

// function MapDataToGraph(nodes, memberList, relationshipList) {
// 	memberList.forEach((member) => {
// 		let node = {};
// 		node.id = member.id;
// 		node.pids = [];
// 		node.name = member.surname + ' ' + member.lastname;
// 		if((member.surname === null) && (member.lastname === null)) {
// 			if(member.note !== '') {
// 				node.name = member.note
// 			} else {
// 				node.name = "Không nhớ tên"
// 			}
// 		}
// 		node.gender = (member.gender === MemberAPI.MEMBER_GENDER_enum.MALE) ? 'male' : 'female';
// 		node.dob = member.dob;
// 		node.dod = member.dod;
// 		node.birth_place = member.birthPlace;
// 		node.current_place = member.currentPlace;
// 		node.is_clan_leader = member.isClanLeader;
// 		node.gen_no = member.genNo;
// 		relationshipList.forEach((rela) => {
// 			if((member.id === rela.subMemId)) {
// 				let mainMem = memberList.find(mainMember => {
// 					return mainMember.id === rela.mainMemId;
// 				})
// 				switch (rela.relateCode) {
// 					case RelaAPI.RELATIONSHIP_enum.MARRIED:
// 						{
// 							node.pids.push(rela.mainMemId);
// 							break;
// 						}
// 					case RelaAPI.RELATIONSHIP_enum.PARENT_CHILD:
// 						{
// 							if(mainMem.gender === MemberAPI.MEMBER_GENDER_enum.MALE) {
// 								node.fid = rela.mainMemId;
// 							} else {
// 								node.mid = rela.mainMemId;
// 							}
// 							break;
// 						}

// 					default:
// 						{
// 							// do nothing
// 							break;
// 						}
// 				}
// 			}
// 		});
// 		node.img = member.image;

// 		nodes.push(node);
// 	})
// 	console.log(nodes)
// }

export default function TreeView () {
	const defaultDateStr = "0001-01-01T00:00:00";
	const [allMembers, setAllMembers] = useState([]);
	const [allRelas, setAllRelas] = useState([]);
	const [nodes, setNodes] = useState([]);
	useEffect(() => {
		async function fetchData() {
		  await GetAllMembers();
		  await GetAllRelationships();
		//   await new Promise(resolve => setTimeout(resolve, 2000));
		//   await GetAllRelationships();
		//   await new Promise(resolve => setTimeout(resolve, 2000));
		//   MapDataToGraph();
		}
	
		fetchData();
	  }, []);

	  useEffect(() => {
		async function fetchData() {

		let nodes = await getListNode();
		  MapDataToGraph(nodes);
		}
	
		fetchData();
	  }, [allMembers, allRelas]);

	async function GetAllMembers() {
		let apiUrl = 'https://localhost:2803/api' + '/' + APIConstant.CONTROLLERS.MEMBER + '/' + APIConstant.ACTIONS.MEMBER_GET_ALL;
		let options = {
			method: "GET",
			url: apiUrl,
			headers: {
				'content-type': 'application/json',
			},
			// timeout: 1000

		};
		await axios.request(options)
			.then(response => {
				if (Array.isArray(response.data)) {
					setAllMembers(response.data);
				}

			})
			.catch(error => {
				console.error(error)
			});
	}

	async function GetAllRelationships() {
		let apiUrl = 'https://localhost:2803/api' + '/' + APIConstant.CONTROLLERS.RELATIONSHIP + '/' + APIConstant.ACTIONS.RELATIONSHIP_GET_ALL;
		let options = {
			method: "GET",
			url: apiUrl,
			headers: {
				'content-type': 'application/json',
			},
			// timeout: 1000

		};
		await axios.request(options)
			.then(response => {
				if (Array.isArray(response.data)) {
					setAllRelas(response.data);
				}

			})
			.catch(error => {
				console.error(error)
			});
	}

	async function getListNode() {
		const mappedNodes = [];
		allMembers.forEach((member) => {
			member.graphOrder = member.childOrder * 10 + member.gender;
		})
		allMembers.sort((a, b) => (a.graphOrder > b.graphOrder) ? 1 : -1)

		allMembers.forEach((member) => {
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

			node.gender = (member.gender === MemberAPI.MEMBER_GENDER_enum.MALE) ? 'male' : 'female';
			if(member.gender === MemberAPI.MEMBER_GENDER_enum.MALE) {
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
						case RelaAPI.RELATIONSHIP_enum.MARRIED:
							{
								node.pids.push(rela.mainMemId);
								break;
							}
						case RelaAPI.RELATIONSHIP_enum.PARENT_CHILD:
							{
								if(mainMem.gender === MemberAPI.MEMBER_GENDER_enum.MALE) {
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
			console.log(node.field1);

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
			console.log(lunarDeathday);
			if(node.dod === defaultDateStr && lunarDeathday === "") {
				node.field3 ="";
			} else {
				node.field3 = "Mất: " + lunarDeathday + '-' + formattedDateTimeDead.year;
			}
			
	
			mappedNodes.push(node);
		})
				return mappedNodes;
	}

	function MapDataToGraph(myNodes) {
		const mappedNodes = myNodes;
		console.log(mappedNodes);
		setNodes(mappedNodes);
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
			<Summarize />
			<TreeTemplate nodes={nodes} />
			<ButtonAdd />
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



