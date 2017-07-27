import React, {Component} from 'react';
import './App.css';
import TodoFormComponent from "./features/todo-form/todo-form.component";

class App extends Component {
    render() {
       return (
          <TodoFormComponent />
       )
    }
}

export default App;
