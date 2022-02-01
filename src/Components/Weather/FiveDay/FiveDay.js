/** @format */

import React, { useEffect, useState } from "react";

function FiveDay({ listData }) {
	const rowOne = listData.slice(0, 8);
	const rowTwo = listData.slice(8, 16);
	const rowThree = listData.slice(16, 24);
	const rowFour = listData.slice(24, 32);
	const rowFive = listData.slice(32, 40);

	let fiveDayTempsOne = <h1>Loading</h1>;
	let fiveDayTempsTwo = <h1>Loading</h1>;
	let fiveDayTempsThree = <h1>Loading</h1>;
	let fiveDayTempsFour = <h1>Loading</h1>;
	let fiveDayTempsFive = <h1>Loading</h1>;

	// const newCall = async (icon) => {
	//   const iconUrl =   `https://openweathermap.org/img/wn/${icon}@2x.png`

	//   const res = await fetch(iconUrl)
	//   const json = await res.json()
	//   console.log('json',json)
	// }

	if (listData[0]) {
		fiveDayTempsOne = rowOne.map((obj) => {
			console.log(obj.weather[0].icon);

			return (
				<ul className='fiveDayRows'>
					<img
						src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
						alt='boohoo'
						className='smallImages'
					/>

					<li>{Math.round(obj.main.temp)}°</li>
					<li>{obj.dt_txt.slice(11, 16)}</li>
				</ul>
			);
		});
	}
	if (listData[0]) {
		fiveDayTempsTwo = rowTwo.map((obj) => {
			return (
				<ul className='fiveDayRows'>
					<img
						src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
						alt='boohoo'
						className='smallImages'
					/>
					<li>{Math.round(obj.main.temp)}°</li>
					<li>{obj.dt_txt.slice(11, 16)}</li>
				</ul>
			);
		});
	}
	if (listData[0]) {
		fiveDayTempsThree = rowThree.map((obj) => {
			return (
				<ul className='fiveDayRows'>
					<img
						src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
						alt='boohoo'
						className='smallImages'
					/>
					<li>{Math.round(obj.main.temp)}°</li>
					<li>{obj.dt_txt.slice(11, 16)}</li>
				</ul>
			);
		});
	}
	if (listData[0]) {
		fiveDayTempsFour = rowFour.map((obj) => {
			return (
				<ul className='fiveDayRows'>
					<img
						src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
						alt='boohoo'
						className='smallImages'
					/>
					<li>{Math.round(obj.main.temp)}°</li>
					<li>{obj.dt_txt.slice(11, 16)}</li>
				</ul>
			);
		});
	}
	if (listData[0]) {
		fiveDayTempsFive = rowFive.map((obj) => {
			return (
				<ul className='fiveDayRows'>
					<img
						src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
						alt='boohoo'
						className='smallImages'
					/>
					<li>{Math.round(obj.main.temp)}°</li>
					<li>{obj.dt_txt.slice(11, 16)}</li>
				</ul>
			);
		});
	}
	let days = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
	];
	let d = new Date();
	let n = days[d.getDay()];

	return (
		<div className='FiveDay'>
			<h2>Five Day Forecast</h2>
			<ul class='row'>
				<span className='date'>{n}</span>
				{fiveDayTempsOne}
			</ul>
			<ul class='row'>
				<span className='date'>{days[d.getDay() + 1]}</span>
				{fiveDayTempsTwo}
			</ul>
			<ul class='row'>
				<span className='date'>{days[d.getDay() + 2]}</span>
				{fiveDayTempsThree}
			</ul>
			<ul class='row'>
				<span className='date'>{days[d.getDay() + 3]}</span>
				{fiveDayTempsFour}
			</ul>
			<ul class='row'>
				<span className='date'>{days[d.getDay() + 4]}</span>
				{fiveDayTempsFive}
			</ul>
		</div>
	);
}

export default FiveDay;
