import React, { Component } from 'react';

//the google maps api js is already included
export default class GoogleMapComponent extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    render() {
        return <div ref="map" />; //after this component has been rendered to the screen I can get a reference to this div by referring to this.refs.map

    }
}