import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* 🌫️ Background Image floutée */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
        style={{
          backgroundImage: `url('/lovable-uploads/db5ec88b-6c73-4bc4-90e3-abf22f25b514.png')`,
          filter: 'blur(3px)', // 👈 flou de 8 pixels
          opacity: 0.8
        }} 
      />

      {/* 🧱 Contenu au-dessus de l'image */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Vous cherchez une solution fiable, un partenaire technologique de confiance 
          <span className="block text-[#e30613]">ou un projet à sécuriser ?</span>

        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Button className="bg-[#e30613] hover:bg-[#c10511] text-white text-lg px-8 py-6 rounded-md font-semibold transition-all duration-300 transform hover:scale-105">
            Contacter TEKNET GROUP
          </Button>
          <Button variant="outline" className="border-2 border-white text-gray-800 bg-white hover:bg-[#e30613] hover:text-white hover:border-[#e30613] text-lg px-8 py-6 rounded-md font-semibold transition-all duration-300">
            Demander un diagnostic gratuit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
