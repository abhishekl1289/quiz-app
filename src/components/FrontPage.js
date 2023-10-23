import { useDispatch } from "react-redux"
import { changePosition } from "../utils/quizSlice"


const FrontPage = () => {
    const dispatch=useDispatch()
  return (
    <div className="front">
      <h1 className="heading">Quiz App</h1>
      <button className="btn" onClick={()=>dispatch(changePosition("middle"))}>Start</button>
    </div>
  )
}

export default FrontPage
