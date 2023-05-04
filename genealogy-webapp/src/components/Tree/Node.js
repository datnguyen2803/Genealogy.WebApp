import React from 'react';
import './Node.scss'

export default function NodeView({ name, gen }) {
	return (
		<>
			<div className='node' >
				{name}
			</div>
		</>

	);
}