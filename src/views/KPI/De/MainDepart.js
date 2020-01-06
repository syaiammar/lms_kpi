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
    <Link to="/kpi/department/concession-monitoring-compliance-&amp;-ehs">
    <Menu.Item>
    <Button style={{backgroundColor:"#ffffff"}}>Concession Monitoring Compliance &amp; EHS</Button> 
    </Menu.Item>
    </Link>
    </Menu>
  );

  const menu2 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/maintenance-&amp;-Planning">
        <Button style={{backgroundColor:"#ffffff"}}>Maintenance &amp; Planning </Button>
        </Link>
    </Menu.Item>
    <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/maintenance-&amp;-Planning/engineer">
            <Button style={{backgroundColor:"#ffffff"}}>
                Engineer
            </Button>
            </Link>
        </Menu.Item>
    </SubMenu>
    </Menu>
  );

class MainDepart extends Component {
  
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row justify="center">
        <Col span={4}>
        <Dropdown.Button overlay={menu1}>
            Maintenance &amp; Planning
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu2}>
            Maintenance &amp; Planning
        </Dropdown.Button>
        </Col>
        </Row>
      </div>
    );
  }

}

export default MainDepart;