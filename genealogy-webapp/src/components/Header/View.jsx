
import React from 'react';
import { Menubar } from 'primereact/menubar';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { InputText } from 'primereact/inputtext';

import WebIcon from '../../assets/images/family-tree.png';

export default function HeaderView() {
	const items = [
		{
			label: 'Giới thiệu',
			icon: WebIcon,
		},
		{
			label: 'Cây phả hệ',
			
			icon: 'pi pi-fw pi-pencil',
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
	const search_bar = <InputText placeholder="Tìm kiếm" type="text" className="w-full" />;

	return (
		<div className="card">
			<Menubar model={items} start={web_logo} end={search_bar} />
		</div>
	)
}
