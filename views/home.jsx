const React = require('react');
var Default = require('./layouts/default');

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var moment = require('moment');

class home extends React.Component {
  render() {

	// let addItemURL = `/add`;

	// let editItemURL = `/edit`;
	// let deleteItemURL = `/delete`;
	// let itemUrl = `/item/`

	let username = this.props.cookieUser;

	return (

	<Default>
		 	<Row className="row-wrapper">

		 		<Col xs="3" className="column-background"></Col>

		 		<Col className="column-middle">

						<Col className="welcome-text">

                                <h4><strong>Its {moment().format('MMMM Do YYYY, h:mm a')} today.</strong></h4>
                                <h4><strong>Have you completed your routine yet?</strong></h4>
						</Col>

                        <br/>
                        <hr/>
                        <br/>

                        <Col>
                            <img src="circle-cropped.png" className="small-circle"/>
                            <h3>AM Routine Complete/Not Complete</h3>
                            <p>Add entry to your journal</p>
                        </Col>

                    <br/>

                        <Col>
                            <img src="moon.png" className="small-circle"/>
                            <h3>PM Routine Complete/Not Complete</h3>
                            <p>Add entry to your journal</p>
                        </Col>


                        <br/>
                        <hr/>
                        <br/>

                        <Row>
                            <Col>
                                <a href="/journal"><h1>Journal</h1></a>
                            </Col>

                            <Col>
                                <a href="/routines"><h1>Routines</h1></a>
                            </Col>

                            <Col>
                                <a href="/products"><h1>Products</h1></a>
                            </Col>

                        </Row>
				</Col>

				<Col xs="3" className="column-background"></Col>

		</Row>
	</Default>

  )};
}

module.exports = home;

// <Button className="outfit" formaction={addOutfitURL} type={"submit"} color="success" size="lg">Create a new Outfit</Button>

		// <Row className="cardHolder">
		// </Row>

                            //         <Col>
                            //     <h1>Stats</h1>
                            // </Col>