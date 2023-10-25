import React from "react";
import TaskComponent from "../pure/TaskComponent.js";
import { Task } from "../../models/task.js";

const TaskLists:React.FC<{todos: [{}], addTaskAction: Function}> = (props): JSX.Element => {
  const data: Task[] = [];
  return (
    <div>
      <h1>Tasks List</h1>
      <TaskComponent data={data} />
    </div>
  );
};

export default TaskLists;
