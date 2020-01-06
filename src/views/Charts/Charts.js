import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input, CardBody } from 'reactstrap';
import MUIDataTable from "mui-datatables";

class Settings extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
      activeTab: new Array(4).fill('1'),
      dataSet: [
      ],
      user: [
        ["1", "MoM_Astra_Infra_KPI_Dashboard_08-11-2019", "Manager", "CSV", "Lorem Ipsum"],
        ["2", "MoM_Astra_Infra_KPI_Dashboard_09-11-2019", "HR", "PDF", "Lorem Ipsum"],
        ["3", "MoM_Astra_Infra_KPI_Dashboard_10-11-2019", "Finance", "HTML", "Lorem Ipsum"],
        ["4", "MoM_Astra_Infra_KPI_Dashboard_11-11-2019", "Developer", "Excel", "Lorem Ipsum"],
        ["5", "MoM_Astra_Infra_KPI_Dashboard_12-11-2019", "Manager", "Image", "Lorem Ipsum"],
        ["6", "MoM_Astra_Infra_KPI_Dashboard_13-11-2019", "HR", "CSV", "Lorem Ipsum"],
        ["7", "MoM_Astra_Infra_KPI_Dashboard_14-11-2019", "Finance", "PDF", "Lorem Ipsum"],
        ["8", "MoM_Astra_Infra_KPI_Dashboard_15-11-2019", "Developer", "HTML", "Lorem Ipsum"],
        ["9", "MoM_Astra_Infra_KPI_Dashboard_16-11-2019", "Manager", "Excel", "Lorem Ipsum"],
        ["10", "MoM_Astra_Infra_KPI_Dashboard_17-11-2019", "HR", "Image", "Lorem Ipsum"],
        ["11", "MoM_Astra_Infra_KPI_Dashboard_18-11-2019", "Finance", "CSV", "Lorem Ipsum"],
        ["12", "MoM_Astra_Infra_KPI_Dashboard_19-11-2019", "Developer", "PDF", "Lorem Ipsum"],
        ["13", "MoM_Astra_Infra_KPI_Dashboard_20-11-2019", "Manager", "HTML", "Lorem Ipsum"],
        ["14", "MoM_Astra_Infra_KPI_Dashboard_21-11-2019", "HR", "Excel", "Lorem Ipsum"],
        ["15", "MoM_Astra_Infra_KPI_Dashboard_22-11-2019", "Finance", "Image", "Lorem Ipsum"],
        ["16", "MoM_Astra_Infra_KPI_Dashboard_23-11-2019", "Developer", "CSV", "Lorem Ipsum"],
        ["17", "MoM_Astra_Infra_KPI_Dashboard_24-11-2019", "Manager", "PDF", "Lorem Ipsum"],
        ["18", "MoM_Astra_Infra_KPI_Dashboard_25-11-2019", "HR", "HTML", "Lorem Ipsum"],
        ["19", "MoM_Astra_Infra_KPI_Dashboard_26-11-2019", "Finance", "Excel", "Lorem Ipsum"],
        ["20", "MoM_Astra_Infra_KPI_Dashboard_27-11-2019", "Developer", "Image", "Lorem Ipsum"]
      ],
      roles: [
        ["Administrator", "Adalah sebuah Project Yang sedang kami coba kerjaken "],
        ["Corporate", "Adalah sebuah Project Yang sedang kami coba kerjaken"],
        ["Divisi", "Adalah sebuah Project Yang sedang kami coba kerjaken"],
        ["Departement", "Adalah sebuah Project Yang sedang kami coba kerjaken"]
      ],
      log: [
        ["09/10/2019", "Syai ammar", "Eksport Report", "Report Settings"],
        ["09/10/2019", "Lorem Ipsum", "Eksport Report", "Report Settings"],
        ["09/10/2019", "jon Doe", "Eksport Report", "Report Settings"],
        ["09/10/2019", "Markoni", "Eksport Report", "Report Settings"],
        ["09/10/2019", "Einsten", "Eksport Report", "Report Settings"],
        ["09/10/2019", "Nikola Tesla", "Eksport Report", "Report Settings"],
      ]
    };
  }

  toggleWarning() {
    console.log("toggleWarning dipanggil");
    this.setState({
      warning: !this.state.warning,
    });
  }
  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
  }
  handleClick(id) {
    console.log(id);
    this.toggleWarning();
  }

  user() {
    const columns = [
      {
        name: "No",
        options: {
          filter: true,
        }
      },
      {
        label: "File Name",
        name: "Title",
        options: {
          filter: true,
        }
      },
      {
        name: "Division",
        options: {
          filter: false,
        }
      },
      {
        name: "Type",
        options: {
          filter: true,
        }
      },
      {
        name: "Detail",
        options: {
          filter: true,
          sort: false,
        }
      },
      {
        name: "Action",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>
                {/* <button onClick={() => { const { data } = this.state; data.shift(); this.setState({ data }); }}> */}
               
          <Button color="primary" size="sm" onClick={this.toggleDanger}><i className="cui-cloud-download icons"></i>&nbsp;Download</Button>
              </div>
            );
          }
        }
      },
    ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
      onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
      onChangePage: currentPage => console.log('currentPage: ', currentPage)
    };
    return [<div>
      <Button color="primary" onClick={this.toggleWarning}>
        <i className="fa fa-plus"></i>&nbsp;Add Data
          </Button>
      <Modal isOpen={this.state.warning} toggle={this.toggleWarning}
        className={'modal-primary ' + this.props.className}>
        <ModalHeader toggle={this.toggleWarning}>Add Data</ModalHeader>
        <ModalBody>
          <div className="animated fadeIn">
            <Row>
              <Col xs="12" sm="12">
                <CardBody>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder="Enter your name" required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccnumber">Email</Label>
                        <Input type="email" id="email" placeholder="Enter your email" required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Role</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">Administrator</option>
                          <option value="2">Corporate</option>
                          <option value="3">Divisi</option>
                          <option value="4">Departement</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="name">Password</Label>
                        <Input type="password" id="password" placeholder="Enter your password" required />
                      </FormGroup>
                    </Col>
                  </Row><Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="name">Confirm Password</Label>
                        <Input type="password" id="co-password" placeholder="Enter your password again" required />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleWarning}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.toggleWarning}>Cancel</Button>
        </ModalFooter>
      </Modal>
      {/* <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
        className={'modal-danger modal-sm ' + this.props.className}>
        <ModalHeader toggle={this.toggleDanger}>delete</ModalHeader>
        <ModalBody>
          Apakah anda yakin akan menghapus data dengan id : ... ?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.toggleDanger}>Yes</Button>{' '}
          <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
      <br></br><br></br>
      <MUIDataTable title={"Table Operational Data"} data={this.state.user} columns={columns} options={options} />
    </div>
    ];
  }

  role() {
    const columns = [
      {
        name: "Roles",
        options: {
          filter: true,
        }
      },
      {
        label: "Description",
        name: "desc",
        options: {
          filter: true,
        }
      },
      {
        name: "action",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>
                {/* <button onClick={() => { const { data } = this.state; data.shift(); this.setState({ data }); }}> */}
                
          <Button color="primary" size="sm" onClick={this.toggleDanger}><i className="glyphicon glyphicon-save"></i>&nbsp;Simpan</Button>
              </div>
            );
          }
        }
      },
    ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
      onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
      onChangePage: currentPage => console.log('currentPage: ', currentPage)
    };
    return [<MUIDataTable title={"list data roles"} data={this.state.roles} columns={columns} options={options} />];
  }

  log() {
    const columns = [
      {
        label: "Data Change",
        name: "datec",
        options: {
          filter: true,
        }
      },
      {
        label: "User",
        name: "user",
        options: {
          filter: true,
        }
      },
      {
        label: "Event",
        name: "event",
        options: {
          filter: true,
        }
      },
      {
        label: "Name",
        name: "name",
        options: {
          filter: true,
        }
      },
      {
        name: "action",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>
                {/* <button onClick={() => { const { data } = this.state; data.shift(); this.setState({ data }); }}> */}
                
          <Button color="danger" size="sm" onClick={this.toggleDanger}><i className="icon-trash icons"></i>&nbsp;Hapus</Button>
              </div>
            );
          }
        }
      },
    ];
    const options = {
      filter: true,
      filterType: 'dropdown',
      onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
      onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
      onChangePage: currentPage => console.log('currentPage: ', currentPage)
    };
    return [<MUIDataTable title={"list data log"} data={this.state.log} columns={columns} options={options} />];
  }


  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          {this.user()}
        </TabPane>
        <TabPane tabId="2">
          {this.role()}
        </TabPane>
        <TabPane tabId="3">
          {this.log()}
        </TabPane>
      </>
    );
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
            
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }

}

