import "./App.css";
import Header from "../Header/Header";
export default function App() {
  const Name = "Company Name";
  return (
    <div className="App">
      <Header company={Name} />
    </div>
  );
}
// export default App;
