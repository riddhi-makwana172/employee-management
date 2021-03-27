import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  Image,
} from "react-bootstrap";
import { createEmployee } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const AddEmployee = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [validated, setValidated] = useState(false);
  const [file, setFile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [employeeType, setEmployeeType] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
    } else {
      setValidated(false);
      let params = {
        id: new Date().getUTCMilliseconds(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        file: file,
        hobbies: hobbies,
        employeeType:
          employeeType === "wfm" ? "Work From Home" : "Office Workplace",
        dob: dob,
      };
      event.preventDefault();
      dispatch(createEmployee(params, history));
    }
  };

  const handleProfilePic = (e) => {
    setFile(URL.createObjectURL( e.target.files[0]) );
  };

  return (
    <Container className="py-3">
      <Card.Title style={{ fontSize: "x-large" }}>Add Employee</Card.Title>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.File
            type="file"
            id="profile"
            label="Select Profile Picture"
            onChange={handleProfilePic}
          />
          {file && <Image src={file} alt="profile" className="avatar"/>}
          <Form.Control.Feedback type="invalid">
            Please choose a profile picture.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Enter your first name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter first name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Enter your last name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter last name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email address"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter email
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Type</Form.Label>
              <div key="custom-inline-radio" className="mb-3">
                <Form.Check
                  onChange={(val) => {
                    setEmployeeType(val.target.value);
                  }}
                  custom
                  inline
                  label="Work From Home"
                  type="radio"
                  id="wfm"
                  value="wfm"
                  checked={employeeType === "wfm" ? true : false}
                />
                <Form.Check
                  onChange={(val) => {
                    setEmployeeType(val.target.value);
                  }}
                  value="office"
                  inline
                  custom
                  label="Office Workplace"
                  type="radio"
                  id="office"
                  checked={employeeType === "office" ? true : false}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Please select employee type
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Select DOB</Form.Label>
              <Form.Control
                name="dob"
                type="date"
                placeholder="Select date"
                required
                onChange={(e) => setDob(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please select date of birth
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Select Hobbies</Form.Label>
          <Form.Control
            as="select"
            multiple
            required
            onChange={(e) => {
              !hobbies.includes(e.target.value) &&
                setHobbies([...hobbies, e.target.value]);
            }}
          >
            <option>Reading</option>
            <option>Dancing</option>
            <option>Internet Surfing</option>
            <option>Travelling</option>
            <option>Music</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select hobbies
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddEmployee;
