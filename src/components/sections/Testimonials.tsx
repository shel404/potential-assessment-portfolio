import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

interface Testimonial {
  id: number;
  image: string;
  content: string;
  name: string;
  position: string;
}

const Testimonials: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: "/src/assets/images/testimonials/testimonial1.png",
      content:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Name",
      position: "CEO",
    },
    {
      id: 2,
      image: "/src/assets/images/testimonials/testimonial2.png",
      content:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Name",
      position: "CEO",
    },
    {
      id: 3,
      image: "/src/assets/images/testimonials/testimonial1.png",
      content:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Name",
      position: "CEO",
    },
    {
      id: 4,
      image: "/src/assets/images/testimonials/testimonial2.png",
      content:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Name",
      position: "CEO",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (activeSlide + 1) % testimonials.length;
      setDirection("right");
      setActiveSlide(nextSlide);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const handleSlideChange = (index: number) => {
    setDirection(index > activeSlide ? "right" : "left");
    setActiveSlide(index);
  };

  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === "right" ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -500 : 500,
      opacity: 0,
      position: "absolute",
    }),
  } satisfies Variants;

  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-clip"
    >
      <SectionHeader
        title="Testimonials"
        description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />

      <div className="relative mt-24">
        <div className="relative h-[450px] sm:h-[350px]">
          <AnimatePresence initial={false} mode="sync" custom={direction}>
            <motion.div
              key={activeSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 500, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-gray-50 p-12 rounded-lg max-w-4xl mx-auto left-0 right-0 absolute w-full"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-4">
                <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start">
                  <img
                    src={testimonials[activeSlide].image}
                    alt={testimonials[activeSlide].name}
                    className="w-24 h-24 sm:w-48 sm:h-48 rounded-full object-contain mb-6 sm:mb-0"
                  />
                </div>
                <div className="w-full ">
                  <div className="mb-6">
                    <p className="text-gray-700 text-lg relative">
                      <span className="absolute -left-2 -top-6 text-orange-500 text-5xl leading-[0] italic rotate-180">
                        "
                      </span>
                      {testimonials[activeSlide].content}
                      <span className="align-bottom text-orange-500 text-5xl leading-[0] italic">
                        "
                      </span>
                    </p>
                  </div>
                  <h4 className="text-xl font-semibold text-black-950">
                    {testimonials[activeSlide].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeSlide].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="hidden sm:flex justify-center gap-2 ">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-12 h-4 rounded-full transition-colors ${
                activeSlide === index ? "bg-orange-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
