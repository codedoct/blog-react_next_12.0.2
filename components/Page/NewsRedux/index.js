import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { getNews } from "~/store/actions/news"
import DataNotfound from '~/components/Global/Data/NotFound'
import DataLoading from '~/components/Global/Data/Loading'

const News = ({dispatch, news}) => {
  const [isLoading, setIsLoading] = React.useState(true)
  
  React.useEffect(() => { initData() }, [])
  const initData = async () => {
    setIsLoading(true)
    try {
      await getNews(dispatch)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <div className="content-container">
      <div className="mb-2">List News</div>
      {!isLoading ? (
        news.news.docs.length>0 ? (
          news.news.docs.map((data, index) => (
            <div key={index} className="font-link" onClick={() => Router.push(`/news/${data.id}`)}>{data.title}</div>
          ))
        ) : (
          <DataNotfound type="List News" />
        )
      ) : (
        <DataLoading />
      )}
    </div>
  )
}

export default connect(state => state)(News)
