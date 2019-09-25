import React from 'react';
import RegisterNav from '../layouts/register';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


class Login extends React.Component {
  render() {

    let loginURL = `/login`;
    let registerURL = `/register`;

    return (

      <Container fluid>
        <RegisterNav/>

        <Row className="login-reg-background-image">

          <Col xs="6"></Col>

          <Col xs="6" md={{ size: 4, offset: 0.5 }} className="empty-background">

            <h4>Welcome back to</h4>
            <h1 className="font-merienda" style={{color : '#FEC135'}}><strong>GlowUp</strong></h1>

            <br/>

            <Form method="POST" action={loginURL}>

              <FormGroup>
                <Label for="Username"><strong>Username:</strong></Label>
                <Input type="text" name="username" required/>
              </FormGroup>

              <FormGroup>
                <Label for="Password"><strong>Password:</strong></Label>
                <Input type="password" name="password" required/>
              </FormGroup>

              <Button type={"submit"} color="success" size="lg" block><strong>Log In</strong></Button>
            </Form>

            <br/>
            <br/>

            <h6>Dont have an account? Create one instead!</h6>

            <Form action={registerURL}>
              <Button type={"submit"} size="lg">Register</Button>
            </Form>

          </Col>

        </Row>

      </Container>

    );
  }
}

export default Login;