import "./searchbar.css";

export default function SearchBar(props) {
  function submitted(event) {
    event.preventDefault();
    console.log("submitted");
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
    </section>
  );
}
