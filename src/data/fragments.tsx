import { graphql } from "gatsby";

export const query = graphql`
fragment content on project {
    projectType
    slug
    name
    link
    target
  }
`