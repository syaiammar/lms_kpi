import React, { Component } from 'react';
import Widget01 from './Widget01';
import "react-datepicker/dist/react-datepicker.css";
import ReactSpeedometer from "react-d3-speedometer";
import {Card,CardBody,CardHeader,Col, Row, Progress} from 'reactstrap';
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      startdate: date
    });
  };

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Sedang Memuat...</div>

  render() {

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
    );
  }
}

export default Dashboard;