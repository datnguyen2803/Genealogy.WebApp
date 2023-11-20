import CallAPI from './API';
import * as APIConstant from '../constants/APIConstant';

export function GetAll() {
	let body = {};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_GET_ALL, body);
	return response;
}

export function FilterByMem(member) {
	let body = member;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_MEM, body);
	return response;
}

export function FilterByType(type) {
	let body = {type: type};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TYPE, body);
	return response;
}

export function FilterByTime(start_time, end_time) {
	let body = {startTime: start_time, endTime: end_time, };
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TIME, body);
	return response;
}

export function Add(new_clan_event) {
	let body = new_clan_event;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_ADD, body);
	return response;
}

export function Edit(edit_clan_event) {
	let body = edit_clan_event;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_EDIT, body);
	return response;
}

export function Delete(delete_clan_event) {
	let body = delete_clan_event;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_DELETE, body);
	return response;
}