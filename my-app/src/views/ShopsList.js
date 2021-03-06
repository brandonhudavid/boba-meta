import React from "react"
import Navbar from "./Navbar.js";
import {
    Card,
    CardBody
  } from "reactstrap";
  import './ShopsList.css'
import Footer from './Footer.js';


class ShopsList extends React.Component {
    constructor(props) {
        super(props)
        this.businesses = this.props.shopsData.businesses
        var selectedArr = []
        var numBusinesses = this.businesses.length
        while (numBusinesses--) {
            selectedArr.push(false)
        }
        this.state = {
            shopsData: this.props.shopsData,
            selectedShops: [],
            selectedArr: selectedArr
        }
    }

    selectShop(business, i) {
        this.setState((prevState) => ({
            selectedShops: [...prevState.selectedShops, business]
        }))
        var newSelectedArr = this.state.selectedArr
        newSelectedArr[i] = true
        this.setState({
            selectedArr: newSelectedArr
        })
        this.props.updateShops(business)
    }

    renderCards() {
        return (
            <div style={{display: "block", width: "80%", margin: "0 auto", textAlign: "center"}}>
                {this.businesses.map((business, i) => (
                    <Card id={business.id} className={this.state.selectedArr[i] ? "shopCardSelected" : "shopCard"}
                        onClick={() => this.selectShop(business, i)}
                        style={{width: "240px", height: "300px", margin: "20px 40px 20px 40px", display: "inline-block", overflow: "hidden"}}>
                        <img
                            src={business.image_url} style={{width: "240px", height: "180px", objectFit: "cover"}} />
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
                <div className="position-relative" style={{paddingBottom: "160px"}}>
                    <section className="section section-lg section-hero section-shaped">
                        <div className="shape shape-style-1 shape-default" style={{height: 80}} />  
                        <Card className="shadow" style={{width: "32%", margin: "0 auto", marginTop: "16px"}}>
                            <CardBody style={{textAlign: "center"}}>
                                <h6 className="mb-0">
                                    2161 Allston Way, Berkeley, CA 94704
                                </h6>
                            </CardBody>
                        </Card>
                        <div style={{textAlign: "center"}}>
                            <h3 className="display-4 mb-0" style={{margin: 50}}>
                                We found {this.businesses.length} boba shops in your area.<br/>
                                Select the ones you’d like to rank.
                            </h3>
                        </div>
                        {this.renderCards()}
                    </section>
                </div>


                <Footer link="/make-tier-list" complete={() => console.log("")} progress = '67' copy="Select nearby shops to rank on a tier list."/>
                </main>
            </>
        )
    }
}

export default ShopsList