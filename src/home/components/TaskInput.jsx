import { useTodos } from "../HomeProvider";

const TaskInput = () => {
  const { handleAddTask, setFormData, formData } = useTodos();
  return (
    <form
      onSubmit={handleAddTask}
      className="flex justify-between items-center gap-2 border p-4 rounded-lg"
    >
      <input
        type="text"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
        placeholder="Write your next task..."
        onChange={(e) => setFormData(e.target.value)}
        value={formData}
      />
      <button
        type="submit"
        className="bg-green-600 text-white rounded-lg w-10 h-10"
      >
        <i className="fa-solid fa-plus" />
      </button>
    </form>
  );
};

export default TaskInput;
