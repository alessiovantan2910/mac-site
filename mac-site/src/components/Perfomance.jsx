import React, { useRef } from 'react';
import { useMediaQuery } from "react-responsive";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { useGSAP } from '@gsap/react';
import { performanceImages, performanceImgPositions } from '../constants';


gsap.registerPlugin(ScrollTrigger);

const Performance = () => { 
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;

          
            gsap.fromTo(
                ".content p",
                { autoAlpha: 0, y: 24 },
                {
                    autoAlpha: 1,
                    y: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top 80%",
                        end: "top center",
                        scrub: true,
                    }
                }
            );

            if (isMobile) return;

            const tl = gsap.timeline({
                defaults: { duration: 2, ease: "power1.out", overwrite: "auto" },
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

            performanceImgPositions.forEach((item) => {
                if (item.id === "p5") return;

                const selector = `.${item.id}`;
                const vars = {};

              
                if (typeof item.left === 'number') vars.left = `${item.left}%`;
                if (typeof item.right === 'number') vars.right = `${item.right}%`;
                if (typeof item.bottom === 'number') vars.bottom = `${item.bottom}%`;

                if (item.transform) vars.transform = item.transform;

                    tl.to(selector, vars, 0);
                
            });
        },
        { scope: sectionRef, dependencies: [isMobile] }
    );

    return (
        <section id='performance' ref={sectionRef}>
            <h2>タイトル１</h2>

            <div className='wrapper'>
             
                {performanceImages.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        className={item.id}
                        alt={item.alt || `Performance Image ${index + 1}`}
                    />
                ))}
            </div>

            <div className='content'>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto esse laudantium quasi ratione hic ea illo excepturi delectus in. Officia, et exercitationem.
                    Suscipit debitis facere quod eligendi adipisci odio voluptatem!
                    <span className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis exercitationem enim commodi autem. Exercitationem, dolore quasi earum ipsum velit, laboriosam dicta optio necessitatibus dolorem minima blanditiis ratione facere illo modi?</span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis rerum quibusdam sit iusto odio sequi officiis harum porro repellendus nulla incidunt suscipit beatae explicabo fugiat,
                    possimus natus praesentium cupiditate? Ipsam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim quam consectetur architecto provident beatae ipsam nisi perspiciatis, odio totam dicta, iusto nihil eligendi.
                    Blanditiis ad maiores in similique voluptatem?
                </p>
            </div>
        </section>
    );
}

export default Performance;