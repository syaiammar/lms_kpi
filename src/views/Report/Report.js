import React, { Component } from 'react';
import { CardHeader, Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Progress } from 'reactstrap';
import Income from './Income';
import Status from './Status';
import Week from './Week';
import Agent from './Agent';
import Super from './Super'
import { Doughnut, Bar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import Widget01 from './Widget01';
import ReactSpeedometer from "react-d3-speedometer";
const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class Reports extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  income() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <div className="Tables"><Income data={this.dataSet3}></Income></div>
          </Col>
        </Row>
      </div>
    )
  }
  
  TabTrx() {
    return (
      <div className="animated fadeIn">
      <Row>
        <Col md="12">
          <div className="Tables"><Week data={this.dataSet3}></Week></div>
        </Col>
      </Row>
    </div>
    )
  }

  TabPay() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <div className="Tables"><Agent data={this.dataSet3}></Agent></div>
          </Col>
        </Row>
      </div>
    )
  }

  TabHistory() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <div className="Tables"><Super data={this.dataSet3}></Super></div>
          </Col>
        </Row>
      </div>
    )
  }

  lorem() {
    return (
      <div className="animated fadeIn">
      <Row>
        <Col md="4">
          <Card>
            <CardHeader>
              Maximize Toll Revenue
            </CardHeader>
            <CardBody>
              <Widget01 value='10' mainText="Toll Revenue Base" header="Rp.1,57 T" />
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card>
            <CardHeader>
              Maximize Non Toll Revenue
            </CardHeader>
            <CardBody>
              <Widget01 value='30' mainText="Non Toll Revenue and Other Income" header="Rp.26 B" />
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardHeader>
              Manage Toll Readiness
            </CardHeader>
            <CardBody>
              <Widget01 value='5' mainText="Outstanding ETC Reconciliation Settlement" header="Rp.4,2 B" />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        

        <Col md="4">
          <Card>
            <CardHeader>
              Increase Profitability
            </CardHeader>
            <CardBody>
              <ReactSpeedometer
                maxValue={120}
                value={17.5}
                customSegmentStops={[0, 78.8, 120]}
                needleColor="rgba(942,3,13,0.5)"
                startColor="blue"
                segmentColors={["rgba(75,192,192,1)", "rgba(75,192,192,0.4)"]}
                segments={10}
                endColor="white"
              />
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card>
            <CardHeader>
              Increase Customer Satisfaction
            </CardHeader>
            <CardBody>
            <ReactSpeedometer
                maxValue={10}
                value={2}
                customSegmentStops={[0, 4, 10]}
                needleColor="rgba(942,3,13,0.5)"
                startColor="blue"
                segmentColors={["rgba(75,192,192,1)", "rgba(75,192,192,0.4)"]}
                segments={10}
                endColor="white"
              />
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card>
            <CardHeader>
            Single Line Free Flow Etablishment
            </CardHeader>
            
            <CardBody>
              <ReactSpeedometer
                maxValue={10}
                value={1}
                customSegmentStops={[0, 5, 10]}
                needleColor="rgba(942,3,13,0.5)"
                startColor="blue"
                segmentColors={["rgba(75,192,192,1)", "rgba(75,192,192,0.4)"]}
                segments={10}
                endColor="white"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <Card>
            <CardHeader>
              Escalate Maintenance Management
            </CardHeader>
            <CardBody>
              <ReactSpeedometer
                maxValue={150}
                value={5}
                customSegmentStops={[0, 50, 100, 150]}
                needleColor="rgba(942,3,13,0.5)"
                startColor="blue"
                segmentColors={["rgba(75,192,192,1)", "rgba(75,192,192,0.4)", "rgb(0,0,255,0.1)"]}
                segments={10}
                endColor="white"
              />
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card>
            <CardHeader>
              Develop a Positive Working Environment
            </CardHeader>
            <CardBody>
              <ReactSpeedometer
                maxValue={120}
                value={25}
                customSegmentStops={[0, 78.8, 120]}
                needleColor="rgba(942,3,13,0.5)"
                startColor="blue"
                segmentColors={["rgba(75,192,192,1)", "rgba(75,192,192,0.4)"]}
                segments={10}
                endColor="white"
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
        <Card>
            <CardHeader>
              Tarif Increase Readiness
            </CardHeader>
            <CardBody>
              <p><strong>SPM Fullfillment</strong></p>
              <Progress color="success" value={12.5}>12.5%</Progress>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div >
    )
  }

  income() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <div className="Tables"><Income data={this.dataSet3}></Income></div>
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

  TabContent() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <div className="Tables"><Income data={this.dataSet3}></Income></div>
          </Col>
        </Row>
      </div>
    );
  }

  TabContentPay() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <div className="Tables"><Income data={this.dataSet3}></Income></div>
          </Col>
        </Row>
      </div>
    );
  }

  TabContentHis() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <div className="Tables"><Income data={this.dataSet3}></Income></div>
          </Col>
        </Row>
      </div>
    );
  }

  Status() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <div className="Tables"><Status data={this.dataSet3}></Status></div>
          </Col>
        </Row>
      </div>
    )
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          {this.lorem()}
        </TabPane>
        <TabPane tabId="2">
          {this.income()}
        </TabPane>
        <TabPane tabId="3">
          {this.TabTrx()}
        </TabPane>
        <TabPane tabId="4">
          {this.TabPay()}
        </TabPane>
        <TabPane tabId="5">
          {this.TabHistory()}
        </TabPane>
        <TabPane tabId="6">
          {this.Status()}
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
                  Summary
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Monthly Performance
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Weekly Performance
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => { this.toggle(0, '4'); }}
                >
                  Agent Wise Performance
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '5'}
                  onClick={() => { this.toggle(0, '5'); }}
                >
                  Supervisor wise Performance
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '6'}
                  onClick={() => { this.toggle(0, '6'); }}
                >
                  Status
                </NavLink>
              </NavItem> */}
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

export default Reports;
