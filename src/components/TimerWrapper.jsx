import { useState, useEffect } from "react";
import { useTimer } from 'react-timer-hook'
import { Timer } from "./Timer";
import { Button } from "./Button";
import { TimerSettings } from "./TimerSettings";
import { useAuth } from "../contexts/auth";

export function TimerWrapper() {
  const { isSigned, user } = useAuth()
  
  const [pomodoroDurations, setPomodoroDurations] = useState({
    'pomodoro-duration': 25,
    'short-rest-duration': 5,
    'long-rest-duration': 15
  })
  
  const [isTimerStarted, setIsTimerStarted] = useState(false)

  const time = new Date()
  time.setSeconds(time.getSeconds() + pomodoroDurations['pomodoro-duration'] * 60)

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    restart,
    pause,
    resume,
  } = useTimer({ expiryTimestamp: time, onExpire: handlePomodoroCompleted})

  function handleStartCountdown() {
    resume()
    setIsTimerStarted(true)
  }
  
  function handleResetCountdown() {
    const time = new Date()
    time.setSeconds(time.getSeconds() + pomodoroDurations['pomodoro-duration'] * 60)
    
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

  function handlePomodoroDurationChange() {
    const time = new Date()
    time.setSeconds(time.getSeconds() + pomodoroDurations['pomodoro-duration'] * 60)

    restart(time, false)
    setIsTimerStarted(false)
  }

  async function handlePomodoroCompleted() {
    if(isSigned &&
         user.taskId &&
         user.apiToken &&
         user.userId
      ) {
      const res = await fetch(`https://habitica.com/api/v3/tasks/${user.taskId}/score/up`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'x-api-key': user.apiToken,
          'x-api-user': user.userId
        },
      })
      const resData = await res.json()

      if(!resData.success) {
        alert('Failed to score task.')
      }
    }

    alert('Pomodoro Completed!')
  }

  useEffect(() => {
    pause()
  }, [])

  return (
    <div className="max-w-xs">
      <Timer 
        total={pomodoroDurations['pomodoro-duration'] * 60}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      
      <TimerSettings
        pomodoroDurations={pomodoroDurations}
        setPomodoroDurations={setPomodoroDurations}
        onPomodoroDurationChange={handlePomodoroDurationChange}
      />

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
