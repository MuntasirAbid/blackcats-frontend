import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {

 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_fvykxff', 'template_amzssdb', form.current, 'fS0vV5F_k8ihXdq6e')
   .then((result) => {

    toast.success('Message send to Muntasir')

   }, (error) => {
    console.log(error.text);

   });
  e.target.reset();

 };

 return (
  <div>

   <section id="contact">
    <h1 className="normal-case font-serif text-black text-3xl">Contact Us</h1>

    <div className="">
     <div className="flex-col">
      <div className="card w-full">
       <form ref={form} onSubmit={sendEmail} className="card-body">

        <div className="form-control">
         <input type="text" placeholder="Name" name='user_name' className="input bg-slate-900 border-4 caret-teal-600 focus:border-teal-600" />
        </div>
        <div className="form-control">
         <input type="email" placeholder="Email Address" name='user_email' required className="input  border-4 bg-slate-900 caret-teal-600 focus:border-teal-600" />
        </div>

        <div className="form-control ">
         <input type="text" placeholder="Subject" name='subject' className="input bg-slate-900  border-4 caret-teal-600 focus:border-teal-600 " />
        </div>

        <textarea style={{ height: "136px" }} className="textarea border-4 bg-slate-900 caret-teal-600 focus:border-teal-600" placeholder="Your message" name='message' required></textarea>
        <div className="form-control mt-6">
         <button type="submit" className="btn  text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-500 hover:from-teal-400 hover:via-teal-600 hover:to-teal-400 focus:from-teal-700 focus:via-teal-800 focus:to-teal-700 hover:text-stone-800">Sent</button>
         <Toaster></Toaster>
        </div>
       </form>
      </div>
     </div>
    </div>
   </section>

  </div>
 );
};

export default ContactUs;