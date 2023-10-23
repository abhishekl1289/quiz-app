import { useDispatch } from "react-redux"
import { questions } from "../utils/questionBank"
import { useState } from "react"
import { changePosition } from "../utils/quizSlice"
import { changeValue } from "../utils/scoreSlice"
const MiddlePage = () => {
    const [quesNo,setQuesNo]=useState(0)
    const [option,setOption]=useState(null)
    const dispatch=useDispatch()
    const next=()=>{
        if(option===questions[quesNo].correct){
            dispatch(changeValue());
        }
        setQuesNo(quesNo+1)
    }
    const submit=()=>{
        if(option===questions[quesNo].correct){
            dispatch(changeValue());
        }
        dispatch(changePosition("last"))
    }
  return (
    <div className="middle">
    <h1 className="heading">Quiz App</h1>
    <h3 className="question">{questions[quesNo].question}</h3>
    <div className="option">
    <button className="" onClick={()=>setOption("A")}>{questions[quesNo].A}</button>
    <button onClick={()=>setOption("B")}>{questions[quesNo].B}</button>
    <button onClick={()=>setOption("C")}>{questions[quesNo].C}</button>
    <button onClick={()=>setOption("D")}>{questions[quesNo].D}</button>
    
    {quesNo===questions.length-1?<button className="submit-btn" onClick={submit}>Submit</button>:<button className="final-btn" onClick={next}>Next</button>}
    </div>
    </div>
  )
}

export default MiddlePage
