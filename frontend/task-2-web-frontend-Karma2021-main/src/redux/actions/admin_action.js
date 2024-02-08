import { message } from "antd";
import axios from "axios";

export const adminLogin = (reqobj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('/admin/adminlogin', reqobj)
        localStorage.setItem('admin', JSON.stringify(response.data))
        message.success("login success")
        dispatch({ type: 'LOADING', payload: false })
        setTimeout(() => {
            window.location.href = '/admin'
        }, 500);
    } catch (error) {
        console.log(error)
        message.error("login error")
        dispatch({ type: "LOADING", payload: false })
    }
}
export const adminRegister = (reqobj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('/admin/adminregister', reqobj)
        message.success("Register success")
        setTimeout(() => {
            window.location.href = '/adminlogin'
        }, 500);
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        message.error('Registration error')
        dispatch({ type: "LOADING", payload: false })
    }
}