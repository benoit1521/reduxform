import React from "react";
import ActivityCreationForm from "./ActivityCreationForm";

class ActivityCreationPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <ActivityCreationForm onSubmit={this.submit} />;
  }
}
export default ActivityCreationPage;
