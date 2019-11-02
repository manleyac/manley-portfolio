import React from "react"

import "./Contact.styles.css";

export const Contact = () => (
  <div>
    <h1>Contact</h1>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          <input type="text" name="name" placeholder="Name" className="input"/>
        </label>
      </p>
      <p>
        <label>
          <input type="email" name="email" placeholder="Email" className="input"/>
        </label>
      </p>
      <p>
        <label>
          <textarea name="message" placeholder="Message" className="input"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
)
