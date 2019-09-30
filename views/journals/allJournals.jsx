const React = require('react');
var Default = require('../layouts/default');

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

class alljournals extends React.Component {
    render() {

    let journals = this.props.alluserjournals;

    console.log("journalsssssssssssss",journals);

    // if (journals !== null ) {
    //     journalPage = journals.map(oneItem =>
    //
    //         (<Col>
    //
    // <div>
    //   <Card>
    //     <CardImg top width="100%" alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle>journalPage.</CardTitle>
    //       <CardSubtitle>Card subtitle</CardSubtitle>
    //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //       <Button>Button</Button>
    //     </CardBody>
    //   </Card>
    // </div>
    //
    //     </Col>));
    //
    // } else {
    //     journalPage = '';
    // }

    return (

    <Default>
            <Row className="row-wrapper">

                <Col xs="3" className="column-background"></Col>

                <Col className="column-middle">




                </Col>

                <Col xs="3" className="column-background"></Col>



        </Row>
    </Default>

  )};
}

module.exports = alljournals;