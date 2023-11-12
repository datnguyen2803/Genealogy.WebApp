import CallAPI from './API';
import * as APIConstant from '../constants/APIConstant';

export const MEMBER_GENDER_enum = {
	MALE: 0,
	FEMALE: 1,
}

export function GetAll() {
	let body = {};
	let retVal = [];
	let resData = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_GET_ALL, body);
	return resData;

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	retVal = response.Data;
	// } else {
	// 	console.error(response.Message);
	// }
	// if (Array.isArray(response)) {
	// 	retVal = response;
	//   }
	// // console.log(retVal);
	// return retVal;
}

export function GetByFeatures( surname, lastname, gender, child_order, gen_no, note) {
	let body = {
		Surname: surname,
		Lastname: lastname,
		Gender: gender,
		ChildOrder: child_order,
		GenNo: gen_no,
		Note: note
	};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_GET_BY_FEATURES, body);
	return response;
	// retVal = response.Data;
	// return retVal;
}

export function GetLeader() {
	let body = {};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_GET_LEADER, body);
	return response;

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	retVal = response.Data;
	// } else {
	// 	console.error(response.Message);
	// }
	// return retVal;
}

export function SearchByName(name) {
	let body = { name: name, };
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_SEARCH_BY_NAME, body);
	return response;

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	retVal = response.Data;
	// } else {
	// 	console.error(response.Message);
	// }
	// return retVal;
}

export function FilterByGender(gender) {
	let body = {gender: gender};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_FILTER_BY_GENDER, body);
	return response;
	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	retVal = response.Data;
	// } else {
	// 	console.error(response.Message);
	// }
	// return retVal;
}

export function FilterByPlace(place) {
	let body = {place: place};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_FILTER_BY_PLACE, body);
	return response;
	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	retVal = response.Data;
	// } else {
	// 	console.error(response.Message);
	// }
	// return retVal;
}

export function FilterByGen(gen_no) {
	let body = {gen: gen_no};
	let retVal = {};
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_FILTER_BY_GEN, body);
	return response;

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	retVal = response.Data;
	// } else {
	// 	console.error(response.Message);
	// }
	// return retVal;
}

export function Add(new_mem) {
	let body = new_mem;
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_ADD, body);

	return response;

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	return true;
	// } else {
	// 	console.error(response.Message);
	// 	return false;
	// }
}

export function Edit(edit_mem) {
	let body = edit_mem;
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_ADD, body);

	return response;

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	return true;
	// } else {
	// 	console.error(response.Message);
	// 	return false;
	// }
}

export function Delete(delete_mem) {
	let body = delete_mem;
	let response = CallAPI(APIConstant.CONTROLLERS.MEMBER, APIConstant.ACTIONS.MEMBER_ADD, body);

	return response;

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	return true;
	// } else {
	// 	console.error(response.Message);
	// 	return false;
	// }
}