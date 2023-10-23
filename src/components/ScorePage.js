import { useDispatch, useSelector } from "react-redux"
import { questions } from "../utils/questionBank"
import { changePosition } from "../utils/quizSlice"
import {  resetValue } from "../utils/scoreSlice"


const ScorePage = () => {
    const {value}=useSelector((store)=>store.score)
    const dispatch=useDispatch()
    const restart=()=>{
        dispatch(changePosition("front"))
        dispatch(resetValue())
    }
  return (
    <div className="last">
    <h1 className="heading">Quiz App</h1>
    <h3 className="result">your Score={value}</h3>
      <h3 className="result">Total Score={questions.length}</h3>
      <button className="btn" onClick={restart}>Restart</button>
    </div>
  )
}

export default ScorePage
