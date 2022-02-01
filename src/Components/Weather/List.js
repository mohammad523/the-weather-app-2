/** @format */

import React from "react";

function List({ cityData, onClick }) {
	console.log("cityDAta", cityData);
	const listOfZips = cityData.map((item) => {
		console.log(item.savedZip);
		return <li onClick={onClick}>{item.savedZip}</li>;
	});

	return (
		<ul className='zipList'>
			<li>{listOfZips}</li>
		</ul>
	);
}

export default List;
