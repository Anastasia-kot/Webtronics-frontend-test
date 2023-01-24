import React, { FC } from 'react'
import styles from './Steps.module.scss'


const steps = [
    {   
        name: 'Introduction to Front-End ',
        description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
     },
    {   
        name: 'Overview of Development',
        description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
     },
    {   
        name: 'Introduction to Front-End ',
        description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
     },
    {   
        name: 'Overview of Development',
        description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
     },
    {   
        name: 'Introduction to Front-End ',
        description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
     },
    {   
        name: 'Overview of Development',
        description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
     }, 
]

export const Steps: FC = React.memo(() => {
    return( 
    <section className={styles.steps}>
        <h2 className={styles.steps__title}> Steps </h2>
        <ol className={styles.steps__list}>
            {steps.map(i=>   
                <li className={styles.list__item} key={steps.indexOf(i)}>
                    <svg width="146" height="228" viewBox="0 0 146 228" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.item__border}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M127 5.84615H0V0H127C137.493 0 146 8.28847 146 18.5128V209.487C146 219.712 137.493 228 127 228H0V222.154H127C134.18 222.154 140 216.483 140 209.487V18.5128C140 11.5172 134.18 5.84615 127 5.84615Z" fill="url(#paint0_linear_1849_7)" fillOpacity="0.7" />
                        <defs>
                            <linearGradient id="paint0_linear_1849_7" x1="0" y1="114" x2="143" y2="114" gradientUnits="userSpaceOnUse">
                                <stop offset="0.081934" stopColor="#15BFFD" stopOpacity="0" />
                                <stop offset="0.706057" stopColor="#15BFFD" />
                                <stop offset="1" stopColor="#9C37FD" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <h3 className={styles.item__title} > {i.name} </h3>
                    <p className={styles.item__subtitle} > Step {steps.indexOf(i) + 1} </p>
                    <p className={styles.item__description} > {i.description} </p>
                </li>)}
        </ol>
    </section>
    )
})