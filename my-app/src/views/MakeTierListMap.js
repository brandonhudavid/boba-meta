import React from "react";
import Navbar from "./Navbar.js";
import ReactMapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import MAPBOX_TOKEN from '../KEYS';
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./geocoder-input.css";
import Footer from './Footer.js';

class MakeTierListMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currLatitude: 33.8624465,
            currLongitude: -118.0875633,
            viewport: {
                width: "100%",
                height: "80vh",
                latitude: 33.8624465,
                longitude: -118.0875633,
                zoom: 15
            }
        }
    }

    mapRef = React.createRef()

    handleViewportChange = (viewport) => {
        this.setState({
          viewport: { ...this.state.viewport, ...viewport }
        })
      }

    handleGeocoderViewportChange = (viewport) => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 }

        this.setState({
            currLatitude: viewport.latitude,
            currLongitude: viewport.longitude
        })
     
        return this.handleViewportChange({
          ...viewport,
          ...geocoderDefaultOverrides
        })
      }

    render() {
        return (
            <>
                <Navbar />
                <main ref="main">
                <div className="position-relative">
                    <section className="section section-lg section-hero section-shaped">
                        <div className="shape shape-style-1 shape-default" style={{height: 80}} />
                        <div style={{
                            position: "absolute", 
                            right: 0, 
                            top: 0}}>
                        </div>

                        <ReactMapGL
                            mapboxApiAccessToken={MAPBOX_TOKEN}
                            ref={this.mapRef}
                            {...this.state.viewport}
                            onViewportChange={this.handleViewportChange}
                        >
                            <Geocoder
                                mapRef={this.mapRef}
                                onViewportChange={this.handleGeocoderViewportChange}
                                mapboxApiAccessToken={MAPBOX_TOKEN}
                            />
                        <Marker latitude={this.state.currLatitude} 
                        longitude={this.state.currLongitude} 
                        offsetLeft={-20} 
                        offsetTop={-10}>
                            <div><img 
                            src={require("assets/img/icons/common/location-pin.svg")}
                            style={{
                                height: "100px",
                                width: "100px"
                            }}></img></div>
                        </Marker>
                        </ReactMapGL>
                        
                    </section>
                </div>
                <Footer 
                ></Footer>
                </main>
            </>
        )
    }

}

export default MakeTierListMap