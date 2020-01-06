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
    <Link to="/kpi/department/accounting-&amp;-budgeting">
    <Menu.Item>
    <Button style={{backgroundColor:"#ffffff"}}>Accounting &amp; Budgeting</Button> 
    </Menu.Item>
    </Link>
    <SubMenu title="sub depart">
      <Menu.Item>
        <Link to="/kpi/department/accounting-&amp;-budgeting/accounting">
        <Button style={{backgroundColor:"#ffffff"}}>Accounting</Button>
        </Link>
      </Menu.Item>
    </SubMenu>
    </Menu>
  );

  const menu2 = (
    <Menu>
    <Menu.Item>
        <Link to="/kpi/department/tax-&amp;-treasury">
        <Button style={{backgroundColor:"#ffffff"}}>Tax &amp; Treasury </Button>
        </Link>
    </Menu.Item>
    <SubMenu title="sub depart">
        <Menu.Item>
            <Link to="/kpi/department/tax-&amp;-treasury/account-payable">
            <Button style={{backgroundColor:"#ffffff"}}>
                Account Payable
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/kpi/department/tax-&amp;-treasury/financial-planning">
            <Button style={{backgroundColor:"#ffffff"}}>
             Financial Plannning
            </Button>
            </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/kpi/department/tax-&amp;-treasury/it">
          <Button style={{backgroundColor:"#ffffff"}}>
            IT
          </Button>
          </Link>
        </Menu.Item>
    </SubMenu>
    </Menu>
  );

class Finance extends Component {
  
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row justify="center">
        <Col span={4}>
        <Dropdown.Button overlay={menu1}>
            Finance
        </Dropdown.Button>
        </Col>

        <Col span={8} offset={8}>
        <Dropdown.Button overlay={menu2}>
            Finance
        </Dropdown.Button>
        </Col>
        </Row>
      </div>
    );
  }

}

export default Finance;