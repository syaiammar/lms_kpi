import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import { Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "no",
    label: "No",
    options: {
        filter: true,
        sort: true,
    }
},
{
    name: "orderid",
    label: "Order ID",
    options: {
        filter: true,
        sort: true,
    }
},
{
    name: "trxid",
    label: "TRX ID",
    options: {
        filter: true,
        sort: false,
    }
},
{
    name: "va",
    label: "VA Number",
    options: {
        filter: true,
        sort: false,
    }
},
{
    name: "customer",
    label: "Customer",
    options: {
        filter: true,
        sort: false,
    }
},
{
    name: "trxdate",
    label: "TRX Date",
    options: {
        filter: true,
        sort: false,
    }
},
{
    name: "price",
    label: "Price",
    options: {
        filter: true,
        sort: false,
    }
},
{
    name: "action",
    label: "Action",
    options: {
        filter: true,
        sort: false,
    }
},
 ];

 const options = {
  filterType: 'checkbox',
};

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Task2W extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleWarning() {
    this.setState({
      warning: !this.state.warning,
    });
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  componentDidMount() {
    console.log(this.el);
    this.$el = $(this.el)
    this.$el.DataTable(
      {
        data: this.props.data,
        columns: [
          { title: "Email"},
          { title: "Name"},
        ]
      }
    )
  }
  componentWillMount() {

  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
                <Row>
                  <Col md="10">
                    <Button color="warning" onClick={this.toggleWarning}>
                      <i className="fa fa-plus"></i>&nbsp;FILTER
                    </Button>
                  </Col>
                  <Col md="2" className="d-none d-sm-inline-block">
                    <Button color="warning" className="float-right"onClick={this.toggleLarge}>Add Reconcile</Button>{' '}
                  </Col>
                </Row>
              <br></br>
              <Modal isOpen={this.state.warning} toggle={this.toggleWarning}
                className={'modal-warning ' + this.props.className}>
                <ModalHeader toggle={this.toggleWarning}>FILTER</ModalHeader>
                <ModalBody>
                  <div className="animated fadeIn">
                    <Row>
                      <Col xs="12" sm="12">
                          <Row>
                            <Col xs="12">
                              <FormGroup>
                                <Label htmlFor="ccmonth">Type:</Label>
                                <Input type="select" name="ccmonth" id="ccmonth">
                                  <option value="1">All Transactions</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="12">
                              <FormGroup>
                                <Label htmlFor="ccmonth">Status:</Label>
                                <Input type="select" name="ccmonth" id="ccmonth">
                                  <option value="1">All Stasuses</option>
                                </Input>
                              </FormGroup>
                              <FormGroup row className="my-0">
                              <Col xs="6">
                                <FormGroup>
                                  <Label htmlFor="date-input">From:</Label> 
                                  <Input type="date" id="date-input" name="date-input" placeholder="date"/> 
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                <Label htmlFor="date-input">To:</Label>
                                  <Input type="date" id="date-input" name="date-input" placeholder="date"/>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup row className="my-0">
                              <Col xs="6">
                                <FormGroup>
                                  <Label htmlFor="ccmonth">Partner Owner:</Label>
                                    <Input type="select" name="ccmonth" id="ccmonth">
                                    <option value="1">All Partner</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                <Label htmlFor="ccmonth">Partner Name:</Label>
                                    <Input type="select" name="ccmonth" id="ccmonth">
                                    <option value="1">All Partner</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            </Col>
                          </Row>
                      </Col>
                    </Row>
                  </div>
                </ModalBody>
                <ModalFooter className="align-items-center mt-3">
                <Col col="2" className="mb-3 mb-xl-0 text-center">
                  <Button color="secondary" onClick={this.toggleWarning} size="lg">Reset</Button>
                  </Col>
                  <Col col="2" className="mb-3 mb-xl-0 text-center">
                    <Button color="warning" onClick={this.toggleWarning} size="lg">Submit</Button>{' '}
                  </Col>
                </ModalFooter>
              </Modal>
              <Modal isOpen={this.state.large} toggle={this.toggleLarge}
                className={'modal-lg ' + this.props.className}>
                <ModalHeader toggle={this.toggleLarge}>Add Reconcile</ModalHeader>
                <ModalBody>
                  <div className="animated fadeIn">
                    <Row>
                      <Col xs="12" sm="12">
                          <FormGroup row className="my-0">
                                <Col xs="9">
                                  <FormGroup>
                                    <h4 className="text-muted">Reconcile  Periode 07/09/2019 - 14/09/2019</h4>
                                  </FormGroup>
                                </Col>
                                <Col xs="3">
                                  <FormGroup>
                                    <Button color="primary" className="text-right" onClick={this.toggleLarge}>Save and Close</Button>{' '}
                                  </FormGroup>
                                </Col>
                              </FormGroup>
                          <FormGroup row className="my-0">
                              <Col xs="3">
                                <FormGroup>
                                  <Label htmlFor="text-input">Partner Owner:</Label>
                                  <Input type="text" id="text-input" name="text-input" placeholder="Buana" />
                                </FormGroup>
                              </Col>
                              <Col xs="3">
                                <FormGroup>
                                  <Label htmlFor="ccmonth">Partner Name:</Label>
                                  <Input type="select" name="ccmonth" id="ccmonth">
                                    <option value="1">Gading</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col xs="3">
                                <FormGroup>
                                <Label htmlFor="date-input">From:</Label>
                                  <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                </FormGroup>
                              </Col>
                              <Col xs="3">
                                <FormGroup>
                                <Label htmlFor="date-input">To:</Label>
                                  <Input type="date" id="date-input" name="date-input" placeholder="date" />
                                </FormGroup>
                              </Col>
                            </FormGroup>
                          <Row>
                            <Col xs="12">
                              <FormGroup row className="my-0">
                              <Col xs="3">
                                <FormGroup>
                                <Label htmlFor="textarea-input">Partner Address:</Label>
                                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                                         placeholder="Jalan Kelapa Gading" />
                                </FormGroup>
                              </Col>
                              <Col xs="3">
                                <FormGroup>
                                <Label htmlFor="textarea-input">Partner Location:</Label>
                                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                                         placeholder="Jalan Kelapa Gading" />
                                </FormGroup>
                              </Col>
                              <Col xs="2"></Col>
                              <Col xs="4">
                                  <FormGroup >
                                    <h5 className="text-muted">Amount</h5> 
                                    <h1 className="text-muted">Rp 90.000.000</h1>  
                                  </FormGroup>
                                </Col>
                            </FormGroup>
                            </Col>
                          </Row>
                      </Col>
                    </Row>
                    <MUIDataTable
                        title={"Employee List"}
                        data={this.data}
                        columns={columns}
                        options={options}
                      />
                  </div>
                </ModalBody>
                        <ModalFooter>
                          <Col xs="12">
                            <FormGroup row className="my-0">
                            <Col xs="3">
                              <FormGroup>
                              <Label htmlFor="textarea-input">Memo:</Label>
                                <Input type="textarea" name="textarea-input" id="textarea-input" rows="2"
                                        placeholder="" />
                              </FormGroup>
                            </Col>
                            <Col xs="3"></Col>
                            <Col xs="2"></Col>
                            <Col xs="4">
                                <FormGroup >
                                <h4 className="text-muted text-right">Subtotal Rp 90.000.000</h4>
                                <h4 className="text-muted text-right">Total Rp 90.000.000</h4>
                                </FormGroup>
                              </Col>
                          </FormGroup>
                          </Col>
                      </ModalFooter>
              </Modal>
              <MUIDataTable
                title={"Task 2W"}
                data={this.data}
                columns={columns}
                options={options}
              />
          </Col>
        </Row>
      </div>
    );
  }
  data = [
    {   
      no: 1,
      orderid: "2W007",
      trxid: "0987654321",
      va: "11223344",
      customer: "Heri Irawan",
      trxdate: "01-06-2019",
      price: "Rp.6.000.000",
      action: [<div><Button color="success" size="sm" ><i className="icon-pencil icons"></i>&nbsp;Approve</Button>&nbsp;</div>]
  },
  {   
      no: 2,
      orderid: "2W008",
      trxid: "1213141516",
      va: "00998877",
      customer: "Ammar",
      trxdate: "01-07-2019",
      price: "Rp.2.000.000",
      action: [<div><Button color="success" size="sm" ><i className="icon-pencil icons"></i>&nbsp;Approve</Button>&nbsp;</div>]
  },
  {   
      no: 3,
      orderid: "2W009",
      trxid: "0908070605",
      va: "55443322",
      customer: "Rega",
      trxdate: "01-08-2019",
      price: "Rp.4.000.000",
      action: [<div><Button color="success" size="sm" ><i className="icon-pencil icons"></i>&nbsp;Approve</Button>&nbsp;</div>]
  },
   ];
}
