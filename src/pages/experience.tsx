import * as React from "react";
import {Link, PageProps} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ExperiencePage(props: PageProps) {
    return (
        <Layout>
            <SEO title="Experience"/>
            <Link to="/">About</Link>
        </Layout>
    )
}


export default ExperiencePage;
