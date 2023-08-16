import React, { useState } from 'react';
import TreeTemplate from './Template';
import ButtonAdd from './ButtonAdd';
import * as RelaAPI from '../API/RelationshipAPI';
import * as MemberAPI from '../API/MemberAPI';

function MapDataToGraph(nodes, memberList, relationshipList) {
	memberList.forEach((member) => {
		let node = {};
		node.id = member.id;
		node.pids = [];
		node.name = member.surname + ' ' + member.lastname;
		node.gender = (member.gender === MemberAPI.MEMBER_GENDER_enum.MALE) ? 'male' : 'female';
		node.dob = member.dob;
		node.dod = member.dod;
		node.birth_place = member.birthPlace;
		node.current_place = member.currentPlace;
		node.is_clan_leader = member.isClanLeader;
		node.gen_no = member.genNo;
		relationshipList.forEach((rela) => {
			if((member.id === rela.subMemId)) {
				let mainMem = memberList.find(mainMember => {
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

		nodes.push(node);
	})
}

export default function TreeView () {

	let grandma = {
		id: 44,
		surname: "Nguyễn",
		lastname: "Thị Bích",
		gender: 1,
			// MALE = 0,
			// FEMALE = 1
		dob: "15-07-1944", // date of birth
		dod: "", // date of death, nullable
		birth_place: "Dương Nội",
		current_place: "Dương Nội",
		is_clan_leader: false,
		gen_no: 4,
		image: 'https://cdn.balkan.app/shared/2.jpg',
	}
	let papa = {
		id: 1,
		surname: "Nguyễn",
		lastname: "Huy Ước",
		gender: 0,
			// MALE = 0,
			// FEMALE = 1
		dob: "30-03-1975", // date of birth
		dod: "", // date of death, nullable
		birth_place: "Dương Nội",
		current_place: "Dương Nội",
		is_clan_leader: true,
		gen_no: 5,
		image: 'https://cdn.balkan.app/shared/2.jpg',
	}
	let mama = {
		id: papa.id + 1,
		surname: "Vũ",
		lastname: "Thị Hảo",
		gender: 1,
			// MALE = 0,
			// FEMALE = 1
		dob: "13-08-1975", // date of birth
		dod: "", // date of death, nullable
		birth_place: "Dương Nội",
		current_place: "Dương Nội",
		is_clan_leader: false,
		gen_no: 5,
		image: 'https://cdn.balkan.app/shared/m30/5.jpg',
	}
	let bro = {
		id: mama.id + 1,
		surname: "Nguyễn",
		lastname: "Huy Nguyện",
		gender: 0,
			// MALE = 0,
			// FEMALE = 1
		dob: "18-06-1996", // date of birth
		dod: "", // date of death, nullable
		birth_place: "Dương Nội",
		current_place: "Dương Nội",
		is_clan_leader: false,
		gen_no: 6,
		image: 'https://cdn.balkan.app/shared/m10/2.jpg',
	}
	let me = {
		id: bro.id + 1,
		surname: "Nguyễn",
		lastname: "Tiến Đạt",
		gender: 0,
			// MALE = 0,
			// FEMALE = 1
		dob: "28-03-1999", // date of birth
		dod: "", // date of death, nullable
		birth_place: "Dương Nội",
		current_place: "Dương Nội",
		is_clan_leader: false,
		gen_no: 6,
		image: 'https://cdn.balkan.app/shared/m10/1.jpg',
	}
	
	let grandma_papa = {
		id: 10,
		main_mem_id: grandma.id,
		sub_mem_id: papa.id,
		relate_code: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
		date_start: "dont know",
	}
	let papa_mama = {
		id: 100,
		main_mem_id: papa.id,
		sub_mem_id: mama.id,
		relate_code: RelaAPI.RELATIONSHIP_enum.MARRIED,
		date_start: "dont know",
	}
	let mama_papa = {
		id: 100,
		main_mem_id: mama.id,
		sub_mem_id: papa.id,
		relate_code: RelaAPI.RELATIONSHIP_enum.MARRIED,
		date_start: "dont know",
	}
	let papa_bro = {
		id: 102,
		main_mem_id: papa.id,
		sub_mem_id: bro.id,
		relate_code: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
		date_start: "dont know",
	}
	let mama_bro = {
		id: 111,
		main_mem_id: mama.id,
		sub_mem_id: bro.id,
		relate_code: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
		date_start: "dont know",
	}
	let papa_me = {
		id: 104,
		main_mem_id: papa.id,
		sub_mem_id: me.id,
		relate_code: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
		date_start: "dont know",
	}
	let mama_me = {
		id: 113,
		main_mem_id: mama.id,
		sub_mem_id: me.id,
		relate_code: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
		date_start: "dont know",
	}


	let members = [grandma, papa, mama, bro, me];
	let relationships = [grandma_papa, papa_mama, mama_papa, papa_bro, mama_bro, papa_me, mama_me];


	// function onClickRender() {
	// 	// let nodeList = [...nodes];
	// 	members.forEach((member) => {
	// 		let node = ConvertMember2Node(member);
	// 		nodes.push(node);
	// 	});
	// 	// setNodes(nodeList);
	// }

	let nodes = [];
	let myMems = MemberAPI.GetAll();
	let myRelation = RelaAPI.GetAll();
	MapDataToGraph(nodes, myMems, myRelation);

	return (
		<>
			<TreeTemplate nodes={nodes} />
			<ButtonAdd />
		</>
	);
}



