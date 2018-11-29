import React from "react";
import UserCreationForm from "./UserCreationForm";

class UserCreationPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <UserCreationForm onSubmit={this.submit} />;
  }
}
export default UserCreationPage;
