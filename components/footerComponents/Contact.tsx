
import Image from "next/legacy/image";

const Contact = ({ contactName, contactSvgUrl, contactLink }) => {
  const handleContactClick = () => {
    window.open(contactLink, '_blank');
  };

  return (
    <button className="mx-2 flex flex-row items-center hover:brightness-0 cursor-pointer" onClick={handleContactClick}>
      <Image width={50} height={50} src={contactSvgUrl} alt={contactName} />
      <p className="flex-grow ml-2 border-t-4 border-primary-color p-4 text-center">
        {contactName}
      </p>
    </button>
  );
};
export default Contact;