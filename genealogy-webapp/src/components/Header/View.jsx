
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
			// items: [
			// 	{
			// 		label: 'New',
			// 		icon: 'pi pi-fw pi-plus',
			// 		items: [
			// 			{
			// 				label: 'Bookmark',
			// 				icon: 'pi pi-fw pi-bookmark'
			// 			},
			// 			{
			// 				label: 'Video',
			// 				icon: 'pi pi-fw pi-video'
			// 			},

			// 		]
			// 	},
			// 	{
			// 		label: 'Delete',
			// 		icon: 'pi pi-fw pi-trash'
			// 	},
			// 	{
			// 		separator: true
			// 	},
			// 	{
			// 		label: 'Export',
			// 		icon: 'pi pi-fw pi-external-link'
			// 	}
			// ]
		},
		{
			label: 'Cây phả hệ',
			icon: 'pi pi-fw pi-pencil',
			// items: [
			// 	{
			// 		label: 'Left',
			// 		icon: 'pi pi-fw pi-align-left'
			// 	},
			// 	{
			// 		label: 'Right',
			// 		icon: 'pi pi-fw pi-align-right'
			// 	},
			// 	{
			// 		label: 'Center',
			// 		icon: 'pi pi-fw pi-align-center'
			// 	},
			// 	{
			// 		label: 'Justify',
			// 		icon: 'pi pi-fw pi-align-justify'
			// 	},

			// ]
		},
		{
			label: 'Dòng sự kiện',
			icon: 'pi pi-fw pi-user',
			// items: [
			// 	{
			// 		label: 'New',
			// 		icon: 'pi pi-fw pi-user-plus',

			// 	},
			// 	{
			// 		label: 'Delete',
			// 		icon: 'pi pi-fw pi-user-minus',

			// 	},
			// 	{
			// 		label: 'Search',
			// 		icon: 'pi pi-fw pi-users',
			// 		items: [
			// 			{
			// 				label: 'Filter',
			// 				icon: 'pi pi-fw pi-filter',
			// 				items: [
			// 					{
			// 						label: 'Print',
			// 						icon: 'pi pi-fw pi-print'
			// 					}
			// 				]
			// 			},
			// 			{
			// 				icon: 'pi pi-fw pi-bars',
			// 				label: 'List'
			// 			}
			// 		]
			// 	}
			// ]
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
