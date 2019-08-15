import axios from 'axios'

export const FETCH_BREWERY_DATA_START = 'FETCH_BREWERY_DATA_START'
export const FETCH_BREWERY_DATA_SUCCESS = 'FETCH_BREWERY_DATA_SUCCESS'
export const FETCH_BREWERY_DATA_FAILURE = 'FETCH_BREWERY_DATA_FAILURE'

export const getData = () => dispatch => {
    dispatch({type: FETCH_BREWERY_DATA_START});
    axios.get('https://api.openbrewerydb.org/breweries')
    .then(response => {
        dispatch({type: FETCH_BREWERY_DATA_SUCCESS, payload: response})
    })
    .catch(error => {
        dispatch({type: FETCH_BREWERY_DATA_FAILURE, payload: error.response})
    })
}
