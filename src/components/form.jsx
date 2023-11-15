import { StrictMode, useEffect, useState } from "react";

export default function Form() {
  const Base_URL = "https://jsonplaceholder.typicode.com";
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function createPost(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(Base_URL + "/posts", {
      method: "POST",
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const data = await res.json();
    console.log(data);
    setTitle("");
    setBody("");
    setLoading(false);
  }
  return (
    <div>
      <h1>CREAR POST</h1>
      {/* <form onSubmit={createPost}> */}
      <form
        onSubmit={(e) => {
          createPost(e);
        }}
      >
        <div>
          <label htmlFor="title">Titulo</label>
          <input
            value={title}
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Cotenido</label>
          <textarea
            value={body}
            id="body"
            name="body"
            cols="30"
            rows="10"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" disabled={isLoading}>
          Crear
        </button>
      </form>
    </div>
  );
}
