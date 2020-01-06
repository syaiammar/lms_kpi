import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import { Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';
import Highlighter from "react-highlight-words";
import { Table, Icon, Input as antInput } from 'antd';

const data = [];
for (let i = 0; i < 11; i++) {
  data.push({
    no: i.toString(),
    no: `${i}`, 
    orderid: `123456789012${i}`, 
    transactionid: `ABC123456789${i}`, 
    vanumber: `3333-3333-3333-333${i}`,
    customer: `PT Bangun Kreatif Abadi ${i}`,
    partnername: `Pratama Arief R ${i}`,
    partnerowner: `Heri Irawan ${i}`,
    transactiondate: `31-01-2019`,
    orderprice: `90.000`,
    totalpayment: `200.000`,
    statusorder: `Done`,
    statuspayment: `Done`,
  });
}

// const data = [
//   { 
//     no: "1", 
//     orderid: "1234567890123", 
//     transactionid: "ABC1234567890", 
//     vanumber: "3333-3333-3333-3333",
//     customer: "PT Bangun Kreatif Abadi",
//     partnername: "Pratama Arief Ramadhan",
//     partnerowner: "Heri Irawan",
//     transactiondate: "31-01-2019",
//     orderprice: "90.000",
//     totalpayment: "200.000",
//     statusorder: "Done",
//     statuspayment: "Done",
//    },
//    { 
//     no: "2", 
//     orderid: "222", 
//     transactionid: "333", 
//     vanumber: "444",
//     customer: "Doge Corporation",
//     partnername: "John Doe",
//     partnerowner: "Unison",
//     transactiondate: "01-03-2019",
//     orderprice: "290.000",
//     totalpayment: "500.000",
//     statusorder: "Not Yet",
//     statuspayment: "Done",
//    },
//    { 
//     no: "3", 
//     orderid: "333", 
//     transactionid: "444", 
//     vanumber: "555",
//     customer: "Nemesis Corporation",
//     partnername: "Matthew Bellamy",
//     partnerowner: "Cisco",
//     transactiondate: "22-06-2019",
//     orderprice: "520.000",
//     totalpayment: "1.200.000",
//     statusorder: "Done",
//     statuspayment: "Not Yet",
//    },
//    { 
//     no: "4", 
//     orderid: "444", 
//     transactionid: "555", 
//     vanumber: "666",
//     customer: "Cyberpunk Corporation",
//     partnername: "Sam Smith",
//     partnerowner: "Cubicle",
//     transactiondate: "24-08-2019",
//     orderprice: "100.000",
//     totalpayment: "3.200.000",
//     statusorder: "Not Yet",
//     statuspayment: "Not Yet",
//    },
//    { 
//     no: "5", 
//     orderid: "444", 
//     transactionid: "555", 
//     vanumber: "666",
//     customer: "Cyberpunk Corporation",
//     partnername: "Sam Smith",
//     partnerowner: "Cubicle",
//     transactiondate: "24-08-2019",
//     orderprice: "100.000",
//     totalpayment: "3.200.000",
//     statusorder: "Not Yet",
//     statuspayment: "Not Yet",
//    },
//    { 
//     no: "5", 
//     orderid: "444", 
//     transactionid: "555", 
//     vanumber: "666",
//     customer: "PT Bangun Kreatif Abadi",
//     partnername: "Sam Smith",
//     partnerowner: "Cubicle",
//     transactiondate: "24-08-2019",
//     orderprice: "100.000",
//     totalpayment: "3.200.000",
//     statusorder: "Not Yet",
//     statuspayment: "Not Yet",
//    },
//    { 
//     no: "5", 
//     orderid: "444", 
//     transactionid: "555", 
//     vanumber: "666",
//     customer: "Cyberpunk Corporation",
//     partnername: "Sam Smith",
//     partnerowner: "Cubicle",
//     transactiondate: "24-08-2019",
//     orderprice: "100.000",
//     totalpayment: "3.200.000",
//     statusorder: "Not Yet",
//     statuspayment: "Not Yet",
//    },
//  ];

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

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        console.log(this);
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

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
    const columns = [
      {
        title: 'No',
        dataIndex: 'no',
        key: 'no',
        width: '50%',
        fixed: 'left',
        ...this.getColumnSearchProps('no'),
      },
      {
        title: 'Order ID',
        dataIndex: 'orderid',
        key: 'orderid',
        width: '100%',
        ...this.getColumnSearchProps('orderid'),
      },
      {
        title: 'Transaction ID',
        dataIndex: 'transactionid',
        key: 'transactionid',
        width: '100%',
        ...this.getColumnSearchProps('transactionid'),
      },
      {
        title: 'VA Number',
        dataIndex: 'vanumber',
        key: 'vanumber',
        width: '120%',
        ...this.getColumnSearchProps('vanumber'),
      },
      {
        title: 'Customer',
        dataIndex: 'customer',
        key: 'customer',
        width: '120%',
        ...this.getColumnSearchProps('customer'),
      },
      {
        title: 'Partner Name',
        dataIndex: 'partnername',
        key: 'partnername',
        width: '120%',
        ...this.getColumnSearchProps('partnername'),
      },
      {
        title: 'Partner Owner',
        dataIndex: 'partnerowner',
        key: 'partnerowner',
        width: '120%',
        ...this.getColumnSearchProps('partnerowner'),
      },
      {
        title: 'Transaction Date',
        dataIndex: 'transactiondate',
        key: 'transactiondate',
        width: '100%',
        ...this.getColumnSearchProps('transactiondate'),
      },
      {
        title: 'Order Price',
        dataIndex: 'orderprice',
        key: 'orderprice',
        width: '100%',
        ...this.getColumnSearchProps('orderprice'),
      },
      {
        title: 'Total Payment',
        dataIndex: 'totalpayment',
        key: 'totalpayment',
        width: '100%',
        ...this.getColumnSearchProps('totalpayment'),
      },
      {
        title: 'Status Order',
        dataIndex: 'statusorder',
        key: 'statusorder',
        width: '100%',
        ...this.getColumnSearchProps('statusorder'),
      },
      {
        title: 'Status Payment',
        dataIndex: 'statuspayment',
        key: 'statuspayment',
        width: '100%',
        ...this.getColumnSearchProps('statuspayment'),
      },
    ];
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
                      <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{x: 2000, y: 300 }} />
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
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{x: 2000, y: 300 }} />
          </Col>
        </Row>
      </div>
    );
  }
}
