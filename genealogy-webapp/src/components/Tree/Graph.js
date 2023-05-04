import React from 'react';
import './Graph.scss'
import NodeView from './Node';
import Xarrow from "react-xarrows";

export default function GraphView() {
	return (
		<>
		<NodeView name='Đạt' gen='1' id='gen1_dat'/>
		<NodeView name='Lan Anh' gen='1' id='gen1_lan_anh'/>
		<Xarrow
			start='gen1_dat'
			end='gen1_lan_anh'
			headSize={3}
			path='grid'
			strokeWidth={5}
			startAnchor='middle'
			endAnchor='middle'
			lineColor='green'
		/>
	</>
	);

}

