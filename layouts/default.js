import React from 'react'
import Head from 'next/head'
import Header from '~/components/Header/Default'
import { Layout } from 'antd'

const LayoutComponent = (props) => (
  <>
    <Head>
      <title>{props.meta_title || "NextJS | Version 12"}</title>
      <meta name="description" content={props.meta_description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Layout.Content style={{paddingTop:'70px'}}>
      {props.children}
    </Layout.Content>
  </>
)

export default LayoutComponent
