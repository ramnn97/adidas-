"use client";
import clsx from "clsx";
import { useParams } from "next/navigation";

const Footer = () => {
  const color = useParams()?.slug === "white" ? "text-black" : "text-white";
  return (
    <div
      className={clsx(
        "fixed flex justify-between items-center w-full md:gap-5 gap-2 bottom-2 md:px-20 px-5 md:text-xs text-[10px] md:tracking-widest text-nowrap",
        color
      )}
    >
      <div className="flex md:gap-5 gap-2">
        <p className="hover-animation">© 2025 ADIDAS AG</p>
        <p className="hover-animation">TERMS & CONDITIONS</p>
        <p className="hover-animation">PRIVACY</p>
        <p className="hover-animation">COOKIES</p>
      </div>
      <div className="flex items-center">
        <p>Built with ❤️ by Raman</p>
      </div>
    </div>
  );
};

export default Footer;
