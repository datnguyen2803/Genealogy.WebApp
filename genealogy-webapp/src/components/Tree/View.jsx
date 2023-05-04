import React, { useState, useEffect, Component } from 'react';
import FamilyTree from '@balkangraph/familytree.js';

FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.myTemplate.size = [250, 150];
FamilyTree.templates.myTemplate.node ='<rect x="0" y="0" width="200" height="100" rx="10" ry="10" stroke-width="1" stroke="#aeaeae"></rect>';
FamilyTree.templates.myTemplate.defs = '';
FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 20px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.field_1 = '<text style="font-size: 10px;" fill="#ffffff" x="100" y="60" text-anchor="middle">{val}</text>';

FamilyTree.templates.myTemplate.pointer =
'<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">'
+ '<polygon fill="rgb(255, 202, 40)" points="53.004,173.004 53.004,66.996 0,120" />'
+ '<polygon fill="rgb(255, 202, 40)" points="186.996,66.996 186.996,173.004 240,120" />'
+ '<polygon fill="rgb(255, 202, 40)" points="66.996,53.004 173.004,53.004 120,0" />'
+ '<polygon fill="rgb(255, 202, 40)" points="120,240 173.004,186.996 66.996,186.996" />'
+ '<circle fill="rgb(255, 202, 40)" cx="120" cy="120" r="30" />'
+ '</g></g>';
FamilyTree.templates.myTemplate_male = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_male.node = '<rect x="0" y="25" width="200" height="100" rx="10" ry="10" fill="#039be5" stroke-width="1" stroke="#aeaeae"></rect>';
FamilyTree.templates.myTemplate_female = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_female.node = '<rect x="0" y="25" width="200" height="100" rx="10" ry="10" fill="#FF46A3" stroke-width="1" stroke="#aeaeae"></rect>';





function TreeView(nodes) {
	const [divRef, setDivRef] = useState(React.createRef());
	const [family, setFamily] = useState(null);
	
	useEffect(() => {
		const nodeBinding = {
			field_0: 'name',
			field_1: 'gender',
			img_0: 'img'
		}

		const concept = {
			nodes: nodes.nodes,
			nodeBinding: nodeBinding,
			template: "myTemplate",
			mode:"light",
			scaleInitial:FamilyTree.match.boundary
		}
		const myFam = new FamilyTree(divRef.current, concept);
		
		setFamily(myFam);
	}, [nodes.nodes, divRef, ]);


	return (
		<>
			<div ref={divRef}></div>
		</>
	);
}

export default TreeView;