import React, {useState} from 'react';
import { InputText } from 'primereact/inputtext';

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState("");
	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	}
	const handleKeyDown = (e) => {
		// e.preventDefault();
		if(e.key === "Enter") {
			alert(searchInput);
		}
	}

	return (
		<>
			<div>
				<InputText placeholder="Tìm kiếm" type="text" className="w-full"
					value={searchInput}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					 />
			</div>
			<div>
				{searchInput}
			</div>
		</>
	);
}

