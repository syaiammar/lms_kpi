import React, { Component } from 'react';
import "../Base/Tables/datatables/jquery.dataTables.css"
import {CardBody, Col, Row, table, Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleWarning() {
    this.setState({
      warning: !this.state.warning,
    });
  }

  // componentDidMount() {
  //   console.log(this.el);
  //   this.$el = $(this.el)
  //   this.$el.DataTable(
  //     {
  //       data: this.props.data,
  //       columns: [
  //         { title: "Email"},
  //         { title: "Name"},
  //         { title: "Role"},
  //         { title: "Action"}
  //       ]
  //     }
  //   )
  // }

  componentDidMount() {
    console.log(this.el);
    this.$el = $(this.el)
    this.$el.DataTable(
      {
        data: this.props.data,
        columns: [
          { title: "Email", data:"email"},
          { title: "Name", data:"name" },
          { title: "Role", data:"username" },
          { title: "Action", data:"action" }
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
              <br></br>
              <Col className="text-left">
                <Button color="warning" onClick={this.toggleWarning}>
                  <i className="fa fa-plus"></i>&nbsp;Invite User
                </Button>
              </Col>
              <Modal isOpen={this.state.warning} toggle={this.toggleWarning}
                className={'modal-warning ' + this.props.className}>
                <ModalHeader toggle={this.toggleWarning}>Invite User</ModalHeader>
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
                                  <option value="2">CariParkir</option>
                                  <option value="3">Finance</option>
                                  <option value="4">Mitra</option>
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
                  <Button color="warning" onClick={this.toggleWarning}>Submit</Button>{' '}
                  <Button color="secondary" onClick={this.toggleWarning}>Cancel</Button>
                </ModalFooter>
              </Modal>
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
