import { useTodos } from "../HomeProvider";

function TaskItem() {
  const { todos, handleComplete, handleUpdate, handleDelete } = useTodos();

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-2xl font-medium">Pending</h1>
        <div className="flex flex-col gap-2"></div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-start gap-2 border p-4 rounded-lg"
          >
            <input
              type="checkbox"
              checked={todo?.isCompleted}
              className="w-5 h-5 mt-0.5 cursor-pointer"
              onClick={() => handleComplete(todo?.id)}
            />

            <div className="w-full">
              <p
                className={`line-clamp-1 text-start ${
                  todo?.isCompleted ? "line-through" : ""
                }`}
              >
                {todo?.taskName}
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <button
                type="button"
                onClick={() => handleUpdate(todo?.id)}
                className="size-5 [&>svg]:size-full min-w-max"
              >
                <i className="fa-regular fa-pen-to-square" />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(todo?.id)}
                className="size-5 [&>svg]:size-full min-w-max"
              >
                <i className="fa-solid fa-trash-can" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-medium">Completes</h1>
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-start gap-2 border p-4 rounded-lg"
            >
              <input
                type="checkbox"
                checked={todo?.isCompleted}
                className="w-5 h-5 mt-0.5 cursor-pointer"
                onClick={() => handleComplete(todo?.id)}
              />

              <div className="w-full">
                <p
                  className={`line-clamp-1 text-start ${
                    todo?.isCompleted ? "line-through" : ""
                  }`}
                >
                  {todo?.taskName}
                </p>
              </div>
              <div className="flex justify-center items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleUpdate(todo?.id)}
                  className="size-5 [&>svg]:size-full min-w-max"
                >
                  <i className="fa-regular fa-pen-to-square" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(todo?.id)}
                  className="size-5 [&>svg]:size-full min-w-max"
                >
                  <i className="fa-solid fa-trash-can" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskItem;
