import { useState } from "react";

function Welcome() {
  return <h1>Welcome to React Nanditha 🥳🪄</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </div>
  );
}

function App() {
  const [title, setTitle] = useState("My Webpage");
  const [name, setName] = useState("Nanditha.Bhaskar")
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the title to change"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h1>{title}</h1>
       <input
        type="text"
        placeholder="Enter the your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>
      <Welcome />
      <Welcome />
      <Counter />
    </div>
  );
}

export default App;