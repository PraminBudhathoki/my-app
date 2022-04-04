import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../Searchbar/Searchbar";
export default function App() {
  const Name = "Company Name";
  // function myfunc(event) {
  //   console.log(event.target);
  // }
  //onClick={myfunc}--> use it in div tag

  return (
    <div className="App">
      <Header company={Name} />
      <SearchBar />
    </div>
  );
}
// export default App;
