import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import "./navbar/Navbar.css";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import SignUp from "./signup/SignUp";

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
      <CoolButton is-small is-danger my-className > Button </CoolButton>
      
      <SignUp></SignUp>
    </div>
  );

    // <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    // <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
};

export default App;


{/* <CoolButton className="button is-small is-danger is-rounded my-className"></CoolButton>


 CoolButton.js,

<button className={props.className}>Button</button> */}
