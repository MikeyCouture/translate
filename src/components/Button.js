import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <ColourContext.Consumer>
        {colour => (
          <button className={`ui button ${colour}`}>
            <LanguageContext.Consumer>
              {value => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColourContext.Consumer>
    );
  }
}

export default Button;
