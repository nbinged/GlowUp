import React from 'react';
import { hot } from 'react-hot-loader';

// import Counter from './components/counter/counter';
// import Form from './components/form/form';

// import TodoIndex from './components/todoindex/todoIndex';
// import AddTodo from './components/addtodo/addTodo';
import Routine from './components/routine/routine';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div class="container">



            <Routine />

      </div>
    );
  }
}

export default hot(module)(App);

// <Form />
// <Counter message={this.state.message} />

// <TodoIndex />
