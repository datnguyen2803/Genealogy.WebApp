import React from 'react';
import { useState } from 'react';
import './FormAddMember.css';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { parseISO, format } from 'date-fns';
import axios from 'axios';
import * as MemberAPI from '../API/MemberAPI';
import * as RelaAPI from '../API/RelationshipAPI';
import { useEffect } from 'react';
import * as APIConstant from '../API/Constant';


export default function FormEditMember(props) {
	const [dob, setDob] = useState("");
	const [dod, setDod] = useState("");
	// const [partnerIds, setPartnerIds] = useState([]);
	// const [formData, setFormData] = useState({
	// 	surname: '',
	// 	lastname: '',
	// 	gender: "male",
	// 	// dob: "",
	// 	// dod: "",
	// 	birthPlace: "",
	// 	currentPlace: "",
	// 	// genNo: 0,
	// 	childOrder: 0,
	// 	isClanLeader: false,
	// 	note: "",
	// 	fid: "",
	// 	mid: "",
	// 	pid: ""
	// });


	const [putMemberResponse, setPutMemberResponse] = useState({});
	const [getMemberResponse, setGetMemberResponse] = useState({
		id: "",
		surname: '',
		lastname: '',
		gender: 0,
		dob: "",
		dod: "",
		birthPlace: "",
		currentPlace: "",
		genNo: 0,
		childOrder: 0,
		isClanLeader: false,
		note: "",
		fid: "",
		mid: "",
		pid: ""
	});
	const [addRelaResponse, setAddRelaResponse] = useState({});
	const [getAllResponse, setGetAllResponse] = useState([]);
	useEffect(() => {
		getAllMember();
	}, []);
	var memberList = getAllResponse;
	console.log(memberList);

	async function getAllMember() {
		let apiUrl = 'https://localhost:2803/api' + '/' + APIConstant.CONTROLLERS.MEMBER + '/' + APIConstant.ACTIONS.MEMBER_GET_ALL;
		let options = {
			method: "GET",
			url: apiUrl,
			headers: {
				'content-type': 'application/json',
			},
			timeout: 1000

		};
		await axios.request(options)
			.then(response => {
				if (Array.isArray(response.data)) {
					setGetAllResponse(response.data);
				}

			})
			.catch(error => {
				console.error(error)
			});
	}

	async function editMember(member) {
		let apiUrl = 'https://localhost:2803/api' + '/' + APIConstant.CONTROLLERS.MEMBER + '/' + APIConstant.ACTIONS.MEMBER_EDIT;
		let options = {
			method: "PUT",
			url: apiUrl,
			headers: {
				'content-type': 'application/json',
			},
			data: member,
			// timeout: 1000

		};
		await axios.request(options)
			.then(response => {
				setPutMemberResponse(response.data);
			})
			.catch(error => {
				console.error(error)
			});
	}

	async function getMemberById(id) {
		let body = id;

		let apiUrl = 'https://localhost:2803/api' + '/' + APIConstant.CONTROLLERS.MEMBER + '/' + APIConstant.ACTIONS.MEMBER_GET_BY_ID;
		let options = {
			method: "POST",
			url: apiUrl,
			headers: {
				'content-type': 'application/json',
			},
			data: body,
			// timeout: 1000

		};
		await axios.request(options)
			.then(response => {
				setGetMemberResponse(response.data);
				setDob(response.data.dob);
				setDod(response.data.dod);
			})
			.catch(error => {
				console.error(error)
			});
	}

	// async function addRela(relation) {
	// 	let apiUrl = 'https://localhost:2803/api' + '/' + APIConstant.CONTROLLERS.RELATIONSHIP + '/' + APIConstant.ACTIONS.RELATIONSHIP_ADD;
	// 	let options = {
	// 		method: "POST",
	// 		url: apiUrl,
	// 		headers: {
	// 			'content-type': 'application/json',
	// 		},
	// 		data: relation,
	// 		// timeout: 1000

	// 	};
	// 	await axios.request(options)
	// 		.then(response => {
	// 			setAddRelaResponse(response.data);
	// 		})
	// 		.catch(error => {
	// 			console.error(error)
	// 		});
	// }

	const handleSelectMember = (e) => {
		setGetMemberResponse({		
			id: "",
			surname: '',
			lastname: '',
			gender: 0,
			dob: "",
			dod: "",
			birthPlace: "",
			currentPlace: "",
			genNo: 0,
			childOrder: 0,
			isClanLeader: false,
			note: "",
			// fid: "",
			// mid: "",
			// pid: ""
		});
		let id = e.target.value;
		getMemberById(id);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setGetMemberResponse((prevData) => ({
			...prevData,
			[name]: value,
		}));
		console.log(" --->" + name + " : " + value);
		console.log(getMemberResponse);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(getMemberResponse);
		// console.log("dob: " + dob);
		// console.log("dod: " + dod);
		// console.log("pids: " + partnerIds);

		var member = {
			id: getMemberResponse.id,
			surname: getMemberResponse.surname,
			lastname: getMemberResponse.lastname,
			gender: getMemberResponse.gender,
			dob: dob,
			dod: dod,
			birthPlace: getMemberResponse.birthPlace,
			currentPlace: getMemberResponse.currentPlace,
			childOrder: getMemberResponse.childOrder !== "" ? parseInt(getMemberResponse.childOrder, 10) : 0,
			genNo: getMemberResponse.genNo !== "" ? parseInt(getMemberResponse.genNo, 10) : 0,
			isClanLeader: getMemberResponse.isClanLeader === "true" ? true : false,
			note: getMemberResponse.note,
			image: ""
		}
		console.log(member);
		editMember(member);

		await new Promise(resolve => setTimeout(resolve, 500));
	};

	useEffect(() => {
		console.log(getAllResponse);
	}, [getAllResponse]);
	useEffect(() => {
		console.log(getMemberResponse);
		// var newRela = {}
		// if (formData.fid !== "") {
		// 	newRela = {
		// 		MainMemId: formData.fid,
		// 		SubMemId: getMemberResponse.id,
		// 		RelateCode: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
		// 		DateStart: dob === null ? "" : dob,
		// 	}
		// 	console.log(newRela);
		// 	addRela(newRela)
		// }
		// if (formData.mid !== "") {
		// 	newRela = {
		// 		MainMemId: formData.mid,
		// 		SubMemId: getMemberResponse.id,
		// 		RelateCode: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
		// 		DateStart: dob === null ? "" : dob
		// 	}
		// 	console.log(newRela);
		// 	addRela(newRela)
		// }
		// if (formData.pid !== "") {
		// 	newRela = {
		// 		MainMemId: formData.pid,
		// 		SubMemId: getMemberResponse.id,
		// 		RelateCode: RelaAPI.RELATIONSHIP_enum.MARRIED,
		// 		DateStart: ""
		// 	}
		// 	console.log(newRela);
		// 	addRela(newRela)
		// 	newRela = {
		// 		MainMemId: getMemberResponse.id,
		// 		SubMemId: formData.pid,
		// 		RelateCode: RelaAPI.RELATIONSHIP_enum.MARRIED,
		// 		DateStart: ""
		// 	}
		// 	addRela(newRela)
		// }
	}, [getMemberResponse]);
	useEffect(() => {
		console.log(putMemberResponse);
	}, [putMemberResponse]);

	// useEffect(() => {
	// 	console.log(addRelaResponse);
	// }, [addRelaResponse]);

	const SelectMenu = ({ type, inputList }) => {
		var renderList = [...inputList];

		renderList.forEach(member => {
			var renderName = "";
			if ((member.surname === null) && (member.lastname === null)) {
				if (member.note !== '') {
					renderName = member.note
				} else {
					renderName = "Không nhớ tên"
				}
			} else {
				renderName = member.surname + ' ' + member.lastname;
			}
			renderName = "Đời thứ " + member.genNo + " - " + renderName + " - " + member.note;
			member.displayName = renderName;
		});


		const sortedRenderList = renderList
			.sort((a, b) => {
				if (a.genNo !== b.genNo) {
					return a.genNo - b.genNo; // Sort by genNo in ascending order
				} else {
					return a.childOrder - b.childOrder; // Sort by childOrder in ascending order if genNo is the same
				}
			});

		return (
			<>
				<select id="selectType" name={type} value={getMemberResponse.id} onChange={handleSelectMember}>
					<option value={""}>
						Không rõ
					</option>
					{sortedRenderList.map((item, index) => (

						<option key={index} value={item.id}>
							{item.displayName}
						</option>
					))}
				</select>
			</>
		);
	};

	return (
		<div className="form-add-member">
			<div className="form-add-member-content">
				<button className="form-add-member-close" onClick={props.onClose}>
					&times;
				</button>
				{/* Add the form elements here */}
				<form className="form">
					<p className="title">Sửa thành viên</p>
					<div className='flex'>
						<label htmlFor="selectFather">Chọn thành viên: </label>
						<SelectMenu id="selectMember" type="selectMember" inputList={memberList} />
					</div>
					<div className="flex">
						<label>
							<input name="surname" required={true} placeholder="Họ" type="text" className="input" value={getMemberResponse.surname} onChange={handleChange} />
						</label>

						<label>
							<input name="lastname" required={true} placeholder="Đệm và Tên" type="text" className="input" value={getMemberResponse.lastname} onChange={handleChange} />
						</label>
					</div>

					<div>
						<label>
							<input type="radio" name="gender" value={0} checked={getMemberResponse.gender===0} onChange={handleChange} />
							Nam
						</label>
						<br />
						<label>
							<input type="radio" name="gender" value={1} checked={getMemberResponse.gender===1} onChange={handleChange} />
							Nữ
						</label>
					</div>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Ngày sinh"
							value={dob==="" ? dayjs('1900-02-01') : dayjs(dob.split("T")[0])}
							format="DD/MM/YYYY"
							name="dob"
							onChange={date => {
								var formated = DateModify(date) + "T00:00:00";
								setDob(formated);
								console.log(" ---> dob : " + formated);
							}}
						/>
					</LocalizationProvider>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Ngày mất | Chỉ cho người đã mất"
							value={dod==="" ? dayjs('1900-01-01') : dayjs(dod.split("T")[0])}
							format="DD/MM/YYYY"
							name="dob"
							onChange={date => {
								var formated = DateModify(date) + "T00:00:00";
								setDod(formated);
								console.log(" ---> dod : " + formated);
							}}
						/>
					</LocalizationProvider>

					<label>
						<input name="birthPlace" placeholder="Nơi sinh" type="text" className="input"  value={getMemberResponse.birthPlace} onChange={handleChange} />
					</label>
					<label>
						<input name="currentPlace" placeholder="Nơi ở hiện tại" type="text" className="input"  value={getMemberResponse.currentPlace} onChange={handleChange} />
					</label>
					<label>
						<input required={true} name="childOrder" placeholder="Con thứ mấy trong gia đình?" type="text"  value={getMemberResponse.childOrder} className="input" onChange={handleChange} />
					</label>
					<div>
						<label>Đích tôn: </label>
						<div>
							<label>
								<input
									type="radio"
									name="isClanLeader"
									value={true}
									checked={getMemberResponse.isClanLeader===true}
									onChange={handleChange}
								/>
								Đúng
							</label>
							<br />
							<label>
								<input
									type="radio"
									name="isClanLeader"
									value={false}
									checked={getMemberResponse.isClanLeader===false}
									onChange={handleChange}
								/>
								Sai
							</label>
						</div>
					</div>

					<label>
						<input name="genNo" required={true} placeholder="Đời thứ" type="text" className="input" value={getMemberResponse.genNo} onChange={handleChange} />
					</label>
					<label>
						<input name="note" required={false} placeholder="Ghi chú" type="text" className="input" value={getMemberResponse.note} onChange={handleChange} />
					</label>

					{/* <div className='flex'>
						<label htmlFor="selectFather">Bố: </label>
						<SelectMenu id="selectFather" type="fid" inputList={memberList} />
					</div>
					<div className='flex'>
						<label htmlFor="selectMother">Mẹ: </label>
						<SelectMenu id="selectMother" type="mid" inputList={memberList} />
					</div>
					<div className='flex'>
						<label htmlFor="selectPartner1">Vợ/Chồng: </label>
						<SelectMenu id="selectPartner1" type="pid" inputList={memberList} />
					</div> */}

					<button className="submit" onClick={handleSubmit}>Thay đổi</button>

				</form>
			</div>
		</div>
	);
}


function DateModify(_date) {
	if (_date) {
		const formattedDate = format(parseISO(_date.toISOString()), 'yyyy-MM-dd');
		console.log('Selected date:', formattedDate);
		return formattedDate;
	}
	return "";
}
