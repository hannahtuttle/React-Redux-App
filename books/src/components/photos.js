import React from 'react'


const Photo = props => {

    console.log('props.source', props.source)
    

    return (
        <>
        <img src={props.source.download_url} alt='random photos'/>
        </>
    )
}

export default Photo;