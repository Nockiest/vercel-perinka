import React from 'react';
import Image from 'next/image';

const ArticleSummary = ({ reversed, pdfSrc }) => {
  return (
   
      <div className={`  flex m-4 flex-col md:flex-row justify-center`}>
        {/* <div className={`pw-auto flex flex-col justify-center  mt-32 mb-32 md:m-2 md:w-1/2 ${reversed ? 'order-first md:order-last' : ''}`}>
          <Image src="/books.jpg" alt="books" width={400} height={400} />
        </div> */}
        {!reversed && <div className={` mx-auto flex flex-col  justify-center order-first    md:w-1/2    md:order-last  `}>
    <Image src="/books.jpg" alt="books" width={400} height={400} />
  </div>}
        <div className={`p-8 m-auto border-primary-color border-b-4 md:border-l-4 md:border-b-0 md:w-1/2 md:m-2  `}>
          <h1 className="ml-2">TITLE</h1>
          <p className="m-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
            mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
            eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
            sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu
            eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh.
            Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque
            vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula
            ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo.
            Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque.
            Nulla facilisi.
          </p>
        </div>
        {reversed && <div className={` mx-auto flex flex-col  justify-center order-first  md:m-2 md:ml-automd:w-1/2    `}>
    <Image src="/books.jpg" alt="books" width={400} height={400} />
  </div>}
      </div>
    
  );
};

export default ArticleSummary;
{/* <div className={`flex m-4 flex-col md:flex-col' justify-center`}>
{!reversed && <div className={`m-auto mt-4 mb-4 md:m-2 md:w-auto  `}>
   <Image src="/books.jpg" alt="books" width={400} height={400} />
 </div>}
 <div className={`p-8 m-auto border-primary-color border-b-4 md:border-l-4 md:border-b-0 md:w-1/2 md:m-2  `}>
   <h1 className="ml-2">TITLE</h1>
   <p className="m-2">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
     Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
     mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
     eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
     sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu
     eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh.
     Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque
     vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula
     ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo.
     Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque.
     Nulla facilisi.
   </p>
 </div>
 {reversed && <div className={`m-auto mt-4 mb-4 md:m-2 md:w-auto  `}>
   <Image src="/books.jpg" alt="books" width={400} height={400} />
 </div>}
</div> */}

 // : (
      //   <div className="flex flex-row justify-center   bg-primary-color-20">
      //     <div className=" p-8 m-2 border-r-4 border-primary-color w-1/2 ">
      //       <h1 className="ml-2">TITLE</h1>
      //       <p className="m-2">
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
      //         Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
      //         tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
      //         Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
      //         sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu
      //         eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed
      //         volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque
      //         vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac
      //         tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris
      //         nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla
      //         facilisi.
      //       </p>
      //     </div>
      //     <div className="m-2 mt-auto mb-auto flex flex-col items-center">
      //       <Image src={"/books.jpg"} alt="books" width={400} height={400} />
      //     </div>
      //   </div>
      // )}

         // <>
    //   <div className={`flex  flex-col pw-auto sm:${reversed ? 'flex-col-reverse' : 'flex-row'} justify-center   `}>
    //     <div className={`m-auto mt-4 mb-4 sm:m-2 ${reversed ? 'mt-auto mb-auto' : ''} pw-auto items-center`}>
    //       <Image src="/books.jpg" alt="books" width={400} height={400} />
    //     </div>
    //     <div className={`p-8 m-auto sm:m-2 border-primary-color border-t-4 sm:border-l-4 sm:border-t-0 sm:w-1/2 ${reversed ? 'order-first sm:order-last' : ''}`}>
    //       <h1 className="ml-2">TITLE</h1>
    //       <p className="m-2">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
    //         Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
    //         mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
    //         eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
    //         sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu
    //         eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh.
    //         Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque
    //         vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula
    //         ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo.
    //         Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque.
    //         Nulla facilisi.
    //       </p>
    //     </div>
    //   </div>
    // </>