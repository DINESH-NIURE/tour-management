import "../styles/login.css";
import { useState, useContext } from "react";
import { Row, Col, Button, Form, Container, FormGroup } from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import loginImg from "../assets/images/login.png";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [credintials, setCredintials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelChange = (e) => {
    setCredintials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handelClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credintials),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
        console.log(result.data);

        dispatch({ type: "LOGIN_SUCCESS", payLoad: result.data });
        navigate("/");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payLoad: error.message });
    }
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
