import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";

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

function TodoApp(initialTodos = []) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(todo) {
    let newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  }



  /** update a todo with updatedTodo */
  //TODO: Maybe after we work on form.
  function update(updatedTodo) {
    //Given an updatedTodo update a todo?
  }

  /** delete a todo by id */
  function remove(id) {
    // Find Todo obj in the Todos state array
    // Create a new array (Bc the ref needs to change for state to change)
    // Fill the new array with Everything except the todo obj containing that id.

    [{todo},{todo},...]

    // Filer!!!!
    // todos.filter()
    // Filter by those that dont have the id

    //todos.filter ( todo => todos.id !== id)




  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          <EditableTodoList /> {/**TODO: OR should that be here */} OR
          <span className="text-muted">You have no todos.</span>
        </div>

        <div className="col-md-6">
          (if no top todo, omit this whole section)
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo />
          </section>

          <section>
            <h3 className="mb-3">Add Nü</h3>
            FIXME
            {/**TODO: form component*/}
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;