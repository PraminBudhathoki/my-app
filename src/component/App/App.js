import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../Searchbar/Searchbar";
import SearchHistory from "../Searchhistory/Searchhistory";
import { useState, useEffect } from "react";
import SearchResults from "../SearchResults/SearchResults";

export default function App() {
  const Name = "Company Name";
  const [terms, setTerms] = useState([]);
  const [results, setResults] = useState([]);
  const [datatype, setDatatype] = useState("films");

  function addTerm(term) {
    let newTerms = new Set([term, ...terms]);
    setTerms(Array.from(newTerms));
    // fetchData(term);
  }
  useEffect(() => {
    fetchData(terms[0]);
    return () => {
      //clean up function
    };
  }, [terms]);

  useEffect(() => {
    console.log("initial recnder complete");
    fetchData();
  }, []);

  async function fetchData(keyword) {
    let url = `https://swapi.dev/api/${datatype}`;
    if (keyword) {
      url += `/?search=${keyword}`;
    }
    let resp = await fetch(url);
    if (!resp.ok) throw new Error(resp.statusText);
    let data = await resp.json();
    setResults(data.results);
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
        <SearchResults results={results} type={datatype} />
      </main>
    </div>
  );
}
// export default App;
