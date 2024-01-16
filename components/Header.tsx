import Image from "next/image";

export default function Header() {
  return (
    <main className="h-[100vh] text-center relative bg-[url('/Header3.jpg')]">
      <h1 className=" headerText uppercase text stroke-black pt-52 px-2  sm:px-5 font-bold text-[#FFDF2C] text-5xl sm:text-7xl lg:text-9xl">
        <span className="font-sans">$</span>jennie the kpop <br /> Queen on Sol
      </h1>
    </main>
  );
}
