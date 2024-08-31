import "../styles/login.css";
import { useState } from "react";
import { Row, Col, Button, Form, Container, FormGroup } from "reactstrap";

import { Link } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import loginImg from "../assets/images/login.png";

const Login = () => {
  const [credintials, setCredintials] = useState({
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
                <img src={loginImg} alt="img" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="user" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handelClick}>
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
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account?<Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Login;
// 9849131510
