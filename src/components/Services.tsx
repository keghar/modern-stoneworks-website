import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import ImageSlider from "./ImageSlider";

function Services() {
  return (
    <Container className="flex flex-col justify-center pb-16 text-center lg:pt-32 gap-10 max-w-screen-xl">
      <h2 className="text-3xl">
        Experience craftsmanship at its finest with our granite countertop
        installation services.
      </h2>

      <p>
        Our skilled team ensures precision in measuring, cutting, and fitting to
        provide a seamless and stunning addition to your kitchen or bathroom.
        Elevate your space with the timeless beauty and durability of our
        premium granite countertops.
      </p>

      <ImageSlider />

      <h3 className="text-3xl">
        We pride ourselves on sourcing only the finest quality granite for our
        projects
      </h3>
      <p>
        . We meticulously select granite that not only embodies exquisite
        natural beauty but also boasts exceptional durability and longevity. Our
        collection features a diverse range of granite types, each possessing
        unique colors, patterns, and veining, allowing our clients to find the
        perfect match for their design preferences.
      </p>
      <div>Grainte brand and images from supplier</div>
      <Button href="#contact" className="mx-auto">
        Request Quote
      </Button>
    </Container>
  );
}

export default Services;
