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
        <Row className="login-reg-background-image">

        <Col xs="6"></Col>

        <Col xs="6" md={{ size: 4, offset: 0.5 }} className="empty-background">

            <h4>Welcome to</h4>
            <h1 className="font-merienda" style={{color : '#FEC135'}}><strong>GlowUp</strong></h1>
            <br/>

            <p> Please <font color="orange"><strong>make an account</strong></font> so you can track and analyze your skin changes accurately over time.</p>

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