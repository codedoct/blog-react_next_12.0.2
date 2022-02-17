import React from 'react'
import Layout from '~/layouts/default'
import HomeComponent from '~/components/Page/Home'

const HomePage = () => {
  return (
    <>
      <Layout
        meta_title='NextJS | Version 12'
        meta_description='New version NextJS nov 2021'
      >
        <HomeComponent />
      </Layout>
    </>
  )
}

export default HomePage
