const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem } from 'reactstrap';

class edit extends React.Component {
  render() {

    let props = this.props.allclothes;
    let urlItem = '/item/';
    let urlEdit = '/edit?';
    let id = parseInt(props.id);
    let put = '_method=PUT';

    return (

    <Default>

        <body>

            <Row>

                <Col className="column-center" sm="12" md={{ size: 6, offset: 3 }}>

                <img className="item-image" src ={props.image_file}/>

                    <div className="request-text"><h2>You have requested to <font color="orange"><strong>edit:</strong></font> <strong>{props.item_name}</strong></h2>
                    </div>

        <Form action={urlItem + id + urlEdit + put } method="POST">

          <FormGroup>
              <Label for="item-name"><strong>Name:</strong></Label>
              <Input type="text" name="item_name" defaultValue={props.item_name}/>
            </FormGroup>

            <FormGroup>
              <Label for="item-brand"><strong>Brand:</strong></Label>
              <Input type="text" name="item_brand" defaultValue={props.item_brand}/>
            </FormGroup>

            <FormGroup>
              <Label for="item-size"><strong>Size:</strong></Label>
              <Input type="text" name="item_size" defaultValue={props.item_size}/>
            </FormGroup>

            <FormGroup>
              <Label for="item-color"><strong>Color:</strong></Label>
              <Input type="text" name="item_color" defaultValue={props.item_color}/>
            </FormGroup>

            <FormGroup>
              <Label for="item-categories"><strong>Catergories:</strong></Label>
              <Input type="text" name="item_catergories" defaultValue={props.item_catergories}/>
            </FormGroup>

            <FormGroup>
              <Label for="image_file"><strong>Image URL:</strong></Label>
              <Input type="text" name="image_file" defaultValue={props.image_file}/>
            </FormGroup>

            <Button color="warning" input type="submit" size="lg" block>Submit</Button>

        </Form>

                     <br/>

                    </Col>
                </Row>
        </body>

    </Default>

    );
  }
}

module.exports = edit;