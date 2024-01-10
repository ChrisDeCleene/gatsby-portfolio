import React from "react"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm"
const contact = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in Touch</h3>
          <ContactForm />
        </article>
      </section>
    </>
  )
}

export default contact
