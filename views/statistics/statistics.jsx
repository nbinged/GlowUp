const React = require('react');
var Default = require('../layouts/default');
var Chart = require('chart.js');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


class statistics extends React.Component {
  render() {

    let data = {
        test: this.props.result,
        cat: this.props.category_expenses
    };
    let jData = JSON.stringify(data);

    // let addItemURL = `/add`;

    // let editItemURL = `/edit`;
    // let deleteItemURL = `/delete`;
    // let itemUrl = `/item/`

    // let username = this.props.cookieUser;

    return (

    <Default>
        <body>
            <Row className="row-wrapper">

                <Col xs="3" className="column-background"></Col>

                <Col className="column-middle">

                                <Col className="welcome-text">

                                        <h4><strong>This chart shows your progress based on your journal entries.</strong></h4>


                                            <canvas id="myChart" width="400" height="400"></canvas>

                                </Col>

                        <br/>
                        <hr/>
                        <br/>

                                <Col className="welcome-text">

                                        <h4><strong>This chart shows your counts for your own daily rating.</strong></h4>
                                        <h4>If there is no data, show a button to add entries to view their own chart.</h4>

                                </Col>

                        <br/>
                        <hr/>
                        <br/>

                </Col>

                <Col xs="3" className="column-background"></Col>

            </Row>
        </body>

                <script src="/chart.js"></script>

    </Default>

  )};
}

module.exports = statistics;



