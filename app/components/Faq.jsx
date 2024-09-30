// import getFaq from "@/lib/getFaq";
import Image from "next/image";
import { FaqCard } from "./FaqCard";

async function Faq() {
  // const faqs = await getFaq();
  const faqs = [
    {
      id: "1",
      question: "How can I pay for yPEINSO Services?",
      answer:
        "You can pay for PEINSO Services using various payment methods such as credit cards, bank transfers, or online payment platforms.",
    },
    {
      id: "2",
      question: "What payment methods are supported?",
      answer:
        "We support payment methods such as credit cards, debit cards, bank transfers, and online payment platforms.",
    },
    {
      id: "3",
      question: "What options for logistics plans are available?",
      answer:
        "We offer a range of logistics plans tailored to meet different customer requirements, including express shipping, standard shipping, and customized logistics solutions.",
    },
    {
      id: "4",
      question: "Can I specify a delivery date when ordering?",
      answer:
        "Yes, you can specify a preferred delivery date when placing your order, and we will make our best efforts to accommodate it.",
    },
  ];

  return (
    <section className=" hidden mt-24  bg-[#F4F4F4]">
      <main className="flex flex-col items-center gap-20 py-6 mx-auto lg:flex-row max-w-7xl">
        <section className="flex flex-col gap-6 px-8 mx-auto lg:w-[42rem] lg:px-0 max-w-7xl">
          <p className=" section-heading">FAQ</p>
          <h1 className="text-4xl font-bold">
            Frequently Asked <br /> Questions
          </h1>

          {faqs.map((faq) => (
            <FaqCard key={faq.id} {...faq} />
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

export default Faq;
