const Footer = () => {
  return (
    <footer className="bg-foreground py-10 section-padding">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <a href="#" className="font-display text-xl font-bold text-primary">
          Vesuvio
        </a>
        <p className="font-body text-xs text-primary-foreground/30 uppercase tracking-wider">
          © {new Date().getFullYear()} Pizzeria Vesuvio — Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
