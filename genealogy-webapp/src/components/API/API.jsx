import { useState, useEffect } from 'react'
import axios from 'axios';
import { APIResponseModel } from './APIResponseModel';
import * as APIConstant from './Constant';

export function useCallAPI(controller, action, body) {
	const [rawApiResponse, setRawApiResponse] = useState({});
	let apiUrl = APIConstant.URL_BASE;
	if (controller !== APIConstant.CONTROLLERS.NONE) {
		apiUrl = apiUrl + '/' + controller;
		if (action !== APIConstant.ACTIONS.NONE) {
			apiUrl = apiUrl + '/' + action;
		} else {
			// do nothing
		}
	} else {
		// do nothing
	}

	let options = {
		method: "GET",
		url: apiUrl,
		headers: {
			'content-type': 'application/json',
		},
		data: body,
		timeout: 1000

	};

	switch (action) {
		case APIConstant.ACTIONS.TEST_CAT_FACT:
		case APIConstant.ACTIONS.USER_LOGIN:
		case APIConstant.ACTIONS.SERVER_EVENT_FILTER_BY_USER:
		case APIConstant.ACTIONS.SERVER_EVENT_FILTER_BY_TABLE:
		case APIConstant.ACTIONS.SERVER_EVENT_FILTER_BY_TIME:
		case APIConstant.ACTIONS.MEMBER_GET_ALL:
		case APIConstant.ACTIONS.MEMBER_GET_BY_FEATURES:
		case APIConstant.ACTIONS.MEMBER_GET_LEADER:
		case APIConstant.ACTIONS.MEMBER_SEARCH_BY_NAME:
		case APIConstant.ACTIONS.MEMBER_FILTER_BY_GENDER:
		case APIConstant.ACTIONS.MEMBER_FILTER_BY_PLACE:
		case APIConstant.ACTIONS.MEMBER_FILTER_BY_GEN:
		case APIConstant.ACTIONS.CLAN_EVENT_GET_ALL:
		case APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_MEM:
		case APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TYPE:
		case APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TIME:
		case APIConstant.ACTIONS.RELATIONSHIP_GET_ALL:
		case APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_MEM:
		case APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_RELATIONSHIP:
		case APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_MEM_AND_RELATE:
			{
				options.method = "GET";
				break;
			}

		case APIConstant.ACTIONS.USER_SIGN_UP:
		case APIConstant.ACTIONS.MEMBER_ADD:
		case APIConstant.ACTIONS.SERVER_EVENT_ADD:
		case APIConstant.ACTIONS.CLAN_EVENT_ADD:
		case APIConstant.ACTIONS.RELATIONSHIP_ADD:
			{
				options.method = "POST";
				break;
			}

		case APIConstant.ACTIONS.MEMBER_EDIT:
		case APIConstant.ACTIONS.CLAN_EVENT_EDIT:
			{
				options.method = "PUT";
				break;
			}

		case APIConstant.ACTIONS.SERVER_EVENT_DELETE:
		case APIConstant.ACTIONS.MEMBER_DELETE:
		case APIConstant.ACTIONS.CLAN_EVENT_DELETE:
		case APIConstant.ACTIONS.RELATIONSHIP_DELETE:
			{
				options.method = "DELETE";
				break;
			}

		default:
			{
				// do nothing
				break;
			}
	}

	useEffect(() => {
		axios.request(options)
			.then(response => {
				setRawApiResponse(response.data);
			})
			.catch(error => {
				console.error(error)
			});
	}, []);

	let apiResponseCode = rawApiResponse.Code;
	let apiResponseMessage = rawApiResponse.Message;
	let apiResponseData = rawApiResponse.Data;

	let apiResponse = new APIResponseModel(apiResponseCode, apiResponseMessage, apiResponseData);

	return rawApiResponse;
}

