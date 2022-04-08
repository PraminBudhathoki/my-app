import "./searchresults.css";
import List from "../List/List";
// import { useEffect } from "react";
export default function SearchResults(props) {
  // useEffect(() => {
  //   console.log("initial render only of films");
  // }, []);
  // useEffect(() => {
  //   console.log("initial and re-render of films");
  // }, [props.results]);
  let { results, type } = { ...props };

  let formattedData = results.map((item, index) => {
    let obj = {
      original: item,
    };
    switch (type) {
      case "films":
        obj.ref = item.episode_id;
        obj.title = item.title;
        obj.txt = item.release_date;
        break;
      case "people":
        break;
      case "planets":
        break;
    }
    return obj;
  });
  return (
    <div class="results">
      <List data={formattedData} />
    </div>
  );
}
