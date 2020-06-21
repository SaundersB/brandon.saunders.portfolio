import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import {StaticPlaceholderComponent} from "../components/StaticPlaceholderComponent";
import Header from "../components/header";



function IndexPage() {
    return (
        <Layout>
            <SEO title="Home"/>
            <Header/>
            <StaticPlaceholderComponent wrapperStyles={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1d1d1d',
                backgroundImage: 'linear-gradient(#1d1d1d, #fff)'
            }}
            />
        </Layout>
    );
};



export default IndexPage;
