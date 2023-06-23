export class BEUserModel {
	// TODO: check with WebAPI models
	/**
	 * This is a constructor function that creates an object with properties for user ID, username,
	 * password, email, and role.
	 * @param id - The unique identifier for the user. It could be a number or a string.
	 * @param user_name - The username of the user.
	 * @param password - The password parameter is a string that represents the user's password. It is one
	 * of the properties of the object being constructed.
	 * @param email - The email parameter is a string that represents the email address of a user.
	 * @param role - The "role" parameter in the constructor is likely referring to the user's role or
	 * level of access within the system. This could be something like "admin", "moderator", or "user". The
	 * specific roles and their associated permissions would depend on the requirements of the system being
	 * built.
	 */
	constructor(id, user_name, password, email, role) {
		this.mId = id;
		this.mUserName = user_name;
		this.mPassword = password;
		this.mEmail = email;
		this.mRole = role;
	}

	// GETTER and SETTER
	get id() {
		return this.mId;
	}
	set id(value) {
		this.mId = value;
	}
	get userName() {
		return this.mUserName;
	}
	set userName(value) {
		this.mUserName = value;
	}
	get password() {
		return this.mPassword;
	}
	set password(value) {
		this.mPassword = value;
	}
	get email() {
		return this.mEmail;
	}
	set email(value) {
		this.mEmail = value;
	}
	get role() {
		return this.mRole;
	}
	set role(value) {
		this.mRole = value;
	}

}

export class ServerEventModel {
	// TODO: check with WebAPI models

	/**
	 * This is a constructor function that initializes an object with properties such as id, actuator,
	 * table_name, record_id, type, time_occur, and detail.
	 * @param id - an identifier for the log entry
	 * @param actuator - The entity or user that triggered the event.
	 * @param table_name - The name of the database table where the record is stored.
	 * @param record_id - The record ID is a unique identifier for a specific record in a database table.
	 * It is used to distinguish one record from another and is often used as a reference when performing
	 * database operations such as updating or deleting records.
	 * @param type - The "type" parameter is likely used to specify the type of action or event that is
	 * being recorded. It could be a string value such as "create", "update", "delete", "login", "logout",
	 * etc. This parameter helps to categorize and organize the recorded data for easier analysis
	 * @param time_occur - time_occur is a parameter that represents the time when an event or action
	 * occurred. It is usually stored as a timestamp in a database to keep track of when a particular
	 * event happened.
	 * @param detail - The "detail" parameter is a string that provides additional information or context
	 * about the event being recorded. It could include things like error messages, user input, or other
	 * relevant details.
	 */
	constructor(id, actuator, table_name, record_id, type, time_occur, detail) {
		this.mId = id;
		this.mActuator = actuator;
		this.mTableName = table_name;
		this.mRecordId = record_id;
		this.mType = type;
		this.mTimeOccur = time_occur;
		this.mDetail = detail;
	}

	//   GETTER and SETTER
	get id() {
		return this.mId;
	}

	set id(value) {
		this.mId = value;
	}

	get actuator() {
		return this.mActuator;
	}

	set actuator(value) {
		this.mActuator = value;
	}

	get tableName() {
		return this.mTableName;
	}

	set tableName(value) {
		this.mTableName = value;
	}

	get recordId() {
		return this.mRecordId;
	}

	set recordId(value) {
		this.mRecordId = value;
	}

	get type() {
		return this.mType;
	}

	set type(value) {
		this.mType = value;
	}

	get timeOccur() {
		return this.mTimeOccur;
	}

	set timeOccur(value) {
		this.mTimeOccur = value;
	}

	get detail() {
		return this.mDetail;
	}

	set detail(value) {
		this.mDetail = value;
	}

}


export class FEMemberModel {
	constructor(surname, lastname, gender, dob, dod, birth_place, current_place, is_clan_leader, gen_no, image) {
		this.mSurname = surname;
		this.mLastname = lastname;
		this.mGender = gender;
		this.mDob = dob;
		this.mDod = dod;
		this.mBirthPlace = birth_place;
		this.mCurrentPlace = current_place;
		this.mIsClanLeader = is_clan_leader;
		this.mGenNo = gen_no;
		this.mImage = image;
	}
}
export class BEMemberModel {
	/**
	 * This is a constructor function that creates an object with properties for a person's information
	 * such as name, gender, date of birth, and image.
	 * @param id - unique identifier for the person
	 * @param surname - The family name or last name of a person.
	 * @param lastname - The last name or family name of a person.
	 * @param gender - The gender of the person, which can be either "male" or "female".
	 * @param dob - Date of birth
	 * @param dod - dod stands for "date of death". It is a property of the object being constructed and
	 * represents the date when the person passed away.
	 * @param birth_place - The birth place of the person.
	 * @param current_place - The current location or residence of the person.
	 * @param is_clan_leader - A boolean value indicating whether the person is the leader of their clan
	 * or not. If the value is true, it means the person is the leader of their clan. If the value is
	 * false, it means the person is not the leader of their clan.
	 * @param gen_no - The generation number of the person in a family tree or genealogy. It indicates
	 * which generation the person belongs to, with the first generation being numbered as 1.
	 * @param image - This parameter represents the image of a person, which can be used to display their
	 * picture or avatar. It can be a URL or a file path to the image file.
	 */
	constructor(id, surname, lastname, gender, dob, dod, birth_place, current_place, is_clan_leader, gen_no, image) {
		this.mId = id;
		this.mSurname = surname;
		this.mLastname = lastname;
		this.mGender = gender;
		this.mDob = dob;
		this.mDod = dod;
		this.mBirthPlace = birth_place;
		this.mCurrentPlace = current_place;
		this.mIsClanLeader = is_clan_leader;
		this.mGenNo = gen_no;
		this.mImage = image;
	}


