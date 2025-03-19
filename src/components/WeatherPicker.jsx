import React, { useState } from "react";
import "./css/WeatherPicker.css";

function WeatherPicker() {
    const weatherObjects = [
        {
            description: "sun",
            imgSrcActive: "images/sun.svg",
            imgSrcInactive: "images/sunGrey.svg",
            state: false,
        },
        {
            description: "cloudy",
            imgSrcActive: "images/cloudy.svg",
            imgSrcInactive: "images/cloudyGrey.svg",
            state: false,
        },
        {
            description: "very cloudy",
            imgSrcActive: "images/veryCloudy.svg",
            imgSrcInactive: "images/veryCloudyGrey.svg",
            state: false,
        },
        {
            description: "stormy",
            imgSrcActive: "images/stormy.svg",
            imgSrcInactive: "images/stormyGrey.svg",
            state: false,
        },
        {
            description: "rain",
            imgSrcActive: "images/rain.svg",
            imgSrcInactive: "images/rainGrey.svg",
            state: false,
        },
        {
            description: "snow",
            imgSrcActive: "images/snow.svg",
            imgSrcInactive: "images/snowGrey.svg",
            state: false,
        },
    ];
    const [weather, setWeather] = useState(weatherObjects);

    function handleClick(event) {
        const selectedImg = event.target;
        const changedWeatherObjects = weatherObjects;

        changedWeatherObjects[selectedImg.id].state = true;

        setWeather(changedWeatherObjects);
    }

    return (
        <>
            <div>
                <h3>Welches Wetter haben wir heute?</h3>
            </div>
            <div className="flex-container-weather">
                {weather.map((weatherObject, index) => {
                    return (
                        <img
                            id={index} // ToDo: id should be something unique for the html
                            key={index}
                            onClick={handleClick}
                            src={
                                weatherObject.state
                                    ? weatherObject.imgSrcActive
                                    : weatherObject.imgSrcInactive
                            }
                            alt={
                                "Weather picker " +
                                weatherObject.description +
                                " button"
                            }
                        />
                    );
                })}
            </div>
        </>
    );
}

export default WeatherPicker;
