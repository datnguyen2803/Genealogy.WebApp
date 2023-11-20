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
import Header from './ui/common-modules/partials/Header/Header.jsx'

import './App.css'

export default function App() {
	return (
		<>
			<Header />
			{/* <TreeView /> */}
			{/* <TimelineView/> */}
		</>
	)
}







