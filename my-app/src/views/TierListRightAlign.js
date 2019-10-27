import React, {PureComponent} from 'react';
import { Button } from "reactstrap";
import styles from "./list-right-align.css";

export default class TierListRightAlign extends React.Component {
  render() {
    return (
        <div className="progress-footer" >
        
          <Button className="next-button" size="lg" color="primary" type="button">
            <span className="btn-inner--text">PROCEED </span>
            <span className="btn-inner--icon">
              <i className="ni ni-check-bold" />
            </span>
            
          </Button>
      </div>
    );
  }
}
