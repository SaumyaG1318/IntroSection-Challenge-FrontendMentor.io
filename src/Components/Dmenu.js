import React, { useState } from "react";
import ArrowUp from "../List Icons/icon-arrow-up.svg";
import ArrowDown from "../List Icons/icon-arrow-down.svg";
import ToDoList from "../List Icons/icon-todo.svg";
import Calender from "../List Icons/icon-calendar.svg";
import Reminder from "../List Icons/icon-reminders.svg";
import Planning from "../List Icons/icon-planning.svg";

const Dmenu = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  let Arrow1;
  if (features) {
    Arrow1 = ArrowUp;
  } else {
    Arrow1 = ArrowDown;
  }

  let Arrow2;
  if (company) {
    Arrow2 = ArrowUp;
  } else {
    Arrow2 = ArrowDown;
  }

  function showFbox() {
    if (features) {
      return (
        <div className="featureList">
          <ul>
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
          </ul>
        </div>
      );
    } else return;
  }

  function showCbox() {
    if (company) {
      return (
        <div className="companyName">
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </div>
      );
    }
  }

  return (
    <div className="Dnav">
      <button
        onClick={() => {
          setFeatures(!features);
        }}
      >
        Features <img src={Arrow1} alt="" />
      </button>
      {showFbox()}
      <button
        onClick={() => {
          setCompany(!company);
        }}
      >
        Company <img src={Arrow2} alt="" />
      </button>
      {showCbox()}
      <button>Careers</button>
      <button>About</button>
    </div>
  );
};

export default Dmenu;
