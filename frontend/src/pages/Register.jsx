import "../styles/register.css";
import { useState, useContext } from "react";
import { Row, Col, Button, Form, Container, FormGroup } from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import registerImg from "../assets/images/register.png";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {
  const [credintials, setCredintials] = useState({
    username: undefined,
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

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credintials),
      });
      const result = await res.json();

      if (!res.ok) {
        alert(result.message);

        dispatch({ type: "REGISTER_SUCCESS" });
        navigate("/login");
      }
    } catch (error) {
      alert(error.message);
    }
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
