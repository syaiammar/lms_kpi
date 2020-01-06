import React, {Component} from 'react';
import { Button, ButtonToolbar, ButtonGroup, Card, CardBody, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import WidgetPartner from './WidgetPartner';
import Transaction2W from './Transaction2W';
import Reconcile2W from './Reconcile2W';
import Payment2W from './Payment2W';
import History2W from './History2W';
import Transaction4W from './Transaction4W';
import Reconcile4W from './Reconcile4W';
import Payment4W from './Payment4W';
import History4W from './History4W';
import CSTransaction from './CSTransaction';
import CSReconcile from './CSReconcile';
import CSPayment from './CSPayment';
import CSHistory from './CSHistory';

class Partner extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
      data:[ ],
    };
  }

  TabInside() {
    return (
        <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[1] === '1'}
                  onClick={() => { this.toggle(1, '1'); }}
                  >
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[1] === '2'}
                  onClick={() => { this.toggle(1, '2'); }}
                >
                  Transaction
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[1] === '3'}
                  onClick={() => { this.toggle(1, '3'); }}
                >
                  Reconcile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[1] === '4'}
                  onClick={() => { this.toggle(1, '4'); }}
                >
                  Payment
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[1] === '5'}
                  onClick={() => { this.toggle(1, '5'); }}
                >
                  History
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[1]}>
              {this.TabContent()}
            </TabContent>
          </Col>       
    )
  }

  TabInside2() {
    return (
        <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[2] === '1'}
                  onClick={() => { this.toggle(2, '1'); }}
                  >
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[2] === '2'}
                  onClick={() => { this.toggle(2, '2'); }}
                >
                  Transaction
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[2] === '3'}
                  onClick={() => { this.toggle(2, '3'); }}
                >
                  Reconcile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[2] === '4'}
                  onClick={() => { this.toggle(2, '4'); }}
                >
                  Payment
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[2] === '5'}
                  onClick={() => { this.toggle(2, '5'); }}
                >
                  History
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[2]}>
              {this.TabContent2()}
            </TabContent>
          </Col>       
    )
  }

  TabInside3() {
    return (
        <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '1'}
                  onClick={() => { this.toggle(3, '1'); }}
                  >
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '2'}
                  onClick={() => { this.toggle(3, '2'); }}
                >
                  Transaction
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '3'}
                  onClick={() => { this.toggle(3, '3'); }}
                >
                  Reconcile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '4'}
                  onClick={() => { this.toggle(3, '4'); }}
                >
                  Payment
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '5'}
                  onClick={() => { this.toggle(3, '5'); }}
                >
                  History
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[3]}>
              {this.TabContent3()}
            </TabContent>
          </Col>       
    )
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }


  TabContent() {
    return (
      <>
        <TabPane tabId="1">
        <div className="animated fadeIn">
    <Row>
        <Col xs="12" sm="6" lg="4">
        <WidgetPartner color="primary" variant="inverse" mainText="Total Uang yang Harus Dibayar" header="Rp.1.200.000"  />
        </Col>
        <Col xs="12" sm="6" lg="4">
        <WidgetPartner color="warning" variant="inverse" mainText="Total Uang yang Sudah Dibayar" header="Rp.2.200.000" />
        </Col>
        <Col xs="12" sm="6" lg="4">
        <WidgetPartner color="danger" variant="inverse" mainText="Jumlah Transaksi" header="Rp.3.200.000" smallText="">
        </WidgetPartner>
        </Col>
    </Row>
    <Row>
          <Col md="6">
          </Col>
    </Row>  
    <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Recent Report</CardTitle>
                    <div className="small text-muted">Oktober 2019</div>
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
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>    
        </div>
        </TabPane>
        <TabPane tabId="2">
            <div className="Tables"><Transaction2W data={this.data}></Transaction2W></div>
        </TabPane>
        <TabPane tabId="3">
            <div className="Tables"><Reconcile2W data={this.dataSet2}></Reconcile2W></div>
        </TabPane>
        <TabPane tabId="4">
            <div className="Tables"><Payment2W data={this.dataSet3}></Payment2W></div>
        </TabPane>
        <TabPane tabId="5">
            <div className="Tables"><History2W data={this.dataSet}></History2W></div>
        </TabPane>
      </>
    );
  }

  TabContent2() {
    return (
      <>
        <TabPane tabId="1">
        <div className="animated fadeIn">
    <Row>
        <Col xs="12" sm="6" lg="4">
        <WidgetPartner color="primary" variant="inverse" mainText="Total Uang yang Harus Dibayar" header="Rp.1.200.000"  />
        </Col>
        <Col xs="12" sm="6" lg="4">
        <WidgetPartner color="warning" variant="inverse" mainText="Total Uang yang Sudah Dibayar" header="Rp.2.200.000" />
        </Col>
        <Col xs="12" sm="6" lg="4">
        <WidgetPartner color="danger" variant="inverse" mainText="Jumlah Transaksi" header="Rp.3.200.000" smallText="">
        </WidgetPartner>
        </Col>
    </Row>
    <Row>
          <Col md="6">
          </Col>
    </Row>  
    <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Recent Report</CardTitle>
                    <div className="small text-muted">Oktober 2019</div>
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
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>    
        </div>
        </TabPane>
        <TabPane tabId="2">
            <div className="Tables"><Transaction4W data={this.dataSet}></Transaction4W></div>
        </TabPane>
        <TabPane tabId="3">
            <div className="Tables"><Reconcile4W data={this.dataSet2}></Reconcile4W></div>
        </TabPane>
        <TabPane tabId="4">
            <div className="Tables"><Payment4W data={this.dataSet3}></Payment4W></div>
        </TabPane>
        <TabPane tabId="5">
            <div className="Tables"><History4W data={this.dataSet}></History4W></div>
        </TabPane>
      </>
    );
  }

  TabContent3() {
    return (
      <>
        <TabPane tabId="1">
        <div className="animated fadeIn">
    <Row>
        <Col xs="12" sm="6" lg="4">
        <WidgetPartner color="primary" variant="inverse" mainText="Total Uang yang Harus Dibayar" header="Rp.1.200.000"  />
        </Col>
        <Col xs="12" sm="6" lg="4">
        <WidgetPartner color="warning" variant="inverse" mainText="Total Uang yang Sudah Dibayar" header="Rp.2.200.000" />
        </Col>
        <Col xs="12" sm="6" lg="4">
        <WidgetPartner color="danger" variant="inverse" mainText="Jumlah Transaksi" header="Rp.3.200.000" smallText="">
        </WidgetPartner>
        </Col>
    </Row>
    <Row>
          <Col md="6">
          </Col>
    </Row>  
    <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Recent Report</CardTitle>
                    <div className="small text-muted">Oktober 2019</div>
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
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>    
        </div>
        </TabPane>
        <TabPane tabId="2">
            <div className="Tables"><CSTransaction data={this.dataSet}></CSTransaction></div>
        </TabPane>
        <TabPane tabId="3">
        <div className="Tables"><CSReconcile data={this.dataSet2}></CSReconcile></div>
        </TabPane>
        <TabPane tabId="4">
            <div className="Tables"><CSPayment data={this.dataSet3}></CSPayment></div>
        </TabPane>
        <TabPane tabId="5">
            <div className="Tables"><CSHistory data={this.dataSet}></CSHistory></div>
        </TabPane>
      </>
    );
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
        {this.TabInside()}
        </TabPane>
        <TabPane tabId="2">
        {this.TabInside2()}
        </TabPane>
        <TabPane tabId="3">
        {this.TabInside3()}
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
                  2W
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  4W
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  CariService
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

  /*dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh"],
    [ "Garrett Winters", "Accountant", "Tokyo"],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh" ],
    [ "Airi Satou", "Accountant", "Tokyo"],
    [ "Tiger Nixon", "System Architect", "Edinburgh"],
    [ "Garrett Winters", "Accountant", "Tokyo"],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh" ],
    [ "Airi Satou", "Accountant", "Tokyo"],
    [ "Tiger Nixon", "System Architect", "Edinburgh"],
    [ "Garrett Winters", "Accountant", "Tokyo"],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh" ],
    [ "Airi Satou", "Accountant", "Tokyo"],
    [ "Tiger Nixon", "System Architect", "Edinburgh"],
    [ "Garrett Winters", "Accountant", "Tokyo"],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh" ],
    [ "Airi Satou", "Accountant", "Tokyo"],
    [ "Tiger Nixon", "System Architect", "Edinburgh"],
    [ "Garrett Winters", "Accountant", "Tokyo"],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh" ],
    [ "Airi Satou", "Accountant", "Tokyo"],
    [ "Brielle Williamson", "Integration Specialist", "New York"]
  ];

  dataSet2 = [
    [ "Administrator", "Administrator adalah orang / orang-orang yang bertugas untuk mengurusi hal-hal administrasi. Dalam dunia Internet, seorang administrator bertugas untuk mengelola hal-hal yang berhubungan dengan komputer"],
    [ "CariParkir", "Adalah sebuah Project Yang sedang kami coba kerjaken"],
    [ "Finance", "Keuangan mempelajari bagaimana cara mengetahui berbisnis individu, meningkatkan organisasi, mengalokasi, menggunakan sumber daya moneter dengan sejalannya waktu, dan juga menghitung risiko dalam menjalankan proyeknya. "],
    [ "Mitra", "Mitra adalah sebuah homonim karena arti-artinya memiliki ejaan dan pelafalan yang sama tetapi maknanya berbeda. Mitra memiliki arti dalam kelas nomina atau kata benda sehingga mitra dapat menyatakan nama dari seseorang, tempat, atau semua benda dan segala yang dibendakan."]
  ];

  dataSet3 = [
    [ "09/10/2019", "Heri Irawan", "Eksport Report", "Report Settings"],
    [ "09/10/2019", "Lorem Ipsum", "Eksport Report", "Report Settings"],
    [ "09/10/2019", "jon Doe", "Eksport Report", "Report Settings"],
    [ "09/10/2019", "Markoni", "Eksport Report", "Report Settings"],
    [ "09/10/2019", "Einsten", "Eksport Report", "Report Settings"],
    [ "09/10/2019", "Nikola Tesla", "Eksport Report", "Report Settings"]
  ];*/
}

export default Partner;