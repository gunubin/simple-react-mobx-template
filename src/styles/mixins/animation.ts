import {css} from 'styled-components'

export enum AnimationDirection {
  ALTERNATE = 'alternate',
  ALTERNATE_REVERSE = 'alternate-reverse',
  NORMAL = 'normal',
  REVERSE = 'reverse',
}

export enum AnimationFillMode {
  BACKWARDS = 'backwards',
  BOTH = 'both',
  FORWARDS = 'forwards',
  NONE = 'none',
}

export enum AnimationPlayState {
  PAUSED = 'paused',
  RUNNING = 'running',
}

// TODO: incompatible errorになってしまうので後で直す
type IterationType = any // number | 'infinite';

type AnimationProperty = {
  playState?: AnimationPlayState
  delay?: number
  direction?: AnimationDirection
  duration?: number
  easing?: string
  fill?: AnimationFillMode
  iteration?: IterationType
  keyframe: string
}

const animation = ({
  playState = AnimationPlayState.RUNNING,
  delay = 0,
  duration = 0.3,
  easing = 'ease-in-out',
  fill = 'both',
  iteration = 1,
  direction = 'normal',
  ...props
}: AnimationProperty) => {
  return css`
    animation-name: ${props.keyframe};
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    animation-timing-function: ${easing};
    animation-iteration-count: ${iteration};
    animation-direction: ${direction};
    animation-fill-mode: ${fill};
    animation-play-state: ${playState};
  `
}

export default animation
