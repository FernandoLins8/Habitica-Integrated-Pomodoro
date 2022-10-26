import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './styles.css'

export function Timer() {
  const total = 25
  const passed = 10

  const percentage = (passed * 100)/total
  
  return (
    <div className="h-50 w-50">
      <CircularProgressbarWithChildren 
        value={percentage}
        styles={{
          path: {
            stroke: 'rgb(99, 102, 241)',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
          },
          // text: {
          //   fill: 'rgb(99, 102, 241)',
          //   fontSize: '16px',
          // },
        }}
      >
        <p>Time to Focus</p>
        <p className="text-3xl">30:00</p>
      </CircularProgressbarWithChildren>
    </div>
  )
}

