
import { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Header() {

    const mockup = useRef();
    gsap.registerPlugin(ScrollTrigger);
 
 
    useLayoutEffect(() => {
 
       let ctx = gsap.context(() => {
          if (window.innerWidth >= 1200) {
             const fadeInElements = gsap.timeline({
                paused: true
             });
             ScrollTrigger.create({
                trigger: mockup.current,
                pin: mockup.current,
                pinSpacing: "margin",
                anticipatePin: 1,
                start: '10% top',
                end: 'bottom',
                scrub: 1,
                animation: fadeInElements
             })
 
             fadeInElements
                .to('.camera', {
                   y: -10,
                   opacity: 0,
                   duration: 0.1
                }, .1)
                .to('.CPUBatteryChips-3d', {
                   y: -20,
                   duration: 2
                }, .1)
                .to('.backplate', {
                   y: -160,
                   duration: 2
                }, .1)
                .to('.screen', {
                   y: -260,
                   duration: 2
                }, .1)
                .to(".block-mockup", {
                   y: 100,
                   paddingBottom: 70,
                   duration: 2
                }, .1)
 
          } else if (window.innerWidth > 600 && window.innerWidth < 1200) {
             const fadeInElements = gsap.timeline({
                paused: true
             });
             ScrollTrigger.create({
                trigger: mockup.current,
                pin: mockup.current,
                start: '5% top',
                end: 'bottom ',
                scrub: 1,
                animation: fadeInElements
             })
 
             fadeInElements
                .to('.camera', {
                   y: -10,
                   opacity: 0,
                   duration: 0.1
                }, .1)
                .to('.CPUBatteryChips-3d', {
                   y: -20,
                   duration: 2
                }, .1)
                .to('.backplate', {
                   y: -160,
                   duration: 2
                }, .1)
                .to('.screen', {
                   y: -260,
                   duration: 2
                }, .1)
                .to(".block-mockup", {
                   y: 100,
                   paddingBottom: 70,
                   duration: 2
                }, .1)
          }
 
 
          gsap.from(".linkHome", {
             opacity: 0,
             duration: 2,
             delay: 1.5
          });
 
          gsap.from(".header", {
             opacity: 0,
             duration: 2,
             delay: 1
          })
 
       }, mockup)
 
       return () => ctx.revert();
    }, [])


    return(
        <>
            <div className='app' ref={mockup} >
            <div className="container-header" >
                <div className="block-header" >
                    <div className="linkHome" >
                        <a href="#home">text</a>
                    </div>
                    <div className="header">
                        <h2>Device info monitor</h2>
                        <div className="logo"></div>
                    </div>
                </div>
                <div className="block-mockup" >
                    <div className="static-part">
                        <svg width="595" height="366" viewBox="0 0 595 366" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M214.282 5.6618C224.279 11.66 566.722 208.394 585.717 222.208C596.217 229.844 596.217 249.708 591.217 254.208C580.217 264.108 454.212 350.561 437.217 359.558C420.222 368.556 395.106 367.916 377.234 356.559C377.234 356.559 17.3397 152.619 5.34302 139.623C0.806254 134.708 -2.78342 115.208 5.34302 102.633C16.3395 93.636 159.298 10.4727 170.295 4.66209C181.292 -1.14855 199.717 -2.29237 214.282 5.6618Z" fill="#2B2B2F"/>
                        <path d="M213.217 7.20765C222.747 12.9258 564.609 207.539 582.717 220.708C587.529 224.208 590.717 230.708 586.217 236.208C577.717 245.708 447.418 331.63 431.217 340.208C415.717 346.708 394.717 345.208 379.217 336.708C379.217 336.708 14.2166 126.083 11.2166 121.208C7.21662 114.708 6.71662 110.208 8.71662 104.208C18.7166 93.2076 165.711 10.0168 176.195 4.47747C186.678 -1.06186 203.686 1.48948 213.217 7.20765Z" fill="#434343"/>
                        <path d="M215.55 10.0212C230.545 18.0189 561.984 209.115 574.445 216.961C586.905 224.806 585.732 233.454 573.445 241.953C561.158 250.453 450.28 325.261 434.212 333.761C418.145 342.26 394.985 341.057 377.502 330.927C377.502 330.927 36.292 132.985 23.4508 124.987C10.6097 116.99 9.61003 105.993 17.6076 99.9948C25.6053 93.9966 164.889 11.1315 173.962 7.07734C183.035 3.02317 200.554 2.02347 215.55 10.0212Z" stroke="#232323" strokeWidth="2"/>
                        <path d="M131.135 208.073L108.113 194.415C106.382 193.389 105.913 191.095 107.101 189.471C108.129 188.066 110.052 187.662 111.559 188.534L134.726 201.946C136.361 202.893 136.969 204.956 136.107 206.638C135.173 208.46 132.896 209.117 131.135 208.073Z" fill="#1D1D1E"/>
                        <path d="M130.703 208.108L107.821 194.86C106.277 193.966 105.695 192.025 106.493 190.43C107.363 188.69 109.52 188.043 111.203 189.018L134.085 202.265C135.629 203.159 136.211 205.1 135.413 206.696C134.543 208.436 132.386 209.082 130.703 208.108Z" fill="black"/>
                        <path d="M93.0754 186.916L70.4208 172.647C68.9936 171.748 68.5078 169.896 69.3099 168.413C70.171 166.82 72.1801 166.257 73.7437 167.17L96.8636 180.672C98.5626 181.664 99.1702 183.824 98.2378 185.556C97.2354 187.419 94.8652 188.043 93.0754 186.916Z" fill="#1D1D1E"/>
                        <path d="M92.8933 186.934L70.0114 173.687C68.4674 172.793 67.8857 170.852 68.6836 169.256C69.5535 167.516 71.7103 166.87 73.3939 167.845L96.2757 181.092C97.8197 181.986 98.4015 183.927 97.6036 185.523C96.7336 187.263 94.5768 187.909 92.8933 186.934Z" fill="black"/>
                        <path d="M54.8494 164.116L42.1461 156.802C41.0056 156.145 40.7993 154.585 41.7298 153.655L42.3119 153.073C42.9461 152.438 43.9249 152.304 44.7066 152.744L57.3964 159.882C58.4496 160.474 58.7409 161.858 58.0159 162.825L57.4473 163.583C56.8407 164.392 55.7257 164.621 54.8494 164.116Z" fill="#1D1D1E"/>
                        <path d="M54.3618 164.282L42.1663 157.448C40.9091 156.744 40.7871 154.981 41.9353 154.11L42.4558 153.715C43.0906 153.234 43.9506 153.175 44.645 153.566L56.824 160.416C58.083 161.125 58.199 162.893 57.0435 163.76L56.5395 164.138C55.9062 164.612 55.0524 164.669 54.3618 164.282Z" fill="black"/>
                        <path d="M444.087 348.239C443.568 350.322 441.45 352.585 440.409 352.325C439.367 352.065 437.745 350.628 438.264 348.545C438.784 346.461 440.901 344.199 441.943 344.459C442.984 344.719 444.607 346.156 444.087 348.239Z" fill="black"/>
                        <path d="M451.469 343.174C450.95 345.257 448.832 347.519 447.791 347.26C446.749 347 445.127 345.562 445.646 343.479C446.166 341.396 448.283 339.134 449.325 339.394C450.366 339.653 451.988 341.091 451.469 343.174Z" fill="black"/>
                        <path d="M459.107 337.72C458.587 339.803 456.47 342.065 455.428 341.806C454.387 341.546 452.764 340.109 453.284 338.025C453.803 335.942 455.921 333.68 456.962 333.94C458.004 334.199 459.626 335.637 459.107 337.72Z" fill="black"/>
                        <path d="M466.747 332.997C466.227 335.08 464.11 337.342 463.068 337.082C462.027 336.823 460.404 335.385 460.924 333.302C461.443 331.219 463.561 328.957 464.602 329.216C465.644 329.476 467.266 330.914 466.747 332.997Z" fill="black"/>
                        <path d="M466.747 332.997C466.227 335.08 464.11 337.342 463.068 337.082C462.027 336.823 460.404 335.385 460.924 333.302C461.443 331.219 463.561 328.957 464.602 329.216C465.644 329.476 467.266 330.914 466.747 332.997Z" fill="black"/>
                        <path d="M485.367 318.826C484.847 320.909 483.629 322.81 481.688 322.911C480.647 322.652 479.645 321.072 479.543 319.131C480.062 317.048 482.18 314.786 483.221 315.046C484.263 315.305 486.112 315.836 485.367 318.826Z" fill="black"/>
                        <path d="M485.367 318.826C484.847 320.909 483.629 322.81 481.688 322.911C480.647 322.652 479.645 321.072 479.543 319.131C480.062 317.048 482.18 314.786 483.221 315.046C484.263 315.305 486.112 315.836 485.367 318.826Z" fill="black"/>
                        <path d="M547.936 277.131C547.416 279.214 545.299 281.476 544.257 281.216C542.316 281.318 541.593 279.519 542.113 277.436C542.632 275.353 544.749 273.091 545.791 273.35C546.833 273.61 548.455 275.048 547.936 277.131Z" fill="black"/>
                        <path d="M555.346 272.351C554.827 274.434 552.71 276.696 551.668 276.437C549.727 276.538 549.004 274.74 549.523 272.656C550.043 270.573 552.16 268.311 553.202 268.571C554.243 268.83 555.866 270.268 555.346 272.351Z" fill="black"/>
                        <path d="M562.375 267.28C561.855 269.363 559.738 271.625 558.696 271.365C556.755 271.467 556.033 269.668 556.552 267.585C557.071 265.502 559.189 263.24 560.23 263.499C561.272 263.759 562.894 265.197 562.375 267.28Z" fill="black"/>
                        <path d="M569.473 262.281C568.953 264.365 566.836 266.627 565.794 266.367C563.853 266.469 563.131 264.67 563.65 262.587C564.169 260.504 566.287 258.241 567.328 258.501C568.37 258.761 569.992 260.198 569.473 262.281Z" fill="black"/>
                        <path d="M576.775 257.448C576.256 259.531 574.139 261.793 573.097 261.533C571.156 261.635 570.433 259.836 570.952 257.753C571.472 255.67 573.589 253.408 574.631 253.667C575.672 253.927 577.295 255.364 576.775 257.448Z" fill="black"/>
                        <path d="M583.53 252.534C583.011 254.617 580.894 256.879 579.852 256.619C577.911 256.721 577.188 254.922 577.707 252.839C578.227 250.756 580.344 248.494 581.386 248.754C582.427 249.013 584.05 250.451 583.53 252.534Z" fill="black"/>
                        <path d="M529.567 288.269C529.048 290.352 526.93 292.614 525.889 292.354C524.847 292.094 523.225 290.657 523.744 288.574C524.263 286.491 526.381 284.229 527.422 284.488C528.464 284.748 530.086 286.185 529.567 288.269Z" fill="black"/>
                        <path d="M529.567 288.269C529.048 290.352 526.93 292.614 525.889 292.354C524.847 292.094 523.225 290.657 523.744 288.574C524.263 286.491 526.381 284.229 527.422 284.488C528.464 284.748 530.086 286.185 529.567 288.269Z" fill="black"/>
                        <path d="M517.584 299.68C515.818 300.902 498.808 312.373 495.838 314.058C492.679 315.85 489.771 310.165 492.52 306.773C494.293 304.586 514.326 290.894 515.368 291.154C519.408 289.649 520.547 297.628 517.584 299.68Z" fill="black"/>
                        <path d="M517.584 299.68C515.818 300.902 498.808 312.373 495.838 314.058C492.679 315.85 489.771 310.165 492.52 306.773C494.293 304.586 514.326 290.894 515.368 291.154C519.408 289.649 520.547 297.628 517.584 299.68Z" fill="black"/>
                        </svg>
                        <div className="CPUBatteryChips"></div>
                        <div className="CPUBatteryChips-3d"></div>
                        <div className="backplate"></div>
                        <div className="screen"></div>
                        <div className='camera'></div>
                    </div>
                </div>
                <div className="linkStore">
                    <a href="#store">t</a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Header;