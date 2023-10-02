
import React from 'react';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';

export default function Header() {

	return (
		<div className="card">
			<NavigationBar/>
			<SearchBar />
		</div>
	)
}
