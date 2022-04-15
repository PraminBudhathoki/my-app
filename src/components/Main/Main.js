import "./main.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Films from "../Films/Films";
import People from "../People/People";
import Planets from "../Planets/Planets";

export default function Main(props) {
  return (
    <div className="mainContent">
      <Routes>
        <Route path="/Films" element={<Films />}></Route>
        <Route path="/People" element={<People />}></Route>
        <Route path="/Planets" element={<Planets />}></Route>
        <Route
          path="/"
          exact
          render={() => {
            return <Home />;
          }}
        />
      </Routes>
    </div>
  );
}
