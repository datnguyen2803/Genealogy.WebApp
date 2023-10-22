
import React from 'react';
import { Menubar } from 'primereact/menubar';
import SearchBar from './SearchBar';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { InputText } from 'primereact/inputtext';

import WebIcon from '../../../../assets/images/family-tree.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './TestPage';

export default function NavigationBar() {
	const items = [
		{
			label: 'Giới thiệu',
			icon: WebIcon,
		},
		{
			label: 'Cây phả hệ',
			icon: 'pi pi-fw pi-pencil',
			command: () => {
				window.location.href = '/test';
			},
		},
		{
			label: 'Dòng sự kiện',
			icon: 'pi pi-fw pi-user',
		},
		{
			label: 'Admin',
			icon: 'pi pi-fw pi-calendar',
			items: [
				{
					label: 'Quản lý',
					icon: 'pi pi-fw pi-pencil',
				},
				{
					label: 'Đăng nhập',
					icon: 'pi pi-fw pi-pencil',
				},
				{
					label: 'Thoát',
					icon: 'pi pi-fw pi-calendar-times',
				}
			]
		},
	];

	const web_logo = <img alt="logo" src={WebIcon} height="40" className="mr-2"></img>;
	const search_bar = <SearchBar />;

	return (
		<>
			<Router>
				<div className="card">
					<Menubar model={items} start={web_logo} end={search_bar} />
					<Routes>
						<Route path='/test' element={<TestPage />}>
							{/* <TestPage /> */}
						</Route>
					</Routes>
				</div>
			</Router>
		</>
		
	)
}
