// Core
import { createRef, RefObject, useState } from 'react';

// Models
import SliderItem from '../models/slider-item';

// Styles
import styles from '../styles/Slider.module.scss'

const Slider = (props: any) => {
    const [slideActive, setSlideActive] = useState(0);

    let sliderRef: RefObject<HTMLUListElement> = createRef();
    let slideRef: RefObject<HTMLLIElement> = createRef();

    const moveSlide = (slideIndex: number) => {
        sliderRef.current?.scrollTo({
            top: 0,
            left: slideIndex * slideRef.current?.offsetWidth!,
            behavior: 'smooth'
        })
        setSlideActive(slideIndex)
    }
    
    return (
        <section className={styles.csSlider_wrapper}>
            <ul className={styles.csSlider} ref={sliderRef}>
                {props.sliderItems.map((sliderItem: SliderItem, index: number) => {
                    return (
                        <li 
                            key={sliderItem.id} 
                            aria-hidden={index != slideActive}
                            className={styles.csSlider__slide}
                            ref={slideRef}
                        >
                            <a href={sliderItem.link} className={styles.csSlider__link}>
                                <img className={styles.csSlider__img} src={`${sliderItem.src}`} title={sliderItem.title} />
                            </a>
                        </li>
                    )
                })}
            </ul>
            <button 
                className={`csButton csButton--slider ${(slideActive + 1) >= props.sliderItems.length ? 'csButton--disabled' : ''} ${styles.csSlider__btn} ${styles.csSlider__btn__next}`}
                disabled={(slideActive + 1) >= props.sliderItems.length}
                aria-disabled={(slideActive + 1) >= props.sliderItems.length ? true : false}
                onClick={() => moveSlide(slideActive + 1)}
            >
                <img className={`${styles.csSlider__btn__img}`} src="/img/icons/arrow_next.png" alt="Slide siguiente" />
            </button>
            <button 
                className={`csButton csButton--slider ${(slideActive - 1) < 0 ? 'csButton--disabled' : ''} ${styles.csSlider__btn} ${styles.csSlider__btn__prev}`}
                disabled={(slideActive - 1) < 0}
                aria-disabled={(slideActive - 1) < 0 ? true : false}
                onClick={() => moveSlide(slideActive - 1)}
            >
                <img className={`${styles.csSlider__btn__img}`} src="/img/icons/arrow_prev.png" alt="Slide anterior" />
            </button>
        </section>
    )
}

export default Slider;