export default Settings;





// import React, { Component } from 'react';
// import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
// import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

// const line = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//   ],
// };

// const bar = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//   ],
// };

// const doughnut = {
//   labels: [
//     'Red',
//     'Green',
//     'Yellow',
//   ],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//       ],
//       hoverBackgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//       ],
//     }],
// };

// const radar = {
//   labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(179,181,198,0.2)',
//       borderColor: 'rgba(179,181,198,1)',
//       pointBackgroundColor: 'rgba(179,181,198,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(179,181,198,1)',
//       data: [65, 59, 90, 81, 56, 55, 40],
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       pointBackgroundColor: 'rgba(255,99,132,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(255,99,132,1)',
//       data: [28, 48, 40, 19, 96, 27, 100],
//     },
//   ],
// };

// const pie = {
//   labels: [
//     'Red',
//     'Green',
//     'Yellow',
//   ],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//       ],
//       hoverBackgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//       ],
//     }],
// };

// const polar = {
//   datasets: [
//     {
//       data: [
//         11,
//         16,
//         7,
//         3,
//         14,
//       ],
//       backgroundColor: [
//         '#FF6384',
//         '#4BC0C0',
//         '#FFCE56',
//         '#E7E9ED',
//         '#36A2EB',
//       ],
//       label: 'My dataset' // for legend
//     }],
//   labels: [
//     'Red',
//     'Green',
//     'Yellow',
//     'Grey',
//     'Blue',
//   ],
// };

