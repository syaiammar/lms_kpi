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
    paymentid: `1111${i}`, 
    paymentdate: `22-12-2019`, 
    reconid: `1212${i}`,
    recondate: `22-12-2019`,
    partnername: `Harry Truman${i}`,
    partnerowner: `Ferrari${i}`,
    orderprice: `240.000`,
    totalpayment: `400.000`,
    statusrecon: `Done`,
  });
}

// const columns = [
//   {
//     name: "no",
//     label: "No",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "paymentid",
//     label: "Payment ID",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//     name: "paymentdate",
//     label: "Payment Date",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//     name: "reconid",
//     label: "Recon ID",
//     options: {
//      filter: true,
//      sort: false,
//     }
//    },
//    {
//      name: "recondate",
//      label: "Recon Date",
//      options: {
//       filter: true,
//       sort: false,
//      }
//     },
//     {
//      name: "partnername",
//      label: "Partner Name",
//      options: {
//       filter: true,
//       sort: false,
//      }
//     },
//     {
//      name: "partnerowner",
//      label: "Partner Owner",
//      options: {
//       filter: true,
//       sort: false,
//      }
//     },
//     {
//      name: "orderprice",
//      label: "Order Price",
//      options: {
//       filter: true,
//       sort: false,
//      }
//     },
//     {
//      name: "totalpayment",
//      label: "Total Payment",
//      options: {
//       filter: true,
//       sort: false,
//      }
//     },
//     {
//      name: "statusrecon",
//      label: "Status Recon",
//      options: {
//       filter: true,
//       sort: false,
//      }
//     },
//  ];

 const options = {
  filterType: 'checkbox',
};

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class CSPayment extends Component {

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
        title: 'Payment ID',
        dataIndex: 'paymentid',
        key: 'paymentid',
        width: '100%',
        ...this.getColumnSearchProps('paymentid'),
      },
      {
        title: 'Payment Date',
        dataIndex: 'paymentdate',
        key: 'paymentdate',
        width: '100%',
        ...this.getColumnSearchProps('paymentdate'),
      },
      {
        title: 'Recon ID',
        dataIndex: 'reconid',
        key: 'reconid',
        width: '100%',
        ...this.getColumnSearchProps('reconid'),
      },
      {
        title: 'Recon Date',
        dataIndex: 'recondate',
        key: 'recondate',
        width: '100%',
        ...this.getColumnSearchProps('recondate'),
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
    ];

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
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x: 2000, y: 300 }} />
          </Col>
        </Row>
      </div>
    );
  }
}
