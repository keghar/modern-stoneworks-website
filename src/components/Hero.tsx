import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <>
      <Container className="relative overflow-hidden py-16 pt mb-6 text-center lg:pt-32 lg:mb-16 ">
        <Image
          className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] -z-10"
          src="/bg-op.svg"
          alt=""
          width={2245}
          height={1636}
          unoptimized
        />
        {/* <h1 className="mx-auto max-w-4xl font-display text-5xl font-thin tracking-normal text-slate-700 sm:text-7xl">
          Modern{" "}
          <span className="inline-block font-serif bg-gradient-to-b from-slate-600 via-slate-600 to-slate-900 bg-clip-text text-transparent">
            Stoneworks
          </span>
        </h1> */}
        <div className="flex flex-col">
          <h1 className="mx-auto max-w-4xl font-display text-4xl pt-10 font-semibold tracking-wide text-slate-700 md:text-5xl">
            Qauilty Stone Countertops in Foley, Alabama{" "}
          </h1>
          <p className="mx-auto max-w-2xl text-lg tracking-tight text-slate-700">
            Grainite | Marble | Stone
          </p>
          <div className="relative -z- mt-20 flex justify-center items-center w-full h-56 md:h-80 lg:h-96 max-w-2xl mx-auto">
            <Image src="/top-chefs-granite.jpg" alt="Granite" fill />
          </div>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button href="#contact">Request Quote </Button>
            <Button href="/gallery" variant="outline">
              Our Work
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
