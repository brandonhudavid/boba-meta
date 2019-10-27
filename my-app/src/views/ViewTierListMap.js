import React from "react";
import ReactDOM from 'react-dom'
import styles from "./geocoder-input.css";
import Navbar from "./Navbar.js";
import ReactMapGL, { Marker } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import Footer from './Footer.js';
import Geocoder from 'react-map-gl-geocoder'
import KEYS, { MAPBOX_TOKEN, YELP_KEY } from '../KEYS'
import axios from 'axios';
import { thisExpression } from "@babel/types";
import firebase from "firebase"

class ViewTierListMap extends React.Component {

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
        this.shopIds = this.props.shopIds
    }

    async getBobaShops() {
        var radius = 1600
        var limit = 10
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
                console.log("response", response)
                var shops = response.data.businesses
                console.log("b4 if")
                console.log("shops", shops)
                if (!shops) {
                    return
                }
                console.log("past if")
                for (var i=0; i < shops.length; i++) {
                    var shopId = shops[i].id 
                    var docRef = this.shopIds.doc(shopId);
                    var latitude = shops[i].coordinates.latitude
                    var longitude = shops[i].coordinates.longitude

                    docRef.get().then(function(doc) {
                        if (doc.exists) {
                            ReactDOM.render(<Marker latitude={latitude} 
                                longitude={longitude} 
                                offsetLeft={-20} 
                                offsetTop={-10}>
                                    <div><img 
                                    src={require("assets/img/icons/common/location-pin.svg")}
                                    style={{
                                        height: "100px",
                                        width: "100px",
                                    }}></img></div>
                                </Marker>)
                                console.log("marked")
                        } else {
                            console.log("No such document!");
                        }
                    }).catch(function(error) {
                        console.log("Error getting document:", error);
                    });
                }
            });
    }

    // async visualize(response) {
    //     var shops = response.businesses
    //     console.log("b4 if")
    //     if (!shops) {
    //         return
    //     }
    //     console.log("past if")
    //     for (var i=0; i < shops.length; i++) {
    //         var shopId = shops[i].id 
    //         var docRef = this.shopIds.doc(shopId);

    //         docRef.get().then(function(doc) {
    //             if (doc.exists) {
    //                 ReactDOM.render(<Marker latitude={shops[i].coordinates.latitude} 
    //                     longitude={shops[i].coordinates.latitude} 
    //                     offsetLeft={-20} 
    //                     offsetTop={-10}>
    //                         <div><img 
    //                         src={require("assets/img/icons/common/location-pin.svg")}
    //                         style={{
    //                             height: "100px",
    //                             width: "100px",
    //                         }}></img></div>
    //                     </Marker>)
    //                     console.log("marked")
    //             } else {
    //                 console.log("No such document!");
    //             }
    //         }).catch(function(error) {
    //             console.log("Error getting document:", error);
    //         });
    //     }
    // }

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
                <Footer link="/shops" complete={() => console.log("")} progress="33" copy="View the boba meta of any city"/>
                </main>
            </>
        )
    }

}

export default ViewTierListMap