import React from 'react'
import { API_NEWS } from '~/utils/api-url'
import { apiGetNonAuth } from '~/utils/api'
import DataLoading from '~/components/Global/Data/Loading'

const NewsDetail = ({newsId}) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [newsDetail, setNewsDetail] = React.useState({docs:[]})

  React.useEffect(() => { getNews() }, [])
  const getNews = async () => {
    setIsLoading(true)
    try {
      const response = await apiGetNonAuth(API_NEWS.DETAIL(newsId))
      setNewsDetail(response.data.result)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <div className="content-container">
      <h3 className="mb-2">{newsDetail.title}</h3>
      {!isLoading ? (
        <p>{newsDetail.content}</p>
      ) : (
        <DataLoading />
      )}
    </div>
  )
}

export default NewsDetail
