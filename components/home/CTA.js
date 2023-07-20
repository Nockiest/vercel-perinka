import React from "react";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="bg-primary-color-40 p-6 flex flex-col items-center justify-center">
      <div> <div className="flex items-center gap-4 mr-6">
        <Image src={"/books.jpg"} alt="Image"  width={350} height={150} />
        <div className="  max-w-2xl">
          <h1>PŘIPOJ SE K NÁM!</h1>
          <p>
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
      </div>
      <button className="bg-secondary-color-80 hover:bg-secondary-color">ODESLAT SVŮJ VLASTNÍ ČLÁNEK</button>
    </div>
  );
};

export default CTA;
