import Link from "next/link";
import Image from "next/image";
export default function SecondPage() {
  return (
    <main className="flex justify-center py-16 bg-[#E5A220]">
      <div className="max-w-[60rem] w-full text-white   rounded-lg px-10 py-5 space-y-10 flex flex-col items-center">
        <h1 className=" text-8xl sm:text-9xl">
          {" "}
          <span className="font-sans font-bold">$</span>Jennie
        </h1>
        <p className=" text-2xl sm:text-3xl mt-3">
          The Queen of Kpop On Solana
        </p>
        <Link
          target="_blank"
          href={
            "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g&inputAmount=0.2&fixed=in"
          }
          className="bg-yellow-600 order-2 hover:scale-110  uppercase px-3 py-2 text-xl md:text-4xl text-white rotate-6 border-[4px] border-black"
        >
          Buy konko
        </Link>
        <div className="flex order-1 mt-2 gap-4">
          <Link
            target="_blank"
            href={"http://twitter.com/konko_sol"}
            className="w-16 h-16 hover:scale-110 cursor-pointer -rotate-3 bg-black flex items-center justify-center"
          >
            <Image
              className="w-16"
              src={"/x.webp"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://t.me/Konkochannel"}
            className="w-16 h-16 rotate-3 hover:scale-110 cursor-pointer bg-black flex items-center justify-center"
          >
            <Image
              className="w-16"
              src={"/telegram.webp"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
        </div>
        <Link
          target="_blank"
          href={
            "https://birdeye.so/token/EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g?chain=solana"
          }
          className=" text-white md:text-3xl text-2xl bg-yellow-600 border-4 rounded-0 animate-pulse border-black rotate[-3deg] shadow px-5 py-3 md:hover:scale-105 md:rotate[-3deg]"
        >
          Chart
        </Link>
      </div>
    </main>
  );
}
