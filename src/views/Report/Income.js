import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


const data = [
  {
    key : '1',
    month: 'Oct',
    callshandled: '1030',
    sales: '334',
    loginefficiency: '81.42%',
    salesconversion: '32.43%',
    loginhours: '7.3',
    aht: '431',
  },
];

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class Breadcrumbs extends Component {
  state = {
    searchText: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
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

  render() {
    const columns = [
      {
        title: 'Month',
        dataIndex: 'month',
        key: 'month',
        ...this.getColumnSearchProps('month'),
      },
      {
        title: 'Calls Handled',
        dataIndex: 'callshandled',
        key: 'callshandled',
        ...this.getColumnSearchProps('callshandled'),
      },
      {
        title: 'Sales',
        dataIndex: 'sales',
        key: 'sales',
        ...this.getColumnSearchProps('sales'),
      },
      {
        title: 'Login Efficiency',
        dataIndex: 'loginefficiency',
        key: 'loginefficiency',
        ...this.getColumnSearchProps('loginefficiency'),
      },
      {
        title: 'Sales Conversion',
        dataIndex: 'salesconversion',
        key: 'salesconversion',
        ...this.getColumnSearchProps('salesconversion'),
      },
      {
        title: 'Avg. Login Hours',
        dataIndex: 'loginhours',
        key: 'loginhours',
        ...this.getColumnSearchProps('loginhours'),
      },
      {
        title: 'AHT',
        dataIndex: 'aht',
        key: 'aht',
        ...this.getColumnSearchProps('aht'),
      },
    ];
    return <div>
      <Table columns={columns} dataSource={data} />
      </div>
  }
}


export default Breadcrumbs;
