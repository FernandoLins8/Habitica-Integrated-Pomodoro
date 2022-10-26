import * as Slider from '@radix-ui/react-slider';

export function Slider () {
  return (
    <Slider.Root>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb />
    </Slider.Root>
  )
} 