import * as React from "react";
import {Link, PageProps} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ExperiencePage(props: PageProps) {
    return (
        <Layout>
            <SEO title="About" description={"Brandon Saunders Portfolio"} lang={"en"} pathname={props.location.pathname}/>
            <Link to="/">About</Link>
        </Layout>
    )
}


export default ExperiencePage;
