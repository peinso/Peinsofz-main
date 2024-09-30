import FaqClient from "./FaqClient";
import Image from "next/image";
import GetFaq from "@/lib/GetFaq";

export default async function FaqCard() {
  const faqsData = await GetFaq();
  // const faqsData = [
  //   {
  //     id: "1",
  //     question: "How can I pay for yPEINSO Services?",
  //     answer:
  //       "You can pay for PEINSO Services using various payment methods such as credit cards, bank transfers, or online payment platforms.",
  //   },
  //   {
  //     id: "1",
  //     question: "How can I pay for yPEINSO Services?",
  //     answer:
  //       "You can pay for PEINSO Services using various payment methods such as credit cards, bank transfers, or online payment platforms.",
  //   },
  //   {
  //     id: "1",
  //     question: "How can I pay for yPEINSO Services?",
  //     answer:
  //       "You can pay for PEINSO Services using various payment methods such as credit cards, bank transfers, or online payment platforms.",
  //   },
  // ];

  return (
    <section className="   bg-[#F4F4F4]">
      <main className="flex flex-col items-center gap-20 py-6 mx-auto lg:flex-row max-w-7xl">
        <section className="flex flex-col gap-6 px-8 mx-auto lg:w-[42rem] lg:px-0 max-w-7xl">
          <p className=" section-heading">FAQ</p>
          <h1 className="text-4xl font-bold">
            Frequently Asked <br /> Questions
          </h1>

          {faqsData.data.map((faq) => (
            <FaqClient key={faq.id} {...faq} />
          ))}
        </section>
        <figure className="h-full">
          <Image
            src="/person.png"
            loading="lazy"
            className="object-contain w-full h-full "
            width={650}
            height={650}
            alt="icon"
          />
        </figure>
      </main>
    </section>
  );
}
