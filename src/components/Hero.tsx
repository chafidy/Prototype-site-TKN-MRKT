
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - extends to full viewport height including behind navbar */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('/lovable-uploads/47604a22-08fa-4080-bee4-eb51b5e26b7f.png')`,
          filter: 'blur(2px)',
          top: '0', // Start from the very top
          left: '0',
          right: '0',
          bottom: '0',
          height: '100vh', // Full viewport height
          width: '100vw'   // Full viewport width
        }} 
      />
      
      {/* Overlay */}
      <div 
        className="absolute bg-black/40" 
        style={{
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          height: '100vh',
          width: '100vw'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="block">Des solutions technologiques intégrées pour accélérer votre</span>
          <span className="block">performance opérationnelle</span>
        </h1>
        
        <Button 
          className="bg-[#e30613] hover:bg-[#c10511] text-white text-lg px-8 py-6 rounded-md font-semibold transition-all duration-300 transform hover:scale-105" 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Demander un diagnostic gratuit
        </Button>
      </div>
    </section>
  );
};

export default Hero;
