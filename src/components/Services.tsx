
const Services = () => {
  const services = [
    {
      image: "/lovable-uploads/1c9797ac-cae2-4703-b72c-307eecf237f4.png",
      title: "Études & Constat",
      description: "Méthodologie claire, de l'audit à la supervision pour une analyse complète de vos besoins."
    },
    {
      image: "/lovable-uploads/1f3cc2fb-557f-40f1-9817-e25179b918ba.png",
      title: "Déploiement des Solutions",
      description: "Solutions couvrant sécurité IT, sûreté, identification et formation adaptées à votre contexte."
    },
    {
      image: "/lovable-uploads/bd111e48-2009-44ca-ae61-0e3a290f75cc.png",
      title: "Accompagnement & Amélioration",
      description: "Approche collaborative orientée performance pour un suivi personnalisé et continu."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#575756] mb-4">
          Nos <span className="text-[#e30613]">Métiers</span>
        </h2>
        <p className="text-xl text-center text-[#9b9b9b] mb-16 max-w-3xl mx-auto">
          Une approche méthodique pour transformer vos défis en opportunités
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-lg border border-[#dadada] hover:border-[#e30613] transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#575756] mb-4">
                {service.title}
              </h3>
              <p className="text-[#9b9b9b] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
