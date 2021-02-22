import React from 'react'
import Navbar from "./../navbar/Navbar";
import FormField from "./../formfield/FormField";
import CoolButton from "./../coolbutton/CoolButton";

function SignUp() {
    return (
        <div>
            <Navbar />
            <FormField label="name" type="text" placeholder="e.g Alex Smith"  />
            <FormField label="email" type="email" placeholder="myemail@email.com"  />
            <FormField label="password" type="password" placeholder="********"  />
            
            <CoolButton text="Submit" className="button is-rounded is-small is-success" />

            
        </div>
    )
}

export default SignUp
