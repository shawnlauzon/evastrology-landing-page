module.exports = {
  siteMetadata: {
    title: `Eva Astrological Assistant`,
    description: `Let Eva plan your week to align with the stars.`,
    author: `Shawn Lauzon`,
    twitterHandle: `@AstrologyEva`,
    url: `https://evastrology.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      // See https://web.dev/add-manifest/
      options: {
        name: `Eva Astrology`,
        short_name: `EVAstrology`,
        start_url: `/`,
        background_color: `#80DEEA`,
        theme_color: `#80DEEA`,
        display: `browser`,
        icon: `src/images/icon.jpeg`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-162519236-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: false,
      },    
    },    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
