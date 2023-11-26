import CallAPI from './API';
import * as APIConstant from '../constants/APIConstant';

export function GetAll() {
	let body = {};
	return CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_GET_ALL, body);
}

export function FilterByMem(member) {
	let body = member;
	return CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_MEM, body);
}

export function FilterByRelationship(relationship) {
	let body = {relationship: relationship};
	return CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_RELATIONSHIP, body);

}

export function FilterByMemAndRelate(member, relationship) {
	let body = {member: member, relationship: relationship, };
	return CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_MEM_AND_RELATE, body);
}

export function Add(new_relationship) {
	let body = new_relationship;
	return CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_ADD, body);
}

export function Edit(edit_relationship) {
	let body = edit_relationship;
	return CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_EDIT, body);
}

export function Delete(delete_relationship) {
	let body = delete_relationship;
	return CallAPI(APIConstant.CONTROLLERS.RELATIONSHIP, APIConstant.ACTIONS.RELATIONSHIP_DELETE, body);
}