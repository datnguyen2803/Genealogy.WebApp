import React, { useState, useEffect } from 'react';
import FamilyTree from '@balkangraph/familytree.js';
import './Template.css'

FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.myTemplate.size = [550, 350];
FamilyTree.templates.myTemplate.node = '<rect x="0" y="0" width="200" height="100" rx="10" ry="10" stroke-width="1" stroke="#aeaeae"></rect>';
FamilyTree.templates.myTemplate.link =
'<path stroke="#686868" stroke-width="10px" fill="none" data-l-id="[{id}][{child-id}]" d="M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd}" />';
FamilyTree.templates.myTemplate.defs = '';
FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 40px;font-weight: bold" fill="#ffffff" x="275" y="100" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.field_1 = '<text style="font-size: 35px;" fill="#ffffff" x="275" y="150" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.field_2 = '<text style="font-size: 30px;" fill="#ffffff" x="50" y="225" text-anchor="left">{val}</text>';
FamilyTree.templates.myTemplate.field_3 = '<text style="font-size: 30px;" fill="#ffffff" x="50" y="275" text-anchor="left">{val}</text>';

// FamilyTree.templates.myTemplate.pointer =
// '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">'
// + '<polygon fill="rgb(255, 202, 40)" points="53.004,173.004 53.004,66.996 0,120" />'
// + '<polygon fill="rgb(255, 202, 40)" points="186.996,66.996 186.996,173.004 240,120" />'
// + '<polygon fill="rgb(255, 202, 40)" points="66.996,53.004 173.004,53.004 120,0" />'
// + '<polygon fill="rgb(255, 202, 40)" points="120,240 173.004,186.996 66.996,186.996" />'
// + '<circle fill="rgb(255, 202, 40)" cx="120" cy="120" r="30" />'
// + '</g></g>';
FamilyTree.templates.myTemplate_male = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_male.node = '<rect x="0" y="25" width="550" height="300" rx="20" ry="20" fill="#039be5" stroke-width="1" stroke="#aeaeae"></rect>';
FamilyTree.templates.myTemplate_female = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_female.node = '<rect x="0" y="25" width="550" height="300" rx="20" ry="20" fill="#FF46A3" stroke-width="1" stroke="#aeaeae"></rect>';

FamilyTree.templates.myTemplate_leader = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_leader.node = '<rect x="0" y="25" width="550" height="300" rx="20" ry="20" fill="#f1ae21" stroke-width="1" stroke="#aeaeae"></rect>';
FamilyTree.templates.myTemplate_leader.field_0 = '<text style="font-size: 45px;font-weight: bold" fill="#000000" x="275" y="100" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate_leader.field_1 = '<text style="font-size: 40px;" fill="#000000" x="275" y="150" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate_leader.field_2 = '<text style="font-size: 35px;" fill="#000000" x="50" y="225" text-anchor="left">{val}</text>';
FamilyTree.templates.myTemplate_leader.field_3 = '<text style="font-size: 35px;" fill="#000000" x="50" y="275" text-anchor="left">{val}</text>';
FamilyTree.templates.myTemplate_leader.link =
'<path stroke="#f1ae21" stroke-width="10px" fill="none" data-l-id="[{id}][{child-id}]" d="M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd}" />';


function TreeTemplate(nodes) {
	const [divRef, setDivRef] = useState(React.createRef());
	const [family, setFamily] = useState(null);

	useEffect(() => {
		const nodeBinding = {
			field_0: 'field0',
			field_1: 'field1',
			field_2: 'field2',
			field_3: 'field3',
			// field_1: 'note',
			// img_0: 'img'
		}

		const concept = {
			nodes: nodes.nodes,
			nodeBinding: nodeBinding,
			tags: {
				"Leader": {
					template: "myTemplate_leader",
				},
				"Male": {
					template: "myTemplate_male",
				},
				"Female": {
					template: "myTemplate_female",
				}
			},
			mode: "light",
			// miniMap: true,
			scaleInitial: FamilyTree.match.boundary,
			menu: {
				preview_pdf: {
					text: "Xem trước PDF",
					// icon: FamilyTree.icon.pdf(24, 24, "#7A7A7A"),
					onClick: () => pdfPreview()
				},
				export_pdf: {
					text: "Xuất file PDF",
					// icon: FamilyTree.icon.pdf(24, 24, "#7A7A7A"),
					onClick: () => pdfExport()
				},
				export_png: {
					text: "Xuất file PNG",
					onClick: () => pngExport()
				}
			},
			toolbar: {
				layout: false,
				zoom: true,
				fit: true,
				expandAll: false,
				fullScreen: false
			},
			levelSeparation: 400,
			siblingSeparation: 150,
			subtreeSeparation: 200,
			partnerChildrenSplitSeparation: 80,

		}
		const myFam = new FamilyTree(divRef.current, concept);

		setFamily(myFam);
	}, [nodes.nodes, divRef,]);


	function pdfPreview() {
		family.exportPDFPreview({
			landscape: true,
			format: "A4",
			expandChildren: false
		});
	}
	function pdfExport() {
		family.exportPDF({
			landscape: true,
			format: "A1",
			expandChildren: false
		});
	}

	function pngExport() {
		family.exportPNG({
			landscape: true,
			// format: "A4",
			expandChildren: false
		})
	}

	return (
		<>
			<div ref={divRef}></div>
		</>
	);
}



export default TreeTemplate;