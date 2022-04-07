import "./searchresults.css";
import { useEffect } from "react";
export default function SearchResults(props) {
  useEffect(() => {
    console.log("initial render only of films");
  }, []);
  useEffect(() => {
    console.log("initial and re-render of films");
  }, [props.films]);
  return (
    <ul className="results">
      {props.films.map((films) => (
        <li key={films.episode_id}>{films.title}</li>
      ))}
    </ul>
  );
}
