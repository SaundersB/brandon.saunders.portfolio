import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Welcome from "../components/welcome";

function IndexPage() {
    return (
        <Layout>
            <SEO title="Brandon Saunders" description={"Brandon Saunders Portfolio"} lang={"en"}/>
            <Welcome/>
        </Layout>
    );
};


export default IndexPage;
