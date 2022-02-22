import React from 'react'
import Layout from '~/layouts/default'
import NewsReduxDetailComponent from '~/components/Page/NewsRedux/Detail'

const NewsReduxDetail = ({newsId}) => {
  return (
    <Layout
      meta_title='NextJS | Version 12'
      meta_description='New version NextJS nov 2021'
    >
      <NewsReduxDetailComponent newsId={newsId} />
    </Layout>
  )
}

NewsReduxDetail.getInitialProps = async ctx => ({newsId: ctx.query.id})

export default NewsReduxDetail