	// GETTER and SETTER
	get id() {
		return this.mId;
	}

	set id(value) {
		this.mId = value;
	}

	get surname() {
		return this.mSurname;
	}

	set surname(value) {
		this.mSurname = value;
	}

	get lastname() {
		return this.mLastname;
	}

	set lastname(value) {
		this.mLastname = value;
	}

	get gender() {
		return this.mGender;
	}

	set gender(value) {
		this.mGender = value;
	}

	get dob() {
		return this.mDob;
	}

	set dob(value) {
		this.mDob = value;
	}

	get dod() {
		return this.mDod;
	}

	set dod(value) {
		this.mDod = value;
	}

	get birthPlace() {
		return this.mBirthPlace;
	}

	set birthPlace(value) {
		this.mBirthPlace = value;
	}

	get currentPlace() {
		return this.mCurrentPlace;
	}

	set currentPlace(value) {
		this.mCurrentPlace = value;
	}

	get isClanLeader() {
		return this.mIsClanLeader;
	}

	set isClanLeader(value) {
		this.mIsClanLeader = value;
	}

	get genNo() {
		return this.mGenNo;
	}

	set genNo(value) {
		this.mGenNo = value;
	}

	get image() {
		return this.mImage;
	}

	set image(value) {
		this.mImage = value;
	}
}

export class RelationshipModel {
	/**
	 * This is a constructor function that initializes an object with five properties.
	 * @param id - an identifier for the relationship object
	 * @param main_mem_id - The ID of the main member in the relationship.
	 * @param sub_mem_id - The sub_mem_id parameter is likely referring to the ID of a subordinate member
	 * in a hierarchical structure or organization. It could be used to track relationships between
	 * different members or employees within a company or team.
	 * @param relate_code - The relate_code parameter is a code that represents the type of relationship
	 * between the main_mem_id and sub_mem_id. It could be a numerical or string value that indicates the
	 * nature of the relationship, such as "parent-child", "spouse", "sibling", etc.
	 * @param date_start - date_start is a parameter that represents the start date of a relationship
	 * between two members. It is likely a date object or a string that can be parsed into a date object.
	 */
	constructor(id, main_mem_id, sub_mem_id, relate_code, date_start) {
		this.mId = id;
		this.mMainMemId = main_mem_id;
		this.mSubMemId = sub_mem_id;
		this.mRelateCode = relate_code;
		this.mDateStart = date_start;
	}

	get id() {
		return this.mId;
	}

	set id(value) {
		this.mId = value;
	}

	get mainMemId() {
		return this.mMainMemId;
	}

	set mainMemId(value) {
		this.mMainMemId = value;
	}

	get subMemId() {
		return this.mSubMemId;
	}

	set subMemId(value) {
		this.mSubMemId = value;
	}

	get relateCode() {
		return this.mRelateCode;
	}

	set relateCode(value) {
		this.mRelateCode = value;
	}

	get dateStart() {
		return this.mDateStart;
	}

	set dateStart(value) {
		this.mDateStart = value;
	}
}

export class ClanEventModel {
	/**
	 * This is a constructor function that initializes properties for an object representing an event.
	 * @param id - This is the unique identifier for the object being constructed. It could be a number or
	 * a string.
	 * @param main_mem_id - The main memory ID is a unique identifier for the main memory component
	 * associated with this object. It could be a reference to a specific memory module or location in the
	 * system's memory hierarchy.
	 * @param sub_mem_id - The sub_mem_id parameter is likely referring to a sub-member ID, which could be
	 * a unique identifier for a sub-member or a secondary member within a larger group or organization.
	 * The exact context and purpose of this parameter would depend on the specific application or system
	 * that is using this constructor.
	 * @param type - The "type" parameter is likely a variable that specifies the type of event or action
	 * being recorded by this constructor. It could be a string or a number, depending on how it is used
	 * in the code.
	 * @param time_occur - time_occur is a parameter that represents the time when an event or action
	 * occurred. It could be a specific date and time or a relative time such as "5 minutes ago" or
	 * "yesterday at 3pm".
	 * @param detail - The "detail" parameter is a string that provides additional information or context
	 * about the event or object being constructed. It could include things like a description of the
	 * event, notes about the object's properties or behavior, or any other relevant information.
	 */
	constructor(id, main_mem_id, sub_mem_id, type, time_occur, detail) {
		this.mId = id;
		this.mMainMemId = main_mem_id;
		this.mSubMemId = sub_mem_id;
		this.mType = type;
		this.mTimeOccur = time_occur;
		this.mDetail = detail;
	}

	get id() {
		return this.mId;
	}

	set id(value) {
		this.mId = value;
	}

	get mainMemId() {
		return this.mMainMemId;
	}

	set mainMemId(value) {
		this.mMainMemId = value;
	}

	get subMemId() {
		return this.mSubMemId;
	}

	set subMemId(value) {
		this.mSubMemId = value;
	}

	get type() {
		return this.mType;
	}

	set type(value) {
		this.mType = value;
	}

	get timeOccur() {
		return this.mTimeOccur;
	}

	set timeOccur(value) {
		this.mTimeOccur = value;
	}

	get detail() {
		return this.mDetail;
	}

	set detail(value) {
		this.mDetail = value;
	}
}
