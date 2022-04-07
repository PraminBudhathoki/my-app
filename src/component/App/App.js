import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../Searchbar/Searchbar";
import SearchHistory from "../Searchhistory/Searchhistory";
import { useState, useEffect } from "react";
import SearchResults from "../SearchResults/SearchResults";

export default function App() {
  const Name = "Company Name";
  const [terms, setTerms] = useState(["new hope", "empire"]);
  const [films, setFilms] = useState([]);

  function addTerm(terms) {
    setTerms([terms, ...terms]);
  }

  useEffect(() => {
    console.log("initial recnder complete");
    fetchData("films");
  }, []);

  async function fetchData(type) {
    let url = `https://swapi.dev/api/${type}`;
    let resp = await fetch(url);
    if (!resp.ok) throw new Error(resp.statusText);
    let data = await resp.json();
    setFilms(data.results);
  }

  // function myfunc(event) {
  //   console.log(event.target);
  // }
  //onClick={myfunc}--> use it in div tag

  return (
    <div className="App">
      <Header company={Name} />
      <SearchBar terms={terms[0]} addTerm={addTerm} />
      <main className="content">
        <SearchHistory terms={terms} />
        <SearchResults films={films} />
      </main>
    </div>
  );
}
// export default App;
