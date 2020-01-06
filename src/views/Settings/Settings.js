import React, { Component } from 'react';
import {Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {
  BrowserRouter as Router,
  Link,
  
} from "react-router-dom";



class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      corporatedata: false,
      itfinance: false,
      tax: false,
      maintenance: false,
      hcd: false,
      csc: false,
      quality: false,
      finance: false,
      publicrelation: false,
      toll: false,
    };

    this.togglecorporatedata = this.togglecorporatedata.bind(this);
    this.toggleitfinance = this.toggleitfinance.bind(this);
    this.toggletax = this.toggletax.bind(this);
    this.togglemaintenance = this.togglemaintenance.bind(this);
    this.togglehcd = this.togglehcd.bind(this);
    this.togglecsc = this.togglecsc.bind(this);
    this.togglequality = this.togglequality.bind(this);
    this.togglefinance = this.togglefinance.bind(this);
    this.togglepublicrelation = this.togglepublicrelation.bind(this);
    this.toggletoll = this.toggletoll.bind(this);
  }

  togglecorporatedata(){
    this.setState({
      corporatedata: !this.state.corporatedata,
    });
  }

  toggleitfinance(){
    this.setState({
      itfinance: !this.state.itfinance,
    });
  }

  toggletax(){
    this.setState({
      tax: !this.state.tax,
    })
  }

  togglemaintenance(){
    this.setState({
      maintenance: !this.state.maintenance,
    });
  }

  togglehcd(){
    this.setState({
      hcd: !this.state.hcd,
    });
  }

  togglecsc(){
    this.setState({
      csc: !this.state.csc,
    });
  }

  togglequality(){
    this.setState({
      quality: !this.state.quality,
    });
  }

  togglefinance(){
    this.setState({
      finance: !this.state.finance,
    });
  }

  togglepublicrelation(){
    this.setState({
      publicrelation: !this.state.publicrelation,
    });
  }

  toggletoll(){
    this.setState({
      toll: !this.state.toll,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block" outline="#2f353a">
                  <Link to="/settings/Table">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglecorporatedata}>
                    <h5>Corporate Data</h5>
                    </Button>
                  </Link>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.toggleitfinance}>
                    <h5>IT/Finance</h5>
                    </Button>
                    <Modal isOpen={this.state.itfinance} toggle={this.toggleitfinance} className={'modal-primary' + this.props.className}>
                      <ModalHeader toggle={this.toggleitfinance}>IT/Finance</ModalHeader>
                      <ModalBody>
                        Lorem Ipsum
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggleitfinance}>Do Something</Button>
                        <Button color="secondary" onClick={this.toggleitfinance}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.toggletax}>
                    <h5>Tax &amp; Treasury/Finance</h5>
                    </Button>
                    <Modal isOpen={this.state.tax} toggle={this.toggletax} className={'modal-primary' + this.props.className}>
                      <ModalHeader toggle={this.toggletax}>Tax &amp; Treasury/Finance</ModalHeader>
                      <ModalBody>
                        Lorem Ipsum
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggletax}>Do Something</Button>
                        <Button color="secondary" onClick={this.toggletax}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglemaintenance}>
                    <h5>Maintenance &amp; Planning</h5>
                    </Button>
                    <Modal isOpen={this.state.maintenance} toggle={this.togglemaintenance} className={'modal-primary' + this.props.className}>
                      <ModalHeader toggle={this.togglemaintenance}>Maintenance &amp; Planning</ModalHeader>
                      <ModalBody>
                        Lorem Ipsum
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.togglemaintenance}>Do Something</Button>
                        <Button color="secondary" onClick={this.togglemaintenance}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglehcd}>
                    <h5>HCD</h5>
                    </Button>
                    <Modal isOpen={this.state.hcd} toggle={this.togglehcd} className={'modal-primary' + this.props.className}>
                      <ModalHeader toggle={this.togglehcd}>HCD</ModalHeader>
                      <ModalBody>
                        Lorem Ipsum
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.togglehcd}>Do Something</Button>
                        <Button color="secondary" onClick={this.togglehcd}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </Col>
          </Col>
          </Row>
          <br></br>
          <Row>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglecsc}>
                    <h5>CSC</h5>
                    </Button>
                    <Modal isOpen={this.state.csc} toggle={this.togglecsc} className={'modal-primary' + this.props.className}>
                      <ModalHeader toggle={this.togglecsc}>CSC</ModalHeader>
                      <ModalBody>
                        Lorem Ipsum
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.togglecsc}>Do Something</Button>
                        <Button color="secondary" onClick={this.togglecsc}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglequality}>
                    <h5>Quality Control/Operation</h5>
                    </Button>
                    <Modal isOpen={this.state.quality} toggle={this.togglequality} className={'modal-primary' + this.props.className}>
                      <ModalHeader toggle={this.togglequality}>Quality Control/Operation</ModalHeader>
                      <ModalBody>
                        Lorem Ipsum
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.togglequality}>Do Something</Button>
                        <Button color="secondary" onClick={this.togglequality}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglefinance}>
                    <h5>Finance</h5>
                    </Button>
                    <Modal isOpen={this.state.finance} toggle={this.togglefinance} className={'modal-primary' + this.props.className}>
                      <ModalHeader toggle={this.togglefinance}>Finance</ModalHeader>
                      <ModalBody>
                        Lorem Ipsum
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.togglefinance}>Do Something</Button>
                        <Button color="secondary" onClick={this.togglefinance}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.togglepublicrelation}>
                    <h5>Public Relation</h5>
                    </Button>
                    <Modal isOpen={this.state.publicrelation} toggle={this.togglepublicrelation} className={'modal-primary' + this.props.className}>
                      <ModalHeader toggle={this.togglepublicrelation}>Public Relation</ModalHeader>
                      <ModalBody>
                        Lorem Ipsum
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.togglepublicrelation}>Do Something</Button>
                        <Button color="secondary" onClick={this.togglepublicrelation}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </Col>
          </Col>
          <Col>
                <Col md="2,5" className="d-none d-sm-inline-block">
                    <Button style={{backgroundColor:"#ffffff", height: "90px", width: "170px"}} border="#000000" onClick={this.toggletoll}>
                    <h5>Toll Transaction Management</h5>
                    </Button>
                    <Modal isOpen={this.state.toll} toggle={this.toggletoll} className={'modal-primary' + this.props.className}>
                      <ModalHeader toggle={this.toggletoll}>Toll Transaction Management</ModalHeader>
                      <ModalBody>
                        Lorem Ipsum
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggletoll}>Do Something</Button>
                        <Button color="secondary" onClick={this.toggletoll}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </Col>
          </Col>
          </Row>
      </div>
    );
  }

}

export default Settings;