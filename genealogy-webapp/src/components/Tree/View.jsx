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
			node.child_order = member.childOrder;
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
	
			mappedNodes.push(node);
		})
		console.log(mappedNodes);
		const testNodes = [
			{
				"id": "0054042f-4d37-4800-a8ed-7ad25e23b764",
				"pids": [
					"c51a1ee3-aedf-4215-bb24-e23f332e4749"
				],
				"name": "Nguyễn Văn Oanh",
				"gender": "male",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": null,
				"current_place": null,
				"is_clan_leader": true,
				"gen_no": 2,
				"child_order": 1,
				"fid": "58d017d5-ef0c-4ea0-ae95-b8e50fa37b6d",
				"mid": "1a719c1b-8b56-42eb-adf2-4e40681d8806"
			},
			{
				"id": "0651b20d-1033-4c5f-9a4d-695ba57e3223",
				"pids": [],
				"name": "Nguyễn Thị Hằng",
				"gender": "female",
				"dob": "1981-01-01T00:00:00",
				"dod": "1982-11-19T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 5,
				"fid": "074fd029-3ad9-4278-a246-017a1ca289dd",
				"mid": "184aaa08-9761-48d2-b83c-48c47abad342"
			},
			{
				"id": "072ab4e2-cefa-4415-a636-acfcc3a846a9",
				"pids": [],
				"name": "Nguyễn Thị Hường",
				"gender": "female",
				"dob": "1978-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 3,
				"mid": "184aaa08-9761-48d2-b83c-48c47abad342",
				"fid": "074fd029-3ad9-4278-a246-017a1ca289dd"
			},
			{
				"id": "074fd029-3ad9-4278-a246-017a1ca289dd",
				"pids": [
					"184aaa08-9761-48d2-b83c-48c47abad342"
				],
				"name": "Nguyễn Văn Xương",
				"gender": "male",
				"dob": "1949-01-01T00:00:00",
				"dod": "1997-12-04T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": true,
				"gen_no": 5,
				"child_order": 1,
				"mid": "b5a7cb5b-16dc-4335-a84c-df82bec1bc13",
				"fid": "7e0a1b47-7b70-4834-9517-d8e1a3e4223f"
			},
			{
				"id": "07892b64-5d81-4094-9007-af9856b55387",
				"pids": [],
				"name": "Nguyễn Quỳnh Như",
				"gender": "female",
				"dob": "1996-07-07T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 2,
				"mid": "d548d283-9dd4-474e-8aa7-3da5af4dffa4",
				"fid": "51fb8aef-dc11-471c-8515-e7724693bfe7"
			},
			{
				"id": "08f845b1-8f34-497c-8ba2-86166f04f4b5",
				"pids": [],
				"name": "Nguyễn Trung Hiếu",
				"gender": "male",
				"dob": "1990-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 1,
				"fid": "51fb8aef-dc11-471c-8515-e7724693bfe7",
				"mid": "d548d283-9dd4-474e-8aa7-3da5af4dffa4"
			},
			{
				"id": "0d840bbe-20e9-4b67-991f-84d3c80e3e9e",
				"pids": [
					"f34ceea2-3e4d-4d84-bbbe-2caabed444de"
				],
				"name": "Nguyễn Thị Khánh",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 0
			},
			{
				"id": "0d903e36-76af-40db-bf67-96b692b93999",
				"pids": [],
				"name": "Nguyễn Văn Tiễu",
				"gender": "male",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 4,
				"child_order": 3,
				"mid": "3c45c494-ab1e-4b35-8399-7a4cf2db0de5",
				"fid": "812527b5-2a2e-42bc-b5dd-9211bb750987"
			},
			{
				"id": "13b2f73c-65f2-4c1a-baa8-00e9cd5b18ac",
				"pids": [],
				"name": "Nguyễn  Thị",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": null,
				"current_place": null,
				"is_clan_leader": false,
				"gen_no": 3,
				"child_order": 3,
				"fid": "0054042f-4d37-4800-a8ed-7ad25e23b764",
				"mid": "c51a1ee3-aedf-4215-bb24-e23f332e4749"
			},
			{
				"id": "141dd8e0-de2c-4b4a-9ae5-e703d1fef4fc",
				"pids": [],
				"name": "Nguyễn Thị Mỹ",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 1,
				"fid": "74a983bb-2c2c-4bdd-87f9-f4e3f32c28e9"
			},
			{
				"id": "184aaa08-9761-48d2-b83c-48c47abad342",
				"pids": [
					"074fd029-3ad9-4278-a246-017a1ca289dd"
				],
				"name": "Nguyễn Thị Bích",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 1
			},
			{
				"id": "1a719c1b-8b56-42eb-adf2-4e40681d8806",
				"pids": [
					"58d017d5-ef0c-4ea0-ae95-b8e50fa37b6d"
				],
				"name": "Hiệu Triệu Bình",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": null,
				"current_place": null,
				"is_clan_leader": false,
				"gen_no": 1,
				"child_order": 0
			},
			{
				"id": "1cf5ed5e-9977-49f8-a16f-1b9a4e07d00e",
				"pids": [
					"a729ba9d-52fe-48d9-8671-ec8060f0bc34"
				],
				"name": "Nguyễn Thị Đoan",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 0
			},
			{
				"id": "1d21c822-06c4-4649-ba36-6960c6b17868",
				"pids": [
					"3565791b-6d6a-45b8-8a60-b80dfdcb93b4"
				],
				"name": "Nguyễn Văn Cát",
				"gender": "male",
				"dob": "1953-01-01T00:00:00",
				"dod": "1978-12-11T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 2,
				"fid": "7e0a1b47-7b70-4834-9517-d8e1a3e4223f",
				"mid": "b5a7cb5b-16dc-4335-a84c-df82bec1bc13"
			},
			{
				"id": "23b6cfd5-2f0b-41b6-a944-672e289c997e",
				"pids": [],
				"name": "Nguyễn Huy Đạo",
				"gender": "male",
				"dob": "1983-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 4,
				"fid": "074fd029-3ad9-4278-a246-017a1ca289dd",
				"mid": "184aaa08-9761-48d2-b83c-48c47abad342"
			},
			{
				"id": "2d4bf196-a96a-47ed-a64a-f5f9c95be937",
				"pids": [],
				"name": "Nguyễn Văn",
				"gender": "male",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": null,
				"current_place": null,
				"is_clan_leader": false,
				"gen_no": 3,
				"child_order": 1,
				"fid": "0054042f-4d37-4800-a8ed-7ad25e23b764",
				"mid": "c51a1ee3-aedf-4215-bb24-e23f332e4749"
			},
			{
				"id": "3565791b-6d6a-45b8-8a60-b80dfdcb93b4",
				"pids": [
					"1d21c822-06c4-4649-ba36-6960c6b17868"
				],
				"name": "Nguyễn Thị Tuyết",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 0
			},
			{
				"id": "35e0fa5c-9fc1-4e54-b44d-5c8ba3238117",
				"pids": [],
				"name": "Nguyễn Tiến Đạt",
				"gender": "male",
				"dob": "1999-03-28T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": false,
				"gen_no": 7,
				"child_order": 2,
				"fid": "fa490110-1163-4d2d-9692-f2f054de7e0e",
				"mid": "ed7a5e83-30d6-482d-b8eb-17a1b0a4eacf"
			},
			{
				"id": "378041a1-f7e4-48c8-a88d-c97066342ea6",
				"pids": [],
				"name": "Nguyễn Thị Hà",
				"gender": "female",
				"dob": "1987-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 5,
				"mid": "dec60230-6667-4d2d-9321-c5f9b108c94c",
				"fid": "8a819037-3234-4c33-9cff-e419a3b8975b"
			},
			{
				"id": "37e57cc0-0d9e-4e4a-9a6c-d19a4426a4d9",
				"pids": [],
				"name": "Nguyễn Huy Nguyện",
				"gender": "male",
				"dob": "1996-06-18T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": true,
				"gen_no": 7,
				"child_order": 1,
				"mid": "ed7a5e83-30d6-482d-b8eb-17a1b0a4eacf",
				"fid": "fa490110-1163-4d2d-9692-f2f054de7e0e"
			},
			{
				"id": "3bd27603-c303-4fe9-8445-60e1d8cf0271",
				"pids": [],
				"name": "Nguyễn Văn Tới",
				"gender": "male",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 1,
				"fid": "a729ba9d-52fe-48d9-8671-ec8060f0bc34",
				"mid": "1cf5ed5e-9977-49f8-a16f-1b9a4e07d00e"
			},
			{
				"id": "3c45c494-ab1e-4b35-8399-7a4cf2db0de5",
				"pids": [
					"812527b5-2a2e-42bc-b5dd-9211bb750987"
				],
				"name": "Nguyễn Thị Liên",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 3,
				"child_order": 0
			},
			{
				"id": "51fb8aef-dc11-471c-8515-e7724693bfe7",
				"pids": [
					"d548d283-9dd4-474e-8aa7-3da5af4dffa4"
				],
				"name": "Nguyễn Văn Uẩn",
				"gender": "male",
				"dob": "1965-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 6,
				"fid": "7e0a1b47-7b70-4834-9517-d8e1a3e4223f",
				"mid": "b5a7cb5b-16dc-4335-a84c-df82bec1bc13"
			},
			{
				"id": "5275097c-95d3-475b-8078-05ce3588f8f0",
				"pids": [],
				"name": "Nguyễn Thị Khoa",
				"gender": "female",
				"dob": "1982-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 1,
				"mid": "0d840bbe-20e9-4b67-991f-84d3c80e3e9e",
				"fid": "f34ceea2-3e4d-4d84-bbbe-2caabed444de"
			},
			{
				"id": "58d017d5-ef0c-4ea0-ae95-b8e50fa37b6d",
				"pids": [
					"1a719c1b-8b56-42eb-adf2-4e40681d8806"
				],
				"name": "Nguyễn Phúc Lợi",
				"gender": "male",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": null,
				"current_place": null,
				"is_clan_leader": true,
				"gen_no": 1,
				"child_order": 0
			},
			{
				"id": "594a50c8-2172-4e93-9b75-70e1c65cd06a",
				"pids": [],
				"name": "Nguyễn Văn Thanh",
				"gender": "male",
				"dob": "1978-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 2,
				"mid": "dec60230-6667-4d2d-9321-c5f9b108c94c",
				"fid": "8a819037-3234-4c33-9cff-e419a3b8975b"
			},
			{
				"id": "5cfe1ee1-3e84-4bac-910c-74163a198441",
				"pids": [],
				"name": "Nguyễn Thị Hải",
				"gender": "female",
				"dob": "1979-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 3,
				"fid": "8a819037-3234-4c33-9cff-e419a3b8975b",
				"mid": "dec60230-6667-4d2d-9321-c5f9b108c94c"
			},
			{
				"id": "5fe6d8e9-b9a3-48dd-a326-8d8bdc34b705",
				"pids": [],
				"name": "Nguyễn Thị Vĩnh",
				"gender": "female",
				"dob": "1994-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 5,
				"mid": "0d840bbe-20e9-4b67-991f-84d3c80e3e9e",
				"fid": "f34ceea2-3e4d-4d84-bbbe-2caabed444de"
			},
			{
				"id": "6f169e5a-7ed9-42b4-9590-6a5cc29fcb79",
				"pids": [],
				"name": "Nguyễn Thị Bính",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 4,
				"child_order": 4,
				"mid": "3c45c494-ab1e-4b35-8399-7a4cf2db0de5",
				"fid": "812527b5-2a2e-42bc-b5dd-9211bb750987"
			},
			{
				"id": "74a983bb-2c2c-4bdd-87f9-f4e3f32c28e9",
				"pids": [],
				"name": "Nguyễn Văn Đích",
				"gender": "male",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 4,
				"child_order": 2,
				"fid": "2d4bf196-a96a-47ed-a64a-f5f9c95be937"
			},
			{
				"id": "78dbf151-d1cb-43a5-94a2-4f0b868efd2f",
				"pids": [],
				"name": "Nguyễn Thành Chung",
				"gender": "male",
				"dob": "1989-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 2,
				"fid": "a729ba9d-52fe-48d9-8671-ec8060f0bc34",
				"mid": "1cf5ed5e-9977-49f8-a16f-1b9a4e07d00e"
			},
			{
				"id": "7b582b02-100a-4b99-a409-9badedeb49bb",
				"pids": [],
				"name": "Nguyễn Thị Bằng",
				"gender": "female",
				"dob": "1969-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 7,
				"mid": "b5a7cb5b-16dc-4335-a84c-df82bec1bc13",
				"fid": "7e0a1b47-7b70-4834-9517-d8e1a3e4223f"
			},
			{
				"id": "7e0a1b47-7b70-4834-9517-d8e1a3e4223f",
				"pids": [
					"b5a7cb5b-16dc-4335-a84c-df82bec1bc13",
					"e05fd978-7202-4d18-92bb-097a888def0b"
				],
				"name": "Nguyễn Văn Dậu",
				"gender": "male",
				"dob": "1920-01-01T00:00:00",
				"dod": "1980-04-28T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": true,
				"gen_no": 4,
				"child_order": 1,
				"fid": "812527b5-2a2e-42bc-b5dd-9211bb750987",
				"mid": "3c45c494-ab1e-4b35-8399-7a4cf2db0de5"
			},
			{
				"id": "812527b5-2a2e-42bc-b5dd-9211bb750987",
				"pids": [
					"3c45c494-ab1e-4b35-8399-7a4cf2db0de5"
				],
				"name": "Nguyễn Văn Hoành",
				"gender": "male",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": null,
				"current_place": null,
				"is_clan_leader": true,
				"gen_no": 3,
				"child_order": 2,
				"fid": "0054042f-4d37-4800-a8ed-7ad25e23b764",
				"mid": "c51a1ee3-aedf-4215-bb24-e23f332e4749"
			},
			{
				"id": "8a819037-3234-4c33-9cff-e419a3b8975b",
				"pids": [
					"dec60230-6667-4d2d-9321-c5f9b108c94c"
				],
				"name": "Nguyễn Văn Cải",
				"gender": "male",
				"dob": "1955-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 3,
				"mid": "b5a7cb5b-16dc-4335-a84c-df82bec1bc13",
				"fid": "7e0a1b47-7b70-4834-9517-d8e1a3e4223f"
			},
			{
				"id": "9bd68d4d-fcda-4c41-a670-be8e4abac870",
				"pids": [],
				"name": "Nguyễn Thị Bé",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 1,
				"fid": "f9d067fc-5158-49ee-a168-a9ca4da8a96d",
				"mid": "c8e52f63-cafe-419b-8c5b-4c7d12b56252"
			},
			{
				"id": "a0ae1642-9b07-4ffc-a7a4-bb4403d4a421",
				"pids": [],
				"name": "Nguyễn Phương Nam",
				"gender": "male",
				"dob": "2001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 3,
				"mid": "1cf5ed5e-9977-49f8-a16f-1b9a4e07d00e",
				"fid": "a729ba9d-52fe-48d9-8671-ec8060f0bc34"
			},
			{
				"id": "a502a0e4-9459-4b6f-80c6-c65b1ce1c7cb",
				"pids": [],
				"name": "Nguyễn Thị Phấn",
				"gender": "female",
				"dob": "1986-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 3,
				"mid": "0d840bbe-20e9-4b67-991f-84d3c80e3e9e",
				"fid": "f34ceea2-3e4d-4d84-bbbe-2caabed444de"
			},
			{
				"id": "a729ba9d-52fe-48d9-8671-ec8060f0bc34",
				"pids": [
					"1cf5ed5e-9977-49f8-a16f-1b9a4e07d00e"
				],
				"name": "Nguyễn Văn Lâm",
				"gender": "male",
				"dob": "1962-01-01T00:00:00",
				"dod": "2006-08-17T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 5,
				"mid": "b5a7cb5b-16dc-4335-a84c-df82bec1bc13",
				"fid": "7e0a1b47-7b70-4834-9517-d8e1a3e4223f"
			},
			{
				"id": "a9296daf-3f2b-454f-949a-10b8e85e1e2c",
				"pids": [],
				"name": "Nguyễn Thị Thoa",
				"gender": "female",
				"dob": "1984-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 2,
				"fid": "f34ceea2-3e4d-4d84-bbbe-2caabed444de",
				"mid": "0d840bbe-20e9-4b67-991f-84d3c80e3e9e"
			},
			{
				"id": "b5a7cb5b-16dc-4335-a84c-df82bec1bc13",
				"pids": [
					"7e0a1b47-7b70-4834-9517-d8e1a3e4223f"
				],
				"name": "Nguyễn Thị Mão",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 4,
				"child_order": 0
			},
			{
				"id": "c51a1ee3-aedf-4215-bb24-e23f332e4749",
				"pids": [
					"0054042f-4d37-4800-a8ed-7ad25e23b764"
				],
				"name": "Đỗ Thị Lượng",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": null,
				"current_place": null,
				"is_clan_leader": false,
				"gen_no": 2,
				"child_order": 0
			},
			{
				"id": "c8e52f63-cafe-419b-8c5b-4c7d12b56252",
				"pids": [
					"f9d067fc-5158-49ee-a168-a9ca4da8a96d"
				],
				"name": "Bùi Thị Cún",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 4,
				"child_order": 0
			},
			{
				"id": "d4634d10-e15a-411e-9acf-070d5f182fc6",
				"pids": [],
				"name": "Nguyễn Huy Điền",
				"gender": "male",
				"dob": "1976-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hà Đông, Hà Nội",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 2,
				"fid": "074fd029-3ad9-4278-a246-017a1ca289dd",
				"mid": "184aaa08-9761-48d2-b83c-48c47abad342"
			},
			{
				"id": "d548d283-9dd4-474e-8aa7-3da5af4dffa4",
				"pids": [
					"51fb8aef-dc11-471c-8515-e7724693bfe7"
				],
				"name": "Triệu Thị Ngọc",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 0
			},
			{
				"id": "d93088c1-9f47-4034-897f-10fdec8c5700",
				"pids": [],
				"name": "Nguyễn Thị",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": null,
				"current_place": null,
				"is_clan_leader": false,
				"gen_no": 3,
				"child_order": 4,
				"fid": "0054042f-4d37-4800-a8ed-7ad25e23b764",
				"mid": "c51a1ee3-aedf-4215-bb24-e23f332e4749"
			},
			{
				"id": "da035de5-7a9a-489c-baf1-96fe33fbfc67",
				"pids": [],
				"name": "Nguyễn Thị Thu",
				"gender": "female",
				"dob": "1976-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 1,
				"fid": "8a819037-3234-4c33-9cff-e419a3b8975b",
				"mid": "dec60230-6667-4d2d-9321-c5f9b108c94c"
			},
			{
				"id": "ddc0c599-73b5-4584-8484-e0270f39fec2",
				"pids": [],
				"name": "Nguyễn Thị Tính",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 4,
				"child_order": 2,
				"fid": "812527b5-2a2e-42bc-b5dd-9211bb750987",
				"mid": "3c45c494-ab1e-4b35-8399-7a4cf2db0de5"
			},
			{
				"id": "ddd78f2d-6021-4b85-9365-d199ba579a49",
				"pids": [],
				"name": "Nguyễn Văn Phước",
				"gender": "male",
				"dob": "1989-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 4,
				"mid": "0d840bbe-20e9-4b67-991f-84d3c80e3e9e",
				"fid": "f34ceea2-3e4d-4d84-bbbe-2caabed444de"
			},
			{
				"id": "dec60230-6667-4d2d-9321-c5f9b108c94c",
				"pids": [
					"8a819037-3234-4c33-9cff-e419a3b8975b"
				],
				"name": "Trịnh Thị Hiền",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 0
			},
			{
				"id": "e05fd978-7202-4d18-92bb-097a888def0b",
				"pids": [
					"7e0a1b47-7b70-4834-9517-d8e1a3e4223f"
				],
				"name": "Bùi Thị Dậu",
				"gender": "female",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 4,
				"child_order": 0
			},
			{
				"id": "e0e3e78d-c63f-478f-97d5-19984e5c61e5",
				"pids": [],
				"name": "Nguyễn Thị Hồng",
				"gender": "female",
				"dob": "1981-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 4,
				"fid": "8a819037-3234-4c33-9cff-e419a3b8975b",
				"mid": "dec60230-6667-4d2d-9321-c5f9b108c94c"
			},
			{
				"id": "ed7a5e83-30d6-482d-b8eb-17a1b0a4eacf",
				"pids": [
					"fa490110-1163-4d2d-9692-f2f054de7e0e"
				],
				"name": "Vũ Thị Hảo",
				"gender": "female",
				"dob": "1975-08-13T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 0
			},
			{
				"id": "f34ceea2-3e4d-4d84-bbbe-2caabed444de",
				"pids": [
					"0d840bbe-20e9-4b67-991f-84d3c80e3e9e"
				],
				"name": "Nguyễn Văn Vinh",
				"gender": "male",
				"dob": "1959-01-01T00:00:00",
				"dod": "2021-07-13T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 5,
				"child_order": 4,
				"mid": "b5a7cb5b-16dc-4335-a84c-df82bec1bc13",
				"fid": "7e0a1b47-7b70-4834-9517-d8e1a3e4223f"
			},
			{
				"id": "f48057b8-09e9-4841-bbca-cc6ee27c127e",
				"pids": [],
				"name": "Nguyễn Thị Chinh",
				"gender": "female",
				"dob": "1978-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": false,
				"gen_no": 6,
				"child_order": 1,
				"fid": "1d21c822-06c4-4649-ba36-6960c6b17868",
				"mid": "3565791b-6d6a-45b8-8a60-b80dfdcb93b4"
			},
			{
				"id": "f9d067fc-5158-49ee-a168-a9ca4da8a96d",
				"pids": [
					"c8e52f63-cafe-419b-8c5b-4c7d12b56252"
				],
				"name": "Nguyễn Văn Đạm",
				"gender": "male",
				"dob": "0001-01-01T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "",
				"current_place": "",
				"is_clan_leader": false,
				"gen_no": 4,
				"child_order": 1,
				"fid": "2d4bf196-a96a-47ed-a64a-f5f9c95be937"
			},
			{
				"id": "fa490110-1163-4d2d-9692-f2f054de7e0e",
				"pids": [
					"ed7a5e83-30d6-482d-b8eb-17a1b0a4eacf"
				],
				"name": "Nguyễn Huy Ước",
				"gender": "male",
				"dob": "1975-03-30T00:00:00",
				"dod": "0001-01-01T00:00:00",
				"birth_place": "La Dương, Dương Nội, Hoài Đức, Hà Tây",
				"current_place": "Trung Bình, Dương Nội, Hà Đông, Hà Nội",
				"is_clan_leader": true,
				"gen_no": 6,
				"child_order": 1,
				"mid": "184aaa08-9761-48d2-b83c-48c47abad342",
				"fid": "074fd029-3ad9-4278-a246-017a1ca289dd"
			}
		]
		setNodes(testNodes);
	}

	return (
		<>
			<TreeTemplate nodes={nodes} />
			<ButtonAdd />
		</>
	);
}



