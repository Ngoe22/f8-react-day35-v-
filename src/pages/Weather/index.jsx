import React from "react";
import styles from "./Weather.module.scss";
import Navigation from "../../layouts/Navigation";

function Weather() {
    console.log(styles);

    const [data, setData] = React.useState({
        hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
        hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
        danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
    });
    const [city, setCity] = React.useState(null);
    const [showList, setShowList] = React.useState(false);

    function addIcon(string) {
        string = string.toLowerCase();

        const list = [
            [`nắng`, `☀️`],
            [`mây`, `🌤️`],
            [`mưa `, `🌧️`],
        ];

        for (let weather of list) {
            if (string.includes(weather[0])) return weather[1];
        }
        return ``;
    }

    return (
        <>
            <Navigation></Navigation>
            <div className={styles.weatherWrapper}>
                <div className={styles.weather}>
                    <div
                        className={styles.weatherSection}
                        onClick={(e) => {
                            const classList = e.target.classList;
                            if (classList.contains(styles.weatherCity))
                                setShowList(true);
                        }}
                    >
                        <div
                            className={`${styles.weatherSelectListBg} ${showList ? styles.show : ``}`}
                        >
                            <ul
                                className={styles.weatherSelectList}
                                onClick={(e) => {
                                    const node = e.target;
                                    setShowList(false);
                                    setCity(
                                        node.getAttribute(`data-weather-city`),
                                    );
                                }}
                            >
                                {Object.entries(data).map((value) => (
                                    <li
                                        className={styles.weatherSelectItem}
                                        data-weather-city={value[0]}
                                        key={value[0]}
                                    >
                                        {value[1].city}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.weatherBody}>
                            <div className={styles.weatherBodyLeft}>
                                <div className={styles.weatherTemperature}>
                                    {`${city ? data[city].temp : `0`}`}
                                    <span>°C</span>
                                </div>
                            </div>
                            <div className={styles.weatherBodyRight}>
                                <div className={styles.weatherCity}>
                                    {city ? data[city].city : `Thành phố`}
                                </div>
                                <div className={styles.wetherWeather}>
                                    {city
                                        ? `${addIcon(data[city].weather)} ${data[city].weather}`
                                        : `--`}
                                </div>
                                <div className={styles.weatherHumidity}>
                                    {city
                                        ? `Độ ẩm :  ${data[city].humidity}%`
                                        : `--`}
                                </div>
                                <button
                                    className={styles.weatherRefresh}
                                    onClick={() => {
                                        if (!city) return;

                                        setData({
                                            ...data,
                                            [city]: {
                                                ...data[city],
                                                temp:
                                                    data[city].temp +
                                                    [-2, 2][
                                                        Math.floor(
                                                            Math.random() * 2,
                                                        )
                                                    ],
                                                humidity:
                                                    data[city].temp +
                                                    [-3, 3][
                                                        Math.floor(
                                                            Math.random() * 2,
                                                        )
                                                    ],
                                            },
                                        });
                                    }}
                                >
                                    Làm mới
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;
