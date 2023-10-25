import { useDispatch } from "react-redux";
import { changeGameState } from "../utils/gameStateSlice";
import { useState } from "react";
import { setUserName } from "../utils/userSlice";
import Card from "./Card";

const Menu = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [err, setErr] = useState(false);

  const start = () => {
    if (fullName !== "") {
      dispatch(setUserName(fullName));
      dispatch(changeGameState("quiz"));
    } else {
      setErr(true);
    }
  };

  return (
    <Card>
      <div className="menu">
        <p className="text">
          Welcome to our quiz game! It's as simple as it gets: five questions,
          each worth one point. Just enter your name, and let's get started.
          Good luck!
        </p>
        <div className="input-wrap">
          {err && <span className="alert">*This is required field</span>}
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <button className="btn" onClick={start}>
          Start Game
        </button>
      </div>
    </Card>
  );
};

export default Menu;