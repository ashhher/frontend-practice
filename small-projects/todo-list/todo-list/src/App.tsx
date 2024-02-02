import "./App.css";
import { TaskList } from "./components";
import { TaskListType } from "./types";

const defaultTaskList: TaskListType = [
  {
    name: "1",
    isChecked: false,
  },
  {
    name: "2",
    isChecked: false,
  },
  {
    name: "3",
    isChecked: true,
  },
  {
    name: "4",
    isChecked: false,
  },
];

function App() {
  return <TaskList defaultTaskList={defaultTaskList} />;
}

export default App;
