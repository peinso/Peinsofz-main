"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { Cloud, File, Loader2 } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";

const UploadDropZone = ({ onFileDrop }) => {
  const [error, setError] = useState("");

  return (
    <Dropzone
      onError={() => setError("Please upload a file")}
      accept={["image/jpeg", "application/word", "application/pdf"]}
      maxSize={2 * 1024 * 1024}
      onDrop={(acceptedFiles) => {
        setError("");
        onFileDrop(acceptedFiles[0]); // Pass the file to the parent
      }}
      multiple={false}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border border-dashed rounded-lg h-44 border-zinc-300"
        >
          <input type="file" {...getInputProps()} className="hidden" id="cv" name="cv" />

          <div className="flex items-center justify-center w-full h-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Cloud className="w-10 h-10 mb-2 text-gray-500" />
                <p className="mb-2 text-sm text-gray-700">
                  <span className="font-semibold sec-color">Click to upload</span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-500">this is a required </p>
                <p className="mt-2 text-xs text-gray-500">
                  max file size is 2MB and must be PDF
                </p>
              </div>
              {acceptedFiles && acceptedFiles[0] ? (
                <div className="flex items-center rounded-md overflow-hidden outline-[1.5px] outline-zinc-200 divide-x divide-zinc-200 bg-white max-w-xs">
                  <div className="grid h-full px-3 py-2 place-items-center">
                    <File className="w-4 h-4" />
                  </div>
                  <div className="h-full px-3 py-2 text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState(null); // State to hold the uploaded file
  const router = useRouter();

  const handleRedirect = () => {
    if (submitted) {
      router.push("/jobs/thank-you");
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Convert the file to Base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64data = reader.result.split(',')[1]; // Get the Base64 string without the data URL prefix

        const formData = {
          ...data,
          cv: base64data, // Add the Base64 string to the form data
        };

        const response = await axios.post(
          "https://piensofz.com/public/api/apply",
          formData,
          { headers: { "Content-Type": "application/json" } } // Set the content type to JSON
        );

        // Handle successful response
        if (response.status === 200 || response.status === 201) {
          console.log("Message submitted successfully!");
        } else {
          console.error("API request failed with status", response.status);
        }
      };
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
      <div className="mt-6">
        <label htmlFor="fullName" className="font-medium">
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          {...register("fullName", { required: "Full name is required" })}
          className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-gray-800"
        />
        {errors.fullName && (
          <p className="text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="phoneNumber" className="font-medium">
          Phone number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: {
              value: /^\d+$/,
              message: "Only numbers allowed.",
            },
          })}
          className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-gray-800"
        />
        {errors.phoneNumber && (
          <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-gray-800"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="position" className="font-medium">
          Position
        </label>
        <input
          type="text"
          id="position"
          {...register("position", { required: "Position is required" })}
          className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-gray-800"
        />
        {errors.position && (
          <p className="text-sm text-red-500">{errors.position.message}</p>
        )}
      </div>
      <UploadDropZone onFileDrop={setFile} />

      <div className="flex flex-col items-center justify-center mb-4">
        <button
          type="submit"
          className="relative flex items-center justify-center w-48 h-12 p-2 overflow-hidden font-extrabold duration-300 border rounded-md cursor-pointer bg-gradient shadow-500 hover:scale-95 group text-sky-50"
        >
          <div className="absolute z-10 w-20 h-24 duration-500 bg-white rounded-full -right-3 top-5 group-hover:top-2 group-hover:-right-2 group-hover:scale-125"></div>
          <p className="z-10 text-black">
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Apply"}
          </p>
        </button>
        {submitted ? handleRedirect() : null}
      </div>
    </form>
  );
};

export default Form;
