import React from 'react';
import './FormAddMember.css';

import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';


export default function FormAddMember(props) {
	return (
		<div className="form-add-member">
			<div className="form-add-member-content">
				<button className="form-add-member-close" onClick={props.onClose}>
					&times;
				</button>
				<h2>Thêm thành viên</h2>
				{/* Add the form elements here */}
				<form class="form">
					<p class="title">Register </p>
					<p class="message">Signup now and get full access to our app. </p>
					<div class="flex">
						<label>
							<input required="" placeholder="" type="text" class="input" />
							<span>Họ</span>
						</label>

						<label>
							<input required="" placeholder="" type="text" class="input" />
							<span>Đệm và Tên</span>
						</label>
					</div>

					<FormControl>
						<FormLabel id="demo-radio-buttons-group-label" required="false">Giới tính</FormLabel>
						<RadioGroup
							row
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="female"
							name="radio-buttons-group"
						>
							<FormControlLabel value="male" control={<Radio />} label="Nam" />
							<FormControlLabel value="female" control={<Radio />} label="Nữ" />
						</RadioGroup>
					</FormControl>

					<label>
						<input required="" placeholder="" type="password" class="input" />
						<span>Password</span>
					</label>
					<label>
						<input required="" placeholder="" type="password" class="input" />
						<span>Confirm password</span>
					</label>
					<button class="submit">Thêm</button>
					<p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
				</form>
			</div>
		</div>
	);
}