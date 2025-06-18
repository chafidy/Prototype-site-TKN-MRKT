
const Company = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#575756] leading-tight">
              <span className="text-[#e30613] font-black">TEKNET GROUP</span> - Votre partenaire technologique de confiance
            </h2>
            
            <p className="text-lg text-[#575756] leading-relaxed">
              TEKNET GROUP est un intégrateur de solutions technologiques opérant à l'intersection des TIC, 
              de la sécurité, de l'identification, de l'infrastructure IT et de la formation. 
              Nous vous aidons à anticiper les risques, optimiser vos opérations et améliorer votre visibilité.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/28851586-0183-4a7d-b886-d34b58a9d05a.png" 
              alt="TEKNET GROUP - Solutions technologiques" 
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
