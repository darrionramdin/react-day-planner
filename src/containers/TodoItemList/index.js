import React, { Component } from 'react';
import TodoItem from '../../components/TodoItem';

class TodoItemList extends Component {
    state = {}
    render() { 
        return ( 
            <div className="TodoItemList">
                <TodoItem 
                todo="Finish the Web App" 
                memo="Web App" 
                dueTime="8"
                dueMeridiem ="AM"
                />
                <TodoItem 
                todo="Lunch Break" 
                memo="" 
                dueTime="11"
                dueMeridiem ="AM"
                />
                <TodoItem 
                todo="Design Stand Up" 
                memo="Hangouts" 
                dueTime="2"
                dueMeridiem ="PM"
                />
            </div>
         )
    }
}
 
export default TodoItemList;