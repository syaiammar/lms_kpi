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
    <Link to="/kpi/department/corporate-services-&amp;-insurance">
    <Menu.Item>
    <Button style={{backgroundColor:"#ffffff"}}>Corporate Services &amp; Insurance</Button> 
    </Menu.Item>
    </Link>
    </Menu>
  );

  const menu2 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/business-development">
        <Button style={{backgroundColor:"#ffffff"}}>Business Development </Button>
        </Link>
    </Menu.Item>
    </Menu>
  );

  const menu3 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/legal-&-corporate-secretariat-support">
        <Button style={{backgroundColor:"#ffffff"}}>Legal &amp; Corporate Secretariat Support </Button>
        </Link>
    </Menu.Item>
    </Menu>
  );

class CSBD extends Component {
  
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row justify="center">
        <Col span={4}>
        <Dropdown.Button overlay={menu1}>
            CSBD
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu2}>
            CSBD
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu3}>
            CSBD
        </Dropdown.Button>
        </Col>
        </Row>
      </div>
    );
  }

}

export default CSBD;