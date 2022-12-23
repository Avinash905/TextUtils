import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const upperFunc = () => {
    setText(text.toUpperCase());
    props.showAlert("success", "Text converted to Uppercase");
  };
  const lowerFunc = () => {
    setText(text.toLowerCase());
    props.showAlert("success", "Text converted to Lowercase");
  };
  const spacesFunc = () => {
    setText(text.replace(/\s+/g, " "));
    props.showAlert("success", "Extra spaces removed");
  };
  const copyFunc = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Copied text to clipboard");
  };
  const clearFunc = () => {
    setText("");
    props.showAlert("danger", "Text has been cleared");
  };
  return (
    <div
      className={`mb-3 w-75 mx-auto my-4 text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <h2 className="form-label">Enter your text here</h2>
      <textarea
        className={`form-control text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
        id="exampleFormControlTextarea1"
        rows="6"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={
          props.mode === "dark"
            ? { backgroundColor: "#505050" }
            : { backgroundColor: "#fff", border: "1px solid black" }
        }
      ></textarea>
      <div className="buttons my-3">
        <button className="btn btn-primary mx-2" onClick={upperFunc}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={lowerFunc}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={spacesFunc}>
          Remove extra spaces{" "}
        </button>
        <button className="btn btn-info text-light m-2" onClick={copyFunc}>
          Copy text
        </button>
        <button className="btn btn-danger m-2" onClick={clearFunc}>
          Clear text
        </button>
      </div>
      <div className="summary">
        <h2>Your text summary</h2>
        <p>
          Your text comprises of{" "}
          {
            text.split(/\s+/).filter((w) => {
              return w !== "";
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p></p>
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
