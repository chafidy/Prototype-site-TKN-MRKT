
import { Button } from "@/components/ui/button";

const SeoPitch = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/13f99bbc-a98e-4360-a953-d8fbb228508c.png" 
              alt="TEKNET GROUP - Accompagnement des entreprises" 
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#575756] leading-tight">
              <span className="text-[#e30613] font-black">TEKNET GROUP</span> est le premier intégrateur de solutions certifié <span className="text-[#e30613]">ISO 9001:2015</span> à Madagascar
            </h2>
            
            <p className="text-lg text-[#575756] leading-relaxed">
              Nous accompagnons les entreprises et institutions dans la sécurisation de leurs systèmes d'information, 
              la gestion des accès, la sûreté physique et la formation numérique.
            </p>
            
            <Button 
              variant="outline" 
              className="border-[#e30613] text-[#e30613] hover:bg-[#e30613] hover:text-white px-6 py-3 font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Prenez contact avec nos experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoPitch;
