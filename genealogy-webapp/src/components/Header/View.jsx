import React from "react";

export default function HeaderView() {
	return (
		<>
			{/* <!-- Navbar (sit on top) --> */}
			<div class="w3-top">
			<div class="w3-bar w3-white w3-wide w3-padding w3-card">
				<a href="#home" class="w3-bar-item w3-button"><b>BR</b> Architects</a>
				{/* <!-- Float links to the right. Hide them on small screens --> */}
				<div class="w3-right w3-hide-small">
				<a href="#projects" class="w3-bar-item w3-button">Projects</a>
				<a href="#about" class="w3-bar-item w3-button">About</a>
				<a href="#contact" class="w3-bar-item w3-button">Contact</a>
				</div>
			</div>
			</div>

		</>
	);
}