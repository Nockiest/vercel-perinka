import React from 'react'
import Image from 'next/image'
const ArticleSummary = ({ reversed }) => {
  return (
    <> 
   {!reversed?  <div className='flex justify-center  '>
         <div className='m-2 mt-auto mb-auto flex flex-col items-center'> 
        <Image src={"/books.jpg"} width={400} height={400}/>
      </div>
        <div className="  m-2 border-l-4 border-primary-color w-1/2 ">
        <div
          className="  p-8   border-primary-color"
          
        >
          <h1 className="ml-2">TITLE</h1>
          <p className="m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur
            pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
            Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae
            gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra
            sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper
            dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales
            lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi.
          </p>

         
        </div>
      </div>
    </div>: <div className='flex flex-row justify-center   bg-primary-color-20'>
          
        <div className=" p-8 m-2 border-r-4 border-primary-color w-1/2 ">
        
          <h1 className="ml-2">TITLE</h1>
          <p className="m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur
            pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
            Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae
            gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra
            sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper
            dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales
            lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi.
          </p>

         
        </div>
            <div className='m-2 mt-auto mb-auto flex flex-col items-center'> 
            <Image src={"/books.jpg"} width={400} height={400}/>
        </div>
      
      </div>
      }
    </>
  )
}

export default ArticleSummary