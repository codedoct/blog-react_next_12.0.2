import React from 'react'
import { connect } from 'react-redux'
import { getNewsDetail } from "~/store/actions/news"
import DataLoading from '~/components/Global/Data/Loading'

const NewsDetail = ({dispatch, newsId, news}) => {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => { initData() }, [])
  const initData = async () => {
    setIsLoading(true)
    try {
      await getNewsDetail(dispatch, newsId)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <div className="content-container">
      <h3 className="mb-2">{news.newsDetail.title}</h3>
      {!isLoading ? (
        <p>{news.newsDetail.content}</p>
      ) : (
        <DataLoading />
      )}
    </div>
  )
}

export default connect(state => state)(NewsDetail)