export function CallAPI(controller, action, body) {
	const [rawApiResponse, setRawApiResponse] = useState({});
	let apiUrl = APIConstant.URL_BASE;
	if (controller !== APIConstant.CONTROLLERS.NONE) {
		apiUrl = apiUrl + '/' + controller;
		if (action !== APIConstant.ACTIONS.NONE) {
			apiUrl = apiUrl + '/' + action;
		} else {
			// do nothing
		}
	} else {
		// do nothing
	}

	let options = {
		method: "GET",
		url: apiUrl,
		headers: {
			'content-type': 'application/json',
		},
		data: body,
		timeout: 1000

	};

	switch (action) {
		case APIConstant.ACTIONS.TEST_CAT_FACT:
		case APIConstant.ACTIONS.USER_LOGIN:
		case APIConstant.ACTIONS.SERVER_EVENT_FILTER_BY_USER:
		case APIConstant.ACTIONS.SERVER_EVENT_FILTER_BY_TABLE:
		case APIConstant.ACTIONS.SERVER_EVENT_FILTER_BY_TIME:
		case APIConstant.ACTIONS.MEMBER_GET_ALL:
		case APIConstant.ACTIONS.MEMBER_GET_BY_FEATURES:
		case APIConstant.ACTIONS.MEMBER_GET_LEADER:
		case APIConstant.ACTIONS.MEMBER_SEARCH_BY_NAME:
		case APIConstant.ACTIONS.MEMBER_FILTER_BY_GENDER:
		case APIConstant.ACTIONS.MEMBER_FILTER_BY_PLACE:
		case APIConstant.ACTIONS.MEMBER_FILTER_BY_GEN:
		case APIConstant.ACTIONS.CLAN_EVENT_GET_ALL:
		case APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_MEM:
		case APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TYPE:
		case APIConstant.ACTIONS.CLAN_EVENT_FILTER_BY_TIME:
		case APIConstant.ACTIONS.RELATIONSHIP_GET_ALL:
		case APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_MEM:
		case APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_RELATIONSHIP:
		case APIConstant.ACTIONS.RELATIONSHIP_FILTER_BY_MEM_AND_RELATE:
			{
				options.method = "GET";
				break;
			}

		case APIConstant.ACTIONS.USER_SIGN_UP:
		case APIConstant.ACTIONS.MEMBER_ADD:
		case APIConstant.ACTIONS.SERVER_EVENT_ADD:
		case APIConstant.ACTIONS.CLAN_EVENT_ADD:
		case APIConstant.ACTIONS.RELATIONSHIP_ADD:
			{
				options.method = "POST";
				break;
			}

		case APIConstant.ACTIONS.MEMBER_EDIT:
		case APIConstant.ACTIONS.CLAN_EVENT_EDIT:
			{
				options.method = "PUT";
				break;
			}

		case APIConstant.ACTIONS.SERVER_EVENT_DELETE:
		case APIConstant.ACTIONS.MEMBER_DELETE:
		case APIConstant.ACTIONS.CLAN_EVENT_DELETE:
		case APIConstant.ACTIONS.RELATIONSHIP_DELETE:
			{
				options.method = "DELETE";
				break;
			}

		default:
			{
				// do nothing
				break;
			}
	}

	useEffect(() => {
		axios.request(options)
			.then(response => {
				setRawApiResponse(response.data);
			})
			.catch(error => {
				console.error(error)
			});
	}, []);

	let apiResponseCode = rawApiResponse.Code;
	let apiResponseMessage = rawApiResponse.Message;
	let apiResponseData = rawApiResponse.Data;

	let apiResponse = new APIResponseModel(apiResponseCode, apiResponseMessage, apiResponseData);

	return rawApiResponse;
}

export function Post(controller, action, body) {

}

export default function GetCat() {
	let data = CallAPI(APIConstant.CONTROLLERS.TEST_CAT_FACT, APIConstant.ACTIONS.TEST_CAT_FACT, {});
	return data.fact;
}