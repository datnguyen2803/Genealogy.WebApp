import TimelineTemplate from './TimelineTemplate';

export default function Timeline () {
	let myevents = [{name:"eat"}, {name: "study"}, {name: "sleep"}];

	return (
		<>
			<TimelineTemplate events={myevents} />
		</>
	);
}