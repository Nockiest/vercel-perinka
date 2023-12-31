import React from "react";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="bg-primary-color-40 p-12 flex flex-col items-center justify-center">
      <div className="flex px-auto mx-auto flex-col-reverse md:flex-row md:justify-center space-x-4 items-center gap-4  mb-2">
        <div className="p-4 mx-auto">
          <Image src={"/books.jpg"} alt="WE NEED YOU" width={300} height={150} />
        </div>

        <div className="max-w-xl">
          <h1 className="mb-4  ">PŘIPOJ SE K NÁM!</h1>
          <p className="text-base  leading-8">
            Hledáme další zkušené studenty příspívající do časopisu .......... Non commodo labore excepteur sunt. Velit
            sint esse pariatur cillum
            <br />
            sit commodo duis sit aliquip nulla voluptate esse. Non enim anim ad enim eiusmod labore in id est esse et
            exercitation. Ut reprehenderit
            <br />
            Lorem incididunt commodo laboris qui. Aute fugiat excepteur sunt ut sint.
          </p>
        </div>
      </div>
      <button className="mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">ODESLAT SVŮJ ČLÁNEK</button>
    </div>
  );
};

export default CTA;
