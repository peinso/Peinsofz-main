import CustomSectionHero from "@/app/components/CustomSectionHero";
import Image from "next/image";
import Button from "@/app/components/Button";
import GetBlog from "@/lib/GetBlog";

export default async function blogPage({ params }) {
  const blog = await GetBlog(params.id);
  const sections = blog.data.sections;

  return (
    <main className="flex flex-col gap-10">
      <header>
        <CustomSectionHero
          sectionSubTittle={blog.data.blog.title}
          sectionTitle={"Blog"}
          backgroundVideo={"/1202190_Long_Beach_Speed_1920x1080.mp4"}
        />
      </header>

      <section className="grid max-w-6xl grid-cols-12 px-8 py-6 mx-auto lg:px-0 gap-x-4">
        {
        /*
         <article className="flex flex-col col-span-12 gap-8 lg:col-span-6">
        */
        }
        <article className="flex flex-col col-span-12 gap-8 lg:col-span-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{blog.title}</h1>
            <p className="p-color">{blog.desc}</p>
            {sections.map((section) => (
              <div className="flex flex-col gap-4" key={section.id}>
                {section.title && (
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                )}
                {section.content && <p>{section.content}</p>}
                {section.image && (
                  <Image
                    width={850}
                    height={560}
                    src={section.image}
                    alt={section.title}
                  />
                )}
              </div>
            ))}
          </div>

          <ul className="flex gap-4 py-4 border-y">
            <ul className="gap-4 md:flex">
              <li className="hover:scale-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.0759 2.44349C15.173 2.44664 16.2242 2.86741 17 3.6139C17.7757 4.36038 18.213 5.37193 18.2162 6.42762V14.395C18.213 15.4507 17.7757 16.4622 17 17.2087C16.2242 17.9552 15.173 18.376 14.0759 18.3791H5.79618C4.69911 18.376 3.6479 17.9552 2.87215 17.2087C2.0964 16.4622 1.65914 15.4507 1.65586 14.395V6.42762C1.65914 5.37193 2.0964 4.36038 2.87215 3.6139C3.6479 2.86741 4.69911 2.44664 5.79618 2.44349H14.0759ZM14.0759 0.850098H5.79618C2.60821 0.850098 0 3.35992 0 6.42762V14.395C0 17.4627 2.60821 19.9725 5.79618 19.9725H14.0759C17.2639 19.9725 19.8721 17.4627 19.8721 14.395V6.42762C19.8721 3.35992 17.2639 0.850098 14.0759 0.850098Z"
                    fill="white"
                  />
                  <path
                    d="M15.3177 6.4279C15.072 6.4279 14.8319 6.35781 14.6277 6.22648C14.4234 6.09516 14.2642 5.9085 14.1702 5.69012C14.0762 5.47173 14.0516 5.23142 14.0995 4.99959C14.1475 4.76775 14.2658 4.5548 14.4395 4.38765C14.6131 4.22051 14.8345 4.10668 15.0754 4.06056C15.3163 4.01445 15.566 4.03812 15.793 4.12857C16.0199 4.21903 16.2139 4.37222 16.3504 4.56876C16.4868 4.7653 16.5597 4.99637 16.5597 5.23275C16.56 5.38979 16.5282 5.54536 16.4659 5.69051C16.4036 5.83567 16.3121 5.96756 16.1967 6.0786C16.0813 6.18965 15.9442 6.27767 15.7934 6.33761C15.6425 6.39756 15.4809 6.42824 15.3177 6.4279ZM9.9358 7.22439C10.5909 7.22439 11.2313 7.41131 11.7759 7.76153C12.3206 8.11174 12.7452 8.60952 12.9958 9.19191C13.2465 9.77429 13.3121 10.4151 13.1843 11.0334C13.0565 11.6517 12.7411 12.2196 12.2779 12.6653C11.8146 13.111 11.2245 13.4146 10.582 13.5376C9.93948 13.6606 9.27351 13.5974 8.66829 13.3562C8.06307 13.115 7.54578 12.7065 7.18184 12.1823C6.81789 11.6582 6.62364 11.042 6.62364 10.4116C6.62458 9.56658 6.97384 8.75642 7.59478 8.1589C8.21573 7.56138 9.05765 7.22529 9.9358 7.22439ZM9.9358 5.63099C8.95322 5.63099 7.9927 5.91137 7.17571 6.43667C6.35873 6.96197 5.72196 7.7086 5.34594 8.58214C4.96993 9.45568 4.87154 10.4169 5.06323 11.3443C5.25493 12.2716 5.72809 13.1234 6.42288 13.792C7.11767 14.4606 8.00289 14.9159 8.96659 15.1004C9.93029 15.2848 10.9292 15.1901 11.837 14.8283C12.7448 14.4665 13.5207 13.8537 14.0666 13.0676C14.6125 12.2814 14.9038 11.3571 14.9038 10.4116C14.9038 9.1437 14.3804 7.92774 13.4487 7.0312C12.517 6.13466 11.2534 5.63099 9.9358 5.63099Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li className="hover:scale-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M21.4065 10.4689C21.4065 5.15818 16.8092 0.852051 11.1393 0.852051C5.4694 0.852051 0.87207 5.15818 0.87207 10.4689C0.87207 15.2688 4.62602 19.2473 9.53503 19.9694V13.2497H6.92743V10.4689H9.53503V8.35021C9.53503 5.94041 11.0682 4.60821 13.4132 4.60821C14.5366 4.60821 15.7119 4.79626 15.7119 4.79626V7.16312H14.4165C13.1418 7.16312 12.7431 7.90414 12.7431 8.66576V10.4689H15.5904L15.1357 13.2497H12.7435V19.9703C17.6525 19.2486 21.4065 15.2701 21.4065 10.4689Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li className="hover:scale-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                >
                  <path
                    d="M19.5756 2.56483C18.8566 2.87705 18.0958 3.08274 17.3172 3.17542C18.1354 2.69668 18.7507 1.93611 19.0477 1.03637C18.2742 1.48836 17.4293 1.80549 16.5493 1.9742C16.1787 1.58611 15.733 1.27737 15.2393 1.06675C14.7456 0.856137 14.2143 0.748039 13.6775 0.74903C11.5041 0.74903 9.74533 2.48102 9.74533 4.61608C9.74379 4.91306 9.77785 5.20916 9.84677 5.49804C8.28834 5.42504 6.76231 5.02776 5.36632 4.33164C3.97033 3.63552 2.73512 2.65588 1.73972 1.4554C1.39051 2.04368 1.20583 2.7149 1.20497 3.3989C1.20497 4.7398 1.90506 5.92506 2.96217 6.61945C2.33586 6.6046 1.72238 6.43895 1.17382 6.13657V6.18446C1.17382 8.06012 2.53166 9.62051 4.32879 9.97569C3.99084 10.0657 3.64259 10.1113 3.29284 10.1114C3.04467 10.1118 2.79706 10.0877 2.55362 10.0395C3.05322 11.576 4.5073 12.6934 6.22975 12.7253C4.83014 13.8032 3.11178 14.3858 1.34475 14.3815C1.0311 14.381 0.717739 14.3624 0.40625 14.3256C2.20385 15.4727 4.29342 16.0794 6.42624 16.0736C13.6691 16.0736 17.6259 10.1792 17.6259 5.06704C17.6259 4.89943 17.6216 4.73182 17.6136 4.56819C18.3816 4.02228 19.046 3.34387 19.5756 2.56483Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li className="hover:scale-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M18.4415 0.702148H2.2354C1.34987 0.702148 0.576172 1.33931 0.576172 2.21444V18.4565C0.576172 19.3364 1.34987 20.1205 2.2354 20.1205H18.4367C19.327 20.1205 19.9945 19.3312 19.9945 18.4565V2.21444C19.9997 1.33931 19.327 0.702148 18.4415 0.702148ZM6.59543 16.8883H3.81358V8.2389H6.59543V16.8883ZM5.30073 6.92383H5.28079C4.39049 6.92383 3.81401 6.26109 3.81401 5.43147C3.81401 4.58669 4.40566 3.93955 5.3159 3.93955C6.22613 3.93955 6.78311 4.58192 6.80305 5.43147C6.80262 6.26109 6.22613 6.92383 5.30073 6.92383ZM16.7623 16.8883H13.9805V12.159C13.9805 11.026 13.5756 10.2518 12.5692 10.2518C11.8002 10.2518 11.3451 10.772 11.1427 11.2787C11.0669 11.4607 11.0465 11.7086 11.0465 11.9618V16.8883H8.26463V8.2389H11.0465V9.44258C11.4513 8.8661 12.0837 8.03648 13.5553 8.03648C15.3814 8.03648 16.7628 9.24016 16.7628 11.8352L16.7623 16.8883Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>
            {
              /*
              <li>Category : Shipping</li>
              */
            }
          </ul>
        </article>
        {
          /*
        <article className="col-span-12 lg:col-start-8 lg:col-end-12">
          <header className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
            <section className="flex flex-col items-stretch py-12 border border-solid bg-neutral-100 px-11 border-zinc-100 max-md:max-w-full max-md:px-5">
              <h2 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">
                Categories
              </h2>
              <div className="flex items-start justify-between gap-5 mt-8">
                <div className="text-lg text-slate-500 whitespace-nowrap">
                  Shipping
                </div>
                <div className="text-base font-medium text-right text-gray-800 uppercase whitespace-nowrap">
                  (3)
                </div>
              </div>
              <div className="bg-zinc-300 shrink-0 h-px mt-3.5" />
              <div className="flex items-start justify-between gap-5 mt-6">
                <div className="text-lg text-slate-500 whitespace-nowrap">
                  Services
                </div>
                <div className="self-stretch text-base font-medium text-right text-gray-800 uppercase whitespace-nowrap">
                  (5)
                </div>
              </div>
              <div className="h-px mt-5 bg-zinc-300 shrink-0" />
              <div className="flex items-start justify-between gap-5 mt-6">
                <div className="text-lg text-slate-500 whitespace-nowrap">
                  Transport
                </div>
                <div className="text-base font-medium text-right text-gray-800 uppercase whitespace-nowrap">
                  (2)
                </div>
              </div>
              <div className="h-px mt-5 bg-zinc-300 shrink-0" />
              <div className="flex items-start justify-between gap-5 mt-6">
                <div className="text-lg text-slate-500 whitespace-nowrap">
                  Warehouse
                </div>
                <div className="self-stretch text-base font-medium text-right text-gray-800 uppercase whitespace-nowrap">
                  (2)
                </div>
              </div>
              <div className="h-px mt-6 bg-zinc-300 shrink-0" />
              <div className="flex items-start justify-between gap-5 mt-6">
                <div className="text-lg text-slate-500 whitespace-nowrap">
                  Transport Industries
                </div>
                <div className="text-base font-medium text-right text-gray-800 uppercase whitespace-nowrap">
                  (5)
                </div>
              </div>
              <div className="h-px mt-5 bg-zinc-300 shrink-0" />
            </section>
            <section className="flex flex-col items-start gap-4 py-12 mt-12 border border-solid bg-neutral-100 px-11 border-zinc-100 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <h2 className="self-stretch text-2xl font-semibold text-gray-800 whitespace-nowrap">
                How can we help you?
              </h2>
              <p className="self-stretch mt-3 text-base leading-5 text-slate-500">
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
                feugiat tempus Phasellus atquam.
              </p>
              <Button buttonText={"Contact "} />
            </section>
            <section className="flex flex-col items-stretch mt-12 bg-indigo-950 px-11 py-9 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="flex w-[149px] max-w-full items-stretch gap-2.5 self-start">
                <div className="flex w-1 shrink-0 h-[23px] flex-col" />
                <h2 className="self-center my-auto text-2xl font-semibold text-white grow whitespace-nowrap">
                  Get In Touch
                </h2>
              </div>
              <p className="self-start mt-8 text-lg leading-6 text-white whitespace-nowrap">
                Need help?
              </p>
              <p className="text-white text-lg leading-6 mt-1.5">
                (00) 112 365 489
              </p>
              <div className="h-px mt-6 bg-slate-800 shrink-0" />
              <p className="mt-6 text-lg leading-6 text-white">
                Email
                <br />
                contact@logistics.com
              </p>
            </section>
          </header>
        </article>          
          */
        }

      </section>
    </main>
  );
}
{
  /* <ul className="flex flex-col gap-4">
            <li>
              {" "}
              <h1 className="text-4xl font-bold">
                {blogData.data.sections.title}
              </h1>
            </li>
            <li>
              {" "}
              <p>{blogData.content}</p>
            </li>
            <li>
              <p className="items-stretch self-stretch justify-center py-12 mt-8 text-xl italic text-center text-white bg-indigo-950 px-14 max-md:max-w-full max-md:px-5">
                “Digitization within transport and logistics means seamless
                service to our customers, visibility in the supply chain, and
                driving a more efficient business.”
              </p>
            </li>
          </ul> */
}

{
  /* <ul className="flex flex-col gap-4">
            {" "}
            <li>
              {" "}
              <h1 className="text-4xl font-bold">
                Safest Logistics Solutions Provider With Integrity
              </h1>
            </li>
            <li>
              {" "}
              <p>
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec feugiat tempus. Phasellus at quam hendrerit semper feugiat
                id nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
                aliquam leo quis, porttitor leo. Fusce lectus ex pretium[...]
              </p>
            </li>
            <li className="mt-8">
              <figure className="flex flex-col items-center justify-center gap-2">
                <Image src="/blogImg.png" alt="blog" width={850} height={560} />
                <p className="text-3xl font-bold">The Cargo Ship</p>
                <p className="p-color">
                  Duis semper lacus scelerisque, aliquam leo quis, porttitor
                  leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor
                  elit nec attempus.Phasellus at quam hendrerit semper David
                  Warner nunc. Morbi quis justo velit. Duis semper lacus
                  scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex
                  pretium. Duis semper lacus scelerisque, aliquam leo quis,
                  porttitor leo. Etiam lobortis dapib libero vel porttitor.
                  Nulla tempor elit nec feugiat tempus Phasellus atquam.
                </p>
              </figure>
            </li>
          </ul> */
}
