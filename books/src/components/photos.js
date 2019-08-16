import React from 'react'


const Photo = props => {

    console.log('props.source', props.source)
    let imgUrl; 
    if(props.source){
        imgUrl = props.source.download_url
    } else {imgUrl = ''} 

    return (
        <>
        <img src={imgUrl} alt='random photos' className='image'/>
        </>
    )
}

export default Photo;