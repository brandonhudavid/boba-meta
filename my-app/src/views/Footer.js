import React, {PureComponent} from 'react';
import styles from "./footer-style.css";
import { Button } from "reactstrap";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { ProgressBar } from "./ProgressBar.js"

export default class Footer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="progress-footer" >
        <ProgressBar progress={this.props.progress} />
        <h3 className = "progress-copy">
			<span className="btn-inner--icon">
            <i className="ni ni-map-big" />
          </span>
        <span className="footer-heading">{this.props.copy}</span>
          </h3>
          <Link to={this.props.link}>
          <Button className="next-button" size="lg" color="primary" type="button" onClick={() => (this.props.complete())}>
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