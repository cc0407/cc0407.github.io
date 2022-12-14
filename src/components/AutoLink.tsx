import { Link as GatsbyLink } from "gatsby"
import React, { PropsWithChildren } from "react"


interface props extends React.DetailedHTMLProps<React.HTMLAttributes<props>, props>{
    to: string,
    activeClassName?: string,
    partiallyActive?: boolean,
    other?: any[],
}
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link:React.FC<props> = (props) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(props.to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={props.to}
        activeClassName={props.activeClassName}
        partiallyActive={props.partiallyActive}
        className={props.className}
      >
        {props?.children}
      </GatsbyLink>
    )
  }
  return (
    <a 
        href={props.to} 
        className={props.className}
        {...props.other}
    >
      {props?.children}
    </a>
  )
}

export default Link