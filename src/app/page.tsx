import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
        <Image
          src="/logo.png"
          alt="Basma Labs Logo"
          width={35}
          height={35}
          priority
        />
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-800 text-transparent bg-clip-text">
            Basma Labs
          </span>
        </h1>
      </div>
      <p className="mt-4 text-xl text-black dark:text-white">
        Our website is currently under construction.
      </p>
      <p className="text-sm text-black/80 dark:text-white/80">
        Stay tuned — exciting things are coming soon!
      </p>
    </div>
  );
}
