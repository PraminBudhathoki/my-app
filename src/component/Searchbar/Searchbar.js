import "./searchbar.css";
import { useState } from "react";

export default function SearchBar(props) {
  // const [myprop, setMyProp] = useState("default value");

  function submitted(event) {
    event.preventDefault();
    console.log("submitted");
    // setMyProp(event.target["keyword"].value);
  }
  function focused(event) {
    console.log("Focused");
  }
  function changed(event) {
    console.log("oninput", event.target.value);
  }
  function clicked(event) {
    // event.preventDefault();
    console.log("Clicked");
  }
  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
          name="keyword"
          className="searchtext"
          placeholder="keyword"
          onFocus={focused}
          onInput={(event) => changed(event)}
        />
        <button
          type="submit"
          className="searchBtn"
          name="searchBtn"
          onClick={clicked}
        >
          Submit
        </button>
      </form>
      <p>{myprop}</p>
    </section>
  );
}
