import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import { Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';
import Highlighter from "react-highlight-words";
import { Table, Icon, Input as antInput, Select, Spin  } from 'antd';
import 'antd/dist/antd.css';
import debounce from 'lodash/debounce';

const data1 = [];
for (let i = 0; i < 11; i++) {
  data1.push({
    no: i.toString(),
    no: `${i}`, 
    tanggalbeli: `31-01-2019`,
    tanggalexpired: `31-02-2019`,
    lokasi: `Jakarta`,
    hargatiket: `50.000`,
    diskon: `5000`,
    hargadiskon: `45.000`,
    biayaparkir: `-`,
    totalbiaya: `45.000`,
    qtybeli: `5`,
    qtyterjual: `3`,
    qtysisa: `2`,
    biayapembelian: `200.000`,
    terjual: `120.000`,
    bayarsisa: `80.000`,
    status: `Aktif`,
    action: `Edit`,
  });
}

// const columns = [
//   {
//    name: "no",
//    label: "No",
//    options: {
//     filter: true,
//     sort: true,
//    }
//   },
//   {
//    name: "orderid",
//    label: "Order ID",
//    options: {
//     filter: true,
//     sort: false,
//    }
//   },
//   {
//    name: "transactionid",
//    label: "Transaction ID",
//    options: {
//     filter: true,
//     sort: false,
//    }
//   },
//   {
//    name: "vanumber",
//    label: "VA Number",
//    options: {
//     filter: true,
//     sort: false,
//    }
//   },
//   {
//     name: "customer",
//     label: "Customer",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//     name: "partnername",
//     label: "Partner Name",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//     name: "partnerowner",
//     label: "Partner Owner",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//     name: "transactiondate",
//     label: "Transaction Date",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//     name: "orderprice",
//     label: "Order Price",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//     name: "totalpayment",
//     label: "Total Payment",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//     name: "statusorder",
//     label: "Status Order",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//     name: "statuspayment",
//     label: "Status Payment",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//  ];

 const options = {
  filterType: 'checkbox',
};

const $ = require('jquery')
$.Datatable = require('datatables.net')

const { Option } = Select;

export default class Quota4W extends Component {

  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
      nestedModal: false,
      closeAll: false
    };

    this.state = {
        data: [],
        value: [],
        fetching: false,
      };

    this.toggle = this.toggle.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  fetchUser = value => {
    console.log('fetching user', value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(body => {
        if (fetchId !== this.lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.results.map(user => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        this.setState({ data, fetching: false });
      });
  };

  handleChange = value => {
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  };

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

  toggleSmall() {
    this.setState({
      small: !this.state.small,
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
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
        title: 'Tanggal Beli',
        dataIndex: 'tanggalbeli',
        key: 'tanggalbeli',
        width: '100%',
        ...this.getColumnSearchProps('tanggalbeli'),
      },
      {
        title: 'Tanggal Expired',
        dataIndex: 'tanggalexpired',
        key: 'tanggalexpired',
        width: '100%',
        ...this.getColumnSearchProps('tanggalexpired'),
      },
      {
        title: 'Lokasi',
        dataIndex: 'lokasi',
        key: 'lokasi',
        width: '100%',
        ...this.getColumnSearchProps('lokasi'),
      },
      {
        title: 'Harga Tiket',
        dataIndex: 'hargatiket',
        key: 'hargatiket',
        width: '100%',
        ...this.getColumnSearchProps('hargatiket'),
      },
      {
        title: 'Diskon',
        dataIndex: 'diskon',
        key: 'diskon',
        width: '100%',
        ...this.getColumnSearchProps('diskon'),
      },
      {
        title: 'Harga Setelah Diskon',
        dataIndex: 'hargadiskon',
        key: 'hargadiskon',
        width: '120%',
        ...this.getColumnSearchProps('hargadiskon'),
      },
      {
        title: 'Biaya Parkir',
        dataIndex: 'biayaparkir',
        key: 'biayaparkir',
        width: '100%',
        ...this.getColumnSearchProps('biayaparkir'),
      },
      {
        title: 'Total Biaya',
        dataIndex: 'totalbiaya',
        key: 'totalbiaya',
        width: '100%',
        ...this.getColumnSearchProps('totalbiaya'),
      },
       {
        title: 'Qty Beli',
        dataIndex: 'qtybeli',
        key: 'qtybeli',
        width: '100%',
        ...this.getColumnSearchProps('qtybeli'),
      },
       {
        title: 'Qty Terjual',
        dataIndex: 'qtyterjual',
        key: 'qtyterjual',
        width: '100%',
        ...this.getColumnSearchProps('qtyterjual'),
      },
       {
        title: 'Qty Sisa',
        dataIndex: 'qtysisa',
        key: 'qtysisa',
        width: '100%',
        ...this.getColumnSearchProps('qtysisa'),
      },
      {
        title: 'Biaya Pembelian',
        dataIndex: 'biayapembelian',
        key: 'biayapembelian',
        width: '100%',
        ...this.getColumnSearchProps('biayapembelian'),
      },
      {
        title: 'Terjual',
        dataIndex: 'terjual',
        key: 'terjual',
        width: '100%',
        ...this.getColumnSearchProps('terjual'),
      },
      {
        title: 'Bayar Sisa',
        dataIndex: 'bayarsisa',
        key: 'bayarsisa',
        width: '100%',
        ...this.getColumnSearchProps('bayarsisa'),
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: '100%',
        ...this.getColumnSearchProps('status'),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: '100%',
        ...this.getColumnSearchProps('action'),
      },
    ];

    const { fetching, data, value } = this.state;
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
                    <Button color="primary" className="float-right"onClick={this.toggleLarge}>Add Quota</Button>{' '}
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
                <ModalHeader toggle={this.toggleLarge}>Add Quota</ModalHeader>
                <ModalBody>
                  <div className="animated fadeIn">
                    <Row>
                      <Col xs="12" sm="12">
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
                                  <Select
                                    mode="multiple"
                                    labelInValue
                                    value={value}
                                    placeholder="Select users"
                                    notFoundContent={fetching ? <Spin size="small" /> : null}
                                    filterOption={false}
                                    onSearch={this.fetchUser}
                                    onChange={this.handleChange}
                                    style={{ width: '100%' }}
                                >
                                    {data.map(d => (
                                    <Option key={d.value}>{d.text}</Option>
                                    ))}
                                </Select>
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
                                <Label htmlFor="textarea-input">Harga Quota (RP)</Label>
                                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="1"
                                         placeholder="Rp" />
                                </FormGroup>
                              </Col>
                              <Col xs="3">
                                <FormGroup>
                                <Label htmlFor="textarea-input">Diskon (RP)</Label>
                                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="1"
                                         placeholder="Rp" />
                                </FormGroup>
                              </Col>
                              <Col xs="3">
                                <FormGroup>
                                <Label htmlFor="textarea-input">Diskon (%)</Label>
                                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="1"
                                         placeholder="-" />
                                </FormGroup>
                              </Col>
                              <Col xs="3">
                                <FormGroup>
                                <Label htmlFor="textarea-input">Quantity</Label>
                                  <Input type="number" name="textarea-input" id="textarea-input" rows="1"
                                         placeholder="5" />
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="3"></Col>
                            <Col xs="3"></Col>
                            <Col xs="6">
                                <FormGroup >
                                <h4 className="text-muted text-right">Harga Setelah Diskon Rp 40.000,00</h4>
                                <h4 className="text-muted text-right">Total Rp 200.000,00</h4>
                                </FormGroup>
                              </Col>
                          </Row>
                      </Col>
                    </Row>
                  </div>
                </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.toggleLarge}>Save and Close</Button>
                      </ModalFooter>
              </Modal>
               <Table columns={columns} dataSource={data1} pagination={{ pageSize: 50 }} scroll={{x: 3000, y: 300 }} />
          </Col>
        </Row>
      </div>
    );
  }
}
