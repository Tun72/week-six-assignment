import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (!response.ok) return;

      const data = await response.json();
      setTodos((prev) => [...prev, ...data]);
    }

    fetchData();
  }, [todos]);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                {todo.completed ? (
                  <p className="done">Done</p>
                ) : (
                  <p className="none">None</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
