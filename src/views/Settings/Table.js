
import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '1',
    no: '1',
    file: 'MoM Astra Digital 15-10-2019',
    type: 'CSV',
    detail: 'Keterangan',
    action: 'View / Download'
  },
  {
    key: '2',
    no: '2',
    file: 'MoM Astra Digital 14-10-2019',
    type: 'Excel',
    detail: 'Keterangan',
    action: 'View / Download'
  },
  {
    key: '3',
    no: '3',
    file: 'MoM Astra Digital 13-10-2019',
    type: 'PDF',
    detail: 'Keterangan',
    action: 'View / Download'
  },
  {
    key: '4',
    no: '4',
    file: 'MoM Astra Digital 12-10-2019',
    type: 'HTML',
    detail: 'Keterangan',
    action: 'View / Download'
  },
  {
    key: '5',
    no: '5',
    file: 'MoM Astra Digital 11-10-2019',
    type: 'Image',
    detail: 'Keterangan',
    action: 'View / Download'
  },
];

class App extends React.Component {
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
        key: '1',
        width: '10%',
        ...this.getColumnSearchProps('no'),
      },
      {
        title: 'File',
        dataIndex: 'file',
        key: '2',
        width: '30%',
        ...this.getColumnSearchProps('file'),
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: '3',
        ...this.getColumnSearchProps('type'),
      },
      {
        title: 'Detail',
        dataIndex: 'detail',
        key: '4',
        ...this.getColumnSearchProps('detail'),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: '5',
        // ...this.getColumnSearchProps('action'),
      },
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}

export default App;
          