import {CallAPI} from './API';
import * as APIConstant from './Constant';

export const RELATIONSHIP_enum = {
	MARRIED: 0,
	PARENT_CHILD: 1,

}

export function GetAll() {
	let body = {};
	let retVal = [];
	let response = CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_GET_ALL, body);

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	retVal = response.Data;
	// } else {
	// 	console.error(response.Message);
	// }
	if (Array.isArray(response)) {
		retVal = response;
	  }
	// console.log(retVal);
	return retVal;
}

export function FilterByMem(member) {
	let body = member;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_MEM, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function FilterByRelationship(relationship) {
	let body = {relationship: relationship};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_RELATIONSHIP, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function FilterByMemAndRelate(member, relationship) {
	let body = {member: member, relationship: relationship, };
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_MEM_AND_RELATE, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function Add(new_relationship) {
	let body = new_relationship;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_ADD, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function Edit(edit_relationship) {
	let body = edit_relationship;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_EDIT, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}

export function Delete(delete_relationship) {
	let body = delete_relationship;
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_DELETE, body);

	if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
		retVal = response.Data;
	} else {
		console.error(response.Message);
	}
	return retVal;
}