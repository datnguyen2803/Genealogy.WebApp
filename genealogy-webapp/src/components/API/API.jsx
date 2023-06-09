import {useState, useEffect} from 'react'
import axios from 'axios';

export const URL_BASE = 'https://catfact.ninja/fact';

function Get() {
	const [data, setData] = useState({});

	useEffect(() => {
		axios.get(URL_BASE)
		  .then(response => {
			setData(response.data);
		  })
		  .catch(error => {
			console.error(error);
		  });
	  }, []);
  
	return data.fact;
}

export default function GetCat() {
	return Get();
}