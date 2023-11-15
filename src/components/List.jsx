import { StrictMode, useEffect, useState } from "react";
const Base_URL = "https://jsonplaceholder.typicode.com";

export default function List() {
  const [posts, setPost] = useState([]);

  async function listPosts() {
    try {
      const res = await fetch(Base_URL + "/posts/");
      if (res.status === 200) {
        const resJson = await res.json();
        setPost(resJson);
      } else {
        console.error("Respuesta API", res.status);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    listPosts();
  }, []);

  return (
    <div>
      <h1>Prueba</h1>
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            {post.id} -{post.title}
          </article>
        ))}
      </section>
    </div>
  );
}
