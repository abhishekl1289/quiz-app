import { useDispatch, useSelector } from "react-redux";
import { questions } from "../utils/questionBank";
import { resetScore } from "../utils/scoreSlice";
import { changeGameState } from "../utils/gameStateSlice";
import Card from "./Card";

const Score = () => {
  const { scoreVal } = useSelector((store) => store.score);
  const { userName } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const restart = () => {
    dispatch(resetScore());
    dispatch(changeGameState("menu"));
  };

  return (
    <Card>
      <div>
        <p className="text">
          Hey! <span className="user-name">{userName}</span>😊 thanks for
          attempting the quiz here is your score card
        </p>
        <h4 className="score">
          Your Score: <span className="digit">{scoreVal}</span>
        </h4>
        <h4 className="score">
          Total Score: <span className="digit1">{questions.length}</span>
        </h4>
        <button className="btn restart" onClick={restart}>Restart</button>
      </div>
    </Card>
  );
};

export default Score;