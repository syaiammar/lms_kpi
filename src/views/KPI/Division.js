import React, { Component } from 'react';
import {Col, Row, Button } from 'reactstrap';
import {
  Link,
} from "react-router-dom";


class Division extends Component {

  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block" outline="#2f353a">
                <Link to="/KPI/Divisi/Finance">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglecorporatedata}>
                    <h5>Finance</h5>
                    </Button>
                </Link>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                <Link to="/KPI/Divisi/HCGS">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.toggleitfinance}>
                    <h5>HCGS</h5>
                    </Button>
                </Link>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                <Link to="/KPI/Divisi/CSBD">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.toggletax}>
                    <h5>CSBD</h5>
                    </Button>
                </Link>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                <Link to="/KPI/Divisi/Maintenance-&amp;-Planning">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglemaintenance}>
                    <h5>Maintenance &amp; Planning</h5>
                    </Button>
                </Link>
                </Col>
          </Col>
          </Row>
          <br></br>
          <Row>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                <Link to="/KPI/Divisi/Operation">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglehcd}>
                    <h5>Operation</h5>
                    </Button>
                </Link>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                <Link to="/KPI/Divisi/Secretary">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglecsc}>
                    <h5>Secretary</h5>
                    </Button>
                </Link>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                <Link to="/KPI/Divisi/Quality-Control-/-Operation">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglequality}>
                    <h5>Quality Control/Operation</h5>
                    </Button>
                </Link>
                </Col>
          </Col>
          <Col>
            <Col md="2,5" className="d-none d-sm-inline-block">
               <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.toggletoll}>
                  <h5></h5>
                </Button>
              </Col>
          </Col>
          </Row>
      </div>
    );
  }

}

export default Division;