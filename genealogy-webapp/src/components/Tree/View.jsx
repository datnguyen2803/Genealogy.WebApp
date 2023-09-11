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
	const [allMembers, setAllMembers] = useState([]);
	const [allRelas, setAllRelas] = useState([]);
	const [nodes, setNodes] = useState([]);
	useEffect(() => {
		async function fetchData() {
		  await GetAllMembers();
		//   await new Promise(resolve => setTimeout(resolve, 2000));
		//   await GetAllRelationships();
		//   await new Promise(resolve => setTimeout(resolve, 2000));
		//   MapDataToGraph();
		}
	
		fetchData();
	  }, []);
	  useEffect(() => {
		async function fetchData() {
		//   await GetAllMembers();
		//   await new Promise(resolve => setTimeout(resolve, 2000));
		  await GetAllRelationships();
		//   await new Promise(resolve => setTimeout(resolve, 2000));
		//   MapDataToGraph();
		}
	
		fetchData();
	  }, [allMembers]);
	  useEffect(() => {
		async function fetchData() {
		//   await GetAllMembers();
		//   await new Promise(resolve => setTimeout(resolve, 2000));
		//   await GetAllRelationships();
		//   await new Promise(resolve => setTimeout(resolve, 2000));
		  MapDataToGraph();
		}
	
		fetchData();
	  }, [allRelas]);

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

	function MapDataToGraph() {
		const mappedNodes = [];
		allMembers.forEach((member) => {
			let node = {};
			node.id = member.id;
			node.pids = [];
			node.name = member.surname + ' ' + member.lastname;
			if((member.surname === null) && (member.lastname === null)) {
				if(member.note !== '') {
					node.name = member.note
				} else {
					node.name = "Không nhớ tên"
				}
			}
			node.gender = (member.gender === MemberAPI.MEMBER_GENDER_enum.MALE) ? 'male' : 'female';
			node.dob = member.dob;
			node.dod = member.dod;
			node.birth_place = member.birthPlace;
			node.current_place = member.currentPlace;
			node.is_clan_leader = member.isClanLeader;
			node.gen_no = member.genNo;
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
			node.img = member.image;
	
			mappedNodes.push(node);
		})
		console.log(mappedNodes);
		setNodes(mappedNodes);
	}

	return (
		<>
			<TreeTemplate nodes={nodes} />
			{/* <ButtonAdd /> */}
		</>
	);
}



