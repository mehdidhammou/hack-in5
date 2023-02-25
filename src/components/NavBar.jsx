import Link from "next/link";
import { Menu } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
  const links = [
    {
      name: "More",
      href: "/more",
    },
    {
      name: "INFORMATION",
      href: "/more",
    },
    {
      name: "More",
      href: "/more",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-7xl p-8 flex items-center justify-between">
      <div className="flex-1 items-center">
        <Link
        href={'/'}
        >
        <Image
          src={Logo}
          className="object-contain"
          width={40}
          height={40}
          alt="logo"
          />
          </Link>
      </div>
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex items-center gap-8 uppercase">
          <li className="relative">
            <Menu>
              <Menu.Button>MORE</Menu.Button>
              <Menu.Items className="flex flex-col p-1 rounded-lg shadow-lg absolute right-0 border">
                {links.map((link) => (
                  <Menu.Item key={link.href}>
                    <Link
                      className="hover:bg-gray-200 p-2 rounded-md"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="about-us">ABOUT US</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-1 items-center gap-4 justify-end">
        <Link
          className=" inline-flex items-center justify-center gap-4 btn-gradient transition rounded-lg hover:shadow-md text-white px-4 py-2"
          href={"sign-in"}
        >
          Sign In
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </Link>
        <div className="md:hidden">
          <button className="flex items-center" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 md:hidden bg-black flex gap-12 flex-col z-10"
            >
              <div className="mt-10 mr-8">
                <button className="float-right" onClick={handleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center justify-center w-full uppercase">
                <ul className="flex flex-col gap-4">
                  <li className="transition hover:border-l pl-2 text-2xl">
                    <Link href="/news">News</Link>
                  </li>
                  <li className="transition hover:border-l pl-2 text-2xl">
                    <Link href="about-us">ABOUT US</Link>
                  </li>
                  <li className="transition hover:border-l pl-2 text-2xl">
                    <Link href="sign-in">Sign In</Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
