import React, { useState, useEffect, Component } from 'react';
import FamilyTree from '@balkangraph/familytree.js';

FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.myTemplate.size = [250, 150];
FamilyTree.templates.myTemplate.node ='<rect x="0" y="0" width="200" height="100" rx="10" ry="10" stroke-width="1" stroke="#aeaeae"></rect>';
FamilyTree.templates.myTemplate.defs = '';
FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 20px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.menuButton =
'<div style="position:absolute;right:{p}px;top:{p}px; width:40px;height:50px;cursor:pointer;" data-ctrl-menu="">'
+ '<hr style="background-color: rgb(255, 202, 40); height: 3px; border: none;">'
+ '<hr style="background-color: rgb(255, 202, 40); height: 3px; border: none;">'
+ '<hr style="background-color: rgb(255, 202, 40); height: 3px; border: none;">'
+ '</div>';

FamilyTree.templates.myTemplate_male = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_male.node = '<rect x="0" y="25" width="200" height="100" rx="10" ry="10" fill="#039be5" stroke-width="1" stroke="#aeaeae"></rect>';
FamilyTree.templates.myTemplate_female = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_female.node = '<rect x="0" y="25" width="200" height="100" rx="10" ry="10" fill="#FF46A3" stroke-width="1" stroke="#aeaeae"></rect>';


// FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 50px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>';
// FamilyTree.templates.myTemplate.field_1 = '<text style="font-size: 16px;" fill="#ffffff" x="100" y="60" text-anchor="middle">{val}</text>';


function MyTree(nodes) {
	const [divRef, setDivRef] = useState(React.createRef());
	const [family, setFamily] = useState(null);
	
	useEffect(() => {
		const nodeBinding = {
			field_0: 'name',
			img_0: 'img'
		}

		const concept = {
			nodes: nodes.nodes,
			nodeBinding: nodeBinding,
			template: "myTemplate",
			mode:"light",
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

export default MyTree;