import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import * as Popover from '@radix-ui/react-popover';
import * as Slider from '@radix-ui/react-slider';
import { Button } from './Button';
import { useState } from 'react';

export function TimerSettings({ onPomodoroDurationChange, pomodoroDurations, setPomodoroDurations }) {
  const [settingDurations, setSettingDurations] = useState({...pomodoroDurations})

  function handleInput(name, value) {
    setSettingDurations({
      ...settingDurations,
      [name]: value
    })
  }

  function handlePopoverClosed() {
    setPomodoroDurations(pomodoroDurations)
    onPomodoroDurationChange()
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    setPomodoroDurations(settingDurations)
    onPomodoroDurationChange()
  }

  return (
    <div className="flex justify-center mt-2">
      <Popover.Root onOpenChange={handlePopoverClosed}>
        <Popover.Trigger className="w-10 h-10 flex justify-center items-center bg-indigo-500 text-white rounded-full text-right hover:opacity-95">
          <FontAwesomeIcon size="1x" icon={faSliders} />
        </Popover.Trigger>
        <Popover.Portal className="mx-auto">
          <Popover.Content className="min-w-[19rem] max-w-[21rem] min-h-[20rem] bg-indigo-200 border-2 rounded-md">    
            
            <form onSubmit={handleSubmit} className="w-full p-4 rounded-md">
              <div className="py-5">
                <div className="flex justify-between pr-2">
                  <label
                    htmlFor="pomodoro-duration"
                    className="text-base"
                  >
                    Pomodoro Duration:
                  </label>
                  <span>
                    {settingDurations['pomodoro-duration']}min
                  </span>
                </div>
                <Slider.Root
                  name="pomodoro-duration"
                  className="flex w-2/3 h-4 relative items-center mt-2 mx-auto"
                  min={1}
                  max={60}
                  step={1}
                  value={[settingDurations['pomodoro-duration']]}
                  onValueChange={value => handleInput('pomodoro-duration', value)}
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
                    htmlFor="short-rest-duration"
                    className="text-base"
                  >
                    Short Rest Duration:
                  </label>
                  <span>
                    {settingDurations['short-rest-duration']}min
                  </span>
                </div>
                <Slider.Root
                  name="short-rest-duration"
                  className="flex w-2/3 h-4 relative items-center mt-2 mx-auto"
                  min={1}
                  max={60}
                  step={1}
                  value={[settingDurations['short-rest-duration']]}
                  onValueChange={value => handleInput('short-rest-duration', value)}                  
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
                    htmlFor="long-rest-duration"
                    className="text-base"
                  >
                    Long Rest Duration: 
                  </label>
                  <span>
                    {settingDurations['long-rest-duration']}min
                  </span>
                </div>
                <Slider.Root
                  name="long-rest-duration"
                  className="flex w-2/3 h-4 relative items-center mt-2 mx-auto"
                  min={1}
                  max={60}
                  step={1}
                  value={[settingDurations['long-rest-duration']]}
                  onValueChange={value => handleInput('long-rest-duration', value)}
                >
                  <Slider.Track className="relative h-1 w-full grow rounded-full bg-white">
                    <Slider.Range className="absolute h-full bg-indigo-500 rounded-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block h-3 w-3 bg-indigo-500 rounded-full" />
                </Slider.Root>
              </div>

              <div className="text-center">
                <Button>Update Values</Button>
              </div>
            </form>

            <Popover.Arrow className="m-0 fill-indigo-200"/>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}
