import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Lenis from '@studio-freight/lenis'
import Hero from './components/hero/Hero'
import Invite from './components/invite/Invite'

function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        const glassPane = document.getElementsByClassName('glass-pane')[0] as HTMLElement;
        const blob1 = document.getElementsByClassName('blob1')[0] as HTMLElement
        const blob2 = document.getElementsByClassName('blob2')[0] as HTMLElement
        const blob3 = document.getElementsByClassName('blob3')[0] as HTMLElement

        // @ts-ignore
        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            if (scroll > 300) {
                glassPane.style.backgroundColor = 'black'
                blob1.style.backgroundColor = '#4e2084'
                blob2.style.backgroundColor = '#ff3131'
                blob3.style.backgroundColor = '#ca62b6'
            } else {
                glassPane.style.backgroundColor = '#fbcd41'
                blob1.style.backgroundColor = '#d4a73a'
                blob2.style.backgroundColor = '#f4ce5e'
                blob3.style.backgroundColor = '#ca9c62'
            }
            console.log(scroll)
//            console.log({ scroll, limit, velocity, direction, progress })
        })

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })

    return (
        <div className="App">
            <Hero></Hero>
            <Invite/>
            {/*<div>*/}
            {/*  <a href="https://vitejs.dev" target="_blank">*/}
            {/*    <img src="/vite.svg" className="logo" alt="Vite logo" />*/}
            {/*  </a>*/}
            {/*  <a href="https://reactjs.org" target="_blank">*/}
            {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
            {/*  </a>*/}
            {/*</div>*/}
            {/*<h1>Vite + React</h1>*/}
            {/*<div className="card">*/}
            {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*    count is {count}*/}
            {/*  </button>*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
            {/*  </p>*/}
            {/*</div>*/}
            {/*<p className="read-the-docs">*/}
            {/*  Click on the Vite and React logos to learn more*/}
            {/*</p>*/}
        </div>
    )
}

export default App
