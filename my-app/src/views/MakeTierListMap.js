import React from "react"
import Navbar from "./Navbar.js";
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'
import MAPBOX_TOKEN from '../KEYS'
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

class MakeTierListMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            viewport: {
                width: "100%",
                height: 600,
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
                        <div style={{position: "absolute", right: 0, top: 0}}>
                        </div>
                        <ReactMapGL
                            mapboxApiAccessToken={MAPBOX_TOKEN}
                            ref={this.mapRef}
                            {...this.state.viewport}
                            onViewportChange={this.handleViewportChange}
                        >
                            <Geocoder style={{
                                    position: "absolute",
                                    top: 800,
                                }}
                                mapRef={this.mapRef}
                                onViewportChange={this.handleGeocoderViewportChange}
                                mapboxApiAccessToken={MAPBOX_TOKEN}
                                position="right"
                            />
                        </ReactMapGL>
                        
                    </section>
                </div>
                </main>
            </>
        )
    }

}

export default MakeTierListMap