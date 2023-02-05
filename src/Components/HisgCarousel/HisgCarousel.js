import React, { useState } from 'react';
import styles from './HisgCarousel.module.css';
import { VscChevronLeft, VscChevronRight, VscCircleOutline, VscCircleFilled } from "react-icons/vsc";

export default function HisgCarousel(props) {
    const exampleItem = ['hello 1', 'hello 2', 'hello 3', 'hello 4', 'hello 5']

    const [currentIndex, setCurrentIndex] = useState(0);
    const onClickButton = (btnType) => {
        if (btnType === 'prev_btn') setCurrentIndex(currentIndex !== 0 ? currentIndex - 1 : exampleItem.length - 1);
        if (btnType === 'next_btn') setCurrentIndex(currentIndex !== exampleItem.length - 1 ? currentIndex + 1 : 0);
    }

    return (
        <>
            <>
                <div className={styles.content_box}>
                    <div className={styles.btn} id='prev_btn' onClick={() => onClickButton('prev_btn')}><VscChevronLeft size='1rem' /></div>
                    {exampleItem.map((item, index) => {
                        return (
                            <div id={`content-${index}`} className={index === currentIndex ? styles.content_show : styles.content_hidden} >
                                <h3>{item}</h3>
                            </div>
                        )
                    })}
                    <div className={styles.btn} id='next_btn' onClick={() => onClickButton('next_btn')}><VscChevronRight size='1rem' /></div>
                    <div className={styles.index}>
                        {exampleItem.map((item, index) => {
                            return (
                                <div className={styles.index_item} key={`page_index-${index}`} onClick={() => setCurrentIndex(index)}>{index === currentIndex ? <VscCircleFilled size='2rem' /> : <VscCircleOutline size='2rem' />}</div>
                            )
                        })}
                    </div>
                </div>
            </>

        </>
    )
}