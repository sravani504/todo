import React, { Component } from 'react';

 class TodoForm extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        todotext:''
     }
   }
   addTodo=(e)=>
   {
     e.preventDefault();
     this.props.addTodo(this.state.todotext);
     this.setState({todotext:''})
   }
   
  render() {
    return (
      <div>
      <form onSubmit={this.addTodo}>
        <input type="text" value={this.state.todotext} onChange={(e)=>this.setState({todotext:e.target.value})} placeholder='add your text here....'></input>
        </form>
      </div>
      
    );
  }
}

export default TodoForm;
