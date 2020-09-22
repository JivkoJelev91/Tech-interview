import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../redux/actions/playgroundActions';
import '../App.css';

const Timer = ({ getComments }) => {
  const duration = 179; // 3 minutes
  const [time, setTime] = useState(duration);

  const startTimer = useCallback(() => {
    const minutes = "0" + Math.floor(time / 60);
    const seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(second => second - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(interval);
      setTimeout(() => {
        setTime(duration);
        getComments(1, 2); // postId=1, postId=2
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, getComments]);

  return (
    <div className="timerWrapper">
      <div className="timerTitle">Next draw</div>
      <div className="timer"> {startTimer()} </div>
    </div>
  );
}

const mapDispatchToProps = { getComments }

export default connect(null, mapDispatchToProps)(Timer);
