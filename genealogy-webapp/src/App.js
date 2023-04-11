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

import { useState } from 'react';

const facebook = {
	id: 1,
	name: "Facebook",
	imageUrl: 'https://cdn-icons-png.flaticon.com/512/174/174848.png',
	imageSize: 100,
};

const twitter = {
	id: 2,
	name: "Twitter",
	imageUrl: 'https://cdn-icons-png.flaticon.com/512/3670/3670151.png',
	imageSize: 100,
}

const instagram = {
	id: 3,
	name: "Instagram",
	imageUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
	imageSize: 100,
}

const socialNetworks = [facebook, twitter, instagram];

function MyButton() {
	const [count, setCount] = useState(0);
	function onClickButton() {
		setCount(count + 1);
	}

	return (
		<button onClick={onClickButton}>
			Click {count} times.
		</button>
	);
}

export default function Profile() {

	const listSN = socialNetworks.map(socialNetwork =>
		<li key={socialNetwork.id}>
			<h1>{socialNetwork.name}</h1>
			<img
				className="avatar"
				src={socialNetwork.imageUrl}
				alt={"Photo of " + socialNetwork.name}
				style={{
					width: socialNetwork.imageSize,
					height: socialNetwork.imageSize
				}}
			/>
		</li>
	);


	
	return (
		<>
			<ul>{listSN}</ul>
			<MyButton />
			<MyButton />
		</>
	);
}