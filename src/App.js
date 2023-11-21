import './App.css';
//Importing Components
import ToDoList from '../src/components/ToDoList/ToDoList'

function App() {

  return (
    <div className="App">
      <header className='title'> Student ToDo List</header>
      <ToDoList/>
    </div>
  );
}

export default App;
