const React = require('react');
var Default = require('../layouts/default');

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle} from 'reactstrap';

class alljournals extends React.Component {
    render() {

    let journals = this.props.alluserjournals;
    let journalPage = '';

    console.log("journalsssssssssssss",journals);

    if (journals !== null ) {
        journalPage = journals.map(oneJournal =>

            (<Col>

    <div>
      <Card>
        <CardImg top width="100%" alt="Card image cap" />
        <CardBody>
          <CardTitle>{(oneJournal.journal_date).toLocaleDateString()}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{oneJournal.journal_notes}</CardText>
        </CardBody>
      </Card>
    </div>

        </Col>));

    } else {
        journalPage = '';
    }

    return (

    <Default>
            <Row className="row-wrapper">

                <Col xs="3" className="column-background"></Col>

                <Col className="column-middle">

                    <br/>
                    {journalPage}

                </Col>

                <Col xs="3" className="column-background"></Col>



        </Row>
    </Default>

  )};
}

module.exports = alljournals;