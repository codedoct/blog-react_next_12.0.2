import React from 'react'
import Layout from '~/layouts/default'
import NewsComponent from '~/components/Page/News'

const News = () => {
  return (
    <Layout
      meta_title='NextJS | Version 12'
      meta_description='New version NextJS nov 2021'
    >
      <NewsComponent />
    </Layout>
  )
}

export default News
