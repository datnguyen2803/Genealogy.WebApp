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

export function FormatFromAPI(input_from_api) {
	let arrayDateTime = input_from_api.split("T");
	let arrayDate = arrayDateTime[0].split("-");
	let arrayTime = arrayDateTime[1].split(":");
	return {
		year: arrayDate[0] === "0001" ? "?" : arrayDate[0],
		month: arrayDate[1] === "01" ? "?" : arrayDate[1],
		day: arrayDate[2] === "01" ? "?" : arrayDate[2],
		hour: arrayTime[0] === "00" ? "Không rõ giờ" : arrayTime[0],
		minute: arrayTime[1] === "00" ? "Không rõ phút" : arrayTime[1],
		second: arrayTime[2] === "00" ? "Không rõ giây" : arrayTime[2],
	}
}