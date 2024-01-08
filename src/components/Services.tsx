import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import ImageSlider from "./ImageSlider";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Kitchens",
    image: "/hero-photo.jpeg",
    alt: "A kitchen project we fabricated and installed",
  },
  {
    id: 1,
    title: "Vanities",
    image: "/vanity-photo1.jpeg",
    alt: "A vanity we fabricated and installed",
  },
  {
    id: 1,
    title: "Waterfalls",
    image: "/waterfall-1.jpeg",
    alt: "A fireplace we fabricated and installed",
  },
];

function Services() {
  return (
    <Container className="flex flex-col justify-center pb-16 text-center lg:pt-32 xl:pt20 gap-10 max-w-screen-xl text-gray-700">
      <div className="flex flex-col gap-y-8 xl:gap-x-8 xl:flex-row-reverse justify-center items-center">
        <div className="flex flex-col gap-y-8 ">
          <h2 className="text-xl max-w-2xl mx-auto md:text-2xl lg:text-3xl lg:max-w-4xl xl:max-w-7xl tracking-wide font-semibold">
            Experience craftsmanship at its finest with our stone countertop
            installation services.
          </h2>

          <p className="text-base md:text-xl lg:text-2xl max-w-2xl mx-auto">
            Our skilled team ensures precision in measuring, cutting, and
            fitting to provide a seamless and stunning addition to your home.
            Elevate your space with the timeless beauty and durability of stone.
          </p>
        </div>

        <ImageSlider />
      </div>
      <div className="text-gray-700 flex flex-col gap-y-8 mt-8 py-4">
        <h2 className="mx-auto text-4xl md:text-5xl lg:text-5xl md:pb-10">
          Our Work
        </h2>

        <h3 className="text-xl max-w-2xl mx-auto md:text-2xl lg:text-3xl lg:max-w-4xl text-gray-600 font-semibold">
          We pride ourselves on providing quality stone fabrication and
          installation with exceptional customer service.
        </h3>
        <p className="max-w-2xl text-base md:text-xl lg:text-2xl lg:max-w-3xl mx-auto">
          We work with all types of stone, including granite, marble, and
          quartz. Our experienced team will fabricate your stone countertops,
          vanities, fireplaces, and waterfalls.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-y-6 md:gap-x-4 lg:gap-x-8 w-full lg:mt-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col">
              <h3 className="text-gray-700  text-lg md:text-xl font-bold tracking-wider lg:text-2xl mb-4">
                {service.title}
              </h3>
              <div className="relative h-96 md:h-64 md:w-60 lg:h-80 lg:w-72 max-w-2xl lg:max-w-4xl">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover m-auto rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-6 gap-4 mx-auto md:mt-10">
          <Button href="/gallery" variant="outline" className="">
            Our Work
          </Button>
          <Button href="#contact" className="">
            Request Quote{" "}
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Services;
