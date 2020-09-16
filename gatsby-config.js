module.exports = {
  siteMetadata: {
    title: `Christian Catalano's Personal Site`,
    description: `Showcasing my experience, newest projects, and resume`,
    author: ``,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: { tailwind: true },
    // },
    `gatsby-plugin-react-helmet`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
