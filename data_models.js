const UserModel = 
{
	id: guid,
	user_name: string,
	password: string,
	email: string,
	role: int,

};

function Login (user) {	
	// return bool 
}

const ServerEvent = 
{
	id: guid,
	actuator: user.id,
	table_name: int, 
		// UserTable = 0, 
		// ServerEventTable = 1, 
		// ClanEventTable = 2,
		// MemberTable = 3,
		// RelationshipTable = 4
	record_id: int, //id of record affected
	type: id,
		// ADD = 0,
		// EDIT = 1,
		// DELETE = 2
	time_occur: datetime,
	detail: string, // nullable
}


const ClanEvent = 
{
	id: guid,
	main_mem_id: member.id,
	sub_mem_id: member.id,
	type: int,
		// e.g: eCLAN_EVENT_MARRY = 0
	time_occur: datetime,
	detail: string, // nullable


}

const MemberTable = 
{
	id: guid,
	surname: string,
	lastname: string,
	gender: int,
		// MALE = 0,
		// FEMALE = 1
	dob: datetime, // date of birth
	dod: datetime, // date of death, nullable
	birth_place: string,
	current_place: string,
	is_clan_leader: bool, // trưởng họ
	gen_no: int, // đời thứ mấy
	image: string, // url string
}

const RelationshipTable = 
{
	id: guid,
	main_mem_id: member.id,
	sub_mem_id: member.id,
	relate_code: int,
		// e.g: eRELATIONSHIP_ME = 0,
		// 	 eRELATIONSHIP_CON = 1,
	date_start: datetime,
}