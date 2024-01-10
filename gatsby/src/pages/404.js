import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo"

const Error = () => {
  return (
    <>
      <SEO title="Not Found" />
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
