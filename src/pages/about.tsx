import * as React from "react";
import {Link, PageProps} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function AboutPage(props: PageProps) {
    return (
        <Layout>
            <SEO title="About"/>
            <Link to="/">About</Link>
        </Layout>
    )
}


export default AboutPage;
