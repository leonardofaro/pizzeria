import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-36 section-padding" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Contatti</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Vieni a trovarci
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="space-y-8">
            {[
              {
                icon: MapPin,
                title: "Indirizzo",
                lines: ["Via Toledo 156", "80134 Napoli, Italia"],
              },
              {
                icon: Phone,
                title: "Telefono",
                lines: ["+39 081 234 5678"],
              },
              {
                icon: Clock,
                title: "Orari",
                lines: ["Mar – Dom: 12:00 – 15:00 / 18:30 – 23:30", "Lunedì: Chiuso"],
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1 font-semibold">{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="font-body text-foreground text-base">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — reservation card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center"
        >
          <div className="bg-foreground rounded-3xl p-10 md:p-14 w-full">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prenota il tuo tavolo
            </h3>
            <div className="w-12 h-1 bg-primary rounded-full mb-6" />
            <p className="font-body text-primary-foreground/60 mb-8 text-base leading-relaxed">
              Per gruppi di 6 o più persone, consigliamo la prenotazione.
              Chiamaci o scrivici per riservare la tua serata perfetta.
            </p>
            <a
              href="tel:+390812345678"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 font-body text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Chiama Ora
            </a>
            <div className="mt-8 pt-8 border-t border-primary-foreground/10">
              <p className="font-body text-primary-foreground/40 text-sm">
                Oppure scrivici a{" "}
                <a href="mailto:info@pizzeriavesuvio.it" className="text-primary hover:underline">
                  info@pizzeriavesuvio.it
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
