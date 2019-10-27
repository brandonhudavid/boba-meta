import React from "react"
import Navbar from "./Navbar.js";
import {
    Card,
    CardBody
  } from "reactstrap";

class ShopsList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Navbar />
                <main ref="main">
                <div className="position-relative">
                    <section className="section section-lg section-hero section-shaped">
                        <div className="shape shape-style-1 shape-default" style={{height: 80}} />  
                        <Card className="shadow" style={{width: "32%", margin: "0 auto"}}>
                            <CardBody style={{textAlign: "center"}}>
                                <h6 className="mb-0">
                                    2161 Allston Way, Berkeley, CA 94704
                                </h6>
                            </CardBody>
                        </Card>
                        <div style={{width: "50%", margin: "0 auto", marginTop: "2%", textAlign: "center"}}>
                            <h4 className="display-4 mb-0">
                                We found 12 boba shops in your area.<br/>
                                Select the ones you’d like to rank.
                            </h4>
                        </div>
                    </section>
                </div>
                </main>
            </>
        )
    }
}

export default ShopsList