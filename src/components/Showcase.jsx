import React from 'react'
import { useGSAP } from '@gsap/react';
import {useMediaQuery} from 'react-responsive'
import gsap from 'gsap';

const Showcase = () => {

    const  isTablet = useMediaQuery({ query: '(max-width: 1024px)'})

    useGSAP(()=> {
        if(!isTablet){
            const timeline = gsap.timeline({
                scrollTrigger:{
                    trigger: 'showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            })

            timeline
            .to('mask img', {
                transform: scale(1.1)
            }).to('content', {opacity: 1, y: 0, ease: 'power1.in'})
        }
    }, [isTablet])

  return (
    <section id="showcase">
        <div className='media'>
            <video src="/videos/game.mp4" autoPlay muted loop playsInline />
            <div className='mask'>
                <img src ="/mask-logo.svg"/>
            </div>
        </div>

 <div className='content'>
    <div className='wrapper'>
    <div className="lg:max-w-md">
      <h2>Rocket Chip</h2>

      <div className="space-y-5 mt-7 pe-10">
        <p>
          次世代のAppleシリコン <span className="text-white">M4をご紹介します</span>。
        </p>
        <p>
          M4はiPad Pro上でApple Intelligenceを駆動し、より簡単に文章を書き、創造し、そしてより多くのことを成し遂げられるようにします。信じられないほど薄く、軽く、そしてパワフルなデザインの中にすべてが詰まっています。
        </p>
        <p>
          まったく新しいディスプレイエンジンが、息をのむほどの精度、色再現性、輝度を実現。さらに次世代GPUはハードウェアアクセラレーションによるレイトレーシングを備え、コンソールレベルのグラフィックスをあなたの指先に届けます。
        </p>
        <p className="text-primary">Apple Intelligenceについて詳しく見る</p>
      </div>
    </div>

    <div className="max-w-3xs space-y-14">
      <div className="space-y-2">
        <p>最大</p>
        <h3>4倍高速</h3>
        <p>M2と比べたプロ向けレンダリング性能</p>
      </div>
      <div className="space-y-2">
        <p>最大</p>
        <h3>1.5倍高速</h3>
        <p>M2と比べたCPU性能</p>
      </div>
    </div>
</div>
</div>
   
    </section>
  )
}

export default Showcase;