import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import { Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';
import Highlighter from "react-highlight-words";
import { Table, Icon, Input as antInput } from 'antd';

const data = [];
for (let i = 1; i < 10; i++) {
  data.push({
    no: i.toString(),
    datachange: `0${i}/10/2019`,  
    user: `Lorem Ipsum${i}`, 
    event: 'Eksport Report',
    name: `Report Settings`,
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

export default class Fraud2W extends Component {

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
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
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

  componentWillMount() {

  }

  render() {
    const columns = [
      {
        title: 'Data Change',
        dataIndex: 'datachange',
        key: 'datachange',
        width: '50%',
        ...this.getColumnSearchProps('datachange'),
      },
      {
        title: 'User',
        dataIndex: 'user',
        key: 'user',
        width: '100%',
        ...this.getColumnSearchProps('user'),
      },
      {
        title: 'Event',
        dataIndex: 'event',
        key: 'event',
        width: '120%',
        ...this.getColumnSearchProps('event'),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '120%',
        ...this.getColumnSearchProps('name'),
      },
    ];

    return (
      <div className="animated fadeIn">
               <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{x: 1000, y: 300 }} />
      </div>
    );
  }
}
