import React from 'react'
import Layout from '~/layouts/default'
import NewsDetailComponent from '~/components/Page/News/Detail'

const NewsDetail = ({newsId}) => {
  return (
    <Layout
      meta_title='NextJS | Version 12'
      meta_description='New version NextJS nov 2021'
    >
      <NewsDetailComponent newsId={newsId} />
    </Layout>
  )
}

NewsDetail.getInitialProps = async ctx => ({newsId: ctx.query.id})

export default NewsDetail
