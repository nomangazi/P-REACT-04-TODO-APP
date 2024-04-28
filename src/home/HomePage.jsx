import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import TaskStatus from "./components/TaskStatus";

const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto p-2 mt-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 text-2xl">
          <span>
            <i className="fa-solid fa-table-list" />
          </span>
          <h1 className="font-bold">TODO</h1>
        </div>
        <div className="task-container w-3/4 mx-auto flex flex-col gap-4">
          <TaskStatus />
          <TaskInput />
          <TaskItem />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
