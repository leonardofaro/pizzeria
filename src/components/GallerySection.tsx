import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroPizza from "@/assets/hero-pizza.jpg";
import interior from "@/assets/interior.jpg";
import chefDough from "@/assets/chef-dough.jpg";

const images = [
  { src: interior, alt: "Interno della pizzeria con atmosfera calda e accogliente", span: "md:col-span-2 md:row-span-2" },
  { src: heroPizza, alt: "Pizza Margherita appena sfornata", span: "" },
  { src: chefDough, alt: "Il nostro pizzaiolo prepara l'impasto", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-24 md:py-36 section-padding bg-card overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Atmosfera</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Il Nostro <span className="italic font-medium">Mondo</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-6" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className={`${img.span} rounded-2xl overflow-hidden group cursor-pointer`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
