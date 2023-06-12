import { UserModel, ServerEvent, ClanEvent, Member, Relationship } from "./DataModels";
import { RESPONSE_CODE_enum, RESPONSE_MESSAGE } from "./Constant";

class ResponseModel {
	Code = RESPONSE_CODE_enum.eRESPONSE_CODE_OK;
	Message = RESPONSE_MESSAGE.RESPONSE_MESSAGE_OK;
	Data = new UserModel();
};

// Data depends on API