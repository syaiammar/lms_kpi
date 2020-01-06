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
    <Link to="/kpi/department/human-capital-development">
    <Menu.Item>
    <Button style={{backgroundColor:"#ffffff"}}>Human Capital Development</Button> 
    </Menu.Item>
    </Link>
    <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/human-capital-development/human-capital-development">
            <Button style={{backgroundColor:"#ffffff"}}>
                Human Capital Development
            </Button>
            </Link>
        </Menu.Item>
    </SubMenu>
    </Menu>
  );

  const menu2 = (
    <Menu>
    <Link to="/kpi/department/hcgs">
    <Menu.Item>
    <Button style={{backgroundColor:"#ffffff"}}>HCGS</Button> 
    </Menu.Item>
    </Link>
    <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/hcgs/hc-support">
            <Button style={{backgroundColor:"#ffffff"}}>
                HC Support
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/kpi/department/hcgs/industrial-relation">
            <Button style={{backgroundColor:"#ffffff"}}>
                Industrial Relation
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/kpi/department/hcgs/payroll-recruitment-compensation-&amp;-benefit">
            <Button style={{backgroundColor:"#ffffff"}}>
                Payroll, Recruitment, Compensation, &amp; Benefit
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/kpi/department/hcgs/general-services">
            <Button style={{backgroundColor:"#ffffff"}}>
                General Services
            </Button>
            </Link>
        </Menu.Item>
    </SubMenu>
    </Menu>
  );

  const menu3 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/corporate-communication-pr-&amp;-csr">
        <Button style={{backgroundColor:"#ffffff"}}>Corporate Communication PR &amp; CSR </Button>
        </Link>
    </Menu.Item>
    </Menu>
  );

class HCGS extends Component {
  
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row justify="center">
        <Col span={4}>
        <Dropdown.Button overlay={menu1}>
            HCGS
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu2}>
            HCGS
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu3}>
            HCGS
        </Dropdown.Button>
        </Col>
        </Row>
      </div>
    );
  }

}

export default HCGS;