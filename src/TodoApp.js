import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList, //TODO: Add this to docstring TopTODO?? }
 */

function TodoApp({initialTodos = []}) {
  const [todos, setTodos] = useState(initialTodos);
  console.log("TodoApp", todos);

  /** add a new todo to list */
  function create(todo) {
    let newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  }



  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    //Given an {updatedTodo}
    //update that {Todo} in the [{Todo},{Todo},...]
    //Constraints: Want the order to remain the same
    // That to re-render we have to return a new [] reference
    //Search for the {Todo} by the id of the {updatedTodo}
    //Update the information in place
    //List = [{Todo},{UpdatedTodo},...]
    //But the array reference is still the same
    //So create a new array of the spread List
    // setTodos([...List])
    setTodos(todos => todos.map( todo => (
      todo.id === updatedTodo.id ? updatedTodo : todo)
    ));
  }

  /** delete a todo by id */
  function remove(id) {
    // Find Todo obj in the Todos state array
    // Create a new array (Bc the ref needs to change for state to change)
    // Fill the new array with Everything except the todo obj containing that id.
    setTodos(todos => todos.filter( todo => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          { todos.length !== 0 ? <EditableTodoList
          todos={todos}
          handleUpdate={update}
          handleRemove={remove}/> :
          <span className="text-muted">You have no todos.</span>}
        </div>

        <div className="col-md-6">
          (if no top todo, omit this whole section)
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo todos={todos} />
          </section>

          <section>
            <h3 className="mb-3">Add Nü</h3>
            < TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;