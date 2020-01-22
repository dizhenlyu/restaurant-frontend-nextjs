import React from "react";  
import Head from "next/head";  
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";
import Layout from "../components/Layout";
import AppProvider from "../components/Context/AppProvider";

const App = ({ Component, pageProps, apollo, isAuthenticated }) => {  
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Strapi blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
      </Head>
      <AppProvider>
        <Layout isAuthenticated={isAuthenticated} {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </ApolloProvider>
  )
};

App.getInitialProps = async ({ Component, router, ctx, apollo }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
}

// Wraps all components in the tree with the data provider
export default withData(App);