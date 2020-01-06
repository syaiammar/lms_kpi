import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import {CardBody, Col, Row, table} from 'reactstrap';

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Roles extends Component {


  componentDidMount() {
    console.log(this.el);
    this.$el = $(this.el)
    this.$el.DataTable(
      {
        data: this.props.data,
        columns: [
          { title: "Roles" },
          { title: "Description" }
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
              <CardBody>
                <table class="table table-striped table-bordered" width="100%" ref={el => this.el = el} >

                </table>
              </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}
