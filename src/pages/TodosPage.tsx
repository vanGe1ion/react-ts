import React, {useEffect, useState} from "react";
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';


export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos')||'[]') as ITodo[]
      setTodos(saved);
    }, [])
  
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
  
    const addHandler = (title: string) => {
      const newTodo: ITodo = {
        title: title,
        id:Date.now(),
        completed: false ,
      }
      setTodos(prev => [newTodo, ...prev]);    
    }
  
    const toggleHandler = (id: number) => {
      setTodos(prev => 
        prev.map(todo => {
          const newTodo = {...todo};
          if(newTodo.id === id){
            newTodo.completed = !newTodo.completed
          }
          return newTodo;
        }
      ))
    }

    
  
    const removeHandler = (id: number) => {
      const confirmation = window.confirm('Item will be delete');
      if(confirmation)
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }


    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList 
                todos={todos} 
                onRemove={removeHandler} 
                onToggle={toggleHandler} 
            />
        </>
    )
}