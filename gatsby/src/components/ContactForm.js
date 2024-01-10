// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react"
import { useForm, ValidationError } from "@formspree/react"
function ContactForm() {
  const [state, handleSubmit] = useForm("xpzbzkpe")
  if (state.succeeded) {
    return <p>Thanks for contacting me! You should hear from me within 24 hours.</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="name"
          className="form-control"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          className="form-control"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="message"
          className="form-control"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting} className="
      submit-btn btn">
        Submit here
      </button>
    </form>
  )
}
export default ContactForm
