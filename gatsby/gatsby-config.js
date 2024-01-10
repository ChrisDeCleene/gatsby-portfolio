/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Chris DeCleene Portfolio`,
    description: `Full-Stack Web Developer & Entrepreneur. I have a passion for discovering new solutions to help small businesses grow and compete. I am constantly aiming to sharpen my skills and share what I have learned with others.`,
    titleTemplate: `%s | Chris DeCleene Portfolio`,
    url: `https://chrisdecleene.com`,
    twitterUsername: `@aBoyChristopher`,
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
  ],
}
