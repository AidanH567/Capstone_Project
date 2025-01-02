import "../styles/TextBox.css";
function TextBox(props) {
  return (
    <div className="TextBox">
      <h2>{props.h2_text}</h2>
      <p>{props.p_text}</p>
      <h5>{props.h5_text}</h5>
    </div>
  );
}

export default TextBox;
