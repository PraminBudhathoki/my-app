import "./App.css";
import Header from "../Header/Header";
export default function App() {
  const Name = "Company Name";
  return (
    <div className="App">
      <Header company={Name} title="Hard-Coded" />
    </div>
  );
}
// export default App;
