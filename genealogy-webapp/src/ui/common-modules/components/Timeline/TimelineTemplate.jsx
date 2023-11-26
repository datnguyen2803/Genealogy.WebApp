import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import * as APIConstants from '../../../../logic/constants/APIConstant';
import { Typography } from '@mui/material';
import Images from '../../../assets/images/images'

export default function TimelineTemplate({ events }) {
	const results = [];
	let timeDot = 0;
	events.forEach((currEvent, index) => {
		let action = "";
		if (timeDot !== currEvent.year) {
			timeDot = currEvent.year;
			results.push(<YearItem key={timeDot} year={timeDot} />)
		}
		switch (currEvent.type) {
			case APIConstants.CLAN_EVENT_TYPE.MARRY:
				action = "cưới";
				break;

			case APIConstants.CLAN_EVENT_TYPE.GIVE_BIRTH:
				action = "đẻ";
				break;

			case APIConstants.CLAN_EVENT_TYPE.DEATH:
				action = "mất";
				break;

			case APIConstants.CLAN_EVENT_TYPE.BUILD_HOUSE:
				action = "xây nhà";
				break;
			default:
				return;
		}
		let description = currEvent.mainMemName + " " + action + " " + currEvent.subMemName;

		results.push(<EventItem key={currEvent.id} type={currEvent.type} month={currEvent.month} day={currEvent.day} 
			description={description} detail={currEvent.detail} />)
	});

	// console.log(results);
	return (
		<Timeline position="right">
			{results}
		</Timeline>

	);
}

function EventItem({ type, month, day, description, detail }) {
	let icon = null;
	switch (type) {
		case APIConstants.CLAN_EVENT_TYPE.MARRY:
			icon = <img src={Images.ICON_TIMELINE_MARRY} alt="ic_timeline_marry" height="30"></img>
			break;

		case APIConstants.CLAN_EVENT_TYPE.GIVE_BIRTH:
			icon = <img src={Images.ICON_TIMELINE_BIRTH} alt="ic_timeline_birth" height="30"></img>
			break;

		case APIConstants.CLAN_EVENT_TYPE.DEATH:
			icon = <img src={Images.ICON_TIMELINE_DEATH} alt="ic_timeline_death" height="30"></img>
			break;

		case APIConstants.CLAN_EVENT_TYPE.BUILD_HOUSE:
			icon = <img src={Images.ICON_TIMELINE_BUILDHOUSE} alt="ic_timeline_buildhouse" height="30"></img>
			break;
		default:
			return;
	}
	return (
		<TimelineItem>
			<TimelineOppositeContent color="text.secondary">
				{day + " - " + month}
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineConnector />
				<TimelineDot color="primary" variant="outlined">
					{icon}
				</TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<Typography align='left'>{description}</Typography>
				<Typography>{detail}</Typography>
			</TimelineContent>
		</TimelineItem>
	);
}

function YearItem({ year }) {
	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineConnector />
				<font size="6">
					{year}
				</font>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
			</TimelineContent>
		</TimelineItem>
	);
}
