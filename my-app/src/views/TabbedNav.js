import React from "react";
import classnames from "classnames";
import styles from "./list-right-align.css";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  state = {
    tabs: 1
  };

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Your Tier List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-bell-55 mr-2" />
                Local Tier List
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                    <div className="tier-cell">
                        <div className="tier-label tier-s">
                            S
                        </div><div className="tier-filler"/><div className="tier-filler"/><div className="tier-filler"/><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-a">
                            A
                        </div><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-b">
                            B
                        </div><div className="tier-filler"/><div className="tier-filler"/><div className="tier-filler"/><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-c">
                            C
                        </div><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-d">
                            D
                        </div><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-f">
                            F
                        </div><div className="tier-filler"/>
                    </div>
              </TabPane>
              <TabPane tabId="tabs2">
                <div className="tier-cell">
                        <div className="tier-label tier-s">
                            S
                        </div><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-a">
                            A
                        </div><div className="tier-filler"/><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-b">
                            B
                        </div><div className="tier-filler"/><div className="tier-filler"/><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-c">
                            C
                        </div><div className="tier-filler"/><div className="tier-filler"/><div className="tier-filler"/><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-d">
                            D
                        </div><div className="tier-filler"/><div className="tier-filler"/>
                    </div>
                    <div className="tier-cell">
                        <div className="tier-label tier-f">
                            F
                        </div><div className="tier-filler"/><div className="tier-filler"/>
                    </div>
              </TabPane>
              
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Navs;