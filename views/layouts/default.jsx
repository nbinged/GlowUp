var React = require('react');
import { Container, Row, Col } from 'reactstrap';

  var styles1 = {
        backgroundColor: '#418D3A',
        color: 'white',
        lineHeight: '60px',
        height: '60px'
  };

class Default extends React.Component {
    render() {
        return (
            <html>

            <head>
                <meta charset="utf-8"/>
                <title>GlowUp</title>

                <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16"/>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"/>

                <link href="https://fonts.googleapis.com/css?family=Libre+Caslon+Text&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Merienda&display=swap" rel="stylesheet"/>

                <link rel="stylesheet" type="text/css" href="/style.css"/>

                   <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>

            </head>


                        <nav className="navbar navbar-expand-lg" style={styles1}>
                          <a className="navbar-nav navbar-center navbar-brand" a href="/home" style={{color :'white'}}>GlowUp</a>

                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>
                          </button>

                          <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <a className="nav-link-white" href="/home">Journal</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link-white" href="/home">Stats</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/logout">Logout</a>
                                </li>

                            </ul>
                          </div>

                        </nav>

                    {this.props.children}

                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            </html>
        );
    }
}

module.exports = Default;

                                // <li className="nav-item">
                                //     <a className="nav-link-white" href="/home">Routines</a>
                                // </li>

                                // <li className="nav-item">
                                //     <a className="nav-link-white" href="/home">Products</a>
                                // </li>