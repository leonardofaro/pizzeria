import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ovenImg from "@/assets/oven.png";
import interiorImg from "@/assets/interior.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-36 section-padding overflow-hidden" ref={ref}>
      {/* Philosophy quote band */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 max-w-3xl mx-auto"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">La Nostra Filosofia</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
          Passione Italiana in ogni Morso
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
        <p className="font-display text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
          "Dall'essenza di Napoli, culla della pizza più celebre al mondo, con passione e maestria artigianale"
        </p>
      </motion.div>

      {/* Two-column story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Images stacked/overlapping */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={interiorImg}
              alt="Interno della Pizzeria Vesuvio"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-8 -right-4 md:right-4 w-40 md:w-52"
          >
            <img
              src={ovenImg}
              alt="Forno a legna tradizionale"
              loading="lazy"
              width={800}
              height={800}
              className="w-full drop-shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Chi Siamo</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Una tradizione <br />
            <span className="italic font-medium text-primary">di famiglia</span>
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Nel cuore di Napoli, la famiglia Esposito ha acceso per la prima volta il forno a legna nel 1987.
              Da tre generazioni, custodiamo i segreti dell'impasto perfetto: 72 ore di lievitazione,
              farina di tipo 00, e l'amore incondizionato per l'autenticità.
            </p>
            <p>
              A Vesuvio non serviamo solo pietanze, ma <strong className="text-foreground">emozioni cucinate a regola d'arte</strong>. Non è fast food. È <em>good food</em>.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
            {[
              { number: "37", label: "Anni di passione" },
              { number: "3", label: "Generazioni" },
              { number: "∞", label: "Amore per la pizza" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
