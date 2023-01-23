import React, { useEffect } from 'react'
import styles from './Contact.module.scss'
import { useForm } from "react-hook-form"; 
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { getContact,   sendContact } from '../../api/api';


export interface IFormInputs {
    name: string
    phone:string
    email:string

}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
    name: yup.string().required('Name is required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
    email: yup.string().email().required('E-mail is required'),
}).required();


export const Contact = React.memo(() => {

 

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        mode: "onTouched", 
        reValidateMode: "onChange"

    });

    const onSubmit = (data: IFormInputs) => {
        sendContact(data)       
    } 
 
    return (
        <section className={styles.contact}>

            <form className={styles.contact__form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.form__title}> Contact  us </h2>
                <p className={styles.form__subtitle}>Do you have any kind of help please contact with us.</p>
                <input placeholder='Name' className={styles.form__input} {...register("name")} />
                {errors.name && <p role="alert">{errors.name?.message}</p>}

                <input placeholder='Phone' className={styles.form__input} {...register("phone")} />
                {errors.phone && <p role="alert">{errors.phone?.message}</p>}

                <input placeholder='E-mail' className={styles.form__input} {...register("email")} />
                {errors.email && <p role="alert">{errors.email?.message}</p>}

                <button type='submit' className={styles.form__button}> Send</button>
            </form>

        </section>
    )
})