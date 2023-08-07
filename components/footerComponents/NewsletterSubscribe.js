 "use client"
 import   { useState } from 'react';
  
import { sendDataToFirebase } from '@/firebase';


 
const NewsletterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email };
    try {
      await sendDataToFirebase(formData);
      console.log('Data sent to Firebase successfully!');
      // Do something after successful submission, e.g., display a success message or redirect the user.
    } catch (error) {
      console.error('Error sending data to Firebase:', error);
      // Handle error, e.g., display an error message to the user.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewsletterForm;


//**** froma na poslání do firebase */
//  const NewsletterForm = () => {
//    const [email, setEmail] = useState('');
//    const [name, setName] = useState('');
 
//    const handleSubmit = (e) => {
//      e.preventDefault();
//      // Perform form submission logic here, e.g., integrate with your email marketing service.
//      console.log('Email:', email);
//      console.log('Name:', name);
//      // Reset form fields
//      setEmail('');
//      setName('');
//    };
 
//    return (
//      <div id="mc_embed_shell">
//        <div id="mc_embed_signup">
//          <form
//            action="https://app.us21.list-manage.com/subscribe/post?u=cb8dadfdf4212130441a42248&amp;id=bbf6673b2a&amp;f_id=00f2d9e6f0"
//            method="post"
//            id="mc-embedded-subscribe-form"
//            name="mc-embedded-subscribe-form"
//            className="validate"
//            target="_self"
//            noValidate
//            onSubmit={handleSubmit}
//          >
//            <div id="mc_embed_signup_scroll">
//              <h2>ODESLAT</h2>
//              <div className="indicates-required">
//                <span className="asterisk">*</span> indicates required
//              </div>
//              <div className="mc-field-group">
//                <label htmlFor="mce-EMAIL">
//                  Email <span className="asterisk">*</span>
//                </label>
//                <input
//                  type="email"
//                  name="EMAIL"
//                  className="required email"
//                  id="mce-EMAIL"
//                  required
//                  value={email}
//                  onChange={(e) => setEmail(e.target.value)}
//                />
//                <span id="mce-EMAIL-HELPERTEXT" className="helper_text">
//                  jméno.x@zaci.gopat.cz
//                </span>
//              </div>
//              <div className="mc-field-group">
//                <label htmlFor="mce-FNAME">Name </label>
//                <input
//                  type="text"
//                  name="FNAME"
//                  className="text"
//                  id="mce-FNAME"
//                  value={name}
//                  onChange={(e) => setName(e.target.value)}
//                />
//              </div>
//              <div id="mce-responses" className="clear foot">
//                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
//                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
//              </div>
//              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
//                {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
//                <input type="text" name="b_cb8dadfdf4212130441a42248_bbf6673b2a" tabIndex="-1" value="" />
//              </div>
//              <div className="optionalParent">
//                <div className="clear foot">
//                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
//                  <p style={{ margin: '0px auto' }}>
//                    <a href="http://eepurl.com/iwZPQs" title="Mailchimp - email marketing made easy and fun">
//                      <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
//                        <img
//                          className="refferal_badge"
//                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
//                          alt="Intuit Mailchimp"
//                          style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }}
//                        />
//                      </span>
//                    </a>
//                  </p>
//                </div>
//              </div>
//            </div>
//          </form>
//        </div>
//      </div>
//    );
//  };
 
//  export default NewsletterForm;
 
 







//  const NewsletterSubscribe = () => {
//   const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
//   return ( 
//     // <EmailForm />
//     <MailchimpSubscribe
//       url={ MAILCHIMP_URL }
//       render={ ( props ) => {
//         const { subscribe, status, message } = props || {};      
//         return (    
//           <NewsletterForm
//             status={ status }
//             message={ message }
//             onValidated={ formData => subscribe( formData ) }
//           />
//         );
//       } }
//     />
//   );
// };

// export default NewsletterSubscribe;
 

//**forma na poslání do mailchimp */
// const NewsletterForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     // Add other form fields here as needed
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Call the function to send data to Firebase
//     sendDataToFirebase(formData)
//       .then(() => {
//         console.log('Data sent successfully to Firebase.');
//         // Optionally, you can reset the form after successful submission
//         setFormData({
//           name: '',
//           email: '',
//           // Reset other form fields here as needed
//         });
//       })
//       .catch((error) => {
//         console.error('Error sending data to Firebase:', error);
//       });
//   };

//   return (
//         <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-4 min-w-10 w-64 sm:mx-16">
//     <h3 className='text-center'>Přihlaš se k odběru ať ti nic neuteče!</h3>
//     <div className="flex flex-col">
//        <label htmlFor="name">Jméno:</label>
//      <input
//       type="text"
//       id="name"
//       name="name"
//       className='p-1 border rounded'
//       value={formData.name}
//       onChange={handleChange}
//       required
//       />
//     </div>
//     <div className="flex flex-col">
//      <label htmlFor="email">E-mail:</label>
//        <input
//         type="email"
//         className='p-1 border rounded'
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//     </div>
//     <button type="submit" className="w-1/2 mx-auto  bg-secondary-color hover:opacity-80 transition-shadow duration-300 shadow-lg  text-white font-bold py-2 px-4 rounded ">
//       Submit
//     </button>
//   </form>
    
//   );
// };

//  export default NewsletterForm

// const NewsletterForm = () => {
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
  
//     try {
//       const response = await fetch('/add', {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         // Do something with the response data if needed
//         console.log('File added successfully:', data);
//         // Reset the form after successful submission
//         form.reset();
//       } else {
//         console.error('Failed to add file:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error adding file:', error);
//     }
//   };
  

//   return (
 
//   <div className="file-form">
//   <h2>Add New File</h2>
//   <form
//     className="add-form"
//     onSubmit={handleSubmit}
//     encType="multipart/form-data"
//   >
//     <label htmlFor="name">Name:</label>
//     <input type="text" id="name" name="name" required />
//     <label htmlFor="email">Email:</label>
//     <input type="email" id="email" name="email" required />
//     <input type="submit" value="Upload" />
//   </form>
// </div>

//   );
// };

// export default NewsletterForm;

  //   <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-4 min-w-10 w-64 sm:mx-16">
  //   <h3 className='text-center'>Přihlaš se k odběru ať ti nic neuteče!</h3>
  //   <div className="flex flex-col">
  //     <label htmlFor="email">Email:</label>
  //     <input
  //       type="email"
  //       id="email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //       required
  //       className="border p-2"
  //     />
  //   </div>
  //   <div className="flex flex-col">
  //     <label htmlFor="name">Name:</label>
  //     <input
  //       type="text"
  //       id="name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //       required
  //       className="border p-2"
  //     />
  //   </div>
  //   <button type="submit" className="w-1/2 mx-auto  bg-secondary-color hover:opacity-80 transition-shadow duration-300 shadow-lg  text-white font-bold py-2 px-4 rounded ">
  //     Submit
  //   </button>
  // </form>




