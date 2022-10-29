import { useState, useEffect } from "react";
import { useTimer } from 'react-timer-hook'

import { Timer } from "./Timer";
import { Button } from "./Button";
import { TimerSettings } from "./TimerSettings";

export function TimerWrapper() {
  const [secondsTotal, setSecondsTotal] = useState(1800) // 35 * 60
  const [secondsRemaining, setSecondsRemaining] = useState(1800)
  
  const [isTimerStarted, setIsTimerStarted] = useState(false)

  const time = new Date()
  time.setSeconds(time.getSeconds() + secondsTotal)

  const {
    seconds,
    minutes,
    isRunning,
    restart,
    pause,
    resume,
  } = useTimer({ expiryTimestamp: time, onExpire: () => alert('opa')})

  function handleStartCountdown() {
    resume()
    setIsTimerStarted(true)
  }
  
  function handleResetCountdown() {
    const time = new Date()
    time.setSeconds(time.getSeconds() + secondsTotal)
    
    setIsTimerStarted(false)
    restart(time, false)
  }

  function handlePauseToggle() {
    if(isRunning) {
      pause()
    } else {
      resume()
    }
  }

  useEffect(() => {
    pause()
  }, [])
  
  return (
    <div className="max-w-xs">
      <Timer 
        total={secondsTotal}
        minutes={minutes}
        seconds={seconds}
      />
      
      <TimerSettings />

      <div className="pt-4 flex justify-center gap-4">
        { 
          !isTimerStarted ? (
            <Button
              onClick={handleStartCountdown}
            >
              Start
            </Button>
          ) : (
            <Button
              onClick={handlePauseToggle}
            >
              { isRunning && 'Pause' }
              { !isRunning && 'Continue' }
            </Button>
          )
        }

        <Button 
          outline="false"
          onClick={handleResetCountdown}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
