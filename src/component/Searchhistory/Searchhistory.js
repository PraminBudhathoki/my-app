import "./searchhistory.css";
export default function SearchHistory(props) {
  return (
    <ul>
      {props.term.map((terms) => (
        <li key={terms}>{terms}</li>
      ))}
    </ul>
  );
}
