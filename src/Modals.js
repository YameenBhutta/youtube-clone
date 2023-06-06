import React from 'react'
import { useState } from 'react'
import { BaseLayout } from './layouts/BaseLayout'



export const Modals = () => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <BaseLayout>
                <>
                    <button onClick={toggleModal} className="text-white">
                        open
                    </button>
                    
                    {modal && (
                     <div className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center  transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                     <div
                         className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                         <div className="p-4">

                             <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                             >
                                 Watch this Video
                             </h5> </div>


                         <div className="relative p-4">
                             <iframe width="100%" height="315" src="https://www.youtube.com/embed/gRD_hmtLROE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                         </div>


                         <div className="text-right p-4">
                             <button onClick={toggleModal} type="button" classNameName="inline-block text-white">
                                 Close
                             </button>

                         </div>
                     </div>
                 </div>
                    
                    )}
                   
                </>

            </BaseLayout>
        </>

    )
}

