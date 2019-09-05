import React from 'react';
import PropTypes from 'prop-types';
var moment = require('moment');

class TodoIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      todos: [
        {
          title: "Cleansing",
          done: false
        },
        {
          title: "Toning",
          done: false
        },
        {
          title: "Moisturizing",
          done: false
        },
        {
          title: "Sunblock",
          done: false
        }
      ]
    };
  }

  renderTodos() {
    return this.state.todos.map(eachTodo => {
      // Conditional rendering
      let doneStatus = "Unfinished";
      if (eachTodo.done) {
        doneStatus = "Finished";
      }

      return (
        <li>
          {eachTodo.title} : {doneStatus}
        </li>
      );
    });
  }

  addTodo() {
    let copy = [...this.state.todos];
  }

  render() {
    return (
      <div>
        <h1>This is your current Routine</h1>
        <p>For {moment().format('MMMM Do YYYY')}</p>
        <div>
          <input
            type="text"
            placeholder="Enter desc."
            value={this.state.textInput}
            onChange={event => {
              this.setState({
                textInput: event.target.value
              });
            }}
          />
          <button onClick={()=>{this.addTodo()}}>Add</button>
        </div>
        <hr />
        <ul>{this.renderTodos()}</ul>
      </div>
    );
  }
}

export default TodoIndex;
