import React, { useState } from "react";
import "./css/WeatherPicker.css";

function WeatherPicker() {
    const weatherObjects = [
        {
            id: "0weather",
            description: "sun",
            imgSrcActive: "sun.svg",
            imgSrcInactive: "sunGrey.svg",
            state: false,
        },
        {
            id: "1weather",
            description: "cloudy",
            imgSrcActive: "cloudy.svg",
            imgSrcInactive: "cloudyGrey.svg",
            state: false,
        },
        {
            id: "2weather",
            description: "very cloudy",
            imgSrcActive: "veryCloudy.svg",
            imgSrcInactive: "veryCloudyGrey.svg",
            state: false,
        },
        {
            id: "3weather",
            description: "stormy",
            imgSrcActive: "stormy.svg",
            imgSrcInactive: "stormyGrey.svg",
            state: false,
        },
        {
            id: "4weather",
            description: "rain",
            imgSrcActive: "rain.svg",
            imgSrcInactive: "rainGrey.svg",
            state: false,
        },
        {
            id: "5weather",
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

        changedWeatherObjects.forEach((weatherObject) => {
            if (weatherObject.id === selectedImg.id) {
                weatherObject.state = true;
            }
        });

        setWeather(changedWeatherObjects);
    }

    return (
        <>
            <div>
                <h3>Welches Wetter haben wir heute?</h3>
            </div>
            <div className="flex-container-weather">
                {weather.map((weatherObject, index) => {
                    return weatherObject.state ? (
                        <img
                            id={index + "weather"}
                            key={index}
                            onClick={handleClick}
                            src={weatherObject.imgSrcActive}
                            alt={
                                "Weather picker " +
                                weatherObject.description +
                                " button"
                            }
                        />
                    ) : (
                        <img
                            id={index + "weather"}
                            key={index}
                            onClick={handleClick}
                            src={weatherObject.imgSrcInactive}
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
