"use client";

import { useState, useEffect } from "react";

function todo() {
  const [todo, setTodo] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2",
      {
        next: { revalidate: 120 },
      }
    );
    const result = await response.json();
    setTodo(result);
  }, []);

  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}

export default todo;
