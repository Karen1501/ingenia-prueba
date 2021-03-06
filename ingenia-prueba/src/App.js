import React, { useState } from "react";
import "./index.css";

//Components
import HeaderCard from "./Components/HeaderCard/HeaderCard";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const cardsArray = [
    {
      title: "Mexico City",
      street: "ANATOLE FRANCE 311",
      delegation: "Polanco, Miguel Hidalgo",
      city: " 11560 México D.F",
      phone: "50 22 09 00",
      bgImg: "/bg_mexico_city.png",
    },
    {
      title: "Washington D.C.",
      street: "1200 18TH STREET,NW",
      delegation: "Suite 700",
      city: "Washington DC 20036 USA.",
      phone: "50 22 09 00",
      bgImg: "/bg_washington.png",
    },
  ];

  return (
    <div className="App">
      <Navbar expand="md" fixed="top">
        <NavbarBrand href="/">
          <img src="/logo_ingenia.png" />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">ABOUT US</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components">OUR WORK</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components">CONTACT</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components">MANIFIESTO</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          {cardsArray.map((card, index) => {
            return (
              <HeaderCard
                key={index}
                title={card.title}
                street={card.street}
                delegation={card.delegation}
                city={card.city}
                phone={card.phone}
                bgImg={card.bgImg}
              />
            );
          })}
        </Row>

        <Row>
          <Col xs="12" className="contactWrapper">
            <p className="description">
              Ingenia is located in two major business & goverment hubs in the
              Americas
            </p>
            <h2>Contact Us</h2>
            <p>Send us an e-mail and we will get back to you:</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={{ size: "8", offset: 2 }}>
            <ContactForm />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs="12" md="12">
            <p className="textVisit">
              <b>Coming to visit us?</b>
              <span className="text-muted">
                {" "}
                Here are some of our favorite places around town to
              </span>
              <UncontrolledDropdown setActiveFromChild className="dropDownMenu">
                <DropdownToggle className="nav-link btn-sm width-20px" caret>
                  A quiet place to read a book
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Link</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="6">
            <div className="cardPlace">
              <p className="mexSmall">
                {" "}
                <small>MEXICO CITY</small>
              </p>
              <p className="place">
                <b> Name of place</b>
                <img src="/icon_places.png" className="placeIcon" />
              </p>
              <span className="direction">
                <small>123 Main St</small>
              </span>
              <p className="text-muted">
                <small>
                  amazing burguers,
                  <br />
                  impromteau jazz trios
                </small>
              </p>

              <div className="cardPlace">
                <p className="place">
                  <b> Name of place</b>
                  <img src="/icon_places.png" className="placeIcon" />
                </p>
                <span className="direction">
                  {" "}
                  <small>123 Main St</small>
                </span>
                <p className="text-muted">
                  <small>
                    amazing burguers, <br />
                    impromteau jazz trios
                  </small>
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" md="6">
            <div>
              <p className="mexSmall">
                {" "}
                <small>USA</small>
              </p>

              <p className="place">
                <img src="/icon_places.png" className="placeIcon" />
                <b> Name of place</b>
              </p>
              <span className="direction">
                {" "}
                <small>123 Main St</small>
              </span>
              <p className="text-muted">
                <small>
                  amazing burguers, <br />
                  impromteau jazz trios
                </small>
              </p>

              <p className="place">
                <img src="/icon_places.png" className="placeIcon" />
                <b> Name of place</b>
              </p>
              <span className="direction">
                {" "}
                <small>123 Main St</small>
              </span>
              <p className="text-muted">
                <small>
                  amazing burguers, <br />
                  impromteau jazz trios
                </small>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
