import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="h-[100vh] scroll-section text-white relative">
      <div className="h-full relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50 h-1/4 z-10 pointer-events-none"></div>
        <div className="relative h-full">
          <Image
            src="/second-section.png"
            alt="text"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black/50 h-1/4 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 flex justify-center items-center text-white text-[30px] md:text-2xl lg:text-3xl xl:text-5xl font-bold">
          <p className="text-center mx-10" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
            Unify every channel into one seamless experience
          </p>
        </div>
      </div>
    </section>
  );
}
