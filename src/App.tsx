import React, { Component } from 'react';
import Weather from './components/Weather';
import './App.css';

const API_KEY = '4eda414633c8685252e44cf162c4e3a8';
interface IState {
    isLoading: boolean;
    error: string | null;
    temperature: number | null;
    name: string | null;
    sunrise: number | null;
    sunset: number | null;
}
class App extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
            error: null,
            temperature: null,
            name: null,
            sunrise: null,
            sunset: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                // console.log(position);
                this.getWeatherData(
                    position.coords.latitude,
                    position.coords.longitude
                );
                this.setState({ isLoading: true });
            },
            error => this.setState({ error: 'Something is wrong!' })
        );
    }

    getWeatherData = (lat: number, lon: number) => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        )
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    temperature: data.main.temp,
                    name: data.weather[0].main,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                });
            });
    };
    render() {
        const {
            isLoading,
            error,
            temperature,
            name,
            sunrise,
            sunset,
        } = this.state;

        return (
            <div className='App_Loading'>
                {isLoading ? (
                    <Weather
                        temperature={Math.floor(
                            (temperature as number) - 273.15
                        )}
                        name={name}
                        sunrise={sunrise}
                        sunset={sunset}
                    />
                ) : (
                    <>
                        <p className='App_LoadingText'>
                            Getting Weather Data...
                        </p>
                        {error ? (
                            <p className='App_ErrorText'>{error}</p>
                        ) : null}
                    </>
                )}
            </div>
        );
    }
}

export default App;
