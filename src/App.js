import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import "./navbar/Navbar.css";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import SignUp from "./signup/SignUp";
import Message from "./message/Message";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <br/>
      <SignUp></SignUp>
      <br/><br/><br/>
      <Message className="message is-danger" title='Exercise finished' message="This exercise was performed by Matt Weber & Javi Sastre."/>
    </div>
  );
};

export default App;

