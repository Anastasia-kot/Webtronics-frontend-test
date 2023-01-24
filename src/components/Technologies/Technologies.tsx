import Image from 'next/image'
import React, { FC } from 'react'
import styles from './Technologies.module.scss'


const technologies = [
    {   
        img: 'angular.png',
        name: 'Angular',
     },
    {
        img: 'react.png',
        name: 'React',
     },
    {
        img: 'vue.png',
        name: 'Vue.js',
     },
    {
        img: 'js.png',
        name: 'JavaScript',
     }
]

export const Technologies: FC = React.memo(() => {
    return( 
    <section className={styles.technologies}>
        <h2 className={styles.technologies__title}> Programming technologies </h2>
        <p className={styles.technologies__subtitle}> By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>

            <ul className={styles.technologies__list}>
                {technologies.map(i=>   
                    <li className={styles.list__item} key={technologies.indexOf(i)}>
                        <img src={`/images/technologies/${i.img}`} alt="technologies photo" className={styles.item__image} />
                        <p className={styles.item__title} >{i.name}</p>
                    </li>)}
            </ul>
    </section>
    )
})