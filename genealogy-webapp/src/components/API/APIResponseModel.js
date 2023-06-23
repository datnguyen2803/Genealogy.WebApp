
export class APIResponseModel {
	constructor(code, message, data) {
		this.mCode = code;
		this.mMessage = message;
		this.mData = data;
	}
	get Code() {
		return this.mCode;
	}
	set Code(code) { this.mCode = code; }
	get Message() {
		return this.mMessage;
	}
	set Message(message) { this.mMessage = message; }
	get Data() {
		return this.mData;
	}
	set Data(data) { this.mData = data; }

};

// Data depends on API