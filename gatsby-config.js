module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Thomas Hanna Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/batman.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,700`,
          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
  ],
};
