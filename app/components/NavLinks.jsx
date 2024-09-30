import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },

  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Jobs",
    path: "/jobs",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-4">
      {navLinks.map((link) => {
        const isActive = link.path === pathname;
        return (
          <Link
            className={isActive ? "active" : "" + "  font-medium "}
            key={link.name}
            href={link.path}
          >
            <p
              className={
                isActive
                  ? "active"
                  : "" + "  font-medium text-base hover:text-[#ffb82b] "
              }
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
