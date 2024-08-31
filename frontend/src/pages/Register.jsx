
import "../styles/register.css";
import { useState } from "react";
import { Row, Col, Button, Form, Container, FormGroup } from "reactstrap";

import { Link } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import registerImg from "../assets/images/register.png";


const Register = () => {
  const [credintials, setCredintials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const handelChange = (e) => {
    setCredintials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handelClick = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="img" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="user" />
                </div>
                <h2>Regiester</h2>
                <Form onSubmit={handelClick}>
                  <FormGroup>
                    <input
                      type="text"
                      name="Username"
                      id="username"
                      placeholder="Username"
                      required
                      onChange={handelChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      name="Email"
                      id="email"
                      placeholder="Email"
                      required
                      onChange={handelChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      name="Password"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={handelChange}
                    />
                  </FormGroup>

                  <Button
                    className="btn secondary__btn auth__btn "
                    type="submit">
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account?<Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Register;
