import './App.css';
import InputField from './components/InputField';
import React, { useState } from "react";
import { Todo } from "./models/models";

const App: React.FC=()=> {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e : React.FormEvent ) =>{
    e.preventDefault();
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
