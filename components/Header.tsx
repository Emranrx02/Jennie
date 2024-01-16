import Image from "next/image";

export default function Header() {
  return (
    <main className="w-full overflow-hidden bg-gray-500 flex flex-col justify-center items-center  h-full relative  text-center ">
      <Image
        className="w-full relative object-cover z-10  min-h-[70vh] h-[100%] "
        src="/Header3.jpg"
        width={1920}
        height={1080}
        alt="header hero"
      />
      <div className="absolute z-20 top-0 flex justify-center items-center h-full w-full">
        <h1 className="headerText  uppercase px-2   sm:px-5 font-bold text-[#FFDF2C] text-5xl sm:text-7xl lg:text-9xl">
          <span className="font-sans">$</span>jennie the kpop <br /> Queen on
          Sol
        </h1>
      </div>
    </main>
  );
}
