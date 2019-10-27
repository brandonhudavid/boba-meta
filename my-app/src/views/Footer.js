import React, {PureComponent} from 'react';
import styles from "./footer-style.css";
import { Button } from "reactstrap";
import { BrowserRouter as Route, Link } from "react-router-dom";


export default class Footer extends React.Component {
  render() {
    return (
      <div className="progress-footer" >
        <h3 className = "progress-copy">
			<span className="btn-inner--icon">
            <i className="ni ni-map-big" />
          </span>
        <span className="footer-heading">Assign a location to your tier list</span>
          </h3>
          <Link to={"/shops"}>
          <Button className="next-button" size="lg" color="primary" type="button">
            <span className="btn-inner--text">PROCEED </span>
            <span className="btn-inner--icon">
              <i className="ni ni-check-bold" />
            </span>
            
          </Button>
        </Link>
      </div>
    );
  }
}