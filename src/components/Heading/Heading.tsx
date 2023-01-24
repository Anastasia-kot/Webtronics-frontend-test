import React, { FC } from 'react'
import styles from './Heading.module.scss'

export const Heading: FC = React.memo(() => {
    return( 
    <section className={styles.heading}>
        <h1 className={styles.heading__title}> 
            <span>Front-End </span>
            <span>Developer</span>
            <span>Courses</span>
        </h1>

        <p className={styles.heading__description}>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more). </p>

        <button className={styles.heading__link}>Start my career change</button>
    </section>
    )
})