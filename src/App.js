import React, { Component, Fragment } from "react";

import ActivityCreationPage from "./ActivityCreationPage";
import UserCreationForm from "./UserCreationForm";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ActivityCreationPage />
        <UserCreationForm />
      </Fragment>
    );
  }
}

export default App;
