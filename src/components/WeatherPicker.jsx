import React, { useState } from "react";
import "./css/WeatherPicker.css";

function WeatherPicker() {
    const weatherObjects = [
        {
            description: "sun",
            imgSrcActive: "/public/sun.svg",
            imgSrcInactive: "/public/sunGrey.svg",
            state: false,
        },
        {
            description: "cloudy",
            imgSrcActive: "/public/cloudy.svg",
            imgSrcInactive: "/public/cloudyGrey.svg",
            state: false,
        },
        {
            description: "very cloudy",
            imgSrcActive: "/public/veryCloudy.svg",
            imgSrcInactive: "/public/veryCloudyGrey.svg",
            state: false,
        },
        {
            description: "stormy",
            imgSrcActive: "/public/stormy.svg",
            imgSrcInactive: "/public/stormyGrey.svg",
            state: false,
        },
        {
            description: "rain",
            imgSrcActive: "/public/rain.svg",
            imgSrcInactive: "/public/rainGrey.svg",
            state: false,
        },
        {
            description: "snow",
            imgSrcActive: "/public/snow.svg",
            imgSrcInactive: "/public/snowGrey.svg",
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
