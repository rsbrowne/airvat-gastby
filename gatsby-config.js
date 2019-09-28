/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const supportedLanguages = [
  { id: 'en', label: 'English' },
  { id: 'zh', label: 'Chinese' },
]
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
    'gatsby-transformer-remark',
    'gatsby-plugin-favicon',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: supportedLanguages,
        // language file path
        defaultLanguage: defaultLanguage,
        redirect: true,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {
    //     langKeyForNull: 'en',
    //     langKeyDefault: 'en',
    //     useLangKeyLayout: false,
    //     // markdownRemark: {
    //     //   postPage: 'src/templates/blog.js',
    //     //   query: `
    //     //     {
    //     //       allMarkdownRemark {
    //     //         edges {
    //     //           node {
    //     //             fields {
    //     //               slug,
    //     //               langKey
    //     //             }
    //     //           }
    //     //         }
    //     //       }
    //     //     }
    //     //   `
    //     // }
    //   }
    // },
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
  ]
}
