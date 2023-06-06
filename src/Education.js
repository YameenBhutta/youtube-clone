import React from 'react'
import VideoModule from './component/VideoModule';
import { BaseLayout } from './layouts/BaseLayout';

export const Education = () => {
  return (
<>
 <BaseLayout>
    <div className='grid grid-cols-3 gap-4'>
      <VideoModule></VideoModule>
      </div>
    </BaseLayout>
</>
  )
}


