module.exports = {
  siteMetadata: {
    title: `Cody Ray and John's Wedding Website - November 17th, 2018`,
    description: `Cody Ray Hoeft and John West will be getting married November 17th, 2018 at The Dalles Civic Auditorium in The Dalles, Oregen`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-netlify', // must be last in the array
  ],
}
