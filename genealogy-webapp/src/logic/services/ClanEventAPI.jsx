import CallAPI from './API';
import * as APIConstant from '../constants/APIConstant';


export function GetAll() {
	let body = {};
	return CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_GET_ALL, body);
}

export function FilterByMem(member) {
	let body = member;
	return CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_MEM, body);
}

export function FilterByType(type) {
	let body = {type: type};
	return CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TYPE, body);
}

export function FilterByTime(start_time, end_time) {
	let body = {startTime: start_time, endTime: end_time, };
	return CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TIME, body);
}

export function Add(new_clan_event) {
	let body = new_clan_event;
	return CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_ADD, body);
}

export function Edit(edit_clan_event) {
	let body = edit_clan_event;
	return CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_EDIT, body);
}

export function Delete(delete_clan_event) {
	let body = delete_clan_event;
	return CallAPI(APIConstant.CONTROLLERS.CLAN_EVENT, APIConstant.ACTIONS.CLAN_EVENT_DELETE, body);
}