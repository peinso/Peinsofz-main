import CustomHeader from "./CustomHeader";
import Link from "next/link";
import NewsCard from "./NewsCard";
import { fetchBlogs } from "@/lib/GetBlogs";
export default async function News() {
  const res = await fetchBlogs();
  const Blogs = await res;
  if (!Blogs) {
    return (
      <section>
        <main className="flex flex-col items-center justify-center gap-6 px-8 lg:px-0">
          <CustomHeader headerText={"Our Blog"} header={"Our Latest News"} />
          <div className="text-center">
            <p>No blogs found</p>
          </div>
        </main>
      </section>
    );
  }

  return (
    <section>
      <main className="flex flex-col items-center justify-center gap-6 px-8 lg:px-0">
        <CustomHeader headerText={"Our Blog"} header={"Our Latest News"} />
        <div className="flex flex-col gap-9">
          {Blogs.data.length === 0 && (
            <div className="text-center">
              <p>No blogs found</p>
            </div>
          )}
          {Blogs.data.map((blog, index) => (
            <Link key={index} href={`/blog/${blog.id || index}`}>
              <NewsCard key={index} {...blog} />
            </Link>
          ))}
          {/*Blogs.data.map((item, index) => {
            return <NewsCard key={index} {...item} />;
          })*/}
        </div>
      </main>
    </section>
  );
}
