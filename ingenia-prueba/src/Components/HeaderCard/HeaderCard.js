import React from "react";
//styles
import "./HeaderCard.css";

import { Card, CardBody, Col } from "reactstrap";

function HeaderCard(props) {
  return (
    <Col xs="12" md="6" className="m-0 p-0">
      <Card
        style={{ backgroundImage: `url(${props.bgImg})` }}
        className="border-0 rounded-0 py5"
      >
        <CardBody>
          <h1 className="">{props.title}</h1>
          <div className="infWrapper">
            <p className="textStreet">{props.street}</p>
            <p>{props.delegation}</p>
            <p>{props.city}</p>
            <p className="textPhone">{props.phone}</p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default HeaderCard;
