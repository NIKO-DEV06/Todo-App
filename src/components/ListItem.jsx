import React, { useState, useEffect } from "react";

import deleteBtn from "../assets/icon-cross.svg";

const ListItem = (props) => {
  return (
    <li className="p-4 border-b-2 border-veryLightGrayishBlue w-full flex ">
      <input
        checked={props.completed}
        onChange={props.onCheck}
        type="checkbox"
        className="appearance-none bg-white border-[1.5px] border-veryLightGrayishBlue h-6 w-6 rounded-full cursor-pointer my-auto checked:border-none  checked:bg-gradient-to-b from-from to-to peer relative after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:12px] after:bg-[url('.././src/assets/icon-check.svg')] after:opacity-0 after:checked:opacity-100"
      />
      <span className="flex-1 ml-4 text-veryDarkGrayishBlue peer-checked:text-lightGrayishBlue peer-checked:line-through duration-200">
        {props.todoItem}
      </span>
      <button className="flex" onClick={props.onDeleteTodo}>
        <img src={deleteBtn} alt="" className="w-4 h-4 my-auto" />
      </button>
    </li>
  );
};

export default ListItem;
