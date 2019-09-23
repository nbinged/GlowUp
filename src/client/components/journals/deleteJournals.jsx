const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem } from 'reactstrap';

class DeleteJournals extends React.Component {
  render() {

    let props = this.props.allclothes;
    let urlItem = '/item/';
    let urlDelete = '/delete?_';
    let urlEdit = '/edit?_';
    let id = parseInt(props.id);
    let put = 'method=DELETE'

    // console.log('HELLO FROM EDIT JSXXXXXXXXXXXXXXXXXXXX',this.props.allclothes)

    return (

    <Default>
        <body>

            <Row>
                 <Col className="column-center" sm="12" md={{ size: 6, offset: 3 }}>

                <img className="item-image" src ={props.image_file}/>

                <div className="request-text"><h2>Are you sure you would like to <font color="red"><strong>delete</strong></font> <strong>{props.item_name}</strong>?</h2>
                </div>

             <br/>

             <Form action={urlItem + id + urlDelete + put} method="POST">

             <ListGroup>
                    <ListGroupItem>
                        <strong>Item Name:</strong> {props.item_name}
                    </ListGroupItem>

                    <ListGroupItem>
                        <strong>Brand:</strong> {props.item_brand}
                    </ListGroupItem>

                    <ListGroupItem>
                        <strong>Size:</strong> {props.item_size}
                    </ListGroupItem>

                    <ListGroupItem>
                        <strong>Color:</strong> {props.item_color}
                    </ListGroupItem>

                    <ListGroupItem>
                        <strong>Catergory:</strong> {props.item_catergories}
                    </ListGroupItem>
              </ListGroup>

              <br/>

                <Button type={"submit"} color="danger" size="lg" block>Delete this item</Button>

                </Form>


                             <br/>

                        </Col>
                    </Row>

            </body>
    </Default>

    );
  }
}

module.exports = DeleteJournals;