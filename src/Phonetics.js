import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i className="fas fa-volume-up"></i>
      </a>
      <p>{props.phonetic.text}</p>
    </div>
  );
}
