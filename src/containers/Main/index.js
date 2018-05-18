import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header';
import TodoItemList from '../TodoItemList';
import AddTodoButton from '../../components/AddTodoButton';

class Main extends Component {
    
    render() { 
        return ( 
            <div className="Main">
                <Header />
                <TodoItemList />
                <AddTodoButton />
            </div>
         )
    }
}
 
export default Main;