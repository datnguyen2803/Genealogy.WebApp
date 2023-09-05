import React from 'react';
import { useState } from 'react';
import './FormAddMember.css';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { parseISO, format } from 'date-fns';
import * as MemberAPI from '../API/MemberAPI';
import * as RelaAPI from '../API/RelationshipAPI';
import { useEffect } from 'react';


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
		genNo: 0,
		childOrder: 0,
		isClanLeader: false,
		note: "",
		fid: "",
		mid: "",
	});

	var memberList = MemberAPI.GetAll();
	console.log(memberList);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		console.log(" --->" + name + " : " + value);
		console.log(formData);
	}

	const handlePidsChange = (e) => {
		const { name, value } = e.target;
		var tempPartnerIds = [...partnerIds];
		tempPartnerIds.push(value);
		setPartnerIds(tempPartnerIds);
		console.log(" --->" + name + " : " + value);
		console.log(partnerIds)
	}

	const handleButtonClick = (e) => {
		e.preventDefault();
		console.log(formData);
		console.log("dob: " + dob);
		console.log("dod: " + dod);
		console.log("pids: " + partnerIds);
	
		var member = {
			surname: formData.surname,
			lastname: formData.lastname,
			gender: formData.lastname,
			dob: dob,
			dod: dod,
			birthPlace: formData.birthPlace,
			currentPlace: formData.currentPlace,
			childOrder: formData.childOrder,
			genNo: formData.genNo,
			isClanLeader: formData.isClanLeader,
			note: formData.note,
			image: ""
		}
		MemberAPI.Add(member);
	  };

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
					<select id="selectType" name={type} onChange={handlePidsChange}>
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

					{/* <FormControl>
						<FormLabel id="form-gender" name="gender" required={true} >Giới tính</FormLabel>
						<RadioGroup
							row
							aria-labelledby="form-gender"
							name="gender"
							onChange={handleChange}
						>
							<FormControlLabel value="male" control={<Radio />} label="Nam" />
							<FormControlLabel value="female" control={<Radio />} label="Nữ" />
						</RadioGroup>
					</FormControl> */}
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
								var formated = DateModify(date);
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
								var formated = DateModify(date);
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

					{/* <label htmlFor="mid">Mẹ:</label>
					<select name="mid" onChange={handleChange}>
						{
							memberList.forEach((member) => {
								<option value={member.id}>
								{member.surname + member.lastname}
								</option>
							})
						}
					</select> */}

					<div className='flex'>
						<label htmlFor="selectFather">Bố: </label>
						<SelectMenu id="selectFather" type="fid" inputList={memberList} />
					</div>
					<div className='flex'>
						<label htmlFor="selectFather">Mẹ: </label>
						<SelectMenu id="selectFather" type="mid" inputList={memberList} />
					</div>
					<div className='flex'>
						<label htmlFor="selectFather">Vợ/Chồng 1: </label>
						<SelectMenu id="selectFather" type="pids" inputList={memberList} />
					</div>
					<div className='flex'>
						<label htmlFor="selectFather">Vợ/Chồng 2: </label>
						<SelectMenu id="selectFather" type="pids" inputList={memberList} />
					</div>


					<button className="submit" onClick={handleButtonClick}>Thêm</button>

				</form>
			</div>
		</div>
	);
}

function BasicDatePicker({ label, helper }) {

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				label={label}
				defaultValue={dayjs('1900-01-01')}
				format="DD/MM/YYYY"
			/>
		</LocalizationProvider>
	);
}

function DateModify(_date) {
	if (_date) {
		const formattedDate = format(parseISO(_date.toISOString()), 'dd/MM/yyyy');
		console.log('Selected date:', formattedDate);
		return formattedDate;
	}
	return "";
}

// function RadioForm() {
// 	// Initialize state to store the selected gender
// 	const [gender, setGender] = useState('');

// 	// Handle change event for radio buttons
// 	const handleGenderChange = (event) => {
// 		setGender(event.target.value);
// 	}

// 	return (
// 		<div>
// 			<label>Đích tôn: </label>
// 			<div id="gender">
// 				<input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
// 				<label htmlFor="male">Đúng</label>
// 				<input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
// 				<label htmlFor="female">Sai</label>
// 			</div>
// 		</div>
// 	);
// }

const handleSubmit = async (e, formData, dob, dod, partnerIds) => {
	e.preventDefault();
	console.log(formData);
	console.log("dob: " + dob);
	console.log("dod: " + dod);
	console.log("pids: " + partnerIds);

	var member = {
		surname: formData.surname,
		lastname: formData.lastname,
		gender: formData.lastname,
		dob: dob,
		dod: dod,
		birthPlace: formData.birthPlace,
		currentPlace: formData.currentPlace,
		childOrder: formData.childOrder,
		genNo: formData.genNo,
		isClanLeader: formData.isClanLeader,
		note: formData.note,
		image: ""
	}
	MemberAPI.Add(member);

	setTimeout(() => {
		// Code to execute after the delay of 500 milliseconds
		// This code will be executed once the delay has passed
		// You can add your desired logic here
		var newMemId = MemberAPI.GetByFeatures(member.surname, member.lastname, member.gender, member.childOrder, member.genNo, member.note);
		var newRela = {};
		// add relationship
		if(formData.fid !== "") {
			newRela = {
				MainMemId: formData.fid,
				SubMemId: newMemId,
				RelateCode: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
				DateStart: member.dob
			}
			console.log(RelaAPI.Add(newRela));
		}
		if(formData.mid !== "") {
			newRela = {
				MainMemId: formData.mid,
				SubMemId: newMemId,
				RelateCode: RelaAPI.RELATIONSHIP_enum.PARENT_CHILD,
				DateStart: member.dob
			}
			console.log(RelaAPI.Add(newRela));
		}
		if(partnerIds !== null) {
			partnerIds.forEach(partnerId => {
				newRela = {
					MainMemId: partnerId,
					SubMemId: newMemId,
					RelateCode: RelaAPI.RELATIONSHIP_enum.MARRIED,
					DateStart: ""
				}
				console.log(RelaAPI.Add(newRela));
			})
		}

	}, 500);


}