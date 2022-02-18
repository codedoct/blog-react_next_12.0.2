import React from 'react'
import { API_NEWS } from '~/utils/api-url'
import { apiGetNonAuth } from '~/utils/api'

const News = () => {
  const [news, setNews] = React.useState({docs:[]})
  React.useEffect(() => { getNews() }, [])

  const getNews = async () => {
    try {
      const response = await apiGetNonAuth(API_NEWS.LIST)
      setNews(response.data.result)
    } catch (err) {
      console.log(err.response)
    }
  }

  return (
    <div className="content-container">
      <div className="mb-2">List News</div>
      {news.docs.map((data, index) => (
        <div className key={index}>{data.title}</div>
      ))}
    </div>
  )
}

export default News
