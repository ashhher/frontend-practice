import { useState } from "react";
import { TaskItem, AddTaskBox } from "..";
import { TaskListType, TaskType } from "../../types";
import "./style.css";

type TLProps = {
  defaultTaskList: TaskListType;
};

const TaskList = ({ defaultTaskList }: TLProps) => {
  const [taskList, setTaskList] = useState<TaskListType>(defaultTaskList);

  const handleAddTask = (task: TaskType) => {
    setTaskList([...taskList, task]);
  };

  const handleDeleteTask = (taskId: number) => {
    setTaskList([...taskList.slice(0, taskId), ...taskList.slice(taskId + 1)]);
  };

  const handleCheckTask = (taskId: number) => {
    setTaskList([
      ...taskList.slice(0, taskId),
      { name: taskList[taskId].name, isChecked: !taskList[taskId].isChecked },
      ...taskList.slice(taskId + 1),
    ]);
  };

  const renderTaskList = (taskList: TaskListType) => {
    const notCompletedTaskList: JSX.Element[] = [];
    const completedTaskListt: JSX.Element[] = [];

    taskList.map((task, index) => {
      if (task.isChecked) {
        completedTaskListt.push(
          <TaskItem
            key={index}
            task={task}
            handleCheckTask={() => handleCheckTask(index)}
            handleDeleteTask={() => handleDeleteTask(index)}
          />
        );
      } else {
        notCompletedTaskList.push(
          <TaskItem
            key={index}
            task={task}
            handleCheckTask={() => handleCheckTask(index)}
            handleDeleteTask={() => handleDeleteTask(index)}
          />
        );
      }
    });

    return (
      <>
        {notCompletedTaskList}
        {completedTaskListt}
      </>
    );
  };

  return (
    <div className="container">
      <AddTaskBox handleAddTask={handleAddTask} />
      <div className="taskList">{taskList && renderTaskList(taskList)}</div>
    </div>
  );
};

export default TaskList;
