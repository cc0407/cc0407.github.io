exports.sourceNodes = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      interface ProjectNode {
        name: String
        slug: String!
        projectType: String
        link: String
        target: String
      }
  
      type project implements Node & ProjectNode {
        name: String
        slug: String!
        projectType: String
        link: String
        target: String
      }
    `
    createTypes(typeDefs)
  }