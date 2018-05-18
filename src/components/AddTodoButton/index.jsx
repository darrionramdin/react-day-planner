import React from 'react';
import './index.css';
import addIcon from './assets/add.png';

const AddTodoButton = () => {
    return (
        <button className="AddTodoButton">
            <img src={addIcon} alt="Add Button" className="AddTodoButton__icon" />
        </button>
    )
}
 
export default AddTodoButton;