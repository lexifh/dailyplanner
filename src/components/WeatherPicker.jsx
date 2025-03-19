import React, { useState } from "react";
import "./css/WeatherPicker.css";

function WeatherPicker() {
    const weatherObjects = [
        {
            description: "sun",
            imgSrcActive: "/public/sun.svg",
            imgSrcInactive: "/public/assets/sunGrey.svg",
            state: false,
        },
        {
            description: "cloudy",
            imgSrcActive: "/public/assets/cloudy.svg",
            imgSrcInactive: "/public/assets/cloudyGrey.svg",
            state: false,
        },
        {
            description: "very cloudy",
            imgSrcActive: "/public/assets/veryCloudy.svg",
            imgSrcInactive: "/public/assets/veryCloudyGrey.svg",
            state: false,
        },
        {
            description: "stormy",
            imgSrcActive: "/public/assets/stormy.svg",
            imgSrcInactive: "/public/assets/stormyGrey.svg",
            state: false,
        },
        {
            description: "rain",
            imgSrcActive: "/public/assets/rain.svg",
            imgSrcInactive: "/public/assets/rainGrey.svg",
            state: false,
        },
        {
            description: "snow",
            imgSrcActive: "/public/assets/snow.svg",
            imgSrcInactive: "/public/assets/snowGrey.svg",
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
