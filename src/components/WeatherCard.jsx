import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import Input01d from "../assets/01d.svg";
function WeatherCard(props) {
    // console.log(props);
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`;
    };
    const sideRight = () => {
        var slider = document.getElementById("scrolledItem");
        slider.scrollLeft = slider.scrollLeft + 300;
    };
    const sideLeft = () => {
        var slider = document.getElementById("scrolledItem");
        slider.scrollLeft = slider.scrollLeft - 300;
    };

    return (
        <div className="weatherData">
            <div className="currtemp">
                <div className="tempAndLogo">
                    <div>
                        <img src={`assets/${props.weather[0].icon}.svg`} width={200} alt="icon" />
                    </div>
                    <div>
                        {Math.round(props.weatherData.temp)}&deg;C
                        <p>{props.weather[0].description}</p>
                    </div>
                </div>
                <div className="windData">
                    <p>
                        {props.lang ? "Wind: " : "हवा: "}
                        <span>{props.windData.speed}&nbsp;mph</span>
                        {/* <span>50&nbsp;mph</span> */}
                    </p>
                    <p>
                        {props.lang ? "Min Temp: " : "न्यूनतम ताप: "}
                        <span>{Math.round(props.weatherData.temp_min)}&deg;C</span>
                        {/* <span>80&deg;C</span> */}
                    </p>
                    <p>
                        {props.lang ? "Max Temp: " : "अधिकतम ताप: "}
                        <span>{Math.round(props.weatherData.temp_max)}&deg;C</span>
                    </p>
                </div>
            </div>
            <div id="scrolledItem" className="forcastdata">
                <div>
                    <p>{props.lang ? "SUNRISE" : "सूर्योदय"}</p>
                    <img src={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg"} width={100} alt="icon" />
                    <p>{getTime(props.sys.sunrise)}</p>
                </div>
                <div>
                    <p>{props.lang ? "HUMIDITY" : "नमी"}</p>

                    <img src={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"} width={100} alt="icon" />
                    <p>{props.weatherData.humidity}&nbsp;mm</p>
                </div>
                <div>
                    <p>{props.lang ? "WIND" : "हवा"}</p>

                    <img src={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"} width={100} alt="icon" />
                    <p>{props.windData.speed}&nbsp;mph</p>
                </div>
                <div>
                    <p>{props.lang ? "PRESURE" : "दबाव"}</p>

                    <img src={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-low.svg"} width={100} alt="icon" />
                    <p>{props.weatherData.pressure}&nbsp;mb</p>
                </div>

                <div>
                    <p>{props.lang ? "SUNSET" : "सूर्यास्त"}</p>

                    <img src={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg"} width={100} alt="icon" />
                    <p>{getTime(props.sys.sunset)}</p>
                </div>
            </div>
            <p className="copyright">Current Weather Data</p>
            <p onClick={sideRight} className="rigtharrow">
                <KeyboardArrowRightIcon />
            </p>
            <p onClick={sideLeft} className="leftarrow">
                <KeyboardArrowLeftIcon />
            </p>
        </div>
    );
}

export default WeatherCard;
