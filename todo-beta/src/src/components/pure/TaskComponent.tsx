import React from "react";
import { Task } from "../../models/task";

const TaskComponent: React.FC<{ data: Task[] }> = ({ data }) => {
  
  return (
    <div>
      <ul>
        {data?.map((t, i) => (
          <li key={i}>
            {t.id} {t.title} {t.description}
            {t.completed} {t.levels} {t.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;
