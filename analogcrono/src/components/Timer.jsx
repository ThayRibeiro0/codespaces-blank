import { useContext } from 'react';
import { TimersContext } from '../context/analogcron';
import '../App.css';

const Timer = () => {
  const [TimersState, dispatch] = useContext(TimersContext);

  console.log(TimersState);

  //the name changed and the idea too of timer
  return <div className="container">
    <div className="stopwatch">
      <div className="heading-bar">
        <span>Stopwatch</span>
      <div className="settings-icon">⚙</div>
    </div>
    <div className="timer-container">a</div>
  </div>
  </div>
};

export default Timer;