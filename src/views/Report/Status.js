import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import { Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input} from 'reactstrap';
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
        name: "tglbeli",
        label: "TGL Beli",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "tglex",
        label: "TGL Expired",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "lokasi",
        label: "Lokasi",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "hasedis",
        label: "Harga Setelah Diskon",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "biayaparkir",
        label: "Biaya Parkir",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "qty",
        label: "QTY Beli",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "qtyjual",
        label: "QTY Jual",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "qtysisa",
        label: "QTY Sisa",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "biayapembelian",
        label: "Biaya pembelian",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "terjual",
        label: "Terjual",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "bayarsisa",
        label: "Bayar Sisa",
        options: {
            filter: true,
            sort: true,
        }
    },
];

const options = {
    filterType: 'checkbox',
};

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Status extends Component {

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
                                {/* <h4 className="text-muted">Status kuota valet</h4> */}
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
                                    title={"Status kuota valet"}
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
            tglbeli:"20/10/2019",
            tglex:"20/10/2019",
            lokasi:"Jakarta",
            hasedis:"Rp750.000",
            biayaparkir:"Rp500.000",
            qty:"4",
            qtyjual:"3",
            qtysisa:"1",
            biayapembelian:"Rp400.000",
            terjual:"Rp380.000",
            bayarsisa:"Rp25.000",
        },
        {   
            no: 1,
            tglbeli:"20/10/2019",
            tglex:"20/10/2019",
            lokasi:"Jakarta",
            hasedis:"Rp750.000",
            biayaparkir:"Rp500.000",
            qty:"4",
            qtyjual:"3",
            qtysisa:"1",
            biayapembelian:"Rp400.000",
            terjual:"Rp380.000",
            bayarsisa:"Rp25.000",
        },
        {   
            no: 1,
            tglbeli:"20/10/2019",
            tglex:"20/10/2019",
            lokasi:"Jakarta",
            hasedis:"Rp750.000",
            biayaparkir:"Rp500.000",
            qty:"4",
            qtyjual:"3",
            qtysisa:"1",
            biayapembelian:"Rp400.000",
            terjual:"Rp380.000",
            bayarsisa:"Rp25.000",
        },
    ];
}
