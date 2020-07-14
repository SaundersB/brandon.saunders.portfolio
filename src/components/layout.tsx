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
import {Helmet} from "react-helmet";


interface LayoutInterface {
    children: any
}

const Layout = ({children}: LayoutInterface) => {
    return (
        <>
            <div>
                <Helmet>
                    <link rel="icon" href={'../image/favicon.ico'} />
                </Helmet>
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
