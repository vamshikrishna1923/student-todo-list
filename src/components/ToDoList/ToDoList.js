import React, { useState} from 'react';
import './ToDoList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from '../ToDo/ToDo'
import FormTodo from '../FormTodo/FormTodo'


const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const addingTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            alert('Please fill the "Enter new task" field');
            return
        } 
        const newTodos = [...todos, todo]
        setTodos(newTodos);
    }
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.completed = !todo.completed
            } 
            return todo;
        });
        setTodos(updatedTodos); 
    }
    const removeTodo = id => {
        const updatedArray = [...todos].filter(todo => todo.id !== id);
        setTodos(updatedArray);
    }
    return (
        <div className="todoListContainer container">
            <FormTodo onSubmit={addingTodo}/>
            <ul className="todoList list-group">
                <ToDo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
            </ul>   
        </div>
    )
};

export default ToDoList;