// const options = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false
// }

// class Charts extends Component {
//   render() {
//     return (
//       <div className="animated fadeIn">
//         <CardColumns className="cols-2">
//           <Card>
//             <CardHeader>
//               Line Chart
//               <div className="card-header-actions">
//                 <a href="http://www.chartjs.org" className="card-header-action">
//                   <small className="text-muted">docs</small>
//                 </a>
//               </div>
//             </CardHeader>
//             <CardBody>
//               <div className="chart-wrapper">
//                 <Line data={line} options={options} />
//               </div>
//             </CardBody>
//           </Card>
//           <Card>
//             <CardHeader>
//               Bar Chart
//               <div className="card-header-actions">
//                 <a href="http://www.chartjs.org" className="card-header-action">
//                   <small className="text-muted">docs</small>
//                 </a>
//               </div>
//             </CardHeader>
//             <CardBody>
//               <div className="chart-wrapper">
//                 <Bar data={bar} options={options} />
//               </div>
//             </CardBody>
//           </Card>
//           <Card>
//             <CardHeader>
//               Doughnut Chart
//               <div className="card-header-actions">
//                 <a href="http://www.chartjs.org" className="card-header-action">
//                   <small className="text-muted">docs</small>
//                 </a>
//               </div>
//             </CardHeader>
//             <CardBody>
//               <div className="chart-wrapper">
//                 <Doughnut data={doughnut} />
//               </div>
//             </CardBody>
//           </Card>
//           <Card>
//             <CardHeader>
//               Radar Chart
//               <div className="card-header-actions">
//                 <a href="http://www.chartjs.org" className="card-header-action">
//                   <small className="text-muted">docs</small>
//                 </a>
//               </div>
//             </CardHeader>
//             <CardBody>
//               <div className="chart-wrapper">
//                 <Radar data={radar} />
//               </div>
//             </CardBody>
//           </Card>
//           <Card>
//             <CardHeader>
//               Pie Chart
//               <div className="card-header-actions">
//                 <a href="http://www.chartjs.org" className="card-header-action">
//                   <small className="text-muted">docs</small>
//                 </a>
//               </div>
//             </CardHeader>
//             <CardBody>
//               <div className="chart-wrapper">
//                 <Pie data={pie} />
//               </div>
//             </CardBody>
//           </Card>
//           <Card>
//             <CardHeader>
//               Polar Area Chart
//               <div className="card-header-actions">
//                 <a href="http://www.chartjs.org" className="card-header-action">
//                   <small className="text-muted">docs</small>
//                 </a>
//               </div>
//             </CardHeader>
//             <CardBody>
//               <div className="chart-wrapper">
//                 <Polar data={polar} options={options}/>
//               </div>
//             </CardBody>
//           </Card>
//         </CardColumns>
//       </div>
//     );
//   }
// }

// export default Charts;
