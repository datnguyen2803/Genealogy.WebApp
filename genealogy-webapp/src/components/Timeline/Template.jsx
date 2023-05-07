import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function TimelineTemplate({events}) {
	const results = [];

	events.forEach( (currEvent, index)=> {
		if(index === events.length - 1) {
			results.push(
				<TimelineItem>
				<TimelineSeparator>
					<TimelineDot />
				</TimelineSeparator>
				<TimelineContent>{currEvent.name}</TimelineContent>
				</TimelineItem>
			)
		} else {
			results.push(
				<TimelineItem>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>{currEvent.name}</TimelineContent>
				</TimelineItem>
			)
		}
	});

	return (results);
}