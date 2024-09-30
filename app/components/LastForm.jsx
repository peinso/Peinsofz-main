"use client";
import { Loader2 } from "lucide-react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import z from "zod";
import { useState } from "react";

import { toast } from "react-hot-toast";
import React from "react";
import axios, * as others from "axios";
const schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Email must be valid" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" }),
  // carPhotos: z.string().min(2, { message: "Car photos are required" }),
  // license: z.string().min(1, { message: "License is required" }),
});

export default function LastForm() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://piensofz.com/public/api/message",
        data
      );
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-1 ml-3">
                <p className="text-xl font-medium text-gray-900">
                  Message sent successfully
                </p>
                <p className="mt-1 text-lg sec-color">
                  We will contact you soon
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="flex items-center justify-center w-full p-4 text-sm font-medium border border-transparent rounded-none rounded-r-lg  hover:text-[#ffb82b] focus:outline-none focus:ring-2 focus:ring-[#ffb82b]"
            >
              Close
            </button>
          </div>
        </div>
      ));
      setLoading(false);
      console.log(data);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto max-w[1200px]">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
          <div>
            <label className="font-medium">First name</label>
            <Controller
              control={control}
              name="fname"
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="first name"
                  type="text"
                  required
                  className="flex-1 w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none"
                />
              )}
            />
          </div>
          <div>
            <label className="font-medium">Last name</label>
            <Controller
              control={control}
              name="lname"
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="last name"
                  type="text"
                  required
                  className="flex-1 w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none"
                />
              )}
            />
          </div>
        </div>
        <div>
          <label className="font-medium">Email</label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <input
                {...field}
                placeholder="info@peinsofz.com"
                type="email"
                required
                className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none"
              />
            )}
          />
        </div>
        <div>
          <label className="font-medium">Phone number</label>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <input
                {...field}
                //pattern="[0-9]{11}"
                placeholder="+20122334455"
                required
                className="w-full px-3 py-2 bg-transparent border rounded-lg shadow-sm outline-none appearance-none"
              />
            )}
          />
        </div>
        <div>
          <label className="font-medium">City</label>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <div className="relative mt-2">
                <input
                  {...field}
                  type="text"
                  placeholder="Ex: Alex"
                  required
                  className="w-full py-2 pl-6 pr-3 bg-transparent border rounded-lg shadow-sm outline-none appearance-none"
                />
              </div>
            )}
          />
        </div>
        <div>
          <label className="font-medium">Country</label>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <div className="relative mt-2">
                <input
                  {...field}
                  type="text"
                  placeholder="Ex: Egypt"
                  required
                  className="w-full py-2 pl-6 pr-3 bg-transparent border rounded-lg shadow-sm outline-none appearance-none"
                />
              </div>
            )}
          />
        </div>
        <div>
          <label className="font-medium">Message</label>
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="Leave your message here"
                className="w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm outline-none appearance-none resize-none h-36"
              />
            )}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="relative flex items-center justify-center w-48 h-12 p-2 overflow-hidden font-extrabold duration-300 border rounded-md cursor-pointer bg-gradient shadow-500 hover:scale-95 group text-sky-50"
          >
            <div className="absolute z-10 w-20 h-24 duration-500 bg-white rounded-full -right-3 top-5 group-hover:top-2 group-hover:-right-2 group-hover:scale-125"></div>
            <p className="z-10 text-black">
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Submit"
              )}
            </p>
          </button>
        </div>
      </form>
    </div>
  );
}
