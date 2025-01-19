export const name = "Carousel";

export const importDocs = `
import {
  Carousel,
  CarouselSlide,
  CarouselNavigation,
} from "@/components/ui/carousel";
`;

export const usageDocs = `
<Carousel className="w-full">
  <CarouselSlide>
    <img src="/images/slide1.jpg" alt="Slide 1" className="w-full h-auto" />
  </CarouselSlide>
  <CarouselSlide>
    <img src="/images/slide2.jpg" alt="Slide 2" className="w-full h-auto" />
  </CarouselSlide>
  <CarouselSlide>
    <img src="/images/slide3.jpg" alt="Slide 3" className="w-full h-auto" />
  </CarouselSlide>
  <CarouselNavigation />
</Carousel>
`;
