import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Timer, Wheat, Award } from "lucide-react";

const features = [
  {
    icon: Wheat,
    title: "Impasto Artigianale",
    description: "Farina di tipo 00 selezionata, lievito madre e acqua purissima per un impasto inimitabile.",
  },
  {
    icon: Timer,
    title: "72h di Lievitazione",
    description: "L'impasto riposa a lungo in ambiente controllato per una pizza leggera e super digeribile.",
  },
  {
    icon: Flame,
    title: "Forno a Legna 450°",
    description: "Cottura rapida a temperature altissime per un cornicione soffice e leopardato.",
  },
  {
    icon: Award,
    title: "Ingredienti DOP",
    description: "Solo materie prime certificate: mozzarella di bufala, pomodoro San Marzano, basilico fresco.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 bg-card" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
