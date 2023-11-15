import { StrictMode, useEffect, useState } from "react";
import axios from "axios";

const key =
  "live_TZQ0NOPALkGazAETMT4uLxM9afFmOSJWLgvNaehse84GjgoahvLfQ8vBpQerBkPP";
axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["X-Api-Key"] = key;
export default function Cats() {
  const [cats, setCats] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function listCats() {
      try {
        const res = await axios.get("/categories");
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
