import React from "react";
// reactstrap components
import { Progress } from "reactstrap";

export class ProgressBar extends React.Component {
    constructor(props){
        super(props)
    }
    
  render() {
    return (
      <>
        <div>
          <Progress max="100" value={this.props.progress} />
        </div>
      </>
    );
  }
}

export default ProgressBar;