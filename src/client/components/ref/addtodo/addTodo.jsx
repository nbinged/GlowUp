import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: ""
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    let newTodo = {
      title: this.state.textInput,
      done: false
    }
     const tasks = [num, ...this.state.todos];
     this.setState({ tasks : newTodo });
    };


  render() {
    return (
      <div>
        <h1></h1>
        <div>
          <input
            type="text"
            placeholder="Enter desc."
            value={this.state.textInput}
            onChange={event => this.setState({ textInput: event.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default AddTodo;