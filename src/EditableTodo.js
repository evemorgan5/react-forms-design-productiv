import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, handleUpdate, handleRemove }) {
  console.log("EditableTodo",todo, "handleremove", handleRemove);
  //TODO: True or False State
  const [isEditing, setEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setEditing(currEditing => !currEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    console.log("todo", todo, todo.id);
    handleRemove(todo.id);
   }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(frmData) {
    //COme back here after we work on whether we display the TodoForm or not.
    handleUpdate(frmData)
    toggleEdit()
    // const [formData, setFormData] = useState(formData);
  }

  return (
    <div className="EditableTodo">
      {isEditing ?
      <TodoForm initialFormData={todo} handleSave={handleSave}/>
      :
      <div className="mb-3">
        <div className="float-end text-sm-end">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}>
            Edit
          </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}>
            Del
          </button>
        </div>
        <Todo todo={todo}/>
      </div>

      }

    </div>
  );
}

export default EditableTodo;
