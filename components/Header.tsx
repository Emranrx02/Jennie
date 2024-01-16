import Image from "next/image";

export default function Header() {
  return (
    <main className="w-full h-[100vh] overflow-hidden bg-[#BFC1C2] flex flex-col justify-center items-center   relative  text-center ">
      <Image
        className="w-full relative object-cover  z-10   h-full "
        src="/Header2.jpg"
        width={1920}
        height={1080}
        alt="header hero"
      />
      <div className="absolute z-20 top-0 flex justify-center items-end h-full w-full">
        <h1 className="headerText  uppercase px-2  mb-24  sm:px-5 font-bold text-[#FFDF2C] text-5xl sm:text-7xl lg:text-9xl">
          <span className="font-sans">$</span>jennie
        </h1>
      </div>
    </main>
  );
}
