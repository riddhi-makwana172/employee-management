import React, { useState } from "react";
import { Container, Card, Row, Col, Button ,Modal} from "react-bootstrap";
import {
  BootstrapTable,
  TableHeaderColumn,
} from "react-bootstrap-table";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const handleClose = () => {
    setShow(false);
    setId();
  };
  const handleShow = (row) => {
    setShow(true);
    setId(row.id);
  };

  const handleDelete = () => {
    dispatch(deleteEmployee(id)).then(()=>{
      setShow(false)
      setId()
    });
  };

  const { employeeList } = useSelector((state) => state);

  const cellButton = (cell, row, enumObject, rowIndex) => {
    return (
      <>
        <Button onClick={() => history.push("/edit", { data: row })}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleShow(row)}>
          Delete
        </Button>
      </>
    );
  };
  return (
    <Container style={{ padding: 5 }}>
      <Card.Title className="title">Employee Management</Card.Title>
      <Row>
        <Col>
          <Button onClick={() => history.push("/add")}>Add Employee</Button>
        </Col>
      </Row>
      <BootstrapTable
        data={employeeList}
        striped
        hover
        search={true}
      >
        <TableHeaderColumn dataField="firstName">First Name</TableHeaderColumn>
        <TableHeaderColumn isKey dataField="lastName" dataSort={true}>
          Last Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="email" dataSort={true}>
          Email
        </TableHeaderColumn>
        <TableHeaderColumn dataField="employeeType" dataSort={true}>
          Employee Type
        </TableHeaderColumn>
        <TableHeaderColumn dataField="Action" dataFormat={cellButton}>
          Actions
        </TableHeaderColumn>
      </BootstrapTable>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this employee ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Dashboard;
