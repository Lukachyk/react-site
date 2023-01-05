import React, { Component } from "react";
import { Container, Nav, Tab } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Framework</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Librarie</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src="https://w7.pngwing.com/pngs/72/433/png-transparent-tattoo-artist-compass-mountain-sketch-compass-triangle-technic-monochrome-thumbnail.png" />

                  <p>
                    Серый Кинжал Эскиз иллюстрации, Нож Старая школа (тату)
                    Кинжал Оружие, тату, монохромный, черный, инкапсулированный
                    PostScript png
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://w7.pngwing.com/pngs/886/952/png-transparent-drawing-painting-tattoo-sketch-painting-watercolor-painting-leaf-olive-thumbnail.png" />
                  <p>
                    Серый Кинжал Эскиз иллюстрации, Нож Старая школа (тату)
                    Кинжал Оружие, тату, монохромный, черный, инкапсулированный
                    PostScript png
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://w7.pngwing.com/pngs/892/840/png-transparent-owl-tattoo-drawing-body-art-sketch-tattoo-black-and-white-owl-illustration-miscellaneous-poster-vertebrate-thumbnail.png" />
                  <p>
                    Серый Кинжал Эскиз иллюстрации, Нож Старая школа (тату)
                    Кинжал Оружие, тату, монохромный, черный, инкапсулированный
                    PostScript png
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://w7.pngwing.com/pngs/72/433/png-transparent-tattoo-artist-compass-mountain-sketch-compass-triangle-technic-monochrome-thumbnail.png" />
                  <p>
                    Серый Кинжал Эскиз иллюстрации, Нож Старая школа (тату)
                    Кинжал Оружие, тату, монохромный, черный, инкапсулированный
                    PostScript png
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://w7.pngwing.com/pngs/72/433/png-transparent-tattoo-artist-compass-mountain-sketch-compass-triangle-technic-monochrome-thumbnail.png" />
                  <p>
                    Серый Кинжал Эскиз иллюстрации, Нож Старая школа (тату)
                    Кинжал Оружие, тату, монохромный, черный, инкапсулированный
                    PostScript png
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default About;
