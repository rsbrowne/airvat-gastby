/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const supportedLanguages = [`en`, `zh`, `ru`]
const defaultLanguage = 'en'

module.exports = {
  siteMetadata: {
    title: `Airvat`,
    siteUrl: `https://www.airvat.com/`,
    description: `Shop tax free | AIRVAT`,
    defaultLanguage,
    supportedLanguages,
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Averta: n3,n4,n6,n7']
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/blog/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/assets`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    'gatsby-plugin-favicon',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-141200577-1",
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0
      },
    },
    // i18n
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: supportedLanguages,
        defaultLanguage,
        // This prevents gatsby-plugin-intl from auto-redirecting to default language versions
        redirect: false,
      },
    },
  ]
}
