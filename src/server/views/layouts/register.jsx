import React from 'react';
import { Link } from 'react-router-dom';

  var styles1 = {
        backgroundColor: '#FEC135',
        color: 'black',
        lineHeight: '60px',
        height: '60px'
  };

class RegisterNav extends React.Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg" style={styles1}>

                          <a className="navbar-nav navbar-center navbar-brand">GlowUp</a>

                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>

                                <div className="collapse navbar-collapse" id="navbar Nav">
                                  <ul className="navbar-nav ml-auto">

                                    {/*<Link to="/login">*/}
                                    {/*  <li className="nav-item">Login</li>*/}
                                    {/*</Link>*/}

                                    {/*<Link to="/register">*/}
                                    {/*    <li className="nav-item">Register</li>*/}
                                    {/*</Link>*/}

                                  </ul>
                                </div>

            </nav>

        );
    }
}

export default RegisterNav;