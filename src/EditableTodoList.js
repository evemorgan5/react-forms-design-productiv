import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({todos, handleUpdate, handleRemove}) {
  console.log("EditableTodoList",todos, handleUpdate, handleRemove);
  return (

      <div>
        {todos.map( todo => <EditableTodo
        todo={todo}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}/>)}
      </div>
  );
}

export default EditableTodoList;
