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



