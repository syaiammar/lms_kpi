import React, { Component } from 'react';
import {Col, Row, Button} from 'reactstrap';
import {
  Link,
} from "react-router-dom";
import { Menu, Dropdown} from 'antd';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
const menu1 = (
  <Menu>
  <Menu.Item>
      <Link to="/kpi/department/traffic-management">
      <Button style={{backgroundColor:"#ffffff"}}>Traffic Management</Button>
      </Link>
  </Menu.Item>
  <SubMenu title="sub depart">
      <Menu.Item>
          <Link to="/kpi/department/traffic-management/traffic-area-head-west">
          <Button style={{backgroundColor:"#ffffff"}}>
              Traffic Area Head West
          </Button>
          </Link>
      </Menu.Item>
      <SubMenu title="sub depart">
      <Menu.Item>
          <Link to="/kpi/department/traffic-management/traffic-area-head-west/traffic-data-&amp;-ops-section">
          <Button style={{backgroundColor:"#ffffff"}}>
              Traffic Data &amp; Ops Section
          </Button>
          </Link>
      </Menu.Item>
      </SubMenu>
      <Menu.Item>
          <Link to="/kpi/department/traffic-management/traffic-area-head-east">
          <Button style={{backgroundColor:"#ffffff"}}>
              Traffic Area Head East
          </Button>
          </Link>
      </Menu.Item>
  </SubMenu>
  </Menu>
  );

  const menu2 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/toll-transaction-management">
        <Button style={{backgroundColor:"#ffffff"}}>Toll Transaction Management</Button>
        </Link>
    </Menu.Item>
    <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/toll-transaction-management/traffic-area-head-west/traffic-data-&amp;-ops-section">
            <Button style={{backgroundColor:"#ffffff"}}>
                Traffic Area Head West
            </Button>
            </Link>
        </Menu.Item>
        <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/maintenance-&amp;-Planning/engineer">
            <Button style={{backgroundColor:"#ffffff"}}>
                Traffic Data &amp; Ops Section
            </Button>
            </Link>
        </Menu.Item>
        </SubMenu>
        <Menu.Item>
            <Link to="/kpi/department/toll-transaction-management/traffic-area-head-east">
            <Button style={{backgroundColor:"#ffffff"}}>
                Traffic Area Head East
            </Button>
            </Link>
        </Menu.Item>
    </SubMenu>
    </Menu>
  );

  const menu3 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/maintenance-department-head-east">
        <Button style={{backgroundColor:"#ffffff"}}>Maintenance Department East </Button>
        </Link>
    </Menu.Item>
    <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/maintenance-department-head-east/civil-maintenance-section-head-east">
            <Button style={{backgroundColor:"#ffffff"}}>
                Civil Maintenance Section Head East
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/kpi/department/maintenance-department-head-east/m-&amp;-e-section-head-east">
            <Button style={{backgroundColor:"#ffffff"}}>
                M&amp;E Section Head East
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/kpi/department/maintenance-department-head-east/it">
            <Button style={{backgroundColor:"#ffffff"}}>
                IT
            </Button>
            </Link>
        </Menu.Item>
    </SubMenu>
    </Menu>
  );

  const menu4 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/maintenance-department-head-west">
        <Button style={{backgroundColor:"#ffffff"}}>Maintenance Department West </Button>
        </Link>
    </Menu.Item>
    <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/maintenance-department-head-west/civil-maintenance-section-head-west">
            <Button style={{backgroundColor:"#ffffff"}}>
                Civil Maintenance Section Head West
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/kpi/department/maintenance-department-head-west/m-&amp;-e-section-head-west">
            <Button style={{backgroundColor:"#ffffff"}}>
                M&amp;E Section Head West
            </Button>
            </Link>
        </Menu.Item>
    </SubMenu>
    </Menu>
  );

  const menu5 = (
    <Menu>
    <Link to="kpi/department/finance-department-head">
    <Menu.Item>
    <Button style={{backgroundColor:"#ffffff"}}>Finance Department Head</Button> 
    </Menu.Item>
    </Link>
    </Menu>
  );

  const menu6 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/hcgs-deparment-head">
        <Button style={{backgroundColor:"#ffffff"}}>HCGS Department Head </Button>
        </Link>
    </Menu.Item>
    <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/hcgs-deparment-head/hc-section-head">
            <Button style={{backgroundColor:"#ffffff"}}>
                HC Section Head
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/kpi/department/hcgs-deparment-head/gs-section-head">
            <Button style={{backgroundColor:"#ffffff"}}>
                GS Section Head
            </Button>
            </Link>
        </Menu.Item>
    </SubMenu>
    </Menu>
  );

  const menu7 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/asset-management-department-head">
        <Button style={{backgroundColor:"#ffffff"}}>Asset Management Department Head </Button>
        </Link>
    </Menu.Item>
    <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/asset-management-department-head/asset-management">
            <Button style={{backgroundColor:"#ffffff"}}>
                Asset Management
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/kpi/department/asset-management-department-head/data-asset-management">
            <Button style={{backgroundColor:"#ffffff"}}>
                Data Asset Management
            </Button>
            </Link>
        </Menu.Item>
    </SubMenu>
    </Menu>
  );

class Operation extends Component {
  
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row justify="center">
        <Col span={4}>
        <Dropdown.Button overlay={menu1}>
            Operation
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu2}>
            Operation
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu3}>
            Operation
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu4}>
            Operation
        </Dropdown.Button>
        </Col>
        </Row>
        <br></br>
        <Row type="flex" justify="space-around">
        <Col>
        <Dropdown.Button overlay={menu5}>
            Operation
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu6}>
            Operation
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu7}>
            Operation
        </Dropdown.Button>
        </Col>
        </Row>
      </div>
    );
  }

}

export default Operation;