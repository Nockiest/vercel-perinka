
import Image from "next/legacy/image";
 
const Contact = ({ contactName, contactSvgUrl, contactLink }) => {
  const handleContactClick = () => {
    window.open(contactLink, '_blank');
  };

  return (
    <div className="mx-2  flex flex-row hover:brightness-0 cursor-pointer" onClick={handleContactClick}>
      <Image width={50} height={50} src={contactSvgUrl} alt={contactName} />
      <button className="flex-grow w-64 mt-4 border-t-4 border-primary-color p-4 text-center">
        {contactName}
      </button>
    </div>
  );
};

export default Contact;