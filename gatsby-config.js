module.exports = {
  siteMetadata: {
    title: `Eva Astrological Assistant`,
    description: `Let Eva plan your week to align with the stars.`,
    author: `Shawn Lauzon`,
    twitterHandle: `@AstrologyEva`,
    url: `https://evastrology.com`
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
      }
    },      
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eva Astrology`,
        short_name: `EVAstrology`,
        start_url: `/`,
        background_color: `#80DEEA`,
        theme_color: `#80DEEA`,
        display: `minimal-ui`,
        icon: `src/images/eva-icon.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cormorant garamond\:400,400i,700,700i`,
          `fira sans\:300,400`
          // {
          //   family: `Vollkorn`,
          //   variants: [`400`, `700`, `700i`],
          // },
          // {
          //   family: `Raleway`,
          //   variants: [`500`],
          // },
        ],
      },
    },    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,    
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
