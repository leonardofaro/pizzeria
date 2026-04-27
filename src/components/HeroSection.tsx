import { motion } from "framer-motion";
import pizzaCutout from "@/assets/pizza-hero-cutout.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background pt-24 overflow-hidden">
      <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)]">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 py-12 lg:py-0"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-5"
          >
            Ristorante e Pizzeria Napoletana Autentica
          </motion.p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.95] mb-6">
            <span className="text-primary">VESUVIO</span>
            <br />
            <span className="text-foreground/90">Pizza Napoletana</span>
          </h1>

          {/* Red divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-primary rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-md mb-8 leading-relaxed"
          >
            <strong className="text-foreground">Vivi un'esperienza unica:</strong> ogni nostra pizza è un viaggio nei sapori di Napoli, dove <strong className="text-foreground">tradizione e qualità</strong> si incontrano in un'armonia perfetta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="bg-primary text-primary-foreground px-8 py-3.5 font-body text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Scopri il Menu
            </a>
            <a
              href="#contact"
              className="border-2 border-foreground/20 text-foreground px-8 py-3.5 font-body text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              Prenota un Tavolo
            </a>
          </motion.div>
        </motion.div>

        {/* Pizza image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <motion.img
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            src={pizzaCutout}
            alt="Pizza Margherita napoletana autentica"
            width={1024}
            height={1024}
            className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl drop-shadow-2xl"
          />
          {/* Decorative circle behind pizza */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[80%] aspect-square rounded-full bg-secondary" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
