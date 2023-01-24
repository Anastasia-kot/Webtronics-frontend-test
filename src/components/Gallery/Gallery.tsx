import classNames from 'classnames'
import React, { FC, useState } from 'react'
import styles from './Gallery.module.scss'




export const Gallery: FC = React.memo(() => {

    return (
        <section className={styles.gallery}>
            <h2 className={styles.gallery__title}> Gallery </h2>
            <div className={styles.gallery__content}>

                <p className={styles.content__description}>By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects. </p>
                <p className={styles.content__description}>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</p>

                <img src="/images/developer1.png" alt="" className={styles.content__image} />
                <img src="/images/developer4.png" alt="" className={styles.content__image} />
                <img src="/images/developer2.png" alt="" className={styles.content__image} />
                <img src="/images/developer3.png" alt="" className={styles.content__image} />

            </div>

        </section>
    )
})