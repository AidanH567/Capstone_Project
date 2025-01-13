// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "../styles/Contact.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_dvcmo9j", "template_9ww51hk", form.current, {
//         publicKey: "ESc8d4XPjuTvvIw4p",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <div className="contact-form">
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// };
// export default Contact;
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dvcmo9j", "template_9ww51hk", form.current, {
        publicKey: "ESc8d4XPjuTvvIw4p",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsEmailSent(true); // Set state to true when email is sent
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      {isEmailSent ? (
        <div
          className="email-sent-message"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "20vh", // Ensures it's centered on the screen
          }}
        >
          <p style={{ color: "black" }}>
            Email Sent! Thank you for reaching out.
          </p>
          <button onClick={() => setIsEmailSent(false)}>
            Go Back to Contact Form
          </button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      )}
    </div>
  );
};

export default Contact;
