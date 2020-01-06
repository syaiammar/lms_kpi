import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import { Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';
import Highlighter from "react-highlight-words";
import { Table, Icon, Input as antInput, Popconfirm } from 'antd';

// const data = [];
// for (let i = 0; i < 11; i++) {
//   data.push({
//     no: i.toString(),
//     no: `${i}`,
//     reconid: `1111${i}`,
//     date: `22-12-2019`,
//     name: `David Siozo ${i}`,
//     partnername: `Daniel John ${i}`,
//     partnerowner: `Manulife ${i}`,
//     transactiondate: `22-12-2019`,
//     orderprice: `500.000`,
//     totalpayment: `700.000`,
//     statusrecon: `Done`,
//   });
// }

const data = [
  { 
    roles : "Administrator",
    description : "Adalah sebuah Project Yang sedang kami coba kerjaken",
    action : "action"
   },
   { 
    roles : "Corporate",
    description : "Adalah sebuah Project Yang sedang kami coba kerjaken",
    action : "action"
   },
   { 
    roles : "Divisi",
    description : "Adalah sebuah Project Yang sedang kami coba kerjaken",
    action : "action"
   },
   { 
    roles : "Departement",
    description : "Adalah sebuah Project Yang sedang kami coba kerjaken",
    action : "action"
   },
  //  { 
  //   no: "2", 
  //   reconid: "22", 
  //   date: "04-08-2019", 
  //   name: "Daniel Murtado",
  //   partnername: "Alex Turner",
  //   partnerowner: "MDbank",
  //   transactiondate: "04-08-2019",
  //   orderprice: "1.500.000",
  //   totalpayment: "2.700.000",
  //   statusrecon: "Not Yet",
  //  },
  //  { 
  //   no: "3", 
  //   reconid: "33", 
  //   date: "21-05-2019", 
  //   name: "Wesley JR",
  //   partnername: "Bob Marley",
  //   partnerowner: "Citilink",
  //   transactiondate: "19-11-2019",
  //   orderprice: "2.500.000",
  //   totalpayment: "4.700.000",
  //   statusrecon: "Not Yet",
  //  },
  //  { 
  //   no: "4", 
  //   reconid: "44", 
  //   date: "29-06-2019", 
  //   name: "CIndy Buckingham",
  //   partnername: "Fergusson Alex",
  //   partnerowner: "Apex",
  //   transactiondate: "29-06-2019",
  //   orderprice: "4.500.000",
  //   totalpayment: "10.700.000",
  //   statusrecon: "Done",
  //  },
 ];

const options = {
  filterType: 'checkbox',
};

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Reconcile2W extends Component {

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
        title: 'Roles',
        dataIndex: 'roles',
        key: 'roles',
        width: '80%',
        ...this.getColumnSearchProps('roles'),
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: '120%',
        ...this.getColumnSearchProps('description'),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: '50%',
        ...this.getColumnSearchProps('action'),
      },
      
      // {
      //   title: 'Action',
      //   dataIndex: 'action',
      //   key: 'action',
      //   width: '100%',
      //   ...this.getColumnSearchProps('action'),

      //   render: () => (
      //     <div>
      //       <Button color="success" size="sm">Approve</Button> &nbsp;
      //       <Button color="danger" size="sm">&nbsp;&nbsp;Cancel&nbsp;&nbsp;</Button>
      //     </div>
      //   )
      // },
    ];

    return (
      <div className="animated fadeIn">

            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x: 1000, y: 300 }} />

      </div>
    );
  }
}
