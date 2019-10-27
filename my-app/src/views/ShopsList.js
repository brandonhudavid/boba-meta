import React from "react"
import Navbar from "./Navbar.js";
import {
    Card,
    CardBody
  } from "reactstrap";
  import './ShopsList.css'

class ShopsList extends React.Component {
    constructor(props) {
        super(props)
        this.businesses = this.props.shopsData.businesses
    }

    renderCards() {
        return (
            <div style={{display: "block", width: "80%", margin: "0 auto", textAlign: "center"}}>
                {this.businesses.map((business) => (
                    <Card className="shopCard"
                        style={{width: "240px", height: "300px", margin: "20px 40px 20px 40px", display: "inline-block"}}>
                        <img
                            src={business.image_url} style={{width: "220px", height: "180px", objectFit: "cover"}} />
                        <CardBody style={{textAlign: "left"}}>
                            <b>{business.name}</b>
                            <p>{business.location.display_address.join(" ")}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        )
    }

    render() {
        return (
            <>
                <Navbar />
                <main ref="main">
                <div className="position-relative">
                    <section className="section section-lg section-hero section-shaped">
                        <div className="shape shape-style-1 shape-default" style={{height: 80}} />  
                        <Card className="shadow" style={{width: "32%", margin: "0 auto", marginTop: "16px"}}>
                            <CardBody style={{textAlign: "center"}}>
                                <h6 className="mb-0">
                                    2161 Allston Way, Berkeley, CA 94704
                                </h6>
                            </CardBody>
                        </Card>
                        <div style={{width: "50%", margin: "0 auto", marginTop: "2%", textAlign: "center"}}>
                            <h4 className="display-4 mb-0">
                                We found {this.businesses.length} boba shops in your area.<br/>
                                Select the ones you’d like to rank.
                            </h4>
                        </div>
                        {this.renderCards()}
                    </section>
                </div>
                </main>
            </>
        )
    }
}

export default ShopsList