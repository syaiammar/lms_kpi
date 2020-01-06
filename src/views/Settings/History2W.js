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
//     paymentid: `11111${i}`, 
//     paymentdate: `23-06-2019`, 
//     reconid: `2121${i}`,
//     partnername: `Jeanice Sunderland${i}`,
//     partnerowner: `BMW${i}`,
//     orderprice: `320.000`,
//     totalpayment: `520.000`,
//     statusrecon: `Done`,
//   });
// }

const data = [
  { 
    division: "Finance",
    departement: "Accounting & Budeting",
    sub1: "",
    sub2: "Accounting",
   },
   { 
    division: "Finance",
    departement: "Tax & Treasury",
    sub1: "",
    sub2: "Account Payable",
   },
   { 
    division: "Finance",
    departement: "Tax & Treasury",
    sub1: "",
    sub2: "Financial Planning",
   },
   { 
    division: "Finance",
    departement: "Tax & Treasury",
    sub1: "",
    sub2: "IT",
   },
   { 
    division: "Human Capital & General Services (HCGS)",
    departement: "Human Capital Development",
    sub1: "",
    sub2: "Human Capital Development",
   },
   { 
    division: "Human Capital & General Services (HCGS)",
    departement: "HCGS",
    sub1: "",
    sub2: "HC Support",
   },
   { 
    division: "Human Capital & General Services (HCGS)",
    departement: "HCGS",
    sub1: "",
    sub2: "Industrial Relation",
   },
   { 
    division: "Human Capital & General Services (HCGS)",
    departement: "HCGS",
    sub1: "",
    sub2: "Payroll, Recruitment, Compensation & Benefit",
   },
   { 
    division: "Human Capital & General Services (HCGS)",
    departement: "HCGS",
    sub1: "",
    sub2: "General Services",
   },
   { 
    division: "Human Capital & General Services (HCGS)",
    departement: "HCGS",
    sub1: "Corporate Communication PR & CSR",
    sub2: "",
   },
   { 
    division: "Corporate Services & Business Development (CSBD)",
    departement: "",
    sub1: "Corporate Services and Insurance",
    sub2: "",
   },
   { 
    division: "Corporate Services & Business Development (CSBD)",
    departement: "",
    sub1: "",
    sub2: "Legal & Corporate Secretariat Support",
   },
   { 
    division: "GM Maintenance & Planning",
    departement: "Concession Monitoring Compliance & EHS",
    sub1: "",
    sub2: "",
   },
   { 
    division: "GM Maintenance & Planning",
    departement: "Maintenance & Planning",
    sub1: "Engineer",
    sub2: "",
   },
   { 
    division: "Secretary",
    departement: "",
    sub1: "",
    sub2: "",
   },


  ];

 const options = {
  filterType: 'checkbox',
};

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class History2W extends Component {

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
        title: 'Division',
        dataIndex: 'division',
        key: 'division',
        width: '100%',
        ...this.getColumnSearchProps('division'),
      },
      {
        title: 'Departement',
        dataIndex: 'departement',
        key: 'departement',
        width: '100%',
        ...this.getColumnSearchProps('departement'),
      },
      {
        title: 'Sub-Dep1',
        dataIndex: 'sub1',
        key: 'sub1',
        width: '100%',
        ...this.getColumnSearchProps('sub1'),
      },
      {
        title: 'Sub-Dep2',
        dataIndex: 'sub2',
        key: 'sub2',
        width: '120%',
        ...this.getColumnSearchProps('sub2'),
      },
      
    ];

    return (
      <div className="animated fadeIn">        
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x: 1000, y: 300 }} />
      </div>
    );
  }
}
