import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../Searchbar/Searchbar";
import SearchHistory from "../Searchhistory/Searchhistory";
import { useState } from "react";

export default function App() {
  const Name = "Company Name";
  const [terms, setTerms] = useState(["new hope", "empire"]);

  function addTerm(term) {
    setTerms([term, ...terms]);
  }

  // function myfunc(event) {
  //   console.log(event.target);
  // }
  //onClick={myfunc}--> use it in div tag

  return (
    <div className="App">
      <Header company={Name} />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <SearchHistory term={terms} />
    </div>
  );
}
// export default App;
