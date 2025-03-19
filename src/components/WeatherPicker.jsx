import React, { useState } from "react";
import "./css/WeatherPicker.css";

function WeatherPicker() {
    const weatherObjects = [
        {
            description: "sun",
            imgSrcActive: "sun.svg",
            imgSrcInactive: "sunGrey.svg",
            state: false,
        },
        {
            description: "cloudy",
            imgSrcActive: "cloudy.svg",
            imgSrcInactive: "cloudyGrey.svg",
            state: false,
        },
        {
            description: "very cloudy",
            imgSrcActive: "veryCloudy.svg",
            imgSrcInactive: "veryCloudyGrey.svg",
            state: false,
        },
        {
            description: "stormy",
            imgSrcActive: "stormy.svg",
            imgSrcInactive: "stormyGrey.svg",
            state: false,
        },
        {
            description: "rain",
            imgSrcActive: "rain.svg",
            imgSrcInactive: "rainGrey.svg",
            state: false,
        },
        {
            description: "snow",
            imgSrcActive: "snow.svg",
            imgSrcInactive: "snowGrey.svg",
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
