import axios from 'axios';
import { IFormInputs } from '../components/Contact/Contact';

const instance = axios.create()
 
export const sendContact =   (formInfo: IFormInputs) => {
      instance
        .post('http://localhost:3004/feedback/', {...formInfo} )
            .then(res => res.data)
            .then((data) => {
                // console.log('setContact data', data);
                return data
            })
            .catch((err) => {
                console.warn(err)
            })
     }
 
export const getContact = ( ) => {
    instance.get('http://localhost:3004/feedback/') 
        .then(res => res.data)
        .then((data) => { 
            // console.log('getContact data', data);
            return data 
        })
        .catch((err) => {
            console.warn(err)
        })
}




 