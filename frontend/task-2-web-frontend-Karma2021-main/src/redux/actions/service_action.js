import { message } from 'antd'
import axios from 'axios'

export const getAllServices = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })

    try {
        const response = await axios.get('/services/getallservices')
        dispatch({ type: "GET_ALL_SERVICES", payload: response.data })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: "LOADING", payload: false })
    }
}

export const addService = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })

    try {
        await axios.post('/services/addservice', reqObj)
        dispatch({ type: 'LOADING', payload: false })
        message.success('New service added successfully')
        setTimeout(() => {
            window.location.href = '/admin'
        }, 500)
    } catch (error) {
        console.log(error)
        dispatch({ type: "LOADING", payload: false })

    }
}
export const editService = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })

    try {
        await axios.post('/services/editservice', reqObj)
        dispatch({ type: 'LOADING', payload: false })
        message.success('Service edited successfully')
        setTimeout(() => {
            window.location.href = '/admin'
        }, 500)
    } catch (error) {
        console.log(error)
        dispatch({ type: "LOADING", payload: false })

    }
}
export const deleteService = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })

    try {
        await axios.post('/services/deleteservice', reqObj)
        dispatch({ type: 'LOADING', payload: false })
        message.success('Service deleted successfully')
        setTimeout(() => {
            window.location.reload()
        }, 500)
    } catch (error) {
        console.log(error)
        dispatch({ type: "LOADING", payload: false })

    }
}