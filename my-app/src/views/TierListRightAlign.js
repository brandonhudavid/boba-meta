import React, {PureComponent} from 'react';
import { Button } from "reactstrap";
import styles from "./list-right-align.css";
import Navs from "./TabbedNav.js";

export class TierListRightAlign extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <div className="list-container" >
          <Navs/>
          <div>
            <span className="tier-url">www.boba-meta.com/tier-list/830jku</span>
        </div>
      </div>
    );
  }
}

export default TierListRightAlign;