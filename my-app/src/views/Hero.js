/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from "reactstrap";
import styles from './hero-style.css';
const Footer = (props) => {
    return (
        <div style={{width: "100%"}}></div>
    );
};
const Example = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardBody>
          <div style={{height: "50px", width: "50px"}}>
            <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
      </div>
          <CardTitle>STEP 1</CardTitle>
          <CardSubtitle>Input an address</CardSubtitle>
          <CardText>We use an address to create location based  tier lists that we can then combine to find regional sources of truth.</CardText>
          
        </CardBody>
      </Card>
      <Card>
        <CardBody>
      <div style={{height: "50px", width: "50px"}}>
            <i class="fa fa-magic fa-2x" aria-hidden="true"></i>

      </div>
          <CardTitle>STEP 2</CardTitle>
          <CardSubtitle>Choose nearby stores to rank</CardSubtitle>
          <CardText>We then search for nearby boba shops. You choose which ones you've been to and then rank them on a tier list!</CardText>
          
        </CardBody>
      </Card>
      <Card>
        <CardBody>
        <div style={{height: "50px", width: "50px"}}>
            <i class="fa fa-balance-scale fa-2x" aria-hidden="true"></i>
      </div>
      
          <CardTitle>STEP 3</CardTitle>
          <CardSubtitle>Publish your own tier list</CardSubtitle>
          <CardText>You'll then be able to see your tier list in both traditional and map forms (and can share with friends)! </CardText>
          
        </CardBody>
      </Card>
    </CardDeck>
  );
};

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              {/* <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" /> */}
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <h1>Boba Meta</h1>
                    <p className="lead text-white">
                      Your single source of truth for all things boba.
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        {/* <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span> */}
                        <span className="btn-inner--text"><span className="text-warning mr-1">VIEW</span>
                            THE BOBA META
                        </span>
                      </Button>{" "}
                      <Link to={"/make"}>
                        <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="github"
                            href="https://github.com/creativetimofficial/argon-design-system-react"
                            size="lg"
                            target="_blank"
                        >
                            {/* <span className="btn-inner--icon mr-1">
                            <i className="fa fa-github" />
                            </span> */}
                            <span className="btn-inner--text">
                            <span className="text-warning mr-1">MAKE</span>
                            A TIER LIST
                            </span>
                        </Button>
                      </Link>
                    </div>
                    {/* <div className="mt-5">

                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly coded by
                      </small>
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={require("assets/img/brand/creativetim-white-slim.png")}
                      />
                    </div> */}
                  </Col>
                </Row>
              </div>
            </Container>


            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

        </div>
        <h4 className="problem-statement">Boba tier lists are completely different region-to-region based on management, tastes, and trends. 
        <br/>Boba Meta solves this inconsistency by combining individual tier lists into regional lists.</h4>
          <div style={{width: "80%",margin: "auto",padding: "50px"}}>
            
          <Example/>
          </div>

      </>
    );
  }
}

export default Hero;
