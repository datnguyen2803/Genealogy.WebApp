// import React, { Component } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AppRoutes from './AppRoutes';
// import { Layout } from './components/Layout';
// import './custom.css';

// export default class App extends Component {
//   static displayName = App.name;

//   render() {
//     return (
//       <Layout>
//         <Routes>
//           {AppRoutes.map((route, index) => {
//             const { element, ...rest } = route;
//             return <Route key={index} {...rest} element={element} />;
//           })}
//         </Routes>
//       </Layout>
//     );
//   }
// }


import {useState, useEffect} from 'react'
import TreeView from './components/Tree/View';
import HeaderView from './components/Header/View';
import GetCat from './components/API/API';

import './App.css'

export default function App() {
	return (
		<>
			<HeaderView />
			<TreeView />
			{/* <TimelineView/> */}
			<GetCatFact />
			<div>
				123
			</div>
		</>
	)
}

function GetCatFact() {
	
	let fact = GetCat();

	return (
		<div>
			{fact}
		</div>
	);
}






