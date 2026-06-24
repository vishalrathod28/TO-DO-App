import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
// npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: todo, isCompleted: false }]);
    setTodo("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((t) => t.id === id);
    setTodo(todoToEdit.text);
    handleDelete(id);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
  };

  return (
    <>
      <Navbar />
      <div className="container bg-purple-200 mx-auto my-5 rounded-xl p-5 min-h-[85vh]">
        <h1 className="font-bold text-xl">Write what you'll do throughout the day !!</h1>

        {/* Input Section */}
        <div className="addtodo my-6 flex gap-7">
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className="w-100 px-6 py-2 ml-4 rounded mx-2 border-yellow-300300" placeholder="Write Your TO-DO here " />
          <button onClick={handleAdd} className="bg-purple-600 text-white px-6 py-2 rounded">Add</button>
        </div>

        {/* List Section */}
        <h2 className="font-bold text-lg">Your Todos :</h2>
        <div className="yourtodos">
          {todos.map((item) => (
            <div key={item.id} className="todo flex justify-between items-center my-2 bg-white p-2 rounded">
              <div className="flex gap-2 items-center">
                <input type="checkbox" checked={item.isCompleted} onChange={() => toggleComplete(item.id)} />
                <span style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.text}</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(item.id)} className="bg-yellow-500 text-black font-bold px-2 py-1 rounded text-sm">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-black font-bold px-2 py-1 rounded text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;