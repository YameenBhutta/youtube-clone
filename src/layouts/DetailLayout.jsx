import React from 'react';
import { Header } from '../component/Header';
import { Api } from '../component/Api';
import { useParams } from 'react-router-dom';
import Video from '../component/VideoModule';


const DetailLayout =()=> {
    const {videoId} = useParams()
    const thisvideo = Api.find(prod => prod.id === videoId)
    
    return (
  
        <>
            <Header />
            <div className='grid grid-cols-7 gap-4 mt-10 px-20'>
            <div className='col-span-5 sticky h-10 z-10 top-3'>
            <iframe width="100%" height="615" src={thisvideo.video} title="YouTube video player" allow="" allowFullScreen></iframe>
            <span className='flex text-base text-white mt-5'>{thisvideo.creator} <img src={thisvideo.svg} className='w-4 ml-3' /></span>
            </div>
            <div className='col-span-2'>
            <Video/>
            </div>
            </div>
        </>
    )
}

export default DetailLayout;
