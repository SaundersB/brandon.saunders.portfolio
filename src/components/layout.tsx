/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../styles/layout.scss"
import Header from "./header";
import Footer from "./footer";

interface LayoutInterface {
    children: any
}

const Layout = ({children}: LayoutInterface) => {
    return (
        <>
            <div>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
