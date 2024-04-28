import { useState, createContext, useMemo, useContext, useEffect } from "react";

const HomeContext = createContext();

export const useTodos = () => useContext(HomeContext);

const HomeProvider = ({ children }) => {
  const [formData, setFormData] = useState("");

  let getTaskData = JSON.parse(localStorage.getItem("todoData"));
  const [todos, setTodos] = useState(getTaskData || []);

  useEffect(() => {
    const handleSetLocalData = () => {
      localStorage.setItem("todoData", JSON.stringify(todos));
    };
    handleSetLocalData();
    return () => {
      handleSetLocalData();
    };
  }, [todos]);

  const value = useMemo(() => {
    const handleAddTask = (ev) => {
      ev.preventDefault();
      if (formData.length === 0) {
        alert("Task name is required");
        return;
      }
      setFormData("");
      setTodos((prev) => {
        return [
          ...prev,
          {
            id: Math.ceil(Math.random() * 1000),
            taskName: formData,
            isCompleted: false,
          },
        ];
      });
    };

    const handleUpdate = (id) => {
      setTodos((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              taskName: formData,
            };
          }
          return todo;
        });
      });
    };
    const handleComplete = (id) => {
      setTodos((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        });
      });
    };

    const handleDelete = (id) => {
      setTodos((prevData) => {
        const filterData = prevData.filter((item) => item.id !== id);
        return filterData;
      });
    };
    return {
      todos,
      setTodos,
      formData,
      setFormData,
      handleAddTask,
      handleComplete,
      handleUpdate,
      handleDelete,
    };
  }, [formData, todos]);

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
