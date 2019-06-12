import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import backetsData from './data/backets.json';

export class MapContainer extends Component {
  
  state = { 
    selectedBacket: null,
    
   }
   onClick = (event) => {
    this.setState({selectedBacket: this.state.selectedBacket})
  }
  
  render() { 

   
    const style = {
      width: '100%',
      height: '100%'
    }
    
    // const [selectedBacket, setSelectedBacket] = useState(null);
    return ( 
      <Map initialCenter= {{ lat: 0.0074, lng: 37.0722 }} style = {style} google={this.props.google} zoom={14}>
        {backetsData.backets.map((backet) =>  (<Marker key={backet.id} position={{ lat: backet.latitude, lng: backet.longitude }} onClick ={this.onClick(backet)} icon={{ url: '/mawingu.svg',
         scaledSize: new window.google.maps.Size(30,30)
       }}/>))}
        {this.state.selectedBacket && (
          <InfoWindow position={{ lat: this.state.selectedBacket.latitude, lng: this.state.selectedBacket.longitude }} onCloseClick={()=>this.state.selectedBacket(null)}>
          <div>
          <h2>BKT {this.state.selectedBacket.name}</h2>
          </div>
      </InfoWindow>
        )}
        <InfoWindow >
            <div>
              
            </div>
        </InfoWindow>
      </Map>
     );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyC_GzKTJQjATHIPykfarKXsLTE2nG1Wvck'
})(MapContainer);


