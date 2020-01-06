import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import { Card, CardBody,ButtonGroup,ButtonToolbar,CardTitle,Col,Row,} from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
 
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandDanger = getStyle('--danger')

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 500));
  data2.push(random(80, 500));
  data3.push(random(110,500));
}


const mainChart = {
  labels: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
  datasets: [
    {
      label: 'Jumlah Kecelakaan Tunggal & Kecelakaan dengan Kendaraan Lain',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'Kondisi Korban',
      backgroundColor: hexToRgba(brandSuccess, 10),
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'Penyebab Kecelakaan',
      backgroundColor: hexToRgba(brandDanger, 10),
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
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
          stepSize: Math.ceil(500 / 5),
          max: 500,
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

const data = [
  {
    years: 'Kecelakaan Tunggal',
    month1: '87',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '87',
  },
  {
    years: 'Kecelakaan Dengan Kendaraan Lain',
    month1: '31',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '31',
  },
];

const data10 = [
  {
    years: 'Luka Berat',
    month1: '113',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '113',
  },
  {
    years: 'Luka Ringan',
    month1: '31',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '31',
  },
  {
    years: 'Meninggal Dunia',
    month1: '10',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '10',
  },
];

const data20 = [
  {
    years: 'Mengantuk',
    month1: '96',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '96',
  },
  {
    years: 'Pecah Ban',
    month1: '22',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '22',
  },
  {
    years: 'Rem Blong',
    month1: '0',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '0',
  },
  {
    years: 'Jalan Rusak',
    month1: '0',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '0',
  },
  {
    years: 'Menabrak Hewan',
    month1: '0',
    month2: '-',
    month3: '-',
    month4: '-',
    month5: '-',
    month6: '-',
    month7: '-',
    month8: '-',
    month9: '-',
    month10: '-',
    month11: '-',
    month12: '-',
    total: '0',
  },
];

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
        title: 'Jumlah Kecelakaan Tunggal & Kecelakaan dengan Kendaraan Lain',
      children: [
          {
            title: '2017',
            dataIndex: 'years',
            key: 'years',
            width: 275,
          },
      {
        title: 'Jan',
        dataIndex: 'month1',
        key: 'month1',
      },
      {
        title: 'Feb',
        dataIndex: 'month2',
        key: 'month2',
      },
      {
        title: 'Mar',
        dataIndex: 'month3',
        key: 'month3',
      },
      {
        title: 'Apr',
        dataIndex: 'month4',
        key: 'month4',
      },
      {
        title: 'May',
        dataIndex: 'month5',
        key: 'month5',
      },
      {
        title: 'Jun',
        dataIndex: 'month6',
        key: 'month6',
      },
      {
        title: 'Jul',
        dataIndex: 'month7',
        key: 'month7',
      },
      {
        title: 'Aug',
        dataIndex: 'month8',
        key: 'month8',
      },
      {
        title: 'Sept',
        dataIndex: 'month9',
        key: 'month9',
      },
      {
        title: 'Oct',
        dataIndex: 'month10',
        key: 'month10',
      },{
        title: 'Nov',
        dataIndex: 'month11',
        key: 'month11',
      },
      {
        title: 'Dec',
        dataIndex: 'month12',
        key: 'month12',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      },
      ],
      },
    ];

    const columns1 = [
      {
        title: 'Kondisi Korban',
      children: [
          {
            title: '2017',
            dataIndex: 'years',
            key: 'years',
            width: 275,
          },
      {
        title: 'Jan',
        dataIndex: 'month1',
        key: 'month1',
      },
      {
        title: 'Feb',
        dataIndex: 'month2',
        key: 'month2',
      },
      {
        title: 'Mar',
        dataIndex: 'month3',
        key: 'month3',
      },
      {
        title: 'Apr',
        dataIndex: 'month4',
        key: 'month4',
      },
      {
        title: 'May',
        dataIndex: 'month5',
        key: 'month5',
      },
      {
        title: 'Jun',
        dataIndex: 'month6',
        key: 'month6',
      },
      {
        title: 'Jul',
        dataIndex: 'month7',
        key: 'month7',
      },
      {
        title: 'Aug',
        dataIndex: 'month8',
        key: 'month8',
      },
      {
        title: 'Sept',
        dataIndex: 'month9',
        key: 'month9',
      },
      {
        title: 'Oct',
        dataIndex: 'month10',
        key: 'month10',
      },{
        title: 'Nov',
        dataIndex: 'month11',
        key: 'month11',
      },
      {
        title: 'Dec',
        dataIndex: 'month12',
        key: 'month12',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      },
      ],
      },
    ];

    const columns2 = [
      {
        title: 'Penyebab Kecelakaan',
      children: [
          {
            title: '2017',
            dataIndex: 'years',
            key: 'years',
            width: 275,
          },
      {
        title: 'Jan',
        dataIndex: 'month1',
        key: 'month1',
      },
      {
        title: 'Feb',
        dataIndex: 'month2',
        key: 'month2',
      },
      {
        title: 'Mar',
        dataIndex: 'month3',
        key: 'month3',
      },
      {
        title: 'Apr',
        dataIndex: 'month4',
        key: 'month4',
      },
      {
        title: 'May',
        dataIndex: 'month5',
        key: 'month5',
      },
      {
        title: 'Jun',
        dataIndex: 'month6',
        key: 'month6',
      },
      {
        title: 'Jul',
        dataIndex: 'month7',
        key: 'month7',
      },
      {
        title: 'Aug',
        dataIndex: 'month8',
        key: 'month8',
      },
      {
        title: 'Sept',
        dataIndex: 'month9',
        key: 'month9',
      },
      {
        title: 'Oct',
        dataIndex: 'month10',
        key: 'month10',
      },{
        title: 'Nov',
        dataIndex: 'month11',
        key: 'month11',
      },
      {
        title: 'Dec',
        dataIndex: 'month12',
        key: 'month12',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      },
      ],
      },
    ];
    return <div>
      <Table columns={columns} dataSource={data} />
      <Table columns={columns1} dataSource={data10} />
      <Table columns={columns2} dataSource={data20} />
      <Card>
        <CardBody>
          <Row>
            <Col sm="5">
              <CardTitle className="mb-0">Accident</CardTitle>
              <div className="small text-muted">2017</div>
            </Col>
            <Col sm="7" className="d-none d-sm-inline-block">
              <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
              <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                {/* <ButtonGroup className="mr-3" aria-label="First group">
                  <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                  <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                  <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                </ButtonGroup> */}
              </ButtonToolbar>
            </Col>
          </Row>
          <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
            <Line data={mainChart} options={mainChartOpts} height={300} />
          </div>
        </CardBody>
      </Card>
    </div>
  }
}


export default Breadcrumbs;