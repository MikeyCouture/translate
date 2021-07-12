import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          ></i>
        </div>
        <ColourContext.Provider value="primary">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColourContext.Provider>
      </div>
    );
  }
}

export default App;
