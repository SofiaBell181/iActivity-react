import mockup1 from '../images/1.png';
import mockup2 from '../images/2.png';
import mockup3 from '../images/3.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Main() {
    const device = useRef();
    gsap.registerPlugin(ScrollTrigger);
    
    
    useEffect(() => {
       let ctx = gsap.context(() => {
          if (window.innerWidth >= 600) {
             gsap.from(".device__image", {
                y: 100,
                opacity: 0,
                ease: "power1.out",
                duration: 1.3,
                delay: .1,
                stagger: 1,
                scrollTrigger: {
                   start: "-25% 50px",
                   trigger: device.current
                }
             });
          } else {
    
             gsap.from(".left-animate", {
                opacity: 0,
                x: -100,
                duration: 1,
                delay: .5,
                stagger: 0
             });
    
             gsap.from(".right-animate", {
                opacity: 0,
                x: 100,
                duration: 1,
                delay: .5,
                stagger: 0
             });
    
             gsap.from(".device__image", {
                y: 100,
                opacity: 0,
                ease: "power1.out",
                duration: 1.8,
                delay: .5,
                stagger: 1.5,
                scrollTrigger: {
                   start: "top",
                   trigger: ".block-deviceInfo__cards"
                }
             });
    
          }
    
          gsap.from(".linkHome", {
             opacity: 0,
             duration: 2,
             delay: .8
          })
    
       }, device)
    
       return () => ctx.revert();
    }, [])
    
    useEffect(() => {
       AOS.init({
          disable: window.innerWidth < 600,
          duration: 2000,
          once: true
       })
    }, [])

    return(
        <>
            <div className="container-main" ref={device}>
                <div className='container'>
                    <div className="main-header" data-aos="fade-down" data-easing="linear">
                        <h3>Keep an eye on your device</h3>
                    </div>
                    <div className="header__mb">
                        <div className="linkHome" >
                            <a href="#home">text</a>
                        </div>
                        <div className="main-header__mb left-animate">
                            <h3>Keep an eye on your device</h3>
                        </div>
                        <div className='block-logo left-animate' >
                            <div className="logo"></div>
                        </div>
                    </div>
                    <div className='row' >
                        <div className='block-device'>
                            <div className='device__image'>
                            <img src={mockup1} alt="iphone13" />
                            </div>
                            <div className='device__image'>
                            <img src={mockup2} alt="iphone13" />
                            </div>
                            <div className='device__image device3'>
                            <img src={mockup3} alt="iphone13" />
                            </div>
                        </div>
                        <div className='block-logo' data-aos="zoom-in" data-easing="linear" data-aos-duration="1500">
                            <div className="logo"></div>
                        </div>
                        <div className='block-deviceInfo__header right-animate'  data-aos="zoom-in" data-easing="linear" data-aos-duration="1500" >
                            <p>
                            iDevice app shows the following information of your phone:
                            </p>
                        </div>
                        <div className='block-deviceInfo__cards right-animate' data-aos="zoom-in" data-easing="linear" data-aos-duration="1500" >
                            <div className='card'>
                            <div className='card-CPU'>
                                <p>CPU</p>
                                <span></span>
                            </div>
                            <div className='card-RAM'>
                                <p>RAM</p>
                                <span></span>
                            </div>
                            </div>
                            <div className='card'>
                            <div className='card-Disk'>
                                <p>Disk usage</p>
                                <span></span>
                            </div>
                            <div className='card-Battery'>
                                <p>Battery level</p>
                                <span></span>
                            </div>
                            </div>
                            <div className='card card3'>
                            <p>Wi-Fi, Edge/3g/LTE traffic</p>
                            <div className='card-Edge'>
                                <span></span>
                                <span></span>
                            </div>
                            </div>
                            <div className="linkStore">
                            <a href="#store">t</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}