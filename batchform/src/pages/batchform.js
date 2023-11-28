import React, { useState } from "react"

export default function Batchform() {
  return (
    <div>
      <h1>Contact form</h1>
      <form method="POST" action="">
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>

        <button type="submit">Send message</button>
      </form>
    </div>
  )
}