import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const UPDATE_FACTS = 'UPDATE_FETCH'
export const SET_ERROR = 'SET_ERROR'

const cors = 'https://cors-anywhere.herokuapp.com/'

const cat_fact = 'https://cat-fact.herokuapp.com/facts'
const fox_picture = 'https://randomfox.ca/floof/'

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA })
  axios
  .get(`${cors+cat_fact}`)
  .then(res => {
    console.log(res)
    dispatch({ type: UPDATE_FACTS, payload: res.data })
  })
  .catch(err => {
    console.error('There was a problem getting data from the API', err)
    dispatch({ type: SET_ERROR, payload: 'There was a problem getting data from the API' })
  })
}