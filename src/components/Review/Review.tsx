import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './Review.module.scss'


const review = [
    {   
        img: 'man1.png',
        name: 'Best courses ever',
        description: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    },
    {
        img: 'woman1.png',
        name: 'Amazing teaching',
        description: "The explanation is crazy it really doesn't have a structure to go from point A to point B.He starts to explain something then he change his mind and start with another thing an so on.If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
    },
    {
        img: 'man2.png',
        name: 'Simple and easy',
        description: 'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.',
    }
]

export const Review = () => {
    const [activeItem, setActiveItem] = useState<number>(0)
    const setMin = () => {
        if (activeItem === 0) {
            setActiveItem(review.length-1)
        } else {
            setActiveItem(prev=>prev-1)
        }
    }
    
    const setMax = () => {
        if (activeItem === review.length - 1) {
            setActiveItem(0)
        } else {
            setActiveItem(prev => prev + 1)
        }
    }

    return( 
    <section className={styles.review}>
        <h2 className={styles.review__title}> Review </h2>
        <div className={styles.review__arrows}>
                <span className={styles.arrows__item} onClick={setMin}></span>
                <span className={styles.arrows__item} onClick={setMax}></span>
        </div>

            <ul className={styles.review__list}>
                {review.map(i=>   
                    <li key={review.indexOf(i)} 
                        className={classNames(styles.list__item, { [styles.active]: activeItem === review.indexOf(i) })}>
                        <span className={styles.item__index}>{review.indexOf(i) + 1}/   <span> 3</span></span>
                        <h4 className={styles.item__title} >{i.name}</h4>
                        <p className={styles.item__description}>{i.description}</p> 
                            <img src={`/images/${i.img}`} alt="reviewer photo" className={styles.item__image} onClick={() => { setActiveItem(review.indexOf(i))}}/>
                           
                    </li>)}
            </ul>


    </section>
    )
}