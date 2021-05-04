export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Audio
      </a>
      {props.phonetic.text}
    </div>
  );
}
