import React from 'react';
import { useState } from 'react';
import './FormAddMember.css';

import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export default function FormAddMember(props) {
	return (
		<div className="form-add-member">
			<div className="form-add-member-content">
				<button className="form-add-member-close" onClick={props.onClose}>
					&times;
				</button>
				{/* Add the form elements here */}
				<form class="form">
					<p class="title">Thêm thành viên</p>
					<div class="flex">
						<label>
							<input required="" placeholder="Họ" type="text" class="input" />
							<span>Họ</span>
						</label>

						<label>
							<input required="" placeholder="" type="text" class="input" />
							<span>Đệm và Tên</span>
						</label>
					</div>

					<FormControl>
						<FormLabel id="form-gender" required="false">Giới tính</FormLabel>
						<RadioGroup
							row
							aria-labelledby="form-gender"
							defaultValue="female"
							name="radio-buttons-group"
						>
							<FormControlLabel value="male" control={<Radio />} label="Nam" />
							<FormControlLabel value="female" control={<Radio />} label="Nữ" />
						</RadioGroup>
					</FormControl>

					<BasicDatePicker label="Ngày sinh" />
					<BasicDatePicker label="Ngày mất | Chỉ cho người đã mất" />

					<label>
						<input required="" placeholder="Nơi sinh" type="text" class="input" />
						<span>Nơi sinh</span>
					</label>
					<label>
						<input required="" placeholder="Nơi ở hiện tại" type="text" class="input" />
						<span>Nơi ở hiện tại</span>
					</label>
					<div class="flex" >
						<RadioForm />
						<label>
							<input required="" placeholder="Đời" type="text" class="input" />
							<span>Đời</span>
						</label>
					</div>

					<button class="submit">Thêm</button>
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

function RadioForm() {
	// Initialize state to store the selected gender
	const [gender, setGender] = useState('');

	// Handle change event for radio buttons
	const handleGenderChange = (event) => {
		setGender(event.target.value);
	}

	return (
		<div>
			<label>Đích tôn: </label>
			<div id="gender">
				<input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
				<label htmlFor="male">Đúng</label>
				<input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
				<label htmlFor="female">Sai</label>
			</div>
		</div>
	);
}