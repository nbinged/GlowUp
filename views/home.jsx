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

                        <Col className="routine-completion">

                            <div><img src="circle-cropped.png" className="small-circle"/></div>
                            <div><h4>AM Routine</h4><h4><span className="green">-Routine Completed-</span></h4></div>
                            <div><a href="/addjournals"><Button color="warning"><strong>ADD JOURNAL ENTRY</strong></Button></a></div>

                        </Col>

                    <br/>
                    <br/>

                        <Col className="routine-completion">

                            <div><img src="moon.png" className="small-circle"/></div>
                            <div><h4>PM Routine</h4><h4><span className="red">-Routine Incomplete-</span></h4></div>
                            <div><a href="/addjournals"><Button color="warning"><strong>ADD JOURNAL ENTRY</strong></Button></a></div>

                        </Col>


                        <br/>
                        <hr/>
                        <br/>

                        <Row>
                            <Col className="align-center">
                                <a href="/alljournals"><img border="1" alt="Journals" src="book-open-solid.png" width="100" height="100"/></a>
                                <h2>Journals</h2>
                            </Col>

                            {/*<Col>*/}

                            {/*    <a href="/routines"><img border="1" alt="Routines" src="user-clock-solid.png" width="100" height="100"/></a>*/}
                            {/*    <h2>Routines</h2>*/}
                            {/*</Col>*/}

                            {/*<Col>*/}
                            {/*    <a href="/products"><img border="1" alt="Routines" src="tint-solid.png" width="100" height="100"/></a>*/}
                            {/*    <h2>Products</h2>*/}
                            {/*</Col>*/}

                            <Col className="align-center">
                                <a href="/statistics"><img border="1" alt="Routines" src="chart-bar-solid.png" width="100" height="100"/></a>
                                <h2>statistics</h2>
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

// <Button className="outfit" formaction={addOutfitURL} type={"submit"} color="success" size="lg">Create a new Outfit</Button>

		// <Row className="cardHolder">
		// </Row>

                            //         <Col>
                            //     <h1>Stats</h1>
                            // </Col>


                            // SELECT * FROM journals WHERE user_id = $1

                            // let arr = queryResult.rows.map(x=>x.skin_rating)