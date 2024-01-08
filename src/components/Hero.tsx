import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <>
      <Container className="relative overflow-hidden text-center pt-20 mb-10 lg:pb-0 lg:pt-20 xl:py-24 xl:pb-0 md:py-20 xl:mt-0">
        <Image
          className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] -z-10"
          src="/bg-op.svg"
          alt=""
          width={2245}
          height={1636}
          priority
        />
        {/* <h1 className="mx-auto max-w-4xl font-display text-5xl font-thin tracking-normal text-slate-700 sm:text-7xl">
          Modern{" "}
          <span className="inline-block font-serif bg-gradient-to-b from-slate-600 via-slate-600 to-slate-900 bg-clip-text text-transparent">
            Stoneworks
          </span>
        </h1> */}
        <div className="flex flex-col xl:flex-row items-center gap-x-10">
          <div className="flex flex-col xl:w-7/12 lg:bg-white/30">
            <h1 className="mx-auto max-w-3xl lg:max-w-4xl font-display text-2xl font-semibold md:text-5xl lg:text-6xl xl:text-5xl text-gray-700">
              Quality Stone Countertops in <br />
              Foley, Alabama{" "}
              <p className="mx-auto max-w-2xl font-normal text-sm md:text-lg lg:mt-2 tracking-tight text-slate-700 lg:text-2xl">
                Granite | Marble | Quartz | Stone
              </p>
            </h1>
            <div className=" flex justify-center gap-x-6 mt-8 lg:mt-10">
              <Button className=" border border-gray-700" href="#contact">
                Request Quote{" "}
              </Button>
              <Button href="/gallery" variant="outline">
                Our Work
              </Button>
            </div>
          </div>

          <div className="relative  mt-12 flex justify-center items-center w-full h-80 md:h-[600px] md:w-full lg:h-[650px] xl:h-[500px] lg:w-[700px] xl:w-6/12 max-w-2xl mx-auto mb-5">
            <Image
              src="/hero-photo.jpeg"
              alt="Granite"
              fill
              className="object-cover rounded-xl shadow-md shadow-gray-700"
              priority
            />
          </div>
        </div>
      </Container>
    </>
  );
}
