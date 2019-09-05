import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Routine extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={1}>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}>8
                                <br/>
                                <span>AM</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={10}>
                        <h4 id="activity-title">Your morning routine</h4>
                        <p>Washing your face</p>
                    </Col>
                    <Col xs={1}>
                        <Row style={{paddingTop: '10px'}}>
                          <Col xs={6}>
                            <FontAwesome name='times' />
                          </Col>
                          <Col xs={6}>
                            <FontAwesome name='check' />
                          </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Routine;