import "./searchhistory.css";
export default function SearchHistory(props) {
  return (
    <ul>
      {props.terms.map((terms) => (
        <li key={terms}>{terms}</li>
      ))}
    </ul>
  );
}
