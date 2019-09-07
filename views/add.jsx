const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem } from 'reactstrap';

class add extends React.Component {
  render() {

    let props = this.props;

    return (

    <Default>
            <body>

                <Row>
                    <Col className="add-bg">
                    </Col>
                </Row>

            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>

                <br/>

                <div className="request-text">
                    <h1><strong>New Clothes Form</strong></h1>
                    <h4>Please enter the details of the item <br></br> you would like into add to your collection.</h4>
                </div>

        <Form enctype="multipart/form-data" action="/add" method="POST">

            <input type="hidden" name="user_id" value={this.props.userID}/>

            <input type="hidden" name="username" value={this.props.username}/>

            <FormGroup>
              <Label for="item-name"><strong>Name:</strong></Label>
              <Input type="text" name="item_name" placeholder=" Himalaya Birkin bag" required/>
            </FormGroup>

            <FormGroup>
              <Label for="item-brand"><strong>Brand:</strong></Label>
              <Input type="text" name="item_brand" placeholder="Hermès" required/>
            </FormGroup>

            <FormGroup>
              <Label for="item-size"><strong>Size:</strong></Label>
              <Input type="text" name="item_size" placeholder="OS"/>
            </FormGroup>

            <FormGroup>
              <Label for="item-color"><strong>Color:</strong></Label>
              <Input type="text" name="item_color" placeholder="Smoky grey / Pearly White"/>
            </FormGroup>

            <FormGroup>
              <Label for="item-catergories"><strong>Catergories:</strong></Label>
              <Input type="text" name="item_catergories" placeholder="Bag"/>
            </FormGroup>

                <br/>

            <FormGroup>
              <Label for="item-name"><strong>Upload your a picture of your item</strong></Label>
              <Input type="file" name="image_file" placeholder="Birkin bag" required/>
            </FormGroup>

                <br/>

            <Button color="success" input type="submit" size="lg" block>Submit</Button>

            </Form>

                <br/>

                    </Col>
                </Row>
            </body>
    </Default>

    );
  }
}

module.exports = add;