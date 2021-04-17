import React from 'react';

function TodoItem(props) {

  return (
    <li key={props.index}>
      <button onClick={props.onClick}>{props.item}</button>
    </li>
  );
}

export default TodoItem;
