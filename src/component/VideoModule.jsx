import React from 'react'
import { Link } from 'react-router-dom'
import {Api} from './Api';



const Video = () => {
  
  const videos = Api.map(video => {
    return (
      <div key={video.id} className='bg-gray-900'>
  <Link to={`/Video/${video.id}`}>
  <img src={video.img} alt='' className='w-full' />
</Link>
          <div className='text-white px-5 py-5'>
            <h2 className='font-bold mb-4'>{video.heading}</h2>
            <span className='flex text-base'>{video.creator} <img src={video.svg} className='w-4 ml-3' /></span>
          </div>
        </div>
    );
  });



  return (
    <>
      {videos}
    </>
  );
};


export default Video
{/*
export const VideoModule = () => {
  return (
    <>
   
      {Video.map((val, index) => (
        <div key={index} className='bg-zinc-900'>
          <Link to={`/Deatil/${Video.id}`}>
  <img src={val.img} alt='' className='w-full' />
</Link>
          <div className='text-white px-5 py-5'>
            <h2 className='font-bold mb-4'>{val.heading}</h2>
            <span className='flex text-base'>{val.creator} <img src={val.svg} className='w-4 ml-3' /></span>
          </div>
        </div>
      ))}
      {/** 
      {modal && (
        <div className=' fixed top-0 left-0 right-0 bottom-0 flex justify-center flex-col  bg-black'>
          <div className="pointer-events-none m-auto items-center w-3/5 transition-all duration-300 ease-in-out ">
            <div
              className="pointer-events-auto w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div className="p-4">

                <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                  Watch this Video
                </h5> </div>
              <div className="relative p-4">
                <iframe width="100%" height="615" src="https://www.youtube.com/embed/bg1sT4ILG0w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>


              <div className="text-right p-4">
                <button onClick={toggleModal} type="button" className="inline-block text-white">
                  Close
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}



*/}

