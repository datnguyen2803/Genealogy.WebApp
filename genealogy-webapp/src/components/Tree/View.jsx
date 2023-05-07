import React, { useState } from 'react';
import TreeTemplate from './Template';

const GENDER = Object.freeze({
	MALE: 0,
	FEMALE: 1
});

const RELATIONSHIP = Object.freeze({
	eRELATIONSHIP_KETHON: 0,
	eRELATIONSHIP_BO_CON: 1,
	eRELATIONSHIP_ME_CON: 2


})

export default function TreeView () {

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
	
	let papa_mama = {
		id: 100,
		main_mem_id: papa.id,
		sub_mem_id: mama.id,
		relate_code: RELATIONSHIP.eRELATIONSHIP_KETHON,
		date_start: "dont know",
	}
	// let mama_papa = {
	// 	id: 101,
	// 	main_mem_id: mama.id,
	// 	sub_mem_id: papa.id,
	// 	relate_code: RELATIONSHIP.eRELATIONSHIP_VO,
	// 	date_start: "dont know",
	// }
	let papa_bro = {
		id: 102,
		main_mem_id: papa.id,
		sub_mem_id: bro.id,
		relate_code: RELATIONSHIP.eRELATIONSHIP_BO_CON,
		date_start: "dont know",
	}
	// let bro_papa = {
	// 	id: 103,
	// 	main_mem_id: bro.id,
	// 	sub_mem_id: papa.id,
	// 	relate_code: RELATIONSHIP.eRELATIONSHIP_CON,
	// 	date_start: "dont know",
	// }
	let mama_bro = {
		id: 111,
		main_mem_id: mama.id,
		sub_mem_id: bro.id,
		relate_code: RELATIONSHIP.eRELATIONSHIP_ME_CON,
		date_start: "dont know",
	}
	// let bro_mama = {
	// 	id: 112,
	// 	main_mem_id: bro.id,
	// 	sub_mem_id: mama.id,
	// 	relate_code: RELATIONSHIP.eRELATIONSHIP_CON,
	// 	date_start: "dont know",
	// }
	let papa_me = {
		id: 104,
		main_mem_id: papa.id,
		sub_mem_id: me.id,
		relate_code: RELATIONSHIP.eRELATIONSHIP_BO_CON,
		date_start: "dont know",
	}
	// let me_papa = {
	// 	id: 105,
	// 	main_mem_id: me.id,
	// 	sub_mem_id: papa.id,
	// 	relate_code: RELATIONSHIP.eRELATIONSHIP_CON,
	// 	date_start: "dont know",
	// }
	let mama_me = {
		id: 113,
		main_mem_id: mama.id,
		sub_mem_id: me.id,
		relate_code: RELATIONSHIP.eRELATIONSHIP_ME_CON,
		date_start: "dont know",
	}
	// let me_mama = {
	// 	id: 114,
	// 	main_mem_id: me.id,
	// 	sub_mem_id: mama.id,
	// 	relate_code: RELATIONSHIP.eRELATIONSHIP_CON,
	// 	date_start: "dont know",
	// }

	let members = [papa, mama, bro, me];
	let relationships = [papa_mama, papa_bro, mama_bro, papa_me, mama_me];

	function ConvertMember2Node (member) {
		let node = {};
		node.id = member.id;
		node.pids = [];
		node.name = member.surname + ' ' + member.lastname;
		node.gender = (member.gender === GENDER.MALE) ? 'male' : 'female';
		node.dob = member.dob;
		node.dod = member.dod;
		node.birth_place = member.birth_place;
		node.current_place = member.current_place;
		node.is_clan_leader = member.is_clan_leader;
		node.gen_no = member.gen_no;
		relationships.forEach((rela) => {
			if((member.id === rela.main_mem_id) || (member.id === rela.sub_mem_id)) {
				switch (rela.relate_code) {
					case RELATIONSHIP.eRELATIONSHIP_KETHON:
						{
							if(member.id === rela.main_mem_id) {
								node.pids.push(rela.sub_mem_id);
							} else {
								node.pids.push(rela.main_mem_id);
							}
							break;
						}
					case RELATIONSHIP.eRELATIONSHIP_BO_CON:
						{
							if(member.id === rela.sub_mem_id) {
								node.fid = rela.main_mem_id;
							} else {
								// do nothing
							}
							break;
						}
					case RELATIONSHIP.eRELATIONSHIP_ME_CON:
						{
							if(member.id === rela.sub_mem_id) {
								node.mid = rela.main_mem_id;
							} else {
								// do nothing
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

		return node;
	}


	function onClickRender() {
		// let nodeList = [...nodes];
		members.forEach((member) => {
			let node = ConvertMember2Node(member);
			nodes.push(node);
		});
		// setNodes(nodeList);
	}

	let nodes = [];
	members.forEach((member) => {
		let node = ConvertMember2Node(member);
		nodes.push(node);
	});

	return (
		<>
			<TreeTemplate nodes={nodes} />
			<button onClick = {onClickRender}>Click me</button>
		</>
	);
}
