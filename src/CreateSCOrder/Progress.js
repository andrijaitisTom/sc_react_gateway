import React, { useState } from "react";
import useInterval from "../useInterval";
import classes from "./SCOrderSummary.module.css";

const Progress = (props) => {
  const [percent, setPercent] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    if (percent < 100) {
      setPercent(percent + props.percent);
      setSeconds(seconds + 1);
    } else setDelay(null);
  }, delay);

  return (
    <div>
      <canvas
        className={classes.progressTopLevel}
        style={{ width: percent + "%" }}
      ></canvas>
      <canvas className={classes.progress}></canvas>
    </div>
  );
};

export default Progress;
