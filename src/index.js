import './styles.css';
import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList(); 
todoList.todos.forEach(crearTodoHtml);

//todoList.todos[0].impirmirClase();

console.log(todoList.todos)
// todoList.todos.forEach(todo => {
//     crearTodoHtml(todo);    
// });
// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevoTodo(tarea);

// crearTodoHtml(tarea);