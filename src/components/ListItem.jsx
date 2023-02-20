import React from "react";

import deleteBtn from "../assets/icon-cross.svg";

const ListItem = (props) => {
  return (
    <li className="p-4 border-b-2 border-veryLightGrayishBlue dark:border-veryDarkGrayishBlue w-full flex dark:bg-veryDarkDesaturatedBlue">
      <input
        checked={props.completed}
        onChange={props.onCheck}
        type="checkbox"
        className="appearance-none bg-white dark:bg-veryDarkDesaturatedBlue border-[1.5px] border-veryLightGrayishBlue dark:border-veryDarkGrayishBlue h-6 w-6 rounded-full cursor-pointer my-auto checked:border-none  checked:bg-gradient-to-b from-from to-to peer relative after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:12px] after:bg-[url('.././src/assets/icon-check.svg')] after:opacity-0 after:checked:opacity-100 hover:"
      />
      <span className="flex-1 ml-4 text-veryDarkGrayishBlue peer-checked:text-lightGrayishBlue dark:peer-checked:text-darkGrayishBlue peer-checked:line-through duration-200 dark:text-veryLightGrayishBlue">
        {props.todoItem}
      </span>
      <button className="flex" onClick={props.onDeleteTodo}>
        <img src={deleteBtn} alt="" className="w-4 h-4 my-auto" />
      </button>
    </li>
  );
};

export default ListItem;
