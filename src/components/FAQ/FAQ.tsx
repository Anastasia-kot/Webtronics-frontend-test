import classNames from 'classnames'
import React, { FC, useState } from 'react'
import styles from './FAQ.module.scss'


const questions = [
    {   
        name: 'What is the price?',
        description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
     },
    {   
        name: 'What is the price?',
        description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
     },
    {   
        name: 'What is the price?',
        description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
     },
    {   
        name: 'What is the price?',
        description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
     },
    {   
        name: 'What is the price?',
        description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
     },
  ]

export const Questions: FC = React.memo(() => {
    
    const [activeItems, setActiveItems] = useState<number[]>([0])
    
    const onClick = (i: number): void => {
        const index = activeItems.indexOf(i)
        if (index > -1) {
            setActiveItems(
                [...activeItems].slice(index, 1)
            )
        } else {
            setActiveItems([...activeItems, i])
        }
    }

    return( 
    <section className={styles.questions}>
        <h2 className={styles.questions__title}> Frequently Asked Questions </h2>
            <div className={styles.questions__content}>
                
                <aside className={styles.questions__aside}>
                    <p className={styles.aside__description}> Do you have any kind of questions? We are here to help.</p>
                    <img src={`/images/question.png`} alt="Question simbol" className={styles.aside__image} />
                </aside>

                <ul className={styles.questions__list}>
                    {questions.map(i =>
                        <li key={questions.indexOf(i)}
                            className={classNames(
                                styles.list__item, 
                                {[styles.active]:  activeItems.includes(questions.indexOf(i) )}
                                    )}>
                            <h3 className={styles.item__title} > {i.name} </h3>
                            <p className={styles.item__description} > {i.description} </p>
                            <button onClick={() => onClick(questions.indexOf(i))} className={styles.item__button}></button>
                        </li>)}
                </ul>
            </div>
       
    </section>
    )
})