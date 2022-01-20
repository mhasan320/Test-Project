import emailjs from "emailjs-com";
import React, {useState} from 'react'
import { InputBox } from './InputBox';
import { TextBox } from './TextBox';

export const ContactForm = () => {
 const [contactmessage, setContactMessage] = useState(false);
  function submitFunction(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0e6qdxp",
        "template_mr2itv1",
        e.target,
        "user_0hX7q1vraiWaMczOklbcl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setContactMessage(true);
  }
    return (
        <div>
            <form onSubmit={submitFunction}>
                <InputBox labelText="Full Name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required="required" />

                <InputBox labelText="Email"
                name="email"
                type="email"
                placeholder="Enter your Email"
                required="required" />

                <InputBox labelText="Phone Number"
                name="number"
                type="number"
                placeholder="Enter your Phone Number"
                required="required" />

                <TextBox labelText="Message"
                name="textArea"
                type="text"
                placeholder="Enter your Message"
                required="required"/>
                <button className="border border-blue-400 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-600 w-full py-2 px-2 rounded-lg uppercase font-sm font-bold">
                    Submit
                </button>
                <span className="mt-3 text-center text-blue-600 text-sm block">
                    {contactmessage
                    ? "Your message has been send. We will contact with you soon"
                    : null}
                </span>
            </form>
        </div>
    )
}
