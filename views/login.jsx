const React = require('react');
var LoginPage = require('./layouts/login');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class login extends React.Component {
  render() {

    let loginURL = `/login`;
    let registerURL = `/register`;


    return (

<LoginPage>

        <Container fluid>
        <Row>


        <Col xs="8" className="login-reg-background-image">
        </Col>

        <Col xs="4" className="empty-background">

<div>
        <h2>Welcome back to</h2>
        <h1><strong>Locked In Closets</strong></h1>

        <p>Please <font color="green"><strong>log in</strong></font> to access your digital clothing archive.</p>

        <br/>
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
</div>

      </Col>

    </Row>

    </Container>

</LoginPage>

    );
  }
}

module.exports = login;