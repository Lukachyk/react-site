import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CarouselBox from "../Components/CarouselBox";
import { Container, Row, CardGroup, Button } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup className="m-4">
            <Row md={3}>
              <div>
                <Card>
                  <Card.Img
                    class="card border-secondary"
                    variant="top"
                    src="https://images.pexels.com/photos/7651631/pexels-photo-7651631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body>
                    <Card.Title>Developer</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                {" "}
                <Card>
                  <Card.Img
                    class="card border-secondary"
                    variant="top"
                    src="https://images.pexels.com/photos/6774143/pexels-photo-6774143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body>
                    <Card.Title>Developer</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card>
                  <Card.Img
                    class="card border-secondary"
                    variant="top"
                    src="https://images.pexels.com/photos/6774141/pexels-photo-6774141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body>
                    <Card.Title>Derector</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                  </Card.Body>
                </Card>
              </div>
            </Row>
          </CardGroup>
        </Container>
      </>
    );
  }
}

export default Home;
