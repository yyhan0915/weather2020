import React from 'react';
import moment from 'moment';

import './Weather.css';

import rain from '../asset/rain.svg';
import cloud from '../asset/cloud.svg';
import thunder from '../asset/thunder.svg';
import snow from '../asset/snow.svg';
import Drizzle from '../asset/Drizzle.svg';
import sun from '../asset/sun.svg';

interface IProps {
	temperature: number;
	weatherName: string;
	sunrise: number;
	sunset: number;
}

const weatherCase: any = {
	Rain: {
		colors: ['#00C6FB', '#005BEA'],
		title: 'It is rainy...',
		subtitle: 'Look at the outside',
		icon: 'rain',
	},
	Clear: {
		colors: ['#FEF253', '#FF7300'],
		title: 'Wether is clean!...',
		subtitle: 'Have a good day!',
		icon: 'sun',
	},
	Thunderstorm: {
		colors: ['#00ECBC', '#007BEA'],
		title: 'Thunderstorm...',
		subtitle: 'Scary',
		icon: 'thunder',
	},
	Clouds: {
		colors: ['#DDDDDD', '#304352'],
		title: 'Clouds...',
		subtitle: 'Scary day.... Becreaful',
		icon: 'cloud',
	},
	Snow: {
		colors: ['#7de2fc', '#B9B6E5'],
		title: 'Cold...',
		subtitle: 'outside is too cold...snowy',
		icon: 'snow',
	},
	Drizzle: {
		colors: ['#89F7FE', '#66A6FF'],
		title: 'Drizzle...',
		subtitle: 'Drizzle',
		icon: 'Drizzle',
	},
};

const Weather: React.FC<IProps> = ({
	temperature,
	weatherName,
	sunrise,
	sunset,
}) => {
	return (
		<div
			style={{
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				width: '100vw',
				height: '100vh',
				background: `linear-gradient(${weatherCase[weatherName].colors[0]}, ${weatherCase[weatherName].colors[1]})`,
			}}>
			<div className='Weather_Upper'>
				{(() => {
					switch (weatherCase[weatherName].icon) {
						case 'rain':
							return (
								<img
									src={rain}
									width='150px'
									height='150px'
									alt={weatherCase[weatherName].icon}
								/>
							);
						case 'clear':
							return (
								<img
									src={sun}
									width='150px'
									height='150px'
									alt={weatherCase[weatherName].icon}
								/>
							);
						case 'thunderstorm':
							return (
								<img
									src={thunder}
									width='150px'
									height='150px'
									alt={weatherCase[weatherName].icon}
								/>
							);
						case 'cloud':
							return (
								<img
									src={cloud}
									width='150px'
									height='150px'
									alt={weatherCase[weatherName].icon}
								/>
							);
						case 'snow':
							return (
								<img
									src={snow}
									width='150px'
									height='150px'
									alt={weatherCase[weatherName].icon}
								/>
							);
						case 'drizzle':
							return (
								<img src={cloud} width='150px' height='150px' alt={Drizzle} />
							);
						default:
							return null;
					}
				})()}

				<p className='Weather_Upper_Temp'>{temperature}°C</p>
			</div>

			<div className='Weather_Lower'>
				<p>
					Sunrise : {moment(sunrise * 1000).format('h:mm a')} / Sunset :{' '}
					{moment(sunset * 1000).format('h:mm a')}
				</p>
				<p className='Weather_Lower_Title'>{weatherCase[weatherName].title}</p>
				<p className='Weather_Lower_Subtitle'>
					{weatherCase[weatherName].subtitle}
				</p>
			</div>
		</div>
	);
};

export default Weather;
