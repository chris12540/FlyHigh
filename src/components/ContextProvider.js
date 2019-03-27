import React from "react";

export const AppContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {}

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, incrementCounter: this.incrementCounter }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
