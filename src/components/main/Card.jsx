import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'


export default function Card() {

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 65, (x - window.innerWidth / 2) / 65, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${0}deg) rotateY(${0}deg) scale(${s})`
  const [props, set] = useSpring(() => (
    {
      xys: [0, 0, 1],
      config: { mass: 5, tension: 350, friction: 40 }
    }
  ))

  return (
    <animated.div
      className='card'
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}

ReactDOM.render(<Card />, document.getElementById('root'))