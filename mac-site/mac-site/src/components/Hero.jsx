import React, { useRef, useEffect} from 'react'

const Hero = () => {

    const videoRef = useRef();

    useEffect(()=> {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, [])

  return (
  <section id='hero'>
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt='title'/>
    </div>
    <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
    <button>Buy</button>
    <p>248,800円（税込）から、または
10,366円/月（税込）の24回払いから*</p>
  </section>
  )
}

export default Hero