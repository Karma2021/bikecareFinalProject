import { message } from 'antd';
import axios from "axios";


export const userLogin = (reqobj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('/users/login', reqobj)
        localStorage.setItem('user', JSON.stringify(response.data))
        message.success("login success")
        dispatch({ type: 'LOADING', payload: false })
        setTimeout(() => {
            window.location.href = '/'
        }, 500);
    } catch (error) {
        console.log(error)
        message.error("login error")
        dispatch({ type: "LOADING", payload: false })
    }
}
export const userRegister = (reqobj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('/users/register', reqobj)
        message.success("Register success")
        setTimeout(() => {
            window.location.href = '/login'
        }, 500);
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        message.error('Registration error')
        dispatch({ type: "LOADING", payload: false })
    }
}