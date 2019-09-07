const React = require('react');
var RegisterPage = require('./layouts/register');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class register extends React.Component {
  render() {

    let registerURL = `/register`;
    let loginURL = `/login`;


    return (

<RegisterPage>

        <Container fluid>
        <Row>


        <Col xs="8" className="login-reg-background-image">
            </Col>

        <Col xs="4" className="empty-background">

            <h2>Welcome to</h2>
            <h1><strong>Locked In Closets</strong></h1>

            <p>Please <font color="orange"><strong>make an account</strong></font> to create your own digital clothing archive</p>

            <br/>
            <br/>

    <Form method="POST" action={registerURL}>

        <FormGroup>
          <Label for="Username"><strong>Username:</strong></Label>
          <Input type="text" name="username" required/>
        </FormGroup>

        <FormGroup>
          <Label for="Password"><strong>Password:</strong></Label>
          <Input type="password" name="password" required/>
        </FormGroup>

        <Button type={"submit"} color="warning" size="lg" block><strong>Sign up</strong></Button>
      </Form>

            <br/>
            <br/>

        <h6>Already have an account? Login instead!</h6>

            <Form action={loginURL}>
            <Button type={"submit"} size="lg" >Login</Button>
            </Form>

      </Col>

    </Row>

    </Container>

</RegisterPage>

    );
  }
}

module.exports = register;