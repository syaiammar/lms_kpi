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
     sort: false,
    }
   },
   {
    name: "transactionid",
    label: "Transaction ID",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "vanumber",
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
     name: "partnername",
     label: "Partner Name",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "partnerowner",
     label: "Partner Owner",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "transactiondate",
     label: "Transaction Date",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "orderprice",
     label: "Order Price",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "totalpayment",
     label: "Total Payment",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "statusorder",
     label: "Status Order",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "statuspayment",
     label: "Status Payment",
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

export default class CSTransaction extends Component {

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
          { title: "Role"},
        ]
      }
    )
  }

  // componentDidMount() {
  //   console.log(this.el);
  //   this.$el = $(this.el)
  //   this.$el.DataTable(
  //     {
  //       data: this.props.data,
  //       columns: [
  //         { title: "Email", data:"email"},
  //         { title: "Name", data:"name" },
  //         { title: "Role", data:"username" },
  //       ]
  //     }
  //   )
  // }

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
                    <Button color="primary" className="float-right"onClick={this.toggleLarge}>Add Reconcile</Button>{' '}
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
                                    <Button color="primary" onClick={this.toggleLarge}>Save and Close</Button>{' '}
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
                        title={"Transaction"}
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
                title={"Transaction"}
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
      no: "1", 
      orderid: "111", 
      transactionid: "222", 
      vanumber: "333",
      customer: "Umbrella Corporation",
      partnername: "John Wick",
      partnerowner: "Abstergo",
      transactiondate: "31-01-2019",
      orderprice: "90.000",
      totalpayment: "200.000",
      statusorder: "Done",
      statuspayment: "Done",
     },
     { 
      no: "2", 
      orderid: "222", 
      transactionid: "333", 
      vanumber: "444",
      customer: "Doge Corporation",
      partnername: "John Doe",
      partnerowner: "Unison",
      transactiondate: "01-03-2019",
      orderprice: "290.000",
      totalpayment: "500.000",
      statusorder: "Not Yet",
      statuspayment: "Done",
     },
     { 
      no: "3", 
      orderid: "333", 
      transactionid: "444", 
      vanumber: "555",
      customer: "Nemesis Corporation",
      partnername: "Matthew Bellamy",
      partnerowner: "Cisco",
      transactiondate: "22-06-2019",
      orderprice: "520.000",
      totalpayment: "1.200.000",
      statusorder: "Done",
      statuspayment: "Not Yet",
     },
     { 
      no: "4", 
      orderid: "444", 
      transactionid: "555", 
      vanumber: "666",
      customer: "Cyberpunk Corporation",
      partnername: "Sam Smith",
      partnerowner: "Cubicle",
      transactiondate: "24-08-2019",
      orderprice: "100.000",
      totalpayment: "3.200.000",
      statusorder: "Not Yet",
      statuspayment: "Not Yet",
     },
   ];
}
