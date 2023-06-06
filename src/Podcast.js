import React from 'react'
import VideoModule from './component/VideoModule';
import { BaseLayout } from './layouts/BaseLayout';

export const Podcast = () => {
  return (
<>
 <BaseLayout>
    <div className='grid grid-cols-4 gap-4'>
      <VideoModule></VideoModule>
      </div>
    </BaseLayout>
</>
  )
}
