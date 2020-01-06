import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input, CardBody } from 'reactstrap';
import MUIDataTable from "mui-datatables";

class Setingan extends Component {

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
        ["larry@gmail.com", "Larry", "Manager", "CSV", "Lorem Ipsum"],
        ["berry@gmail.com", "Berry", "HR", "PDF", "Lorem Ipsum"],
        ["jerry@gmail.com", "Jerry", "Finance", "HTML", "Lorem Ipsum"],
        ["irawan@gmail.com", "Irawan", "Developer", "Excel", "Lorem Ipsum"],
        ["tomy@gmail.com", "Tomy", "Manager", "Image", "Lorem Ipsum"],
        ["alya@gmail.com", "Alya", "HR", "CSV", "Lorem Ipsum"],
        ["tama@gmail.com", "Tama", "Finance", "PDF", "Lorem Ipsum"],
        ["rizki@gmail.com", "Rizki", "Developer", "HTML", "Lorem Ipsum"],
        ["jhony@gmail.com", "Jhony", "Manager", "Excel", "Lorem Ipsum"],
        ["alex@gmail.com", "Alex", "HR", "Image", "Lorem Ipsum"],
        ["tom@gmail.com", "Tom", "Finance", "CSV", "Lorem Ipsum"],
        ["lucy@gmail.com", "Lucy", "Developer", "PDF", "Lorem Ipsum"],
        ["george@gmail.com", "George", "Manager", "HTML", "Lorem Ipsum"],
        ["owen@gmail.com", "Owen", "HR", "Excel", "Lorem Ipsum"],
        ["cristiano@gmail.com", "Cristiano", "Finance", "Image", "Lorem Ipsum"],
        ["ronaldo@gmail.com", "Ronaldo", "Developer", "CSV", "Lorem Ipsum"],
        ["kingz@gmail.com", "Kingz", "Manager", "PDF", "Lorem Ipsum"],
        ["quenz@gmail.com18", "Quenz", "HR", "HTML", "Lorem Ipsum"],
        ["hertz@gmail.com", "Hertz", "Finance", "Excel", "Lorem Ipsum"],
        ["percy@gmail.com", "Percy", "Developer", "Image", "Lorem Ipsum"]
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
        ["09/10/2019", "Markonah", "Eksport Report", "Report Settings"],
        ["09/10/2019", "Einsten", "Eksport Report", "Report Settings"],
        ["09/10/2019", "Nikola Tesla", "Eksport Report", "Report Settings"],
      ],
      divdep: [
        ["Finance","Accounting & Budeting","","Accounting"],
        ["Finance","Tax & Treasury","","Account Payable"],
        ["Finance","Tax & Treasury","","Financial Planning"],
        ["Finance","Tax & Treasury","","IT"],
        ["Human Capital & General Services (HCGS)","Human Capital Development","","Human Capital Development"],
        ["Human Capital & General Services (HCGS)","HCGS","","HC Support"],
        ["Human Capital & General Services (HCGS)","HCGS","","Industrial Relation"],
        ["Human Capital & General Services (HCGS)","HCGS","","Payroll, Recruitment, Compensation & Benefit"],
        ["Human Capital & General Services (HCGS)","HCGS","","General Services"],
        ["Human Capital & General Services (HCGS)","Corporate Communication PR & CSR","",""],
        ["Corporate Services & Business Development (CSBD)","","Corporate Services and Insurance",""],
        ["Corporate Services & Business Development (CSBD)","","Business Development",""],
        ["Corporate Services & Business Development (CSBD)","","","Legal & Corporate Secretariat Support"],
        ["GM Maintenance & Planning","Concession Monitoring Compliance & EHS","",""],
        ["GM Maintenance & Planning","Maintenance & Planning","Engineer",""],
        ["Secretary","","",""],        
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
        name: "Email",
        options: {
          filter: true,
        }
      },
      {
        label: "Name",
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
        name: "Departement",
        options: {
          filter: false,
        }
      },
      {
        name: "Jabatan",
        options: {
          filter: false,
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
                <Button color="primary" size="sm" onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)}><i className="icon-note icons"></i>&nbsp;Edit</Button>&nbsp;   
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
      responsive: 'stacked',
      onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
      onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
      onChangePage: currentPage => console.log('currentPage: ', currentPage)
    };
    return [<div>
      <Button color="primary" onClick={this.toggleWarning}>
        <i className="fa fa-plus"></i>&nbsp;Add User
          </Button>
      <Modal isOpen={this.state.warning} toggle={this.toggleWarning}
        className={'modal-primary ' + this.props.className}>
        <ModalHeader toggle={this.togglePrimary}>Add User</ModalHeader>
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
                        <Label htmlFor="ccmonth">Divisi</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">Finance</option>
                          <option value="2">Human Capital & General Services (HCGS)</option>
                          <option value="3">Corporate Services & Business Development (CSBD)</option>
                          <option value="4">GM Maintenance & Planning</option>
                          <option value="5">Secretary</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Departement</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">Accounting & Budeting</option>
                          <option value="2">Tax & Treasury</option>
                          <option value="3">Human Capital Development</option>
                          <option value="4">HCGS</option>
                          <option value="5">Corporate Communication PR & CSR</option>
                          <option value="6">Concession Monitoring Compliance & EHS</option>
                          <option value="7">Maintenance & Planning </option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Jabatan</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">Accounting</option>
                          <option value="2">Account Payable</option>
                          <option value="3">Financial Planning</option>
                          <option value="4">IT</option>
                          <option value="5">Human Capital Development</option>
                          <option value="6">HC Support</option>
                          <option value="7">Industrial Relation</option>
                          <option value="8">Payroll, Recruitment, Compensation & Benefit</option>
                          <option value="9">General Services</option>
                          <option value="10">Corporate Services and Insurance</option>
                          <option value="11">Business Development</option>
                          <option value="12">Legal & Corporate Secretariat Support </option>
                          <option value="13">Engineer</option>
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
      <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
        className={'modal-danger modal-sm ' + this.props.className}>
        <ModalHeader toggle={this.toggleDanger}>delete</ModalHeader>
        <ModalBody>
          Apakah anda yakin akan menghapus data dengan id : ... ?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.toggleDanger}>Yes</Button>{' '}
          <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <br></br><br></br>
      <MUIDataTable title={"list data user"} data={this.state.user} columns={columns} options={options} />
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
                <Button color="primary" size="sm" onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)}><i className="icon-note icons"></i>&nbsp;Edit</Button>&nbsp;     
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
      // {
      //   name: "action",
      //   options: {
      //     filter: false,
      //     sort: false,
      //     empty: true,
      //     customBodyRender: (value, tableMeta, updateValue) => {
      //       return (
      //         <div>
      //           {/* <button onClick={() => { const { data } = this.state; data.shift(); this.setState({ data }); }}> */}
      //           <Button color="primary" size="sm" onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)}><i className="icon-note icons"></i>&nbsp;Edit</Button>&nbsp;    
      //     <Button color="danger" size="sm" onClick={this.toggleDanger}><i className="icon-trash icons"></i>&nbsp;Hapus</Button>
      //         </div>
      //       );
      //     }
      //   }
      // },
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

  divdep() {
    const columns = [
      {
        name: "Division",
        id:"division",
        options: {
          filter: true,
        }
      },
      {
        name: "Department",
        id:"department",
        options: {
          filter: true,
        }
      },
      {
        name: "Sub-Dep1",
        id:"Sub-Dep1",
        options: {
          filter: false,
        }
      },
      {
        name: "Sub-Dep2",
        id:"Sub-Dep2",
        options: {
          filter: false,
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
    return [
    <div>
      <MUIDataTable title={"List Division and Departement"} data={this.state.divdep} columns={columns} options={options} />
    </div>
    ];
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
        <TabPane tabId="4">
          {this.divdep()}
        </TabPane>
      </>
    );
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  User
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Roles
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Audit Log
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => { this.toggle(0, '4'); }}
                >
                  Division and Departement
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }

}

export default Setingan;
