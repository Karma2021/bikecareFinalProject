import { message } from 'antd'
import axios from 'axios'

export const bookService = (reqObj) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true })
  try {
    await axios.post('/bookings/bookservice', reqObj)
    dispatch({ type: 'LOADING', payload: false })
    message.success("Your Service booked sucessfully")
    setTimeout(() => {
      window.location.href = '/mybooking'
    }, 500);

  } catch (error) {
    console.log(error)
    dispatch({ type: "LOADING", payload: false })
    message.error("Something went wrong, please try again")
  }
}

export const getAllBookings = () => async dispatch => {

  dispatch({ type: 'LOADING', payload: true })

  try {
      const response = await axios.get('/bookings/getallbookings')
      dispatch({ type: "GET_ALL_BOOKINGS", payload: response.data })
      dispatch({ type: 'LOADING', payload: false })
  } catch (error) {
      console.log(error)
      dispatch({ type: "LOADING", payload: false })

  }
}
