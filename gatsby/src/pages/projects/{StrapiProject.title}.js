import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/Seo'

const ProjectTemplate = ({pageContext: {title}, data }) => {
  return (
    <>
    <SEO title={data.strapiProject.title} description={data.strapiProject.description} image={data.strapiProject.image.publicURL} />
      <main className='project-template-page'>
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        publicURL
      }
    }
  }
`

export default ProjectTemplate
