import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './styles.css'

export function Timer({ minutes, seconds, total }) {
  const secondsRemaining = (minutes * 60) + seconds
  const secondsPassed = total - secondsRemaining
  const percentageCompleted = (secondsPassed * 100) / total
  
  return (
    <div className="h-50 w-50">
      <CircularProgressbarWithChildren 
        value={percentageCompleted}
        styles={{
          path: {
            stroke: 'rgb(99, 102, 241)',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
          },
          // text: {
          //   fill: 'rgb(99, 102, 241)',
          //   fontSize: '16px',
          // },
        }}
      >
        <p>Time to Focus</p>
        <p className="text-3xl">
        {
          `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        }
        </p>
      </CircularProgressbarWithChildren>
    </div>
  )
}

