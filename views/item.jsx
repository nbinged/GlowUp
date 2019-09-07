const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem } from 'reactstrap';


class item extends React.Component {
  render() {

    let addItemURL = `/add`;
    let editItemURL = `/edit`;
    let deleteItemURL = `/delete`;

    let requestedclothes = this.props.allclothes;
    // console.log(requestedclothes);

    return (

        <Default>
             <body>

                 <Row>
                    <Col className="column-center" sm="12" md={{ size: 6, offset: 3 }}>

                    <img className="item-image" src ={requestedclothes.image_file}/>

                    <div className="request-text"><h2>You have requested: <strong>{requestedclothes.item_name}</strong></h2>
                    </div>

                    <br/>

                      <ListGroup>
                            <ListGroupItem>
                                <strong>Name:</strong> {requestedclothes.item_name}
                            </ListGroupItem>

                            <ListGroupItem>
                                <strong>Brand:</strong> {requestedclothes.item_brand}
                            </ListGroupItem>

                            <ListGroupItem>
                                <strong>Size:</strong> {requestedclothes.item_size}
                            </ListGroupItem>

                            <ListGroupItem>
                                <strong>Color:</strong> {requestedclothes.item_color}
                            </ListGroupItem>

                            <ListGroupItem>
                                <strong>Catergory:</strong> {requestedclothes.item_catergories}
                            </ListGroupItem>
                      </ListGroup>

                    <br/>

        <Form action="" className="">

                <Button className="item-buttons" formaction={requestedclothes.id+editItemURL} type={"submit"} color="warning" size="lg">Edit this item</Button>

                <Button className="item-buttons" formaction={requestedclothes.id+deleteItemURL} type={"submit"} color="danger" size="lg">Delete this item</Button>
        </Form>





                    </Col>
                </Row>

            </body>
        </Default>

  )};
}

module.exports = item;

