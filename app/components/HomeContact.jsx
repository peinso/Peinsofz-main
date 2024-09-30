"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Clients from "./Clients";
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
      <div className="flex flex-col max-w-screen-xl px-4 py-4 mx-auto md:px-8">
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="section-heading">Contact</h3>
          <p className="text-3xl font-semibold sm:text-4xl">
            Get in touch with us
          </p>
          <p>We’d love to hear from you! Please fill out the form below.</p>
        </div>

        <div className="max-w-lg mx-auto mt-12">
          <LastForm />
        </div>
      </div>
      <figure className="py-12 mt-12">
        <Clients />
      </figure>
    </main>
  );
};

export default Contact;
