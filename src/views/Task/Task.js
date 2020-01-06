import React, {Component} from 'react';
import Task2W from './Task2W';
import Task4W from './Task4W';
import CariService from './CariService';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';

class Task extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  task2w() {
    return (
        <div className="Tables"><Task2W data={this.dataSet2}></Task2W></div>
    );
  }

  task4w() {
    return (
        <div className="Tables"><Task4W data={this.dataSet2}></Task4W></div>
    );
  }

  taskcp() {
    return (
        <div className="Tables"><CariService data={this.dataSet2}></CariService></div>
    );
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
          {this.task2w()}
        </TabPane>
        <TabPane tabId="2">
        {this.task4w()}
        </TabPane>
        <TabPane tabId="3">
        {this.taskcp()}
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
                  2W
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  4W
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  CariServis
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

export default Task;
