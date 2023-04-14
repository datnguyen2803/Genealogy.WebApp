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
import {Game} from './Game'

export default function App() {

	return (
		<>
			<FilterableProductTable />
		</>
	)
}

const ProductCategories = {
	FRUITS: "Fruits",
	VEGETABLES: "Vegetables",
};

const TableProperties = {
	HEADER_NAME: "Name",
	HEADER_PRICE: "Price"
}

function FilterableProductTable() {
	return (
		<>
			<SearchBar />
			<ProductTable />
		</>
	);
}

function SearchBar() {
	return (
		<>
			
		</>
	);
}

function ProductTable() {

	return (
		<>
			<table>
				<thead>
					<tr>
						<ProductTableHeader 
							headerName={TableProperties.HEADER_NAME}
							/>
						<ProductTableHeader 
							headerName={TableProperties.HEADER_PRICE}
							/>
					</tr>
				</thead>

				<tbody>
					<ProductCategoryRow 
						category={ProductCategories.FRUITS}
					/>
					<ProductRow 
						itemName='Apple' itemPrice='1' itemCategory={ProductCategories.FRUITS}
					/>
					<ProductRow 
						itemName='Dragon fruit' itemPrice='1' itemCategory={ProductCategories.FRUITS}
					/>
					<ProductRow 
						itemName='Passion fruit' itemPrice='2' itemCategory={ProductCategories.FRUITS}
					/>

					<ProductCategoryRow 
						category={ProductCategories.VEGETABLES}
					/>
					<ProductRow 
						itemName='Spinach' itemPrice='2' itemCategory={ProductCategories.VEGETABLES}
					/>
					<ProductRow 
						itemName='Pumpkin' itemPrice='4' itemCategory={ProductCategories.VEGETABLES}
					/>
					<ProductRow 
						itemName='Peas' itemPrice='1' itemCategory={ProductCategories.VEGETABLES}
					/>

				</tbody>
			</table>
		</>
	);
}

function ProductTableHeader({headerName}) {
	// const [headerName, setHeaderName] = useState(TableProperties.HEADER_NAME);
	return (
		<>
			<th>{headerName}</th>
		</>
	);
}

function ProductCategoryRow({category}) {
	// const [category, setCatergory] = useState(ProductCategories.FRUITS);
	return (
		<>
			<th colSpan="2">
				{category}
			</th>
		</>
	);
}

function ProductRow({itemName, itemPrice, itemCategory}) {
	// const [itemName, setItemName] = useState("");
	// const [itemPrice, setItemPrice] = useState(0);
	// const [itemCategory, setItemCategory] = useState(ProductCategories.FRUITS);
	return (
		<>
			<tr>
				<td>{itemName}</td>
				<td>$ {itemPrice}</td>
			</tr>
		</>
	);
}


