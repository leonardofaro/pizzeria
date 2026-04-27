import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const pizzas: MenuItem[] = [
  { name: "Margherita", description: "Pomodoro San Marzano DOP, mozzarella di bufala, basilico fresco, olio EVO", price: "€9", tag: "Classica" },
  { name: "Diavola", description: "Pomodoro, fior di latte, salame piccante calabrese, peperoncino fresco", price: "€11" },
  { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, parmigiano reggiano 36 mesi, provola affumicata", price: "€12" },
  { name: "Vesuvio Speciale", description: "Crema di friarielli, salsiccia artigianale, provola, noci tostate", price: "€14", tag: "Chef's Pick" },
  { name: "Burrata e Crudo", description: "Pomodorini datterini, burrata pugliese, prosciutto crudo di Parma 24 mesi, rucola", price: "€15" },
  { name: "Marinara", description: "Pomodoro San Marzano, aglio, origano, olio extra vergine d'oliva", price: "€7", tag: "Vegana" },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="py-24 md:py-36 bg-foreground" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Le Nostre Pizze</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Il Menu
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {pizzas.map((pizza, i) => (
            <motion.div
              key={pizza.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-b border-primary-foreground/10 py-7 md:py-8 flex items-start justify-between gap-4 hover:border-primary/40 transition-colors duration-500"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground group-hover:text-primary transition-colors duration-300">
                    {pizza.name}
                  </h3>
                  {pizza.tag && (
                    <span className="text-[10px] uppercase tracking-widest font-body bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
                      {pizza.tag}
                    </span>
                  )}
                </div>
                <p className="font-body text-sm md:text-base text-primary-foreground/50 max-w-lg">
                  {pizza.description}
                </p>
              </div>
              <p className="font-display text-2xl md:text-3xl font-bold text-primary shrink-0">
                {pizza.price}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-body text-primary-foreground/40 text-sm mb-6">Antipasti, contorni, dolci e piatti del giorno sempre diversi</p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 font-body text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Menù Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
