import React from 'react'
import { BaseLayout } from './layouts/BaseLayout'
import VideoModule from './component/VideoModule';

export const Gaming = () => {
  return (
   <>
   
   <BaseLayout>
    <div className='grid grid-cols-2 gap-4'>
      <VideoModule></VideoModule>
      </div>
    </BaseLayout>
   </>
   
   )

  }

