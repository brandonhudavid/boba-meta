import React from "react"
import Navbar from "./Navbar.js";
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'
import KEYS, { MAPBOX_TOKEN, YELP_KEY } from '../KEYS'
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import axios from 'axios';
import { BrowserRouter as Route, Link } from "react-router-dom";

class MakeTierListMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currLatitude: 37.8719034,
            currLongitude: -122.2607286,
            viewport: {
                width: "100%",
                height: "100vh",
                latitude: 37.8719034,
                longitude: -122.2607286,
                zoom: 15
            },
            shopsData: {}
        }
    }

    async getBobaShops() {
        console.log("getting boba shops")
        var radius = 1600
        var limit = 50
        var latitude = this.state.currLatitude
        var longitude = this.state.currLongitude

        const config = {
            headers: {'Authorization': `Bearer ${YELP_KEY}`},
            params: {
                categories: "bubbletea",
                latitude: latitude,
                longitude: longitude,
                radius: radius,
                limit: limit
            }
          }

          const cors_api_host = 'https://cors-anywhere.herokuapp.com/'

          axios.get(`${cors_api_host}https://api.yelp.com/v3/businesses/search`, config)
            .then(response => {
                this.props.updateShopsData(response.data)
            });
    }

    mapRef = React.createRef()

    handleViewportChange = (viewport) => {
        this.setState({
          viewport: { ...this.state.viewport, ...viewport }
        })
      }

    handleGeocoderViewportChange = (viewport) => {

        const geocoderDefaultOverrides = { transitionDuration: 1000 }     
        this.handleViewportChange({
          ...viewport,
          ...geocoderDefaultOverrides
        })
        this.setState({
            currLatitude: viewport.latitude,
            currLongitude: viewport.longitude,
        })
        this.getBobaShops()
      }

    render() {
        return (
            <>
                <Navbar />
                <main ref="main">
                <div className="position-relative">
                    <section className="section section-lg section-hero section-shaped">
                        <div className="shape shape-style-1 shape-default" style={{height: 80}} />
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
                <Link to={"/shops"}>
                    <button style={{
                        position: "absolute",
                        bottom: "4%",
                        right: "4%"
                    }}>Next</button>
                </Link>
                </main>
            </>
        )
    }

}

export default MakeTierListMap