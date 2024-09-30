import React from "react";
import CustomSectionHero from "../../components/CustomSectionHero";
import CustomHeader from "../../components/CustomHeader";
import NewsCard from "../../components/NewsCard";
import Link from "next/link";
import getBlogs, { fetchBlogs } from "@/lib/GetBlogs";

export default async function ProjectsPage() {
   const Blogs = await fetchBlogs();
   /* 
  const Blogs = [
    {
      id: "1",
      imgSrc: "/news.png",
      alt: "news",
      day: "21",
      month: "January",
      animation: "fade-up",
      title: "Inland freight a worthy solution for your business",
      description:
        "We are dedicated to creating added value for our customers by implementing modern technology in our work.",
      listItems: [
        "Urgent transport solutions",
        "Efficient logistics management",
        "Secure transportation",
        "24/7 support",
      ],
    },
    {
      id: "1",
      imgSrc: "/news.png",
      alt: "news",
      day: "21",
      month: "January",
      animation: "fade-up",
      title: "Inland freight a worthy solution for your business",
      description:
        "We are dedicated to creating added value for our customers by implementing modern technology in our work.",
      listItems: [
        "Urgent transport solutions",
        "Efficient logistics management",
        "Secure transportation",
        "24/7 support",
      ],
    },
    {
      id: "1",
      imgSrc: "/news.png",
      alt: "news",
      day: "21",
      month: "January",
      animation: "fade-up",
      title: "Inland freight a worthy solution for your business",
      description:
        "We are dedicated to creating added value for our customers by implementing modern technology in our work.",
      listItems: [
        "Urgent transport solutions",
        "Efficient logistics management",
        "Secure transportation",
        "24/7 support",
      ],
    },
    {
      id: "1",
      imgSrc: "/news.png",
      alt: "news",
      day: "21",
      month: "January",
      animation: "fade-up",
      title: "Inland freight a worthy solution for your business",
      description:
        "We are dedicated to creating added value for our customers by implementing modern technology in our work.",
      listItems: [
        "Urgent transport solutions",
        "Efficient logistics management",
        "Secure transportation",
        "24/7 support",
      ],
    },
  ];
*/
  return (
    <section className="flex flex-col gap-6">
      <CustomSectionHero
        backgroundVideo="/1202190_Long_Beach_Speed_1920x1080.mp4"
        sectionTitle={" PEINSO Blog"}
        sectionSubTittle={"PEINSO Latest News"}
      />

      <main className="flex flex-col items-center justify-center gap-6">
        <CustomHeader headerText={"Our Blog"} header={"PEINSO Latest News"} />
        <div className="flex flex-col gap-9">
          {Blogs.data.map((blog, index) => (
            <Link key={index} href={`/blog/${blog.id || index}`}>
              <NewsCard key={index} {...blog} />
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}
