import TimelineTemplate from './TimelineTemplate';
import * as ClanEventAPI from '../../../../logic/services/ClanEventAPI'


export default function Timeline() {
	let event = [
		{
			id: 2,
			mainMemName: "Nguyễn Huy Ước",
			subMemName: "Vũ Thị Hảo",
			type: ClanEventAPI.CLAN_EVENT_TYPE.MARRY,
			year: 1995,
			month: 1,
			day: 1,
			// time: "1995",
			detail: "Tại La Dương"
		},
		{
			id: 0,
			mainMemName: "Vũ Thị Hảo",
			subMemName: "Nguyễn Tiến Đạt",
			type: ClanEventAPI.CLAN_EVENT_TYPE.GIVE_BIRTH,
			year: 1999,
			month: 3,
			day: 28,
			// time: "28-03-1999",
			detail: "Sinh tại trạm xá La Dương"
		},
		{
			id: 1,
			mainMemName: "Vũ Thị Hảo",
			subMemName: "Nguyễn Huy Nguyện",
			type: ClanEventAPI.CLAN_EVENT_TYPE.GIVE_BIRTH,
			year: 1996,
			month: 6,
			day: 18,
			// time: "18-06-1996",
			detail: "Sinh tại trạm xá La Dương"
		},


	];
	return (
		<>
			<TimelineTemplate events={event} />
		</>
	);
}