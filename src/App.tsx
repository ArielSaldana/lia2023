import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Lenis from '@studio-freight/lenis'
import Hero from './components/hero/Hero'
import Invite from './components/invite/Invite'


interface scroll {
    scroll: number,
    progress: number
}

function App() {
    const [count, setCount] = useState(0)
    const [scroll, setScroll] = useState<scroll>({scroll: 0, progress: 0})
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
            console.log(progress)
            setScroll({
                scroll,
                progress
            })

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
//            console.log({ scroll, limit, velocity, direction, progress })
        })

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div className="App">
            <Hero scroll={scroll} setScroll={setScroll}></Hero>
            <Invite/>
        </div>
    )
}

export default App
