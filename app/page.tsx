import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center min-h-[calc(100vh-108px)] justify-evenly">
      <Image
        className="relative rounded-full"
        src="/cartoon-man-avatar.jpg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <p className="text-2xl font-bold">Bienvenidos a mi Blog</p>
    </main>
  );
}
