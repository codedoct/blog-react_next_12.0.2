import React from 'react'
import Layout from '~/layouts/default'
import NewsReduxComponent from '~/components/Page/NewsRedux'

const NewsRedux = () => {
  return (
    <Layout
      meta_title='NextJS | Version 12'
      meta_description='New version NextJS nov 2021'
    >
      <NewsReduxComponent />
    </Layout>
  )
}

export default NewsRedux
