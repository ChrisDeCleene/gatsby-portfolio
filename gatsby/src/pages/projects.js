import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/Seo"
const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <SEO title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        id
        title
        slug
        description
        featured
        github
        url
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
