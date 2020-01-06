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
    name: "paymentid",
    label: "Payment ID",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "paymentdate",
    label: "Payment Date",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "reconid",
    label: "Recon ID",
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
     name: "statusrecon",
     label: "Status Recon",
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

export default class CSHistory extends Component {

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
    this.toggleInfo = this.toggleInfo.bind(this);

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

  toggleInfo() {
    this.setState({
      info: !this.state.info,
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
                  <Col md="2">
                    <Button color="warning" onClick={this.toggleWarning}>
                      <i className="fa fa-plus"></i>&nbsp;FILTER
                    </Button>
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
                                <Input type="date" id="date-input" name="date-input" placeholder="date" />
                              </FormGroup>
                            </Col>
                            <Col xs="6">
                              <FormGroup>
                              <Label htmlFor="date-input">To:</Label>
                                <Input type="date" id="date-input" name="date-input" placeholder="date" />
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
            <MUIDataTable
                title={"History"}
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
      paymentid: "11111", 
      paymentdate: "23-06-2019", 
      reconid: "2121",
      partnername: "Kendra Stunning",
      partnerowner: "Kalbe",
      orderprice: "320.000",
      totalpayment: "520.000",
      statusrecon: "Done",
     },
     { 
      no: "2", 
      paymentid: "22222", 
      paymentdate: "24-03-2019", 
      reconid: "3131",
      partnername: "Lehm Anderson",
      partnerowner: "Wattson",
      orderprice: "330.000",
      totalpayment: "1.520.000",
      statusrecon: "Not Yet",
     },
     { 
      no: "3", 
      paymentid: "33333", 
      paymentdate: "01-09-2019", 
      reconid: "4141",
      partnername: "Nixon Downing",
      partnerowner: "Destro",
      orderprice: "1.320.000",
      totalpayment: "5.520.000",
      statusrecon: "Done",
     },
     { 
      no: "4", 
      paymentid: "44444", 
      paymentdate: "11-02-2019", 
      reconid: "5151",
      partnername: "Stuart Richard",
      partnerowner: "NTSC",
      orderprice: "1.222.000",
      totalpayment: "2.520.000",
      statusrecon: "Not Yet",
     },
   ];
}
