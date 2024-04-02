import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
export default function Tasks({ onAdd, handleclearTasks, tasksData }) {
  const [tasks, setTasks] = useState([]);
  const handleChange = function (ev) {
    setTasks(ev.target.value);
  };

  const handleClick = function () {
    if (!tasks) return;
    setTasks("");
    onAdd(tasks);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Tasks</h2>
      <div className="flex mt-2">
        <Input
          value={tasks}
          onChange={handleChange}
          label={"Add new task"}
          type="text"
          id="tasks"
          name="tasks"
        />
        <Button
          onClick={handleClick}
          className="p-2 text-gray-800 rounded-r hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 "
        >
          + Add Task
        </Button>
      </div>
      <div className="w-1/2 bg-gray-200">
        <ul>
          {tasksData.length === 0 && (
            <li className="mt-4 text-gray-600">
              This project does not have any tasks yet.
            </li>
          )}
          {tasksData.length > 0 &&
            tasksData.map((task) => {
              return (
                <li
                  key={task.id}
                  className={`my-3 text-gray-800 focus:bg-zinc-700 focus:outline-none p-3 rounded flex justify-between`}
                >
                  <span className="h-full flex items-center">{task.title}</span>
                  <Button
                    onClick={() => handleclearTasks(task.id)}
                    className="hover:text-red-900"
                  >
                    Clear
                  </Button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
