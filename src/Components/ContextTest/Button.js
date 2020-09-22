import React from "react";
import ThemeContext from "./themeContext";

function Button(props) {
  return (
    <ThemeContext.Consumer>
      {context => (
        <button className="button">
          Switch
          <span role="img" aria-label="sun">
            🌞
          </span>
          <span role="img" aria-label="moon">
            🌚
          </span>
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default Button;
