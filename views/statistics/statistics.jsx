const React = require('react');
var Default = require('../layouts/default');
var Chart = require('chart.js');
var moment = require('moment');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


class statistics extends React.Component {
  render() {

    // let data = {
    //     test: this.props.result,
    //     cat: this.props.category_expenses
    // };
    // let jData = JSON.stringify(data);

    return (

    <Default>
        <body>
            <Row className="row-wrapper">

                                <Col className="welcome-text">

                                            <div className="canvas-containter">

                                                    <h3><strong>This chart shows your progress based on your journal entries.</strong></h3>
                                                    <h4><strong>For the month of {moment().format(' MMMM')}.</strong></h4>

                                                <canvas id="myChart2" width="500px" height="500px"></canvas>
                                            </div>

                                </Col>

                                <Col className="welcome-text">

                                        <div className="canvas-containter">


                                                <h3><strong>This chart shows your counts for your own daily rating.</strong></h3>
                                                <h4><strong>For the month of {moment().format(' MMMM')}.</strong></h4>

                                            <canvas id="myChart" width="500px" height="500px"></canvas>
                                        </div>

                                </Col>

            </Row>
        </body>

                <script src="/chart.js"></script>

    </Default>

  )};
}

module.exports = statistics;



