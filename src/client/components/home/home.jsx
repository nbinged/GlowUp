const React = require('react');
var Default = require('./layouts/default');

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

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
        <body>
        <br/>
        <br/>
		 	<Row className="row-wrapper">

		 		<Col xs="3" className="column-background"></Col>

		 		<Col className="column-middle">

						<Col className="welcome-text">

                                <h2><strong>Its {moment().format('Do MMMM YYYY, h:mm a')} today.</strong></h2>
                                <h4><strong>Have you completed your routine yet?</strong></h4>
						</Col>

                        <br/>
                        <hr/>
                        <br/>

                    <Row className="text-align-center">

                        <div className="div-align-center">
                            <img src="circle-cropped.png" className="small-circle"/>
                            <h4>AM ROUTINES</h4>
                            <div><a href="/addjournals"><Button color="warning"><strong>ADD JOURNAL ENTRY</strong></Button></a></div>
                        </div>

                        <div className="div-align-center">
                            <img src="moon.png" className="small-circle"/>
                            <h4>PM ROUTINES</h4>
                            <div><a href="/addjournals"><Button color="warning"><strong>ADD JOURNAL ENTRY</strong></Button></a></div>
                        </div>

                    </Row>

                        <br/>
                        <hr/>
                        <br/>

                        <Row>
                            <Col className="text-align-center">


                                <div>
                                    <a href="/alljournals"><img border="1" alt="Journals" src="book-open-solid.png" width="100" height="100"/></a>
                                    <h2>Journals</h2>
                                </div>


                                <div>
                                    <a href="/statistics"><img border="1" alt="Routines" src="chart-bar-solid.png" width="100" height="100"/></a>
                                    <h2>statistics</h2>
                                </div>
                            </Col>

                        </Row>
				</Col>

				<Col xs="3" className="column-background"></Col>

		</Row>
        </body>
	</Default>

  )};
}

module.exports = home;