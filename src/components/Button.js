import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <ColourContext.Consumer>
        {colour => (
          <button className={`ui button ${colour}`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColourContext.Consumer>
    );
  }
}

export default Button;
