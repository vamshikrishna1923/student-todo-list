import React, {useState}  from 'react';
import './FormTodo.css'

const FormTodo = (props) => {

        const [inputText, setInputText] = useState('');

        //OnChangeHandler to get the current value of the form field.
        const OnChangeHandler = (e) => {
            setInputText(e.target.value);
        };
        //A submit handler to pass the data from this component to ToDoList component.
        const SubmitHandler = (e) => {
            //method that cancels the page reload by submitting the event
            e.preventDefault();
            props.onSubmit({
                //Random Custom ID
                id:Math.random() * 555784 + 1,
                //Getting the Value of the field
                text: inputText,
                completed: false
            })
            //Setting the input text field to blank field for new use
            setInputText('');
        };

        return (
            <div className="container">
                <div className="row">
                <form className="todoForm">
                    <input value={inputText} onChange={OnChangeHandler} type="text" placeholder="Enter a new task..." className="todoInput"/>
                    <input onClick={SubmitHandler} type="Submit" className="formBtn" value="Add Task"/>
                </form>
                </div>
                
            </div>
            
        )
};

export default FormTodo