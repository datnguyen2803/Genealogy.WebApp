import {CallAPI} from './API';
import * as APIConstant from './Constant';

export function GetAll() {
	let body = {};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_GET_ALL, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function FilterByMem(member) {
	let body = member;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_MEM, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function FilterByType(type) {
	let body = {type: type};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TYPE, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function FilterByTime(start_time, end_time) {
	let body = {startTime: start_time, endTime: end_time, };
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TIME, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function Add(new_clan_event) {
	let body = new_clan_event;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_ADD, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function Edit(edit_clan_event) {
	let body = edit_clan_event;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_EDIT, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function Delete(delete_clan_event) {
	let body = delete_clan_event;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_DELETE, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}