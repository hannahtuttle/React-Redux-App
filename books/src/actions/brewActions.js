import axios from 'axios'

export const FETCH_BREWERY_DATA_START = 'FETCH_BREWERY_DATA_START'
export const FETCH_BREWERY_DATA_SUCCESS = 'FETCH_BREWERY_DATA_SUCCESS'
export const FETCH_BREWERY_DATA_FAILURE = 'FETCH_BREWERY_DATA_FAILURE'

export const FETCH_PHOTO_DATA_START = 'FETCH_PHOTO_DATA_START'
export const FETCH_PHOTO_DATA_SUCCESS = 'FETCH_PHOTO_DATA_SUCCESS'
export const FETCH_PHOTO_DATA_FAILURE = 'FETCH_PHOTO_DATA_FAILURE'

export const getData = () => dispatch => {
    dispatch({type: FETCH_BREWERY_DATA_START});
    axios.get('https://api.openbrewerydb.org/breweries')
    .then(response => {
        console.log(response.data)
        dispatch({type: FETCH_BREWERY_DATA_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: FETCH_BREWERY_DATA_FAILURE, payload: error.response})
    })
}

export const getPhotos = () => dispatch => {
    dispatch({type: FETCH_PHOTO_DATA_START});
    axios.get('https://picsum.photos/v2/list?page=2&limit=20')
    .then(response => {
        console.log(response.data)
        dispatch({type: FETCH_PHOTO_DATA_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: FETCH_PHOTO_DATA_FAILURE, payload: error.response})
    })
}
