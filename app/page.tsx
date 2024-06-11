import PoemasListCarousel from "./components/PoemasListCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-base-100 flex-col items-center  py-12 md:gap-4 md:p-24">
      <h1
        className="text-2xl md:text-5xl text-primary w-full text-center md:text-start"
      >
        POEMAS VISUAIS - 29AA 2024
      </h1>
      <PoemasListCarousel />
    </main>
  );
}
