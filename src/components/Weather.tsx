import React from 'react';
import './Weather.css';

interface IProps {
    temperature: number | null;
    name: string | null;
    sunrise: number | null;
    sunset: number | null;
}

const weatherCase: any = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: 'It is rainy...',
        subtitle: 'Look at the outside',
        icon: 'rainy',
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: 'It is rainy...',
        subtitle: 'Look at the outside',
        icon: 'rainy',
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007BEA'],
        title: 'Thunderstorm...',
        subtitle: 'Scary',
        icon: 'rainy',
    },
    Clouds: {
        colors: ['#DDDDDD', '#304352'],
        title: 'Clouds...',
        subtitle: 'Scary',
        icon: 'clouds',
    },
    Snow: {
        colors: ['#7de2fc', '#B9B6E5'],
        title: 'Cold...',
        subtitle: 'Cold',
        icon: 'Cold',
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: 'Drizzle...',
        subtitle: 'Drizzle',
        icon: 'Drizzle',
    },
};

const Weather: React.SFC<IProps> = ({ temperature, name, sunrise, sunset }) => {
    return (
        <div
            style={{
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: '100vh',
                // background: `linear-gradient(${
                //     weatherCase[name as string].colors[0]
                // }, ${weatherCase[name as string].colors[1]})`,
            }}>
            {console.log(weatherCase[name as string])}
            <div className='Weather_Upper'>
                <img src='../asset/rain.svg' alt='rainy' />
                <p className='Weather_Upper_Temp'>{temperature}°C</p>
            </div>
            <div className='Weather_Lower'>
                <p className='Weather_Lower_Title'>hello</p>
                <p className='Weather_Lower_Subtitle'>world</p>
                <p>
                    Sunrise : {sunrise} / Sunset : {sunset}
                </p>
            </div>
        </div>
    );
};

export default Weather;
