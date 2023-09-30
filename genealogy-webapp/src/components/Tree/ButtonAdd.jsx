import React from 'react';
import {useState, useEffect} from 'react'
import './ButtonAdd.css'
import FormAddMember from './FormAddMember';
import FormEditMember from './FormEditMember';

export default function ButtonAdd() {
	const [showForm, setShowForm] = useState(false);

	const handleClick = () => {
	  setShowForm(true);
	};
	return (
		<>
			<button className="button-add" onClick={handleClick}>Sửa thành viên</button>
			{showForm && <FormEditMember onClose={() => setShowForm(false)} />}
		</>
	);
}