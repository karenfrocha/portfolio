import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-zinc-900 min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-gray-200 font-bold">Olá, eu sou a Karen!</h1>
          <h2 className="text-gray-400 font-bold">Iniciando a jornada na programação!</h2>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src="https://github.com/karenfrocha.png"
          className="rounded-full"
          width={200}
          height={200}
          priority
          alt="avatar"
        />
      </div>
      
      <div className="box-border hover:box-content">
      </div>
      <div className="Tempo de Experiência">
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>Entre em contato</button>
      </div>
    </main>
  );
}
