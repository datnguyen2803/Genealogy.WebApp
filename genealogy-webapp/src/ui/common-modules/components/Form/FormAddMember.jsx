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


export default function FormAddMember(props) {
	const [dob, setDob] = useState("");
	const [dod, setDod] = useState("");
	const [partnerIds, setPartnerIds] = useState([]);
	const [formData, setFormData] = useState({
		surname: '',
		lastname: '',
		gender: "male",
		// dob: "",
		// dod: "",
		birthPlace: "",
		currentPlace: "",
		// genNo: 0,
		childOrder: 0,
		isClanLeader: false,
		note: "",
		fid: "",
		mid: "",
		pid: ""
	});


	const [addMemberResponse, setAddMemberResponse] = useState({});
	const [getMemberResponse, setGetMemberResponse] = useState({});
	const [addRelaResponse, setAddRelaResponse] = useState({});

	// var memberList = MemberAPI.GetAll();
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

	async function addMember(member) {
		let apiUrl = 'https://localhost:2803/api' + '/' + APIConstant.CONTROLLERS.MEMBER + '/' + APIConstant.ACTIONS.MEMBER_ADD;
		let options = {
			method: "POST",
			url: apiUrl,
			headers: {
				'content-type': 'application/json',
			},
			data: member,
			// timeout: 1000

		};
		await axios.request(options)
			.then(response => {
				setAddMemberResponse(response.data);
			})
			.catch(error => {
				console.error(error)
			});
	}

	async function getMemberByFeatures(features) {
		let body = features;

		let apiUrl = 'https://localhost:2803/api' + '/' + APIConstant.CONTROLLERS.MEMBER + '/' + APIConstant.ACTIONS.MEMBER_GET_BY_FEATURES;
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
			})
			.catch(error => {
				console.error(error)
			});
	}

	async function addRela(relation) {
		let apiUrl = 'https://localhost:2803/api' + '/' + APIConstant.CONTROLLERS.RELATIONSHIP + '/' + APIConstant.ACTIONS.RELATIONSHIP_ADD;
		let options = {
			method: "POST",
			url: apiUrl,
			headers: {
				'content-type': 'application/json',
			},
			data: relation,
			// timeout: 1000

		};
		await axios.request(options)
			.then(response => {
				setAddRelaResponse(response.data);
			})
			.catch(error => {
				console.error(error)
			});
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		console.log(" --->" + name + " : " + value);
		console.log(formData);
	}

	// const handlePidsChange = (e) => {
	// 	const { name, value } = e.target;
	// 	var tempPartnerIds = [...partnerIds];
	// 	tempPartnerIds.push(value);
	// 	setPartnerIds(tempPartnerIds);
	// 	console.log(" --->" + name + " : " + value);
	// 	console.log(partnerIds)
	// }

	const handleButtonClick = async (e) => {
		e.preventDefault();
		console.log(formData);
		console.log("dob: " + dob);
		console.log("dod: " + dod);
		console.log("pids: " + partnerIds);

		var member = {
			surname: formData.surname,
			lastname: formData.lastname,
			gender: formData.gender === "female" ? 1 : 0,
			dob: dob,
			dod: dod,
			birthPlace: formData.birthPlace,
			currentPlace: formData.currentPlace,
			childOrder: formData.childOrder !== "" ? parseInt(formData.childOrder, 10) : 0,
			genNo: formData.genNo !== "" ? parseInt(formData.genNo, 10) : 0,
			isClanLeader: formData.isClanLeader === "true" ? true : false,
			note: formData.note,
			image: ""
		}
		console.log(member);
		addMember(member);

		await new Promise(resolve => setTimeout(resolve, 500));
		let features = {
			surname: member.surname,
			lastname: member.lastname,
			gender: member.gender,
			childOrder: member.childOrder,
			genNo: member.genNo,
			note: member.note
		}
		console.log(features);
		await getMemberByFeatures(features);
		// await new Promise(resolve => setTimeout(resolve, 5000));
		// add relationship
		// var newRela = {}
		// if (formData.fid !== "") {
		// 	// console.log()
		// 	newRela = {
		// 		MainMemId: formData.fid,
		// 		SubMemId: getMemberResponse.id,
		// 		RelateCode: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
		// 		DateStart: formData.dob
		// 	}
		// 	console.log(newRela);
		// 	await addRela(newRela)
		// }
		// if (formData.mid !== "") {
		// 	newRela = {
		// 		MainMemId: formData.mid,
		// 		SubMemId: getMemberResponse.id,
		// 		RelateCode: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
		// 		DateStart: formData.dob
		// 	}
		// 	console.log(newRela);
		// 	await addRela(newRela)
		// }
		// if (partnerIds !== null) {
		// 	partnerIds.forEach(partnerId => {
		// 		newRela = {
		// 			MainMemId: partnerId,
		// 			SubMemId: getMemberResponse.id,
		// 			RelateCode: RelaAPI.RELATIONSHIP_enum.MARRIED,
		// 			DateStart: ""
		// 		}
		// 		console.log(newRela);
		// 		addRela(newRela)
		// 	})
		// }
	};

	useEffect(() => {
		console.log(getAllResponse);
	}, [getAllResponse]);
	useEffect(() => {
		console.log(addMemberResponse);
	}, [addMemberResponse]);
	useEffect(() => {
		console.log(getMemberResponse);
		var newRela = {}
		if (formData.fid !== "") {
			newRela = {
				MainMemId: formData.fid,
				SubMemId: getMemberResponse.id,
				RelateCode: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
				DateStart: dob === null ? "" : dob,
			}
			console.log(newRela);
			addRela(newRela)
		}
		if (formData.mid !== "") {
			newRela = {
				MainMemId: formData.mid,
				SubMemId: getMemberResponse.id,
				RelateCode: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
				DateStart: dob === null ? "" : dob
			}
			console.log(newRela);
			addRela(newRela)
		}
		if (formData.pid !== "") {
			newRela = {
				MainMemId: formData.pid,
				SubMemId: getMemberResponse.id,
				RelateCode: RelaAPI.RELATIONSHIP_enum.MARRIED,
				DateStart: ""
			}
			console.log(newRela);
			addRela(newRela)
			newRela = {
				MainMemId: getMemberResponse.id,
				SubMemId: formData.pid,
				RelateCode: RelaAPI.RELATIONSHIP_enum.MARRIED,
				DateStart: ""
			}
			addRela(newRela)
		}
	}, [getMemberResponse]);
	useEffect(() => {
		console.log(addRelaResponse);
	}, [addRelaResponse]);

	const SelectMenu = ({ id, type, inputList }) => {
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
			.filter(item => {
				switch (type) {
					case "fid": return item.gender === 0;
					case "mid": return item.gender === 1;
					default: return item.gender === 0 || item.gender === 1;
				}
			})
			.sort((a, b) => {
				if (a.genNo !== b.genNo) {
					return a.genNo - b.genNo; // Sort by genNo in ascending order
				} else {
					return a.childOrder - b.childOrder; // Sort by childOrder in ascending order if genNo is the same
				}
			});

		if (type === "fid") {
			return (
				<>
					<select id="selectType" name={type} value={formData.fid} onChange={handleChange}>
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
		} else if (type === "mid") {
			return (
				<>
					<select id="selectType" name={type} value={formData.mid} onChange={handleChange}>
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
		} else {
			return (
				<>
					<select id="selectType" name={type} value={formData.pid} onChange={handleChange}>
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
		}
	};

	return (
		<div className="form-add-member">
			<div className="form-add-member-content">
				<button className="form-add-member-close" onClick={props.onClose}>
					&times;
				</button>
				{/* Add the form elements here */}
				<form className="form">
					<p className="title">Thêm thành viên</p>
					<div className="flex">
						<label>
							<input name="surname" required={true} placeholder="Họ" type="text" className="input" onChange={handleChange} />
						</label>

						<label>
							<input name="lastname" required={true} placeholder="Đệm và Tên" type="text" className="input" onChange={handleChange} />
						</label>
					</div>

					<div>
						<label>
							<input type="radio" name="gender" value="male" onChange={handleChange} />
							Nam
						</label>
						<br />
						<label>
							<input type="radio" name="gender" value="female" onChange={handleChange} />
							Nữ
						</label>
					</div>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Ngày sinh"
							defaultValue={dayjs('1900-01-01')}
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
							defaultValue={dayjs('1900-01-01')}
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
						<input name="birthPlace" placeholder="Nơi sinh" type="text" className="input" onChange={handleChange} />
					</label>
					<label>
						<input name="currentPlace" placeholder="Nơi ở hiện tại" type="text" className="input" onChange={handleChange} />
					</label>
					<label>
						<input required={true} name="childOrder" placeholder="Con thứ mấy trong gia đình?" type="text" className="input" onChange={handleChange} />
					</label>
					<div>
						<label>Đích tôn: </label>
						<div>
							<label>
								<input
									type="radio"
									name="isClanLeader"
									value={true}

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

									onChange={handleChange}
								/>
								Sai
							</label>
						</div>
					</div>

					<label>
						<input name="genNo" required={true} placeholder="Đời thứ" type="text" className="input" onChange={handleChange} />
					</label>
					<label>
						<input name="note" required={false} placeholder="Ghi chú" type="text" className="input" onChange={handleChange} />
					</label>

					<div className='flex'>
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
					</div>
					{/* <div className='flex'>
						<label htmlFor="selectPartner2">Vợ/Chồng 2: </label>
						<SelectMenu id="selectPartner2" type="pids" inputList={memberList} />
					</div> */}


					<button className="submit" onClick={handleButtonClick}>Thêm</button>

				</form>
			</div>
		</div>
	);
}

// function BasicDatePicker({ label, helper }) {

// 	return (
// 		<LocalizationProvider dateAdapter={AdapterDayjs}>
// 			<DatePicker
// 				label={label}
// 				defaultValue={dayjs('1900-01-01')}
// 				format="DD/MM/YYYY"
// 			/>
// 		</LocalizationProvider>
// 	);
// }

function DateModify(_date) {
	if (_date) {
		const formattedDate = format(parseISO(_date.toISOString()), 'yyyy-MM-dd');
		console.log('Selected date:', formattedDate);
		return formattedDate;
	}
	return "";
}
