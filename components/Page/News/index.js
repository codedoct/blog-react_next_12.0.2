import React from 'react'
import Router from 'next/router'
import { API_NEWS } from '~/utils/api-url'
import { apiGetNonAuth } from '~/utils/api'
import DataNotfound from '~/components/Global/Data/NotFound'
import DataLoading from '~/components/Global/Data/Loading'

const News = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [news, setNews] = React.useState({docs:[]})
  
  React.useEffect(() => { getNews() }, [])
  const getNews = async () => {
    setIsLoading(true)
    try {
      const response = await apiGetNonAuth(API_NEWS.LIST)
      setNews(response.data.result)
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
        news.docs.length>0 ? (
          news.docs.map((data, index) => (
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

export default News
