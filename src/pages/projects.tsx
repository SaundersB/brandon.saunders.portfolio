import * as React from "react";
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ProjectsPage(props: PageProps){
    return (
        <Layout>
            <SEO title="Projects" />
            <Link to="/">About</Link>
        </Layout>
    )
}


export default ProjectsPage;
