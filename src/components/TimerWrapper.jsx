import { Timer } from "./Timer";
import { Button } from "./Button";
import { TimerSettings } from "./TimerSettings";

export function TimerWrapper() {
  
  
  return (
    <div className="max-w-xs">
      <Timer />
      <TimerSettings />

      <div className="pt-4 flex justify-center gap-4">
        <Button>Start</Button>
        <Button outline="false">Reset</Button>
      </div>
    </div>
  )
}
