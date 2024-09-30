"use client";
import Button from "@/app/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function Page() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 4000);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-center">
      <h1 className="flex text-5xl font-bold">
        Thank you for your <span className="ml-2 sec-color">application</span>
      </h1>
      <p className="text-3xl font-semibold ">We will get back to you soon</p>
      <Link className="flex gap-2" href="/">
        <Button buttonText="Back to Home" />
      </Link>
      <p className="text-sm">
        Or you will be redirected shortly{" "}
        <Loader2 className="w-4 h-4 animate-spin" />
      </p>
    </div>
  );
}
