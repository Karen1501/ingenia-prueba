import React from "react";
import {
  Container,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Navbar,
} from "reactstrap";

import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footerContainer">
      <Row>
        <Col md="12">
          <div className="navFooter">
            <p>2014 ingenia Group</p>

            <div className="ml-auto linksFooter">
              <a href="#">About us</a>

              <a href="#">Our Work</a>

              <a href="#">Blog</a>

              <a href="#">Jobs</a>

              <a href="#">Contact</a>
            </div>
          </div>
        </Col>

        <Col xs="12" md={{ size: "2", offset: 2 }}>
          <div>
            <p className="usaContact">
              <img src="/usaicon.png" /> <b>USA</b> <br />
              1200 18h Street, NW <br /> Washington DC 20036 USA <br /> 50220900
            </p>
          </div>
        </Col>

        <Col xs="12" md="2">
          <div>
            <p className="usaContact">
              <img src="mexicon.png" /> <b> MEXICO</b> <br />
              Anatole France 311 <br /> Polanco, Miguel Hidalgo <br /> 11560
              México D.F.
              <br /> 50220900
            </p>
          </div>
        </Col>

        <Col xs="12" md="6">
          <div className="socialWrapper">
            <p className="privacy">Terms of Use | Privacy policy</p>
            <img src="/social.png" className="iconSocial"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
