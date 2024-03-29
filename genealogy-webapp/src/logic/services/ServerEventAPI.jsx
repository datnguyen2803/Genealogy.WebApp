import CallAPI from './API';
import * as APIConstant from '../constants/APIConstant';

export function GetAll() {
	let body = {};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.SERVER_EVENT, APIConstant.ACTIONS.SERVER_EVENT_GET_ALL, body);
	return response;
}

export function FilterByUser(user) {
	let body = user;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.SERVER_EVENT, APIConstant.ACTIONS.SERVER_EVENT_FILTER_BY_USER, body);
	return response;
}

export function FilterByTable(table) {
	let body = {table: table};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.SERVER_EVENT, APIConstant.ACTIONS.SERVER_EVENT_FILTER_BY_TABLE, body);
	return response;
}

export function FilterByTime(start_time, end_time) {
	let body = {startTime: start_time, endTime: end_time, };
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.SERVER_EVENT, APIConstant.ACTIONS.SERVER_EVENT_FILTER_BY_TIME, body);
	return response;
}

export function Add(new_server_event) {
	let body = new_server_event;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.SERVER_EVENT, APIConstant.ACTIONS.SERVER_EVENT_ADD, body);
	return response;
}

export function Delete(delete_server_event) {
	let body = delete_server_event;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.SERVER_EVENT, APIConstant.ACTIONS.SERVER_EVENT_DELETE, body);
	return response;
}