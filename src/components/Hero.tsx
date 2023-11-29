import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-thin tracking-normal text-slate-700 sm:text-7xl">
        Modern{" "}
        <span className="inline-block font-serif bg-gradient-to-b from-slate-600 via-slate-600 to-slate-900 bg-clip-text text-transparent">
          Stoneworks
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        In need of Granite for your house in Baldwin County, Alabama
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Contact us </Button>
        <Button href="/members" variant="outline">
          <span className="">Our Work</span>
        </Button>
      </div>
      <div className="relative mt-10 flex justify-center ">
        {/* <Image
          src="/"
          alt="Granite"
          sizes="100vw"
          // Make the image display full widthy
          style={{
            width: "100%",
            height: "auto",
          }}
        /> */}
      </div>

      <div className="mt-36 lg:mt-44">
        <p className="font-display text-xl font-bold text-slate-900">
          {/* more info */}
        </p>
      </div>
    </Container>
  );
}
