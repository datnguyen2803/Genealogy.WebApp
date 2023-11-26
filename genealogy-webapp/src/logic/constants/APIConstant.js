export const URL_BASE = 'https://localhost:2803/api';

export const RESPONSE_CODE_enum = {
	eRESPONSE_CODE_OK: 0,
	eRESPONSE_CODE_NOT_FOUND: 1,

}

export const MEMBER_GENDER_enum = {
	MALE: 0,
	FEMALE: 1,
}

export const RELATIONSHIP_enum = {
	MARRY: 0,
	PARENT_CHILD: 1,

}

export const CLAN_EVENT_TYPE = {
	MARRY: 0,
	GIVE_BIRTH: 1,
	DEATH: 2,
	BUILD_HOUSE: 3
}

export const CONTROLLERS = {
	NONE: "",

	USER: "User",
	SERVER_EVENT: "ServerEvent",
	MEMBER: "Member",
	RELATIONSHIP: "Relationship",
	CLAN_EVENT: "ClanEvent",
}

export const ACTIONS = {
	NONE: "",

	USER_LOGIN: "Login",
	USER_SIGN_UP: "Signup",

	SERVER_EVENT_GET_ALL: "GetAll",
	SERVER_EVENT_FILTER_BY_USER: "FilterByUser",
	SERVER_EVENT_FILTER_BY_TABLE: "FilterByTable",
	SERVER_EVENT_FILTER_BY_TIME: "FilterByTime",
	SERVER_EVENT_ADD: "new",
	SERVER_EVENT_DELETE: "delete",

	MEMBER_GET_ALL: "GetAll",
	MEMBER_GET_BY_ID: "GetById",
	MEMBER_GET_BY_FEATURES: "GetByFeatures",
	MEMBER_GET_LEADER: "GetLeader",
	MEMBER_SEARCH_BY_NAME: "SearchByName",
	MEMBER_FILTER_BY_GENDER: "FilterByGender",
	MEMBER_FILTER_BY_PLACE: "FilterByPlace",
	MEMBER_FILTER_BY_GEN: "FilterByGen",
	MEMBER_ADD: "Add",
	MEMBER_EDIT: "Edit",
	MEMBER_DELETE: "delete",

	CLAN_EVENT_GET_ALL: "GetAll",
	CLAN_EVENT_FILTER_BY_MEM: "FilterByMem",
	CLAN_EVENT_FILTER_BY_TYPE: "FilterByType",
	CLAN_EVENT_FILTER_BY_TIME: "FilterByTime",
	CLAN_EVENT_ADD: "new",
	CLAN_EVENT_EDIT: "edit",
	CLAN_EVENT_DELETE: "delete",

	RELATIONSHIP_GET_ALL: "GetAll",
	RELATIONSHIP_FILTER_BY_MEM: "FilterByMem",
	RELATIONSHIP_FILTER_BY_RELATIONSHIP: "FilterByRelationship",
	RELATIONSHIP_FILTER_BY_MEM_AND_RELATE: "FilterByMemAndRelate",
	RELATIONSHIP_ADD: "Add",
	RELATIONSHIP_EDIT: "edit",
	RELATIONSHIP_DELETE: "delete",

}

export const DEFAULT_DATETIME = "0001-01-01T00:00:00";