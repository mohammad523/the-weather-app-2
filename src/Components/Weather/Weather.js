/** @format */

import React, { useState, useEffect } from "react";
import FiveDay from "./FiveDay/FiveDay";
import Form from "./Form";
import List from "./List";
import cityData from "./data";

function Weather() {
	const [allData, setAllData] = useState();
	const [cityName, setCityName] = useState();
	const [listData, setListData] = useState([]);
	const [currentWeather, setCurrentWeather] = useState();
	const [iconInfo, setIconInfo] = useState("");
	const [feelsLike, setFeelsLike] = useState("");
	const [tempMin, setTempMin] = useState("");
	const [tempMax, setTempMax] = useState("");
	const [humidity, setHumidity] = useState("");

	const [zipCode, setZipCode] = useState("");
	const [zips, updateZips] = useState(cityData);
	const [input, setInput] = useState("10001");

	// this makes the api call
	const makeApiCall = async (input) => {
		const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=${input}&units=imperial&appid=0ab144033f62031c07bcf88c9cb4219c`;
		const res = await fetch(weatherUrl);
		const json = await res.json();
		let data = json;
		if (data === json) {
			setAllData(data);
			setCityName(data.city.name);
			setListData(data.list);
			setCurrentWeather(data.list[0].main.temp);
			setIconInfo(data.list[0].weather[0].icon);
			setFeelsLike(data.list[0].main.temp_min);
			setTempMin(data.list[0].main.temp_min);
			setTempMax(data.list[0].main.temp_max);
			setHumidity(data.list[0].main.humidity);
		}
	};

	useEffect(() => {
		makeApiCall(input);
	}, [input]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("you clicked submit");
		updateZips(cityData);

		const newZip = {
			savedZip: zipCode,
		};

		console.log("newZip", newZip);

		updateZips([newZip, ...zips]);

		setInput(zipCode);
	};

	const handleOnClick = (event) => {
		console.log("onclick", event.target.innerText);
		const text = toString(event.target);
		console.log("text", text);
		setInput(event.target.innerText);
	};

	return (
		<div className='Weather'>
			<div class='today'>
				<h1 className='city'>{cityName}</h1>
				<img
					className='largeImage'
					src={`https://openweathermap.org/img/wn/${iconInfo}@2x.png`}
				/>
				<h1 className='temp'>{currentWeather}°F</h1>
				<h3 className='feelsLike'>Feels Like: {feelsLike}</h3>
				<ul className='minmax'>
					<li>Min: {tempMin}°F</li>
					<li>Max: {tempMax}°F</li>
				</ul>
				<h2 className='humidity'>Humidity: {humidity}</h2>
			</div>
			<div className='formList'>
				<Form
					handleSubmit={handleSubmit}
					zipCode={zipCode}
					setZipCode={setZipCode}
				/>
				<List
					handleSubmit={handleSubmit}
					cityData={zips}
					onClick={handleOnClick}
				/>
			</div>
			<FiveDay listData={listData} />
		</div>
	);
}

export default Weather;
