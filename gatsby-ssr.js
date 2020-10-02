/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import ProjectsContext from "./src/context/ProjectsContext"

export const wrapRootElement = ({ element }) => (
  <ProjectsContext>{element}</ProjectsContext>
)
