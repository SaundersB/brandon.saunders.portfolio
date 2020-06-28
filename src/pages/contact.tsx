import * as React from "react";
import {Link, PageProps} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ContactsPage(props: PageProps) {
    return (
        <Layout>
            <SEO title="Contacts"/>
            <Link to="/">About</Link>
        </Layout>
    )
}


export default ContactsPage;
