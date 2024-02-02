import { TaskType } from "../../types";
import "./style.css";

type TIProps = {
  task: TaskType;
  handleCheckTask: () => void;
  handleDeleteTask: () => void;
};

const TaskItem = ({ task, handleCheckTask, handleDeleteTask }: TIProps) => {
  return (
    <div className="task-container ">
      <div className="content-box">
        <input
          className="item-checkbox-input"
          type="checkbox"
          checked={task.isChecked}
          onChange={handleCheckTask}
        />
        <div className={task.isChecked ? "task-checked" : ""}>{task.name}</div>
      </div>

      <button onClick={handleDeleteTask}>delete</button>
    </div>
  );
};

export default TaskItem;
