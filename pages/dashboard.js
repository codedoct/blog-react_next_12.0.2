import React from 'react'
import Layout from '~/layouts/default'
import DashboardComponent from '~/components/Page/Dashboard'

const DashboardPage = () => {
  return (
    <>
      <Layout
        meta_title='NextJS | Version 12'
        meta_description='New version NextJS nov 2021'
      >
        <DashboardComponent />
      </Layout>
    </>
  )
}

export default DashboardPage
