import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import { Card, CardBody, CardColumns, CardHeader,Row,Col } from 'reactstrap';
import {Doughnut, Pie} from 'react-chartjs-2';


const pie = {
  labels: [
    'I',
    'II',
    'III',
    'IV',
    'V',
  ],
  datasets: [
    {
      data: [80.4, 14, 4.5, 0.5, 0.5],
      backgroundColor: [
        '#D6EAF8',
        '#85C1E9',
        '#3498DB',
        '#2874A6',
        '#1B4F72',
        
      ],
      hoverBackgroundColor: [
        '#D6EAF8',
        '#85C1E9',
        '#3498DB',
        '#2874A6',
        '#1B4F72',
      ],
    }],
};
const pie1 = {
  labels: [
    'I',
    'II',
    'III',
    'IV',
    'V',
  ],
  datasets: [
    {
      data: [80.4, 14, 4.5, 0.5, 0.5],
      backgroundColor: [
        '#D6EAF8',
        '#85C1E9',
        '#3498DB',
        '#2874A6',
        '#1B4F72',
        
      ],
      hoverBackgroundColor: [
        '#D6EAF8',
        '#85C1E9',
        '#3498DB',
        '#2874A6',
        '#1B4F72',
      ],
    }],
};
const pie2 = {
  labels: [
    'I',
    'II',
    'III',
    'IV',
    'V',
  ],
  datasets: [
    {
      data: [80.4, 14, 4.5, 0.5, 0.5],
      backgroundColor: [
        '#D6EAF8',
        '#85C1E9',
        '#3498DB',
        '#2874A6',
        '#1B4F72',
        
      ],
      hoverBackgroundColor: [
        '#D6EAF8',
        '#85C1E9',
        '#3498DB',
        '#2874A6',
        '#1B4F72',
      ],
    }],
};
const pie3 = {
  labels: [
    'I',
    'II',
    'III',
    'IV',
    'V',
  ],
  datasets: [
    {
      data: [80.4, 14, 4.5, 0.5, 0.5],
      backgroundColor: [
        '#D6EAF8',
        '#85C1E9',
        '#3498DB',
        '#2874A6',
        '#1B4F72',
        
      ],
      hoverBackgroundColor: [
        '#D6EAF8',
        '#85C1E9',
        '#3498DB',
        '#2874A6',
        '#1B4F72',
      ],
    }],
};

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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '20%',
        ...this.getColumnSearchProps('age'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        ...this.getColumnSearchProps('address'),
      },
    ];
    return <div>
      {/* <Table columns={columns} dataSource={data} /> */}
      <Row>
        <div className="col-md-6">
        <Card>
            <CardHeader>
               MTD Aug 2018
               <div className="card-header-actions">
                 <a href="" className="card-header-action">
                 <button className="primary"><small className="text-muted">Show Table</small></button>
                </a>
               </div>
             </CardHeader>
             <CardBody>
               <div className="chart-wrapper">
                 <Pie data={pie} />
               </div>
             </CardBody>
          </Card>
        </div>
        <div className="col-md-6">
        <Card>
            <CardHeader>
               MTD Aug 2019
               <div className="card-header-actions">
                 <a href="" className="card-header-action">
                 <button className="primary"><small className="text-muted">Show Table</small></button>
                </a>
               </div>
             </CardHeader>
             <CardBody>
               <div className="chart-wrapper">
                 <Pie data={pie1} />
               </div>
             </CardBody>
          </Card>
        </div>
      </Row>
      <Row>
        <div className="col-md-6">
        <Card>
            <CardHeader>
               YTD Aug 2018
               <div className="card-header-actions">
                 <a href="" className="card-header-action">
                   <button className="primary"><small className="text-muted">Show Table</small></button>
                </a>
               </div>
             </CardHeader>
             <CardBody>
               <div className="chart-wrapper">
                 <Pie data={pie} />
               </div>
             </CardBody>
          </Card>
        </div>
        <div className="col-md-6">
        <Card>
            <CardHeader>
               YTD Aug 2019
               <div className="card-header-actions">
                 <a href="" className="card-header-action">
                 <button className="primary"><small className="text-muted">Show Table</small></button>
                </a>
               </div>
             </CardHeader>
             <CardBody>
               <div className="chart-wrapper">
                 <Pie data={pie} />
               </div>
             </CardBody>
          </Card>
        </div>
      </Row>
      </div>
  }
}


export default Breadcrumbs;
