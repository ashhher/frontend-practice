import { useState } from "react";
import { TaskType } from "../../types";
import "./style.css";

type ATBProps = {
  handleAddTask: (task: TaskType) => void;
};

const AddTaskBox = ({ handleAddTask }: ATBProps) => {
  const [taskValue, setTaskValue] = useState<string>("");

  const handleSubmitTask = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13)
      handleAddTask({ name: taskValue, isChecked: false });
  };

  return (
    <input
      className="add-task-input"
      type="text"
      value={taskValue}
      placeholder="New Task"
      onChange={(e) => setTaskValue(e.target.value)}
      onKeyUp={handleSubmitTask}
    />
  );
};

export default AddTaskBox;
