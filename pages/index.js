import React from 'react'
import Layout from '~/layouts/admin'
import DashboardComponent from '~/components/Page/Dashboard'

const DashboardPage = () => {
  return (
    <>
      <Layout
        meta_title='Logee | Logistik App'
        meta_description='Logistik App'
      >
        <DashboardComponent />
      </Layout>
    </>
  )
}

export default DashboardPage
