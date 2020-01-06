import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import {Link} from 'react-router-dom'

class KPI extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };

  const { SubMenu } = Menu;  
  }
  
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  finance() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col className="d-none d-sm-inline-block">
          
          </Col>
        </Row>
      </div>
    )
  }
  
  hcgs() {
    return (
      <div className="animated fadeIn">
      <Row>
        <Col md="12">
        
        </Col>
      </Row>
    </div>
    )
  }

  csbd() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
         
          </Col>
        </Row>
      </div>
    )
  }

  maintenance() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
          
          </Col>
        </Row>
      </div>
    )
  }

  operation() {
    return (
      <div className="animated fadeIn">
        
      </div>
    )
  }

  secretary() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            
          </Col>
        </Row>
      </div>
    )
  }

  quality() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            
          </Col>
        </Row>
      </div>
    )
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
          {this.finance()}
        </TabPane>
        <TabPane tabId="2">
          {this.hcgs()}
        </TabPane>
        <TabPane tabId="3">
          {this.csbd()}
        </TabPane>
        <TabPane tabId="4">
          {this.maintenance()}
        </TabPane>
        <TabPane tabId="5">
          {this.operation()}
        </TabPane>
        <TabPane tabId="6">
          {this.secretary()}
        </TabPane>
        <TabPane tabId="7">
          {this.quality()}
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
                  Finance
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  HCGS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  CSBD
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => { this.toggle(0, '4'); }}
                >
                  Maintenance &amp; Planning
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '5'}
                  onClick={() => { this.toggle(0, '5'); }}
                >
                  Operation
                </NavLink>
              </NavItem>
               <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '6'}
                  onClick={() => { this.toggle(0, '6'); }}
                >
                  Secretary
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '7'}
                  onClick={() => { this.toggle(0, '7'); }}
                >
                  Quality Control/Operation
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

export default KPI;
