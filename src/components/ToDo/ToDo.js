import React from 'react';
import './ToDo.css'
const Todo = ({ todos, completeTodo, removeTodo }) => {
    //Rendering every single TODO from the TODOS array
    return todos.map((todo, index,) => (
        <div className="todo container" key={index}>
            <div className="row justify-content-center">
                <div className="col col-md-10">
                    {/* Custom Validation to change CSS properties of the list */}
                    <li className={todo.completed ? 'list-group-item completed' : 'list-group-item'} key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</li>
                </div>
                <div className="col-xs-1 align-self-center">
                    <button id='deleteBtn' onClick={() => removeTodo(todo.id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                </div>
                
            </div>
        </div>
        
    ));
};

export default Todo;