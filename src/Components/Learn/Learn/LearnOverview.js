import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Learn from './Learn'
import LearnTrueFalse from './LearnTrueFalse'
import { connect } from 'react-redux'

function LearnOverview(props) {

    const {id} = useParams()
    const lo = useLocation()
    const nav = useNavigate()
    const [data, setData] = useState([])

    const [a, SetA] = useState(0)

    const [correctAnswer, setCorrectAnswer] = useState([])
    const [incorrectAnswer, setIncorrectAnswer] = useState([])

    useEffect(() => {
        setData(lo.state.data)
    },[])

    useEffect(() => {
        if(a === 1){
                nav(`/flashcard/${id}/learn/result`, {state: {dataCorrect: props.dataState.lstData, dataIncorrect: props.dataState.lstDataFail}})
        }

        
    },[correctAnswer, incorrectAnswer, a])

    useLayoutEffect(() => {
        return () => {
            props.RemoveData()
        }
    }, [])


    const randomfour = (a) => {
        const newData = [...data].sort(() => 0.5 - Math.random()).filter(x => 
            x.english != a.english
        ).slice(0, 3)
        return [a, ...newData]
    }

    const [i, SetI] = useState(0)
    

    const Next = () => {
        if(i < data.length - 1)
        {
            SetI(i+1)
        }
        if(i == data.length - 1){
            SetA(1)
        }
    }


  return (
    data.length > 0 && 
    <div>
        {/* {console.log(props.dataState)} */}
        {Math.random() * 10 < 7 
        ? <Learn data = {randomfour(data[i])} next = {Next} i ={i} Si = {data.length} /> 
        : <LearnTrueFalse data = {randomfour(data[i])} next = {Next} i ={i} Si = {data.length} />}
    </div>
  )
}

const MapStateToProps = (globalState) => {
    return {
      dataState: globalState.dataManage
    }
  }

  const MapDispatchToProps = (dispatch) => {
    return {
      RemoveData: () => {
        dispatch({
          type: "REMOVE",
          payload: ""
        })
      },
     
    }
  }

  export default connect(MapStateToProps, MapDispatchToProps)(LearnOverview)
