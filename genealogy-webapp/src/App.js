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


import {useState} from 'react'
import MyTree from './mytree';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import Draggable from 'react-draggable';
import './App.css'

export default function App() {

	return (
		<>
			<Graph />
		</>
	)
}

function Graph() {
	const {nodes, setNodes} = [];  

	function onClickAddMem(currentNodes) {
		let newNode = { id: 5, mid: 1, fid: 2, name: 'Datj', gender: 'female', img: 'https://cdn.balkan.app/shared/w10/3.jpg' };
		currentNodes.push(newNode);
	}
    return (
		<>
			<div style={{height: '100%'}}>
				<MyTree nodes={[
					{ id: 1, pids: [2], name: 'Amber McKenzie', gender: 'female', img: 'https://cdn.balkan.app/shared/2.jpg'  },
					{ id: 2, pids: [1], name: 'Ava Field', gender: 'male', img: 'https://cdn.balkan.app/shared/m30/5.jpg' },
					{ id: 3, mid: 1, fid: 2, name: 'Peter Stevens', gender: 'male', img: 'https://cdn.balkan.app/shared/m10/2.jpg' },
					{ id: 4, mid: 1, fid: 2, name: 'Savin Stevens', gender: 'male', img: 'https://cdn.balkan.app/shared/m10/1.jpg'  },
					{ id: 5, mid: 1, fid: 2, name: 'Emma Stevens', gender: 'female', img: 'https://cdn.balkan.app/shared/w10/3.jpg' },
				]} />
			</div>
			<button onClick={onClickAddMem}>Add mem</button>
		</>
    );
}



// function Tree() {
// 	return (
// 		<>
// 			<Xwrapper>
// 				<Node id='dat' name='Dat' />
// 				<Node id='chip' name='Chip' />
// 				<Node id='son' name='son' />

// 				<Xarrow
// 					id='dat_chip'
// 					start='dat'
// 					end='chip'
// 					showHead={false}
// 					showTail={false}
// 					path='grid'
// 				/>
// 				<Xarrow
// 					start='dat_chip'
// 					end='son'
// 					path='grid'
// 				/>
// 			</Xwrapper>
// 		</>
// 	);
	
// }

// function Node({id, name, }) {
// 	const updateXarrow = useXarrow();
// 	return (
// 		<>
// 			<Draggable  onDrag={updateXarrow} onStop={updateXarrow}>
// 				<div  className='node_rect'>
// 					<span id={id} className='node_name'>
// 						{name}
// 					</span>
// 				</div>
// 			</Draggable>
// 		</>
// 	);
// }



