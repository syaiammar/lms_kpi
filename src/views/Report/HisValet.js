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
        name: "trxid",
        label: "TRX ID",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "van",
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
        name: "ptname",
        label: "Partner Name",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "ptow",
        label: "partner owner",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "trxprice",
        label: "TRX Price",
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
        name: "status",
        label: "status",
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

export default class HisValet extends Component {

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

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Row>
                            <Col md="12">
                                <Button color="warning" onClick={this.toggleWarning}>
                                    <i className="fa fa-plus"></i>&nbsp;FILTER
                                </Button>
                                <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                            </Col>
                        </Row>
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
                        <br />
                        <Row>
                            <Col md="12">
                                <MUIDataTable
                                    title={"History valet"}
                                    data={this.data}
                                    columns={columns}
                                    options={options}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
    data = [
        {
            no: 1,
            orderid: "2W001",
            trxid: "qwe12345",
            van: "123412344321",
            customer: "Heri Irawan",
            ptname: "Garuda",
            ptow: "Indonesia Steel",
            trxprice: "Rp.3.000.000",
            orderprice: "Rp.2.900.000",
            status: "Done",
            action: [<div><Button color="primary" size="sm" ><i className="icon-note icons"></i>&nbsp;Edit</Button>&nbsp;
              <Button color="danger" size="sm"><i className="icon-trash icons"></i>&nbsp;Hapus</Button></div>]
        },
        {
            no: 2,
            orderid: "2W002",
            trxid: "qwe12345",
            van: "123412344321",
            customer: "Heri Irawan",
            ptname: "Garuda",
            ptow: "Indonesia Steel",
            trxprice: "Rp.3.000.000",
            orderprice: "Rp.2.900.000",
            status: "Done",
            action: [<div><Button color="primary" size="sm" ><i className="icon-note icons"></i>&nbsp;Edit</Button>&nbsp;
              <Button color="danger" size="sm"><i className="icon-trash icons"></i>&nbsp;Hapus</Button></div>]
        },
        {
            no: 3,
            orderid: "2W003",
            trxid: "qwe12345",
            van: "123412344321",
            customer: "Heri Irawan",
            ptname: "Garuda",
            ptow: "Indonesia Steel",
            trxprice: "Rp.3.000.000",
            orderprice: "Rp.2.900.000",
            status: "Done",
            action: [<div><Button color="primary" size="sm" ><i className="icon-note icons"></i>&nbsp;Edit</Button>&nbsp;
              <Button color="danger" size="sm"><i className="icon-trash icons"></i>&nbsp;Hapus</Button></div>]
        },
    ];
}
