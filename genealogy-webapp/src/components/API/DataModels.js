// export const UserModel = 
// {
// 	id: guid,
// 	user_name: string,
// 	password: string,
// 	email: string,
// 	role: int,

// };

function Login (user) {	
	// return bool 
}

// export const ServerEvent = 
// {
// 	id: guid,
// 	actuator: user.id,
// 	table_name: int, 
// 		// UserTable = 0, 
// 		// ServerEventTable = 1, 
// 		// ClanEventTable = 2,
// 		// MemberTable = 3,
// 		// RelationshipTable = 4
// 	record_id: int, //id of record affected
// 	type: id,
// 		// ADD = 0,
// 		// EDIT = 1,
// 		// DELETE = 2
// 	time_occur: datetime,
// 	detail: string, // nullable
// }


// export const ClanEvent = 
// {
// 	id: guid,
// 	main_mem_id: member.id,
// 	sub_mem_id: member.id,
// 	type: int,
// 		// e.g: eCLAN_EVENT_MARRY = 0
// 	time_occur: datetime,
// 	detail: string, // nullable


// }

// export const Member = 
// {
// 	id: guid,
// 	surname: string,
// 	lastname: string,
// 	gender: int,
// 		// MALE = 0,
// 		// FEMALE = 1
// 	dob: datetime, // date of birth
// 	dod: datetime, // date of death, nullable
// 	birth_place: string,
// 	current_place: string,
// 	is_clan_leader: bool, // trưởng họ
// 	gen_no: int, // đời thứ mấy
// 	image: string, // url string
// }

// export const Relationship = 
// {
// 	id: guid,
// 	main_mem_id: member.id,
// 	sub_mem_id: member.id,
// 	relate_code: int,
// 		// e.g: eRELATIONSHIP_ME = 0,
// 		// 	 eRELATIONSHIP_CON = 1,
// 	date_start: datetime,
// }

export class UserModel {
	// TODO: check with WebAPI models
	/**
	 * This is a constructor function that creates an object with properties for user ID, username,
	 * password, email, and role.
	 * @param id - The unique identifier for the user.
	 * @param user_name - The username of the user. It is a string value.
	 * @param password - The password parameter is a string that represents the user's password. It is used
	 * to authenticate the user and provide access to their account. It should be kept secure and encrypted
	 * to prevent unauthorized access.
	 * @param email - The email parameter is a string that represents the email address of the user. It is
	 * one of the properties of the object being constructed.
	 * @param role - The "role" parameter is likely used to define the user's role or level of access
	 * within a system or application. It could be a string or integer value that indicates whether the
	 * user is an administrator, a regular user, a guest, or some other type of user. The specific roles
	 * and their
	 */
	constructor(id, user_name, password, email, role) {
		this.id = id;
		this.user_name = user_name;
		this.password = password;
		this.email = email;
		this.role = role;
	}

	// GETTER and SETTER
	/* These are getter and setter methods for the properties of the UserModel class. They allow access to
	the private properties of the class from outside the class, while still maintaining encapsulation.
	The getter methods return the value of the property, while the setter methods set the value of the
	property to the provided argument. This allows for controlled access to the properties of the class
	and helps to ensure data integrity. */
	getId() { return this.id; }
	setId(id) { this.id = id; }
	getUserName() { return this.user_name; }
	setUserName(user_name) { this.user_name = user_name; }
	getPassword() { return this.password; }
	setPassword(password) { this.password = password; }
	getEmail() { return this.email; }
	setEmail(email) { this.email = email; }
	getRole() { return this.role; }
	setRole(role) { this.role = role; }

	// APIs
	

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
		this.id = id;
		this.actuator = actuator;
		this.table_name = table_name;
		this.record_id = record_id;
		this.type = type;
		this.time_occur = time_occur;
		this.detail = detail;
	}

	// TODO: GETTER and SETTER

	// TODO: APIs

}

export class MemberModel {
	// TODO: check with WebAPI models
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
		this.id = id;
		this.surname = surname;
		this.lastname = lastname;
		this.gender = gender;
		this.dob = dob;
		this.dod = dod;
		this.birth_place = birth_place;
		this.current_place = current_place;
		this.is_clan_leader = is_clan_leader;
		this.gen_no = gen_no;
		this.image = image;
	}

	// TODO: GETTER and SETTER

	// TODO: APIs

}

export class RelationshipModel {
	// TODO: check with WebAPI models

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
		this.id = id;
		this.main_mem_id = main_mem_id;
		this.sub_mem_id = sub_mem_id;
		this.relate_code = relate_code;
		this.date_start = date_start;
	}

	// TODO: GETTER and SETTER

	// TODO: APIs

}

export class ClanEventModel {
	// TODO: check with WebAPI models

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
		this.id = id;
		this.main_mem_id = main_mem_id;
		this.sub_mem_id = sub_mem_id;
		this.type = type;
		this.time_occur = time_occur;
		this.detail = detail;
	}

	// TODO: GETTER and SETTER

	// TODO: APIs

}
