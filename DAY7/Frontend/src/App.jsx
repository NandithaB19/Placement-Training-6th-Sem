import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:1001/api/tasks");
    setTasks(res.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (task === "") {
      return;
    }
    await axios.post("http://localhost:1001/api/tasks", {
      title: task,
    });
    setTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:1001/api/tasks/${id}`);
    fetchTasks();
  };
  // PUT
  const editTask = (taskObj) => {
    setTask(taskObj.title);
    setEditId(taskObj._id);
  };

  const updateTask = async () => {
    await axios.put(`http://localhost:1001/api/tasks/${editId}`, {
      title: task,
    });
    setTask("");
    setEditId(null);
    fetchTasks();
  };

  return (
    <div>
      <h1>Note Keeper For Task</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />

      {editId ? (
        <button onClick={updateTask}>Update</button>
      ) : (
        <button onClick={addTask}>Update</button>
      )}
      {tasks.map((t) => (
        <li key={t._id}>
          {t.title}

          <button onClick={() => editTask(t)}>Edit</button>
          <button onClick={() => deleteTask(t._id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default App;
