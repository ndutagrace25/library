import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import bucketsData from './data/buckets.json';

export class MapContainer extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      selectedBucket: null
         
    }
  }
   onClick (key) {
   
    this.state.selectedBucket[key] = bucketsData;
    
      this.setState({
        selectedBucket:  bucketsData
      })
    
    
    console.log(this.state.selectedBucket);
   }

  onCloseClick = () => {
    console.log("I am clicked");
    this.setState({
      
      selectedBucket: null
    });
  }
  
  render() { 

   
    const style = {
      width: '100%',
      height: '100%'
    }
    
      // console.log(bucketsData.buckets[0]);
    
    // console.log(bucketsData.buckets.name);
    // const [selectedBucket, setSelectedBucket] = useState(null);
    return ( 
      
      <Map initialCenter= {{ lat: 0.0074, lng: 37.0722 }} style = {style} google={this.props.google} zoom={14}>
        {bucketsData.map((bucket) =>  (<Marker key={bucket.id} position={{ lat: bucket.latitude, lng: bucket.longitude }} onClick ={(bucket) =>this.onClick(bucket)} icon={{ url: '/mawingu.svg',
         scaledSize: new window.google.maps.Size(30,30)
       }}/>))}
       
        {this.state.selectedBucket && (
          <InfoWindow position={{ lat: parseFloat(this.state.selectedBucket.latitude), lng: parseFloat(this.state.selectedBucket.longitude) }} onCloseClick={this.onCloseClick} visible={true}>
          <div>
          <h2>BKT {this.state.selectedBucket.name}</h2>
          <button className="btn btn-primary btn-sm">Details</button>
          </div>
      </InfoWindow>
        )}
      
      </Map>
     );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyC_GzKTJQjATHIPykfarKXsLTE2nG1Wvck'
})(MapContainer);


