import React from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
import Header from '~/components/Header/Admin'

const LayoutComponent = (props) => (
  <>
    <Head>
      <title>{props.meta_title || "Logee | Logistik App"}</title>
      <meta name="description" content={props.meta_description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Layout.Content>
      {props.children}
    </Layout.Content>
  </>
)

export default LayoutComponent
