import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import './Map.scss';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
class MapComponent extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const { lat, lng, zoom } = this.props.data;

    return (
      <Map center={[lat, lng]} zoom={zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={DefaultIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapComponent;
