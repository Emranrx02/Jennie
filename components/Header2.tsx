import Image from "next/image";

export default function Header2() {
  return (
    <main className="h-[100vh]">
      <Image
        className="w-full object-cover  h-full "
        src="/Header2.jpg"
        width={1920}
        height={1080}
        alt="header hero"
      />
    </main>
  );
}
