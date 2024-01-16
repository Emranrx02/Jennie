import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export default function Header2() {
  return (
    <main className="h-[100vh] relative">
      <Image
        className="w-full z-10 object-cover min-h-[70vh] max-h-[100vh] h-full "
        src="/Header4.jpg"
        width={1920}
        height={1080}
        alt="header hero"
      />
      <div className="absolute flex space-y-9 flex-col  mt-48 items-end pr-[12%]   w-full top-0 z-20 bg-transparent">
        <div className="flex   mt-2 gap-4">
          <Link
            target="_blank"
            href={"http://twitter.com/konko_sol"}
            className="w-20 h-20 hover:scale-110 cursor-pointer -rotate-3 bg-black text-white flex items-center justify-center"
          >
            <FaXTwitter size={45} />
          </Link>
          <Link
            target="_blank"
            href={"https://t.me/Konkochannel"}
            className="w-20 h-20 rotate-3 hover:scale-110 cursor-pointer bg-black text-white flex items-center justify-center"
          >
            <FaTelegramPlane size={45} />
          </Link>
        </div>
        <Link
          target="_blank"
          href={
            "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g&inputAmount=0.2&fixed=in"
          }
          className="bg-[#FFDF2C]  hover:scale-110  uppercase px-3 py-2 text-xl md:text-6xl text-white rotate-6 border-[4px] border-white"
        >
          Buy <span className="font-sans font-bold">$</span>Jennie
        </Link>

        <Link
          target="_blank"
          href={
            "https://birdeye.so/token/EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g?chain=solana"
          }
          className=" text-white md:text-5xl   text-2xl bg-[#FFDF2C] border-4 rounded-0 animate-pulse border-white rotate[-3deg] shadow px-5 py-3 md:hover:scale-105 md:rotate[-3deg]"
        >
          Chart
        </Link>
      </div>
    </main>
  );
}
