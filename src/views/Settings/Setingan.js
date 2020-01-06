import React, {Component} from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import 'antd/dist/antd.css';
import Transaction2W from './Transaction2W';
import Reconcile2W from './Reconcile2W';

import History2W from './History2W';
import Fraud2W from './Fraud2W';

class Partner extends Component {

  componentDidMount() {
    console.log("Dipanggil");
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {

          console.log("OK");
            this.setState({ dataSet: data })
        })
        .catch(console.log)
  }
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
      data:[ ],
    };
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
        <div className="Tables"><Transaction2W data={this.data}></Transaction2W></div>
        </TabPane>
        <TabPane tabId="2">
        <div className="Tables"><Reconcile2W data={this.data}></Reconcile2W></div>
        </TabPane>
        <TabPane tabId="3">
        <div className="Tables"><Fraud2W data={this.data}></Fraud2W></div>
        </TabPane>
        <TabPane tabId="4">
        <div className="Tables"><History2W data={this.data}></History2W></div>
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  User
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Roles
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Audit Log
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => { this.toggle(0, '4'); }}
                >
                  Division and Departement
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Partner;