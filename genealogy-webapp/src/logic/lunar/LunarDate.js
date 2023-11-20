import React from 'react';
import moonTime from 'moon-time'

export function Convert2Lunar(solarYear, solarMonth, solarDay) {
	let moonTimes = moonTime({
        year: solarYear,
        month: solarMonth,
        day: solarDay
    });
	console.log(moonTimes);
	return {
		year: moonTimes.year,
        month: moonTimes.month,
        day: moonTimes.day
	}
}