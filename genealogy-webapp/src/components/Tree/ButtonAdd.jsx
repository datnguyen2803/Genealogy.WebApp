import React from 'react';
import {useState, useEffect} from 'react'
import './ButtonAdd.css'
import FormAddMember from './FormAddMember';

export default function ButtonAdd() {
	const [showForm, setShowForm] = useState(false);

	const handleClick = () => {
	  setShowForm(true);
	};
	return (
		<>
			<button onClick={handleClick}>Thêm thành viên</button>
			{showForm && <FormAddMember onClose={() => setShowForm(false)} />}
		</>
	);
}