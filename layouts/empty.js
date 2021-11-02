import React from 'react'
import Head from 'next/head'
import { Layout } from 'antd'

const LayoutComponent = (props) => (
  <>
    <Head>
      <title>{props.meta_title || "NextJS | Version 12"}</title>
      <meta name="description" content={props.meta_description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Content>
      {props.children}
    </Layout.Content>
  </>
)

export default LayoutComponent
