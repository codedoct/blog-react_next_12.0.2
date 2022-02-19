import { ExclamationCircleTwoTone } from '@ant-design/icons'

const DataNotfound = ({type}) => {
  return (
    <div style={{width:'100%',textAlign:'center',margin:'50px 0',color:'#929292'}}>
      <ExclamationCircleTwoTone style={{fontSize:'40px'}}/>
      <div className="mt-2">{type} Data Is Not Found</div>
    </div>
  )
}

export default DataNotfound
