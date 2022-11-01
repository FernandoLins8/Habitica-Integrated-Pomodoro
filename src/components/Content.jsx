import { useAuth } from "../contexts/auth";
import { TimerWrapper } from "./TimerWrapper";

export function Content() {
  const { user, isSigned } = useAuth()
  
  return (
    <div className="h-5/6 flex flex-col items-center text-center">

      <div className="mb-8">
        <h1 className="text-3xl mb-6">Simple Pomodoro for Habitica</h1>
        {
          isSigned ? (
            <small>Attached to task <strong>{user.taskId}</strong></small>
          ) : (
            <p className="text-lg">
              An unofficial pomodoro timer that can be easily integrated with        
              <a 
                href="https://habitica.com/" 
                target="_blank"
                className="text-indigo-500"
              > Habitica</a>.
            </p>
          )
        }
      </div>

      <TimerWrapper />
    </div>
  )
}