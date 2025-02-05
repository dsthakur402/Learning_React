import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample task" , id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {       
        setTodos((prevTodos) => 
                [...prevTodos, {task: newTodo, id:uuidv4(), isDone: false}]
        );
        setNewTodo("");       
    }
 
    let updateNewTodo = (event) => {
        setNewTodo(event.target.value);
    }

    let removeTask = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
     
    

    let RemoveAll = () => {
        setTodos([]);
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo, task: todo.task.toUpperCase()
                };
            })
        );
    };
    let lowerCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo, task: todo.task.toLowerCase()
                };
            })
        );
    };
    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if(todo.id === id){
                    return {
                        ...todo, task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };
    let lowerCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if(todo.id === id){
                    return {
                        ...todo, task: todo.task.toLowerCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    let markDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>{
                return todo.id === id ? {...todo, isDone: true} : todo;
            })
        );
    }

    return (
        <div>
            <input type="text" value={newTodo} onChange={updateNewTodo} placeholder="write your task here"/>
            <br /><br />
            <button style={{background: "black", color: "white"}} onClick={addNewTask}>Add task</button>
            <br /><br /><br /><br />

            <hr />
            <h4>Tasks To Do</h4>
            <ol>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.task}</span>;
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => removeTask(todo.id)}><i class="fa fa-times" aria-hidden="true"></i></button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => upperCaseOne(todo.id)}><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => lowerCaseOne(todo.id)}><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => markDone(todo.id)}><i class="fa fa-check" aria-hidden="true"></i></button>

                        </li>
                    ))
                }
            </ol>
            <button onClick={upperCaseAll}> upper case all</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={lowerCaseAll}> lower case all</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={RemoveAll}> remove all</button>
        </div>
    );
}
