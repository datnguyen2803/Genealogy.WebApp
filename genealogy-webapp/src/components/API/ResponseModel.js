import { UserModel, ServerEventModel, ClanEventModel, MemberModel, RelationshipModel } from "./DataModels";
import { RESPONSE_CODE_enum, RESPONSE_MESSAGE } from "./Constant";

export class ResponseModel {
	constructor(code, message, data) {
		this.Code = code;
		this.Message = message;
		this.Data = data;
	}
};

type ResponseData = UserModel | ServerEventModel;
// Data depends on API