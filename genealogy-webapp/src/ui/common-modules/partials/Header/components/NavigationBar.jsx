
import React from 'react';
import { Menubar } from 'primereact/menubar';
import SearchBar from './SearchBar';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import WebIcon from '../../../../assets/images/family-tree.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TreePage from '../../../../pages/Tree/TreePage';
import AboutPage from '../../../../pages/About/AboutPage';
import HomePage from '../../../../pages/Home/HomePage';
import TimelinePage from '../../../../pages/Timeline/TimelinePage';

export default function NavigationBar() {
	const items = [
		{
			label: 'Giới thiệu',
			icon: WebIcon,
			command: () => {
				window.location.href = '/home';
			},
		},
		{
			label: 'Cây phả hệ',
			icon: 'pi pi-fw pi-pencil',
			command: () => {
				window.location.href = '/tree';
			},
		},
		{
			label: 'Dòng sự kiện',
			icon: 'pi pi-fw pi-user',
			command: () => {
				window.location.href = '/timeline';
			},
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
						<Route path='/home' element={<HomePage />} />
						<Route path='/tree' element={<TreePage />} />
						<Route path='/timeline' element={<TimelinePage />} />
						<Route path='/about' element={<AboutPage />} />

					</Routes>
				</div>
			</Router>
		</>
		
	)
}
