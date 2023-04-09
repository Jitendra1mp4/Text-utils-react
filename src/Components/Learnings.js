import React, { useState } from "react";

export default function Learnings() {
  const [text, setText] = useState("");
  const [themeBtnText, setThemeBtnText] = useState("Dark Mode");
  const lightTheme = {
    color: "black",
    backgroundColor: "white",
  };
  const darkTheme = {
    color: "white",
    backgroundColor: "#444444",
  };
  const [theme, setTheme] = useState(lightTheme);
  const handleTextChange = (event) => setText(event.target.value);
  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());

  const manageTheme = () => {
    if (themeBtnText === "Dark Mode") {
      setTheme(darkTheme);
      setThemeBtnText("Light Mode");
    } else {
      setTheme(lightTheme);
      setThemeBtnText("Dark Mode");
    }
  };

  const handelSetThemeClick = () => manageTheme();

  return (
    <div className="div-learning container-center my-3" style={theme}>
      <header className="my-3">
        <h1>Welcome to text utils.</h1>
        <p>here you can perform many task with text.</p>
      </header>
      <div className="my-1">
        <h2 className="my-1">Enter your text here.</h2>
        <textarea
          className="p-1"
          name="ta-input"
          id="ta-input"
          cols="40"
          rows="10"
          onChange={handleTextChange}
          value={text}
        ></textarea>
      </div>
      <button className="btn-primary" onClick={handleUpClick} style={theme}>
        Convert to uppercase
      </button>
      <button
        className="btn-primary mx-1"
        onClick={handleLoClick}
        style={theme}
      >
        Convert to lowercase
      </button>

      <h2 className="my-1 py-1">Text Summary</h2>
      <p className="">
        Words <span>{text.split(" ").length}</span>,Characters :{" "}
        <span>{text.length}</span>
      </p>

      <button
        style={theme}
        className="btn-primary-outline my-1"
        onClick={handelSetThemeClick}
      >
        {themeBtnText}
      </button>
    </div>
  );
}
