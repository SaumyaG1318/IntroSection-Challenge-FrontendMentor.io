import React, { useState } from "react";
import ArrowUp from "../List Icons/icon-arrow-up.svg";
import ArrowDown from "../List Icons/icon-arrow-down.svg";
import ToDoList from "../List Icons/icon-todo.svg";
import Calender from "../List Icons/icon-calendar.svg";
import Reminder from "../List Icons/icon-reminders.svg";
import Planning from "../List Icons/icon-planning.svg";

const List = () => {
  const [showList1, setList1] = useState(false);
  const [showList2, setList2] = useState(false);

  let Arrow1;
  if (showList1) {
    Arrow1 = ArrowUp;
  } else {
    Arrow1 = ArrowDown;
  }

  let Arrow2;
  if (showList2) {
    Arrow2 = ArrowUp;
  } else {
    Arrow2 = ArrowDown;
  }

  function L1() {
    if (showList1) {
      return (
        <>
          <li>
            <img src={ToDoList} alt="" />
            Todo List
          </li>
          <li>
            <img src={Calender} alt="" />
            Calender
          </li>
          <li>
            <img src={Reminder} alt="" />
            Reminders
          </li>
          <li>
            <img src={Planning} alt="" />
            Planning
          </li>
        </>
      );
    } else return;
  }
  function L2() {
    if (showList2) {
      return (
        <>
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </>
      );
    } else return;
  }

  return (
    <>
      <ul>
        <li>
          <button className="subMenu" onClick={() => setList1(!showList1)}>
            Features <img src={Arrow1} alt="" />
          </button>
          <ul>{L1()}</ul>
        </li>
        <li>
          <button className="subMenu" onClick={() => setList2(!showList2)}>
            Company <img src={Arrow2} alt="" />
          </button>

          <ul>{L2()}</ul>
        </li>
        <li className="bottomM">Careers</li>
        <li>About</li>
      </ul>
    </>
  );
};

export default List;
