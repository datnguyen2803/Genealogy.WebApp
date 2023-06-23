import {CallAPI} from './API';
import * as APIConstant from './Constant';

export function GetAll() {
	let body = {};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.USER_LOGIN, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function GetLeader() {
	let body = {};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_GET_LEADER, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function SearchByName(name) {
	let body = { name: name, };
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_SEARCH_BY_NAME, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function FilterByGender(gender) {
	let body = {gender: gender};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_FILTER_BY_GENDER, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function FilterByPlace(place) {
	let body = {place: place};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_FILTER_BY_PLACE, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function FilterByGen(gen_no) {
	let body = {gen: gen_no};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_FILTER_BY_GEN, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function Add(new_mem) {
	let body = new_mem;
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_ADD, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		return true;
	} else {
		console.error(response.Message);
		return false;
	}
}

export function Edit(edit_mem) {
	let body = edit_mem;
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_ADD, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		return true;
	} else {
		console.error(response.Message);
		return false;
	}
}

export function Delete(delete_mem) {
	let body = delete_mem;
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_ADD, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		return true;
	} else {
		console.error(response.Message);
		return false;
	}
}