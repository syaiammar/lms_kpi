import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import { Col, Row, Button, Modal, CardBody, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';
import Highlighter from "react-highlight-words";
import { Table, Icon, Input as antInput } from 'antd';

const data = [];
for (let i = 0; i < 11; i++) {
  data.push({
    no: i.toString(),
    email: `Email@mail.com ${i}`, 
    name: `Syai Ammar ${i}`, 
    division: `Division${i}`, 
    departement: `Department${i}`,
    jabatan: `Jabatan ${i}`,
    action: `Action`,
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

export default class Transaction2W extends Component {

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

  render() {
    const columns = [
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',


        ...this.getColumnSearchProps('email'),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',

        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Division',
        dataIndex: 'division',
        key: 'division',

        ...this.getColumnSearchProps('division'),
      },
      {
        title: 'Departement',
        dataIndex: 'departement',
        key: 'departement',

        ...this.getColumnSearchProps('departement'),
      },
      {
        title: 'Jabatan',
        dataIndex: 'jabatan',
        key: 'jabatan',

        ...this.getColumnSearchProps('jabatan'),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',

        ...this.getColumnSearchProps('action'),
      },
    ];
    
    return [<div>
      <Button color="primary" onClick={this.toggleWarning}>
        <i className="fa fa-plus"></i>&nbsp;Add User
          </Button>
      <Modal isOpen={this.state.warning} toggle={this.toggleWarning}
        className={'modal-primary ' + this.props.className}>
        <ModalHeader toggle={this.togglePrimary}>Add User</ModalHeader>
        <ModalBody>
          <div className="animated fadeIn">
            <Row>
              <Col xs="12" sm="12">
                <CardBody>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder="Enter your name" required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccnumber">Email</Label>
                        <Input type="email" id="email" placeholder="Enter your email" required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Role</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">Administrator</option>
                          <option value="2">Corporate</option>
                          <option value="3">Divisi</option>
                          <option value="4">Departement</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Divisi</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">Finance</option>
                          <option value="2">Human Capital & General Services (HCGS)</option>
                          <option value="3">Corporate Services & Business Development (CSBD)</option>
                          <option value="4">GM Maintenance & Planning</option>
                          <option value="5">Secretary</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Departement</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">Accounting & Budeting</option>
                          <option value="2">Tax & Treasury</option>
                          <option value="3">Human Capital Development</option>
                          <option value="4">HCGS</option>
                          <option value="5">Corporate Communication PR & CSR</option>
                          <option value="6">Concession Monitoring Compliance & EHS</option>
                          <option value="7">Maintenance & Planning </option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Jabatan</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">Accounting</option>
                          <option value="2">Account Payable</option>
                          <option value="3">Financial Planning</option>
                          <option value="4">IT</option>
                          <option value="5">Human Capital Development</option>
                          <option value="6">HC Support</option>
                          <option value="7">Industrial Relation</option>
                          <option value="8">Payroll, Recruitment, Compensation & Benefit</option>
                          <option value="9">General Services</option>
                          <option value="10">Corporate Services and Insurance</option>
                          <option value="11">Business Development</option>
                          <option value="12">Legal & Corporate Secretariat Support </option>
                          <option value="13">Engineer</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="name">Password</Label>
                        <Input type="password" id="password" placeholder="Enter your password" required />
                      </FormGroup>
                    </Col>
                  </Row><Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="name">Confirm Password</Label>
                        <Input type="password" id="co-password" placeholder="Enter your password again" required />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleWarning}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.toggleWarning}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
        className={'modal-danger modal-sm ' + this.props.className}>
        <ModalHeader toggle={this.toggleDanger}>delete</ModalHeader>
        <ModalBody>
          Apakah anda yakin akan menghapus data dengan id : ... ?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.toggleDanger}>Yes</Button>{' '}
          <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <br></br><br></br>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{x: 1000, y: 300 }} />
    </div>
    ];
  }
  
}
