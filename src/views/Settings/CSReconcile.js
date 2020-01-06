import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import { Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';
import Highlighter from "react-highlight-words";
import { Table, Icon, Input as antInput, Popconfirm } from 'antd';

const data = [];
for (let i = 0; i < 11; i++) {
  data.push({
    no: i.toString(),
    no: `${i}`,
    reconid: `1111${i}`,
    date: `22-12-2019`,
    name: `David Siozo ${i}`,
    partnername: `Daniel John ${i}`,
    partnerowner: `Manulife ${i}`,
    transactiondate: `22-12-2019`,
    orderprice: `500.000`,
    totalpayment: `700.000`,
    statusrecon: `Done`,
  });
}

// const data = [
//   { 
//     no: "1", 
//     reconid: "1111", 
//     date: "22-12-2019", 
//     name: "David Siozo",
//     partnername: "Daniel John",
//     partnerowner: "Manulife",
//     transactiondate: "22-12-2019",
//     orderprice: "500.000",
//     totalpayment: "700.000",
//     statusrecon: "Done",
//    },
//    { 
//     no: "2", 
//     reconid: "22", 
//     date: "04-08-2019", 
//     name: "Daniel Murtado",
//     partnername: "Alex Turner",
//     partnerowner: "MDbank",
//     transactiondate: "04-08-2019",
//     orderprice: "1.500.000",
//     totalpayment: "2.700.000",
//     statusrecon: "Not Yet",
//    },
//    { 
//     no: "3", 
//     reconid: "33", 
//     date: "21-05-2019", 
//     name: "Wesley JR",
//     partnername: "Bob Marley",
//     partnerowner: "Citilink",
//     transactiondate: "19-11-2019",
//     orderprice: "2.500.000",
//     totalpayment: "4.700.000",
//     statusrecon: "Not Yet",
//    },
//    { 
//     no: "4", 
//     reconid: "44", 
//     date: "29-06-2019", 
//     name: "CIndy Buckingham",
//     partnername: "Fergusson Alex",
//     partnerowner: "Apex",
//     transactiondate: "29-06-2019",
//     orderprice: "4.500.000",
//     totalpayment: "10.700.000",
//     statusrecon: "Done",
//    },
//  ];

const options = {
  filterType: 'checkbox',
};

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class CSReconcile extends Component {

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
      data,
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
          { title: "Email" },
          { title: "Name" },
          { title: "Role" },
        ]
      }
    )
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
        title: 'Recon ID',
        dataIndex: 'reconid',
        key: 'reconid',
        width: '100%',
        ...this.getColumnSearchProps('reconid'),
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: '100%',
        ...this.getColumnSearchProps('date'),
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
        title: 'Status Recon',
        dataIndex: 'statusrecon',
        key: 'statusrecon',
        width: '100%',
        ...this.getColumnSearchProps('statusrecon'),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: '100%',
        ...this.getColumnSearchProps('action'),

        render: () => (
          <div>
            <Button color="success" size="sm">Approve</Button> &nbsp;
            <Button color="danger" size="sm">&nbsp;&nbsp;Cancel&nbsp;&nbsp;</Button>
          </div>
        )
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
                <Button color="primary" className="float-right" onClick={this.toggleLarge}>Add Reconcile</Button>{' '}
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
                  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x: 2000, y: 300 }} />
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
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x: 2000, y: 300 }} />
          </Col>
        </Row>
      </div>
    );
  }
}
