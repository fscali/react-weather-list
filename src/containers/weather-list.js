import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import  Chart from '../components/chart'
//import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {



    renderWeather(cityData) {

        const name = cityData.city.name;
        const temps = cityData.list.map(item => ((item.main.temp - 32) * (5 / 9)));
        const humidities = cityData.list.map(item => item.main.humidity);
        const pressures = cityData.list.map(item => item.main.pressure);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td> <Chart height={120} width={180} data={temps} color={"orange"} />

                </td>
                <td>
                    <Chart height={120} width={180} data={humidities} color={"blue"} />

                </td>
                <td>
                    <Chart height={120} width={180} data={pressures} color={"red"} />

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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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

