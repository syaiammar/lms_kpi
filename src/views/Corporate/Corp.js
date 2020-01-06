import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table, Menu, Dropdown, Button, Icon, message } from 'antd';
import {Progress,} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

function handleMenuClick(e) {
  message.info('Show Chart');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
    <Icon type="pie-chart" />
      Pie Chart
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="bar-chart" />
      Bar Chart
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="line-chart" />
      Line Chart
    </Menu.Item>
  </Menu>
);
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
  labels: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: hexToRgba(brandInfo, 12),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'Expenses',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'Other Income',
      backgroundColor: 'transparent',
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

// const menu = (
//   <Menu>
//     <Menu.Item>Action 1</Menu.Item>
//     <Menu.Item>Action 2</Menu.Item>
//   </Menu>
// );

  const expandedRowRender = () => {

    const data = [
      ]
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: 'KPI', dataIndex: 'kpi', key: 'kpi' },
    { title: 'Weight', dataIndex: 'weight', key: 'weight' },
    { title: 'Target', dataIndex: 'target', key: 'target' },
    { title: 'Achievement', dataIndex: 'ach', key: 'ach' },
    { title: 'Percentage', dataIndex: 'percen', key: 'percen' },
    { title: 'Total', dataIndex: 'total', key: 'total' },
    { title: '', key: 'operation', render: () => <a><Dropdown overlay={menu}>
    <Button>
      Chart <Icon type="down" />
    </Button>
  </Dropdown></a> },
  ];

const data = [
{
  key: i,
      kpi: 'Revenue',
      weight: '22%',
      target: '2%',
      ach: '1,5T',
      percen: '17%',
      total: '39%',
  },
  {
    key: i,
        kpi: 'Expenses',
        weight: '22%',
        target: '-3%',
        ach: '2,5T',
        percen: '9%',
        total: '28%',
    },
    {
      key: i,
          kpi: 'Other Income',
          weight: '44%',
          target: '5%',
          ach: '3,5T',
          percen: '5%',
          total: '54%',
      }
]
 
class Corp extends Component {
  state = {
    searchText: '',
  };

  render() {
    return <div>
    <Progress segmentColors={["rgba(75,192,192,1)", "rgba(75,192,192,0.4)"]} value={30.5}>30.5%</Progress><br />
      <Table
      className="components-table-demo-nested"
      columns={columns}
      expandedRowRender={expandedRowRender}
      dataSource={data}
    />
      {/* <Card>
        <CardBody>
          <Row>
            <Col sm="5">
              <CardTitle className="mb-0">YTD KPI Achievment</CardTitle>
              <div className="small text-muted">Desember 2019</div>
            </Col>
            <Col sm="7" className="d-none d-sm-inline-block">
              <Button segmentColors={["rgba(75,192,192,1)", "rgba(75,192,192,0.4)"]} className="float-right"><i className="icon-cloud-download"></i></Button>
              <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-3" aria-label="First group">
                  <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                  <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                  <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
            <Line data={mainChart} options={mainChartOpts} height={300} />
          </div>
        </CardBody>
      </Card> */}
    </div>
  }
}


export default Corp;