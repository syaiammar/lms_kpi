import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import { Col, Row } from 'reactstrap';
import Highlighter from 'react-highlight-words';
import { CSVLink } from "react-csv";
import 'antd/dist/antd.css';

const data = [];
for (let i = 0; i < 11; i++) {
  data.push({
    no: i.toString(),
    no: `${i}`,  
    transactionid: `222`, 
    customer: `Umbrella Corporation`,
    partnername: `John Wick`,
    partnerowner: `Abstergo`,
    transactiondate: `31-01-2019`,
    orderprice: `90.000`,
    totalpayment: `200.000`,
    statusorder: `Complete`,
    statuspayment: `Working Cari Parkir Payment`,
    statusfraud: `yes`,
    commentfraud: ``,
  });
}

export default class CorporateData extends Component {

  state = {
    searchText: '',
    searchedColumn: '',
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
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
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
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

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
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
                <Row>
                  <Col md="12" className="d-none d-sm-inline-block">
                     <Button>
                        <CSVLink
                          filename={"Corporate Data.csv"}
                          data={data}
                        >
                          Download me
                          </CSVLink>
                     </Button>
                  </Col>
                </Row>
              <br></br>
              <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{x: 2000, y: 300 }}></Table>
          </Col>
        </Row>
      </div>
    );
  }
}