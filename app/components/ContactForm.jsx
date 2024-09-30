"use client";
import { useForm, Controller, FormError } from "react-hook-form";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

// Extracted Button component
const SubmitButton = ({ buttonText, loading }) => (
  <Button
    type="submit"
    buttonText={buttonText} // Ensure prop is being passed
    aria-label="Submit contact form"
    loading={loading}
  >
    {loading ? "Loading..." : buttonText}
  </Button>
);

function ContactForm() {
  const {
    handleSubmit,
    control,
    errors,
    setError,
    formState: { submitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      country: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://piensofz.com/public/api/message",
        data
      );

      // Handle successful response
      if (response.status === 200 || response.status === 201) {
        console.log("Message submitted successfully!");
        // Reset form data, display success message, etc.
      } else {
        console.error("API request failed with status", response.status);
        // Handle specific error cases based on response.status and response.data
      }
    } catch (error) {
      console.error("Error during API request:", error);
      // Handle network errors or other issues
    } finally {
      setLoading(false); // Ensure loading state is always reset
      toast.success(
        "thank you for your message, we will get back to you shortly"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <div className="flex flex-col items-center gap-y-5 gap-x-6 sm:flex-row">
        <div>
          <label className="font-medium">First name</label>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <input
                {...field}
                type="text"
                required
                className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none"
              />
            )}
          />
        </div>
        <div>
          <label className="font-medium">Last name</label>
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <input
                {...field}
                type="text"
                required
                className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none"
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
          name="phoneNumber"
          render={({ field }) => (
            <input
              {...field}
              pattern="[0-9]{11}"
              placeholder="0122334455"
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
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Submit"}
          </p>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
