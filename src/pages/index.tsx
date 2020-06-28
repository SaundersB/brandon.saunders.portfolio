import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Welcome from "../components/welcome";

function IndexPage() {
    return (
        <Layout>
            <SEO title="Home"/>
            <Welcome/>
        </Layout>
    );
};


export default IndexPage;
