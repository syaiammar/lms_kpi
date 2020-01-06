import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import { Card, CardBody,
  ButtonGroup,
  ButtonToolbar,
  CardHeader,
  CardTitle,
  Col,
  Row,
  } from 'reactstrap';
import { Line,Bar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

const bar = {
  labels: ['FY 2017 Actual', 'FY 2018 Actual', 'YTD Aug 2019 Actual', '2019 OL 1', '2019 OL 2', 'June', 'July'],
  datasets: [
    {
      label: 'Note',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.4)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const apiBaseUrl = "http://localhost:5000/api/";
 
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandDanger = getStyle('--danger')

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [50,60,80,100,120];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(data3);
}


const mainChart = {
  labels: ['Januari','Februari','maret','april','mei','juni','juli','agustus','september','oktober','november','desember'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};
const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

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
        width: '30%',
        ...this.getColumnSearchProps('month'),
      },
      {
        title: '2019',
        dataIndex: 'da',
        key: 'da',
        width: '20%',
        ...this.getColumnSearchProps('da'),
      },
      {
        title: 'OL2',
        dataIndex: 'ol2',
        key: 'ol2',
        ...this.getColumnSearchProps('ol2'),
      },
      {
        title: 'Act. vs OL2',
        dataIndex: 'aol',
        key: 'aol',
        ...this.getColumnSearchProps('aol'),
      },
      {
        title: '2018',
        dataIndex: 'di',
        key: 'di',
        ...this.getColumnSearchProps('di'),
      },
      {
        title: 'Act. vs LY',
        dataIndex: 'aly',
        key: 'aly',
        ...this.getColumnSearchProps('aly'),
      },
    ];
    return <div>
          <Row>
            <Col sm="5">
              <CardTitle className="mb-0">Full Route Equivalente</CardTitle>
            </Col>
            <Col sm="7" className="d-none d-sm-inline-block">
              <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
              <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-3" aria-label="First group">
                  <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                  <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                  <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col md="12">
            <Card>
              <CardHeader>
                Grafik Total Data, Daily Revenue, Daily Traffic Volume, Average Vehicle KM
              <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          </Row>
          <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
            <Line data={mainChart} options={mainChartOpts} height={300} />
          </div>
    </div>
  }
}


export default Breadcrumbs;