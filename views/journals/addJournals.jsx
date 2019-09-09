const React = require('react');
var Default = require('../layouts/default');
var moment = require('moment');

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem } from 'reactstrap';

class addJournals extends React.Component {
  render() {

    let props = this.props;

    return (

    <Default>

            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>

                <br/>

                        <div className="request-text">

                            <h4><strong>How is your skin today?</strong></h4>

                            <br/>

                        </div>

                            <Form enctype="multipart/form-data" action="/add" method="POST">

                                    <input type="hidden" name="user_id" value={this.props.userID}/>
                                    <input type="hidden" name="username" value={this.props.username}/>

                                    <FormGroup>
                                          <Label for="journal-date"><strong></strong></Label>
                                          <input type="datetime-local" name="journal-date"/>
                                    </FormGroup>

                                        <br/>

                                    <FormGroup>
                                          <Label for="skin-rating"><strong></strong></Label>
                                          <Input type="radio" name="skin-rating" value="1" required/> 1<br/>
                                          <Input type="radio" name="skin-rating" value="2" required/> 2<br/>
                                          <Input type="radio" name="skin-rating" value="3" required/> 3<br/>
                                          <Input type="radio" name="skin-rating" value="4" required/> 4<br/>
                                          <Input type="radio" name="skin-rating" value="5" required/> 5<br/>
                                    </FormGroup>

                                            <br/>

                                    <FormGroup>
                                          <Label for="item-brand"><strong>Notes:</strong></Label>
                                          <Input type="textarea" name="journal-notes" placeholder=""/>
                                    </FormGroup>

                                            <br/>
                                            <hr/>
                                            <br/>

                                    <FormGroup>
                                          <Label for="item-cleanser"><strong>Cleanser</strong></Label>
                                          <Input type="text" name="Cleanser" placeholder=""/>
                                    </FormGroup>

                                    <FormGroup>
                                          <Label for="item-toner"><strong>Toner</strong></Label>
                                          <Input type="text" name="toner" placeholder=""/>
                                    </FormGroup>

                                    <FormGroup>
                                          <Label for="item-moisturizer"><strong>Moisturizer</strong></Label>
                                          <Input type="text" name="moisturizer" placeholder=""/>
                                    </FormGroup>

                                    <FormGroup>
                                          <Label for="item-treatment"><strong>Treatment</strong></Label>
                                          <Input type="text" name="treatment" placeholder=""/>
                                    </FormGroup>

                                    <FormGroup>
                                          <Label for="item-sunblock"><strong>Sunblock</strong></Label>
                                          <Input type="text" name="sunblock" placeholder=""/>
                                    </FormGroup>

                                            <br/>
                                            <hr/>
                                            <br/>

                                      <FormGroup>
                                           <Label for="item-name"><strong>Upload a picture of your skin's progress</strong></Label>
                                           <Input type="file" name="image_file" placeholder=""/>
                                     </FormGroup>

                                            <br/>

                                     <Button color="success" input type="submit" size="lg" block>Submit</Button>

                                            <br/>

                            </Form>

                </Col>
            </Row>

    </Default>

    );
  }
}

module.exports = addJournals;