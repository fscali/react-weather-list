import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import  Chart from '../components/chart';
import GoogleMap from '../components/google-map';
//import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {



    renderWeather(cityData) {

        const name = cityData.city.name;
        const temps = cityData.list.map(item => item.main.temp);
        const humidities = cityData.list.map(item => item.main.humidity);
        const pressures = cityData.list.map(item => item.main.pressure);
        //const lat = cityData.city.coord.lat;
        //const lon = cityData.city.coord.lon;
        const { lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td> <Chart height={120} width={180} data={temps} color={"orange"} units={"K"} />

                </td>
                <td>
                    <Chart height={120} width={180} data={pressures} color={"black"} units={"hPa"}/>

                </td>
                <td>
                    
                    <Chart height={120} width={180} data={humidities} color={"green"} units={"%"} />

                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }

}

function mapStateToProps({ weather }) { //like saying const weather = state.weather
    return { weather }; //{weather} == {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);

