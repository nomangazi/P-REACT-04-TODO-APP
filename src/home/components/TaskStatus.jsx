import { useTodos } from "../HomeProvider";

const TaskStatus = () => {
  const { todos } = useTodos();
  return (
    <div className="flex justify-between items-center border p-4 rounded-lg">
      <div>
        <h3 className="text-3xl font-medium">Task Done</h3>
        <h5 className="text-2xl">Keep it up</h5>
      </div>
      <div className="flex justify-center items-center h-20 w-20 bg-green-600 rounded-full text-3xl text-white">
        {todos.filter((todo) => todo.isCompleted).length}/{todos.length}
      </div>
    </div>
  );
};

export default TaskStatus;
