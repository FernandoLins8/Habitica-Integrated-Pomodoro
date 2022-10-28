import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import * as Popover from '@radix-ui/react-popover';
import * as Slider from '@radix-ui/react-slider';

export function TimerSettings() {
  return (
    <div className="flex justify-center mt-2">
      <Popover.Root>
        <Popover.Trigger className="w-10 h-10 flex justify-center items-center bg-indigo-500 text-white rounded-full text-right hover:opacity-95">
          <FontAwesomeIcon size="1x" icon={faSliders} />
        </Popover.Trigger>
        <Popover.Portal className="mx-auto">
          <Popover.Content className="min-w-[19rem] max-w-[21rem] min-h-[20rem] bg-indigo-200 border-2 rounded-md">    
            
            <form className="w-full p-4 rounded-md">
              <div className="py-5">
                <div className="flex justify-between pr-2">
                  <label 
                    htmlFor="pomodoro-time"
                    className="text-base"
                  >
                    Pomodoro Duration: 
                  </label>
                  <span>
                    30min
                  </span>
                </div>
                <Slider.Root
                  id="pomodoro-time"
                  className="flex w-2/3 h-4 relative items-center mt-2 mx-auto"
                  defaultValue={[25]}
                  min={1}
                  max={60}
                  step={1}
                >
                  <Slider.Track className="relative h-1 w-full grow rounded-full bg-white">
                    <Slider.Range className="absolute h-full bg-indigo-500 rounded-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block h-3 w-3 bg-indigo-500 rounded-full" />
                </Slider.Root>
              </div>

              <div className="py-5">
                <div className="flex justify-between pr-2">
                  <label 
                    htmlFor="short-rest-time"
                    className="text-base"
                  >
                    Short Rest Duration: 
                  </label>
                  <span>
                    5min
                  </span>
                </div>
                <Slider.Root
                  id="short-rest-time"
                  className="flex w-2/3 h-4 relative items-center mt-2 mx-auto"
                  defaultValue={[5]}
                  min={1}
                  max={60}
                  step={1}
                >
                  <Slider.Track className="relative h-1 w-full grow rounded-full bg-white">
                    <Slider.Range className="absolute h-full bg-indigo-500 rounded-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block h-3 w-3 bg-indigo-500 rounded-full" />
                </Slider.Root>
              </div>

              <div className="py-5">
                <div className="flex justify-between pr-2">
                  <label 
                    htmlFor="long-rest-time"
                    className="text-base"
                  >
                    Long Rest Duration: 
                  </label>
                  <span>
                    15min
                  </span>
                </div>
                <Slider.Root
                  id="long-rest-time"
                  className="flex w-2/3 h-4 relative items-center mt-2 mx-auto"
                  defaultValue={[15]}
                  min={1}
                  max={60}
                  step={1}
                >
                  <Slider.Track className="relative h-1 w-full grow rounded-full bg-white">
                    <Slider.Range className="absolute h-full bg-indigo-500 rounded-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block h-3 w-3 bg-indigo-500 rounded-full" />
                </Slider.Root>
              </div>
            </form>

            <Popover.Arrow className="m-0 fill-indigo-200"/>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}