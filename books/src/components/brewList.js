import React from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'

import {getData, getPhotos} from '../actions'
import Brewery from './breweries.js'
import Photo from './photos'

const BrewList = props => {

    const getAllData = () => {
        props.getData()
        props.getPhotos()
    }


    return (
        <>
        <p>{props.error}</p>
        <button onClick={getAllData} className='button'>Check it out</button>
        {/* {props.photos.map(photo => <Photo source={photo.download_url}/>)} */}
        {props.isLoading ? <Loader type="TailSpin" color="#00BFFF" height={80} width={80} /> : ''}
        <div className='brewList'>
        {props.breweries.map((place, index) => 
            <Brewery key={place.id} place={place} photos={props.photos[index]}/>
        )}
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        test: state.test,
        breweries: state.breweries,
        isLoading: state.isLoading,
        error: state.error,
        photos: state.photos
    }
}

export default connect(
    mapStateToProps, 
    {getData, getPhotos}
    )(BrewList)