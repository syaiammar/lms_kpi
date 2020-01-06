import React, { Component } from 'react';
import "./datatables/jquery.dataTables.css"
import { Card, CardBody, CardHeader, Col, Row, table } from 'reactstrap';

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Isi extends Component {

  componentDidMount() {
    console.log(this.el);
    this.$el = $(this.el)
    this.$el.DataTable(
        {
            data: this.props.data,
            columns: [
                {title:"Name"},
                {title:"Position"},
                {title:"Office"},
                {title:"Extn."},
                {title:"Start date"},
                {title:"Salary"},
            ]
        }
    )
}

componentWillMount() {

}

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Striped Table
              </CardHeader>
              <CardBody>
              <table class="table table-striped table-bordered" width="100%" ref={el => this.el = el} >
                  
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
