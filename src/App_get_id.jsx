import { useState } from "react";

export default function App() {
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState(null);

  async function handelSubmit(e) {
    e.preventDefault();
    if (id <= 0) {
      setError(true);
      setTodo(null);
      return;
    }
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) return;

    const data = await response.json();
    setTodo(data);
    setId("");
    setError("")
  }
  return (
    <section>
      <form onSubmit={handelSubmit}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="submit">Get Data</button>
      </form>
      <div>
        {error && <h1>Please enter an valid id.(e.g. 1,2,3,4,5..)</h1>}
        {todo && (
          <div>
            <h1>id- {todo.id}</h1>
            <p>title - {todo.title}</p>
            <p>userId- {todo.userId}</p>
            <p>complete- {todo.complete ? "Completed" : "Not Completed"}</p>
          </div>
        )}
      </div>
    </section>
  );
}
