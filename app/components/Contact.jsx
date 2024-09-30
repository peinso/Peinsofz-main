"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import LastForm from "./LastForm";

const Contact = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <main className=" py-14">
      <div className="max-w-screen-xl px-4 py-4 mx-auto md:px-8">
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="section-heading">Contact us</h3>
          <p className="text-3xl font-semibold sm:text-4xl">
            Get in touch with us
          </p>
          <p>We’d love to hear from you! Please fill out the form below.</p>
        </div>
        <div style={{background: "#e9e9e9", padding:"20px"}} className="flex flex-row items-center justify-center max-w-xlg mx-auto space-y-3 sm:text-center">

          <div className="flex flex-col items-center justify-center max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 className="section-heading">Investors</h3>
            <p>
              For investor enquiries 
            </p>
            <p>please contact investor Relations</p>
            <p>Email: <strong>info@peinsofz.com</strong></p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 className="section-heading">Contact</h3>
            <p>phone :< strong>+20 34849090</strong></p>
            <p>phone :<strong>+20 34849080 </strong></p>
            <p>Fax: <strong>+20 4849500 </strong></p>
          </div>
        </div>
        <div className="max-w-lg mx-auto mt-12">
          <LastForm />
        </div>
        <div className="mt-5 flex flex-row items-center justify-center max-w-xlg mx-auto space-y-3 sm:text-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d426.599758018797!2d29.905786000000003!3d31.198612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c50d78a5a8ef%3A0x13851a2f5de19958!2sPetrological%20Integrated%20Solutions!5e0!3m2!1sen!2seg!4v1708416888724!5m2!1sen!2seg" width="1000" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
