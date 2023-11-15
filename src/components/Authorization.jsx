import { StrictMode, useEffect, useState } from "react";
const Base_URL = "https://api.thecatapi.com/v1/categories";
const key =
  "live_TZQ0NOPALkGazAETMT4uLxM9afFmOSJWLgvNaehse84GjgoahvLfQ8vBpQerBkPP";

export default function Cats() {
  const [cats, setCats] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function listCats() {
      try {
        const res = await fetch(Base_URL, { headers: { "X-api-key": key } });
        const resJson = await res.json();
        setCats(resJson);
        setStatus("Success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    }
    listCats();
  }, []);

  if (status === "loading") return <div>Loading</div>;
  if (status === "error") return <div>Error</div>;

  return (
    <div>
      <h1>Cats</h1>
      <section>
        {cats.map((cat) => (
          <article key={cat.id}>
            {cat.id} -{cat.name}
          </article>
        ))}
      </section>
    </div>
  );
}
