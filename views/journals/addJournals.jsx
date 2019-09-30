const React = require('react');
var Default = require('../layouts/default');
var moment = require('moment');

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem } from 'reactstrap';

class addJournals extends React.Component {
  render() {

    return (

    <Default>

            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>

                <br/>
                <br/>

                        <div className="request-text">

                            <h2><strong>Its {moment().format('MMMM Do YYYY, h:mm a')} today.</strong></h2>
                            <h2><strong>How is your skin today?</strong></h2>

                            <br/>

                        </div>

                            <Form action="/addjournals" method="POST">

                                    <input type="hidden" name="user_id" value={this.props.userID}/>
                                    <input type="hidden" name="username" value={this.props.username}/>

                                    <FormGroup>
                                          <Label for="journal_date"><strong>Date: &nbsp;</strong></Label>
                                          <input type="datetime-local" name="journal_date"/>
                                    </FormGroup>

                                        <br/>

                                <FormGroup>
                                        <div class="cc-selector">

                                            <Label for="skin_rating"><strong>Skin Rating upon 5:</strong></Label>

                                            <br/>

                                            <Row>
                                                <input id="skin-rating-1" type="radio" name="skin_rating" value="1"/>
                                                <label className="drinkcard-cc skin-rating-1" htmlFor="skin-rating-1"></label>

                                                <input id="skin-rating-2" type="radio" name="skin_rating" value="2"/>
                                                <label className="drinkcard-cc skin-rating-2" htmlFor="skin-rating-2"></label>

                                                <input id="skin-rating-3" type="radio" name="skin_rating" value="3"/>
                                                <label className="drinkcard-cc skin-rating-3" htmlFor="skin-rating-3"></label>

                                                <input id="skin-rating-4" type="radio" name="skin_rating" value="4"/>
                                                <label className="drinkcard-cc skin-rating-4" htmlFor="skin-rating-4"></label>

                                                <input id="skin-rating-5" type="radio" name="skin_rating" value="5"/>
                                                <label className="drinkcard-cc skin-rating-5" htmlFor="skin-rating-5"></label>
                                            </Row>
                                        </div>
                                </FormGroup>

                                        <br/>

                                    <FormGroup>
                                          <Label for="journal_notes"><strong>Notes:</strong></Label>
                                          <Input type="textarea" name="journal_notes" placeholder=""/>
                                    </FormGroup>

                                            <br/>
                                            <hr/>
                                            <br/>

                                      <FormGroup>
                                           <Label for="image_file"><strong>Upload a picture of your skin's progress</strong></Label>
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

                                    // <FormGroup>
                                    //       <Label for="item-cleanser"><strong>Cleanser</strong></Label>
                                    //       <Input type="text" name="Cleanser" placeholder=""/>
                                    // </FormGroup>

                                    // <FormGroup>
                                    //       <Label for="item-toner"><strong>Toner</strong></Label>
                                    //       <Input type="text" name="toner" placeholder=""/>
                                    // </FormGroup>

                                    // <FormGroup>
                                    //       <Label for="item-moisturizer"><strong>Moisturizer</strong></Label>
                                    //       <Input type="text" name="moisturizer" placeholder=""/>
                                    // </FormGroup>

                                    // <FormGroup>
                                    //       <Label for="item-treatment"><strong>Treatment</strong></Label>
                                    //       <Input type="text" name="treatment" placeholder=""/>
                                    // </FormGroup>

                                    // <FormGroup>
                                    //       <Label for="item-sunblock"><strong>Sunblock</strong></Label>
                                    //       <Input type="text" name="sunblock" placeholder=""/>
                                    // </FormGroup>

                                    //         <br/>
                                    //         <hr/>
                                    //         <br/>

