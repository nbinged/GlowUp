const React = require('react');
var Default = require('../layouts/default');

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

class alljournals extends React.Component {
    render() {

    let journals = this.props
    console.log("journalsssssssssssss",journals)

    // if (journals !== null ) {
    //     journalPage = journals.map(oneItem =>

    //         (<Col>

    // <div>
    //   <Card>
    //     <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle>Card title</CardTitle>
    //       <CardSubtitle>Card subtitle</CardSubtitle>
    //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //       <Button>Button</Button>
    //     </CardBody>
    //   </Card>
    // </div>

    //     </Col>));

    // } else {
    //     clothesListing = '';
    // }

    return (

    <Default>
            <Row className="row-wrapper">

                <Col xs="3" className="column-background"></Col>

                <Col className="column-middle"></Col>

                <Col xs="3" className="column-background"></Col>

        </Row>
    </Default>

  )};
}

module.exports = alljournals;