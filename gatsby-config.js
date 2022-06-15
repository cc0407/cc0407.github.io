module.exports = {
  siteMetadata: {
    title: `Christian Catalano's Personal Site`,
    description: `Showcasing my experience, newest projects, and resume`,
    author: `Christian Catalano`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { 
        tailwind: true,
        develop: true,
        ignore: ['src/css/index.css', 'src/components/*.tsx'],
        printRejected: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christian Catalano`,
        short_name: `Christian Catalano`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#EE3325`,
        display: `browser`,
        icon: `static/favicon.ico`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  //Change REPONAME to the name of this repo. Necessary for gh-pages to function
  pathPrefix: "",
};
