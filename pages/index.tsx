import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-900 text-white flex items-center justify-center flex-col px-4">
      <div className="relative w-full h-screen">
        <Image
          src="/A_clean_and_futuristic_digital_illustration_repres.png"
          alt="NutriNest Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <Image
            src="/nutrinest_logo00.jpg"
            alt="NutriNest Logo"
            width={160}
            height={160}
            className="rounded-full opacity-75 mx-auto mb-6"
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-8">
            A inovação Nutri está chegando
          </h1>
        </div>
      </div>
    </main>
  );
}
