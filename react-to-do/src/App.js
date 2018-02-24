import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Add my first ToDo', isCompleted: false},
       ],
       newToDoDescription: ''
     };
     this.deleteTodo = this.deleteTodo.bind(this);
   }

   toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false: true;
    this.setState({todos : todos})
   }
  
   deleteTodo(index) {
    const lisDelete = this.state.todos[index];
    const filteredItem = this.state.todos.filter (todo => todo !== lisDelete)
    this.setState({todos:filteredItem})
   }

   handleChange(e)
   {
    this.setState({newToDoDescription:e.target.value})
   }
   handleSubmit(e)
   {
    e.preventDefault();
    if(!this.state.newToDoDescription) {return}
    const newTodo = {description: this.state.newToDoDescription, isCompleted: false};
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map( (todo, index) => 
            <ToDo key={ index } description={todo.description} isCompleted = { todo.isCompleted } toggleComplete = { () => this.toggleComplete(index) } deleteTodo = { () => this.deleteTodo(index) }/>
          )}
       </ul>
       
       <form onSubmit = {(e) => this.handleSubmit(e)}>
          <label>
          <input type="text" value = {this.state.newToDoDescription} onChange = {(e)=>this.handleChange(e)}  />
          <input type="submit" />
          </label>
       </form>
    </div>
    );
  }
}

export default App;