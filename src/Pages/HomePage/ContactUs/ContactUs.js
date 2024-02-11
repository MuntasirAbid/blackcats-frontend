import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import contactImg from "../../../../src/assets/MicrosoftTeams-image.png"
import { GrContact } from "react-icons/gr";

const ContactUs = () => {

 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_fvykxff', 'template_amzssdb', form.current, 'fS0vV5F_k8ihXdq6e')
   .then((result) => {

    toast.success('Message send to BlackCats')

   }, (error) => {
    console.log(error.text);

   });
  e.target.reset();

 };

 return (
  <div className='h-full'>

   <section id="contact">
    <div className='flex'>
     <h1 className="normal-case font-serif text-green-400 text-3xl ml-10 mt-10">Contact Us</h1>
     <div className='text-3xl ml-4 mt-11'><GrContact className='text-green-400' ></GrContact></div>
    </div>


    <div className="flex px-8">

     <div className="card w-full">
      <form ref={form} onSubmit={sendEmail} className="card-body">

       <div className="form-control">
        <input type="text" placeholder="Name" name='user_name' className="input border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-green-500" />
       </div>
       <div className="form-control">
        <input type="email" placeholder="Email Address" name='user_email' required className="input  border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-green-500" />
       </div>

       <div className="form-control ">
        <input type="text" placeholder="Subject" name='subject' className="input border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-green-500 " />
       </div>

       <textarea style={{ height: "136px" }} className="textarea border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-green-500" placeholder="Your message" name='message' required></textarea>
       <div className="form-control mt-6">
        <button type="submit" className="btn  text-white bg-gradient-to-r from-green-400 via-green-600 to-green-400 hover:from-green-500 hover:via-green-700 hover:to-green-500 focus:from-gray-200 focus:via-gray-400 focus:to-gray-200 hover:text-white">Sent</button>
        <Toaster></Toaster>
       </div>
      </form>
     </div>

     <div className='flex justify-end items-center '>
      <img className='w-3/4 h-4/5 ' src={contactImg} alt="" />
     </div>
    </div>

   </section>

  </div>
 );
};

export default ContactUs;