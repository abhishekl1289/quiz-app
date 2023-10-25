import React, { useEffect, useRef, useState } from "react";

function Timer({ duration, onTimeUp }) {
  const [counter, setCounter] = useState(0);
  const [loader, setLoader] = useState(0);

  const ref = useRef();
  useEffect(() => {
    ref.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);

    return () => clearInterval(ref.current);
  }, []);

  useEffect(() => {
    setLoader(100 * (counter / duration));

    if (counter === duration) {
      clearInterval(ref.current);

      setTimeout(() => {
        onTimeUp();
      }, 1000);
    }
  }, [counter]);

  return (
    <div className="timer">
      <div 
      style={{
        width: `${loader}%`,
        backgroundColor : `${
            loader < 50 
            ? 'lightgreen'
            : loader < 85 
            ? 'orange'
            : 'red'
        }`
      }}
      className="progress"></div>
    </div>
  );
}

export default Timer;
