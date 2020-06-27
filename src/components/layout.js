/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import Header from "./header"
import theme from "../styles/theme"
import GlobalStyles from "../styles/GlobalStyles"

// import "./layout.css"

const Layout = ({ children, lang }) => {
  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header lang={lang}/>
      {children}
    </>
  </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
