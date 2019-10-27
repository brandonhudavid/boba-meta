import React from "react"
import Navbar from "./Navbar.js";
import {
    Card,
    CardBody
  } from "reactstrap";
  import './ShopsList.css'
import Footer from './Footer.js';


class Thanks extends React.Component {
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
                        <Card className="shadow" style={{width: "32%", margin: "0 auto", marginTop: "16px"}}>
                            <CardBody style={{textAlign: "center"}}>
                                <h2 className="display-2" className="mb-0">
                                    Thanks for contributing to the boba meta!
                                </h2>
                            </CardBody>
                        </Card>
                    </section>
                </div>
                </main>
            </>
        )
    }
}

export default Thanks