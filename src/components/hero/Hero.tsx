import styles from './Hero.module.css'
import {useRef, useState} from "react";
import { Viewport } from "@unreal/pan"
import ScrollInformation from "../ScrollInformation";

interface props {
    scroll: ScrollInformation
    setScroll: Function
}

export default function Hero({scroll, setScroll}: props) {
    let scrollDownElementRef = useRef(null)
    let titleElemRef = useRef(null)
    if (scrollDownElementRef.current !== null) {
        const elem = scrollDownElementRef.current as HTMLElement
        if (scroll.scroll > 100) {
            elem.style.opacity = '0'
        } else {
            elem.style.opacity = '1'
        }
    }
    const viewportHeight = Viewport.getInformation().height
    const scrollCap = scroll.scroll > viewportHeight ? viewportHeight: scroll.scroll
    const transform = (1 - (scrollCap / viewportHeight))

    return (
        <div className={styles.hero}>
            <h1 style={{
                transform: `scale( ${transform} )`
            }} ref={titleElemRef}>Lia's 25th Birthday</h1>
            <div ref={scrollDownElementRef} className={styles.scrollDown}>
                <div>
                    <p>Scroll Down</p>
                </div>
            </div>
        </div>
    )
}
