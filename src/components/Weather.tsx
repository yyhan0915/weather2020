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
		subtitle: 'Scary',
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

const Weather: React.SFC<IProps> = ({ temperature, name, sunrise, sunset }) => {
	return (
		<div
			style={{
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				width: '100vw',
				height: '100vh',
				background: `linear-gradient(${
					weatherCase[name as string].colors[0]
				}, ${weatherCase[name as string].colors[1]})`,
			}}>
			<div className='Weather_Upper'>
				{(() => {
					switch (weatherCase[name as string].icon) {
						case 'rain':
							return (
								<img
									src={rain}
									width='150px'
									height='150px'
									alt={weatherCase[name as string].icon}
								/>
							);
						case 'clear':
							return (
								<img
									src={sun}
									width='150px'
									height='150px'
									alt={weatherCase[name as string].icon}
								/>
							);
						case 'thunderstorm':
							return (
								<img
									src={thunder}
									width='150px'
									height='150px'
									alt={weatherCase[name as string].icon}
								/>
							);
						case 'cloud':
							return (
								<img
									src={cloud}
									width='150px'
									height='150px'
									alt={weatherCase[name as string].icon}
								/>
							);
						case 'snow':
							return (
								<img
									src={snow}
									width='150px'
									height='150px'
									alt={weatherCase[name as string].icon}
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
					Sunrise : {moment((sunrise as number) * 1000).format('h:mm')} / Sunset
					: {moment((sunset as number) * 1000).format('h:mm')}
				</p>
				<p className='Weather_Lower_Title'>
					{weatherCase[name as string].title}
				</p>
				<p className='Weather_Lower_Subtitle'>
					{weatherCase[name as string].subtitle}
				</p>
			</div>
		</div>
	);
};

export default Weather;
