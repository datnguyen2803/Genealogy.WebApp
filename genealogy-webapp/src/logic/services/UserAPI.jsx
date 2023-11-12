import CallAPI from './API';
import * as APIConstant from '../constants/APIConstant';

export function Login(user_name, password) {
	let body = {
		Username: user_name,
		Password: password,
	}

	return CallAPI(APIConstant.CONTROLLERS.USER, APIConstant.ACTIONS.USER_LOGIN, body);

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	return true;
	// } else {
	// 	console.error(response.Message);
	// 	return false;
	// }

}

export function SignUp(user_name, password) {
	let body = {
		Username: user_name,
		Password: password,
	}

	return CallAPI(APIConstant.CONTROLLERS.USER, APIConstant.ACTIONS.USER_SIGN_UP, body);

	// if(response.Code === APIConstant.RESPONSE_CODE_enum.eRESPONSE_CODE_OK) {
	// 	return true;
	// } else {
	// 	console.error(response.Message);
	// 	return false;
	// }
}