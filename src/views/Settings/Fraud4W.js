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
    transactionid: `222${i}`, 
    customer: `Umbrella Corporation${i}`,
    partnername: `John Wick${i}`,
    partnerowner: `Abstergo${i}`,
    transactiondate: `31-01-2019`,
    orderprice: `90.000${i}`,
    totalpayment: `200.000${i}`,
    statusorder: `Complete`,
    statuspayment: `Working Cari Parkir Payment`,
    statusfraud: `yes`,
    commentfraud: ``,
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

export default class Fraud4W extends Component {

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
        title: 'Transaction ID',
        dataIndex: 'transactionid',
        key: 'transactionid',
        width: '100%',
        ...this.getColumnSearchProps('transactionid'),
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
      {
        title: 'Status Fraud',
        dataIndex: 'statusfraud',
        key: 'statusfraud',
        width: '100%',
        ...this.getColumnSearchProps('statusfraud'),
      },
      {
        title: 'Comment Fraud',
        dataIndex: 'commentfraud',
        key: 'commentfraud',
        width: '100%',
        ...this.getColumnSearchProps('commentfraud'),
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
                    <Button color="primary" className="float-right"onClick={this.toggle}>{this.props.buttonLabel}Add Fraud</Button>
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
                                    <option value="1">Gading</option>
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
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal-lg '+ this.props.className}>
                    <ModalHeader toggle={this.toggle}>Transaction Fraud</ModalHeader>
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
                      </Col>
                    </Row>
                       <Table columns={columns} dataSource={data1} pagination={{ pageSize: 50 }} scroll={{x: 2000, y: 300 }} />
                  </div>
                    <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}
                     className={'modal-sm '+ this.props.className}>
                        <ModalHeader>Fraud Comment</ModalHeader>
                            <ModalBody>
                            <Row>
                            <Col xs="12">
                              <FormGroup>
                                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="6"
                                         placeholder="(Input Comment)" />
                              </FormGroup>
                            </Col>
                          </Row>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleNested}>Cancel</Button>{' '}
                                <Button color="primary" onClick={this.toggleAll}>Submit</Button>
                            </ModalFooter>
                </Modal>
                    </ModalBody>
                    <ModalFooter>
                            <Button color="success" onClick={this.toggleNested}>Save and Close</Button>
                    </ModalFooter>
                    </Modal>
               <Table columns={columns} dataSource={data1} pagination={{ pageSize: 50 }} scroll={{x: 2000, y: 300 }} />
          </Col>
        </Row>
      </div>
    );
  }
}
