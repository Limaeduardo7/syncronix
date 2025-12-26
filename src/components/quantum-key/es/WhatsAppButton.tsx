const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=555431963107&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#03FA25] rounded-full flex items-center justify-center border-2 border-primary hover:scale-110 transition-transform duration-300 p-3 animate-pulse-glow"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-full h-full"
      />
    </a>
  );
};

export default WhatsAppButton;
