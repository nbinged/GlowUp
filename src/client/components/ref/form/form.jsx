import React from 'react';
import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      counter : 0,
      products: null
    };
  }

  doReq(){

    console.log("WOW REQUEST");
    this.setState({counter: this.state.counter+1});

    // rename react component context (this keyword) so that I can reference this.setState in responseHandler
    const banana = this;

    // what to do when we recieve the request
    var responseHandler = function() {
        // console.log("()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()response text", this.responseText);
        // console.log("status text", this.statusText);
        // console.log("status code", this.status);
        const result = JSON.parse( this.responseText);
        // console.log( result[7].name );
        banana.setState({products: result});
        console.log(banana)
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);
    // ready the system by calling open, and specifying the url
    request.open("GET", "http://localhost:3000/products");
    // send the request
    request.send();
  }

  render() {

    let productListing = '';
    if (this.state.products) {

        console.log(this.state.products.products[0].name)
        productListing = this.state.products.products[0].name
    }

    return (

      <div>


        <h1>This is your current routine</h1>
            <div className="search">
                <h3>{this.state.counter}</h3>

                    <p>
                        <button onClick={()=>{this.doReq()}}>make AJAX request</button>
                    </p>

                    <p>{productListing}</p>

                <input className={styles.name} />
            </div>
      </div>
    );
  }
}

export default Form;


