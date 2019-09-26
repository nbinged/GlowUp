import React from 'react';

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


                                    <li className="nav-item">
                                      {/*<Link to="/login/">Login</Link>*/}
                                    </li>

                                    <li className="nav-item">
                                      {/*<Link to="/register/">Register</Link>*/}
                                    </li>
                                  </ul>
                                </div>

            </nav>

        );
    }
}

export default RegisterNav;