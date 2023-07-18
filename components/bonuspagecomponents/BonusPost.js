import React from "react";
import SlideGallery from "./SlideGallery";

const BonusPost = () => {
  const images = [
    { src: "/books.jpg", alt: "Image X" },
    // { src: "/y", alt: "Image Y" },
    // { src: "/z", alt: "Image Z" },
  ];

  return (
    <div className="m-8  w-full  flex flex-row">
      <div className="  w-1/2 ">
        <div
          className="  p-8 border-r-4 border-primary-color"
          style={{ border: "1px solid var(--main-main-100, #9E8751)", background: "#FFF" }}
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

          <div className="ml-auto w-64">
            <h6 className="text-center m-0 mr-8 leading-tight">HONZA NOVÁK</h6>
            <br />
            <h6 className="text-center m-0 mr-8 leading-tight">9.O</h6>
          </div>
        </div>
      </div>
      <SlideGallery images={images} />
    </div>
  );
};

export default BonusPost;
