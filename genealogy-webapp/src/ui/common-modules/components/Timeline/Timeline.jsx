import React, { useState, useEffect } from 'react';
import TimelineTemplate from './TimelineTemplate';
import * as ClanEventAPI from '../../../../logic/services/ClanEventAPI';
import * as MemberAPI from '../../../../logic/services/MemberAPI';
import * as APIConstants from '../../../../logic/constants/APIConstant';
import * as DateTimeLogic from '../../../../logic/datetime/DateTime';


export default function Timeline() {
	const [allEvents, setAllEvents] = useState([]);
	const [allMembers, setAllMembers] = useState([]);
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
		ClanEventAPI.GetAll()
			.then((res) => {
				if (Array.isArray(res)) {
					setAllEvents(res);
				}
			})
			.catch((err) => {
				console.log(err)
			});
	}, []);

	useEffect(() => {
		getListNodes();
	}, [allEvents, allMembers]);

	console.log(allMembers);

	function getListNodes() {
		let tempNodes = [];
		if(allEvents.length === 0 || allMembers.length === 0) {
			console.error("API call failed !!!");
			return;
		}
		allEvents.sort((a, b) => (a.timeOccur > b.timeOccur) ? 1 : -1);
		allEvents.forEach(event => {
			let nodeId = event.id;
			let timeOccur = DateTimeLogic.FormatFromAPI(event.timeOccur);
			if(timeOccur.year === "?") return;
			let mainMem = allMembers.find(mem => mem.id === event.mainMemId);
			let mainMemName = mainMem.surname + " " + mainMem.lastname;
			let subMem = allMembers.find(mem => mem.id === event.subMemId);
			let subMemName = subMem.surname + " " + subMem.lastname;
			let type = event.type;
			let detail = event.detail;

			let node = {
				id: nodeId,
				mainMemName: mainMemName,
				subMemName: subMemName,
				type: type,
				year: timeOccur.year,
				month: timeOccur.month,
				day: timeOccur.day,
				detail: detail,
			}
			tempNodes.push(node);
		});
		setNodes(tempNodes);
	}

	return (
		<>
			<TimelineTemplate events={nodes} />
		</>
	);
}