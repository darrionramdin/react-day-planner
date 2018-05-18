import React, { Component } from 'react';
import './index.css';
import TodoItem from '../../components/TodoItem';

class TodoItemList extends Component {
    state = {}
    render() {
        let todos = null;
        if(this.props.todos) {
            todos = this.props.todos.map((todo, index) => {
                return (
                    <TodoItem 
                        id={todo.id}
                        key={index}
                        todo={todo.todo}
                        memo={todo.memo} 
                        dueTime={todo.dueTime}
                        dueMeridiem ={todo.dueMeridiem}
                        onDeleteClick={this.props.onDeleteTodo}
                    />
                )
            }) 
        } else {
            todos = <div>Loading...</div>
        }
        
        return ( 
            <div className="TodoItemList">
                {todos}
            </div>
         )
    }
}
 
export default TodoItemList;