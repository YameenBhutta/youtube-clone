import React from 'react'
import { BaseLayout } from './layouts/BaseLayout';
import Video from './component/VideoModule';










export const Home = () => {
  return (
<>
 <BaseLayout>
    <div className='grid grid-cols-4 gap-4'>
      <Video/>
      </div>  
    </BaseLayout>
</>
  )
}
