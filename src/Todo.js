import React from "react";

/** Simple presentation component for a todo.
 *
 * Prop:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({title, description, priority}) {
  return (
      <div className="Todo">
        <div><b>{title}</b><small>{priority}</small></div>
        <div><small>{description}.</small></div>
      </div>
  );
}

export default Todo;
