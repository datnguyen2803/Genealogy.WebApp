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
import TimelineView from './components/Timeline/View';
import HeaderView from './components/Header/View';
import GetCat from './components/API/API';
import axios from 'axios';

import './App.css'
const URL_BASE = 'https://catfact.ninja/fact';

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
	// const [data, setData] = useState({});
	// const [fact, setFact] = useState('');
	// setFact(GetCat());
	// useEffect(() => {
	// 	axios.get(URL_BASE)
	// 	  .then(response => {
	// 		setData(response.data);
	// 		setFact(response.data.fact);
	// 	  })
	// 	  .catch(error => {
	// 		console.error(error);
	// 	  });
	//   }, []);
	
	let fact = GetCat();
	// setFact(catfact);

	return (
		<div>
			{fact}
		</div>
	);
}

// function FamilyTree() {
// 	return (
// 		<>
// 			<div style={{height: '100%'}}>
// 				<TreeView />
// 			</div>
			
// 		</>
// 	);
// }

// function FamilyEvents() {
// 	return (
// 		<>
// 			<TimelineView />
// 		</>
// 	);
// }





