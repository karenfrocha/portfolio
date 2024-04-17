import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-zinc-900 min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-gray-200 font-bold">Olá, eu sou a Karen!</h1>
        <Image
          src="https://github.com/karenfrocha.png"
          className="rounded-full"
          width={200}
          height={200}
          priority
          alt="avatar"
        />
      </div>
    </main>
  );
}
