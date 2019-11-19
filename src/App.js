import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Form from "./components/Form";

class App extends Component {
  state = {
    fullName: "",
    emailAddress: "",
    phoneNumber: ""
  };

  render() {
    const { fullName, emailAddress, phoneNumber } = this.state;
    return (
      <>
        <CssBaseline />
        <Form name={fullName} email={emailAddress} phone={phoneNumber} />
      </>
    );
  }
}

export default App;
