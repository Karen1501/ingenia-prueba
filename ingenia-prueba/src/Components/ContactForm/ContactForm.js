import React, { useState } from "react";
import "../../index.css";

import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "Karen",
    lastName: "Corona San Juan",
    email: "karencsj0391@gmail.com",
    message: "Hello everybody",
  });

  const handleChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setFormData({ ...formData, [property]: value });
  };

  const submitHandler = () => {
    console.log(formData);
  };

  const { name, lastName, email, message, phone } = formData;
  return (
    <Form>
      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="name"></Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
              value={name}
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="lastName"></Label>
            <Input
              type="text"
              name="lastName"
              id="last-name"
              placeholder="last-name"
              onChange={handleChange}
              value={lastName}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md="6">
          <FormGroup>
            <Label for="emails"></Label>
            <Input
              type="email"
              name="email"
              id="emails"
              placeholder="email"
              onChange={handleChange}
              value={email}
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="phone"></Label>

            <Input
              type="text"
              name="phone"
              id="phone"
              onChange={handleChange}
              placeholder="phone"
              value={phone}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup className=" w-100 y text-left">
        <Label for="message">Tell us about your challenge or opportunity</Label>
        <Input
          type="textarea"
          name="message"
          id="message"
          onChange={handleChange}
          value={message}
        />
      </FormGroup>

      <Button className="btn-submit ml-auto " onClick={submitHandler}>
        SEND
      </Button>
    </Form>
  );
}

export default ContactForm;
