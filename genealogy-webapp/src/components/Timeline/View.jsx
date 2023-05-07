import TimelineTemplate from './Template';

export default function TimelineView () {
	let myevents = [{name:"eat"}, {name: "study"}, {name: "sleep"}];

	return (
		<>
			<TimelineTemplate events={myevents} />
		</>
	);
}