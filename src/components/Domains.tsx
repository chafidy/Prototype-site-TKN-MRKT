
import { Shield, CreditCard, Camera, GraduationCap, Settings } from "lucide-react";

const Domains = () => {
  const domains = [
    {
      icon: Shield,
      image: "/lovable-uploads/0f6df1de-755b-4461-b212-009b367cf9a8.png",
      title: "Systèmes d'information & cybersécurité",
      color: "from-[#29c4f3] to-[#1e90ff]",
      hoverColor: "hover:border-[#1e90ff]"
    },
    {
      icon: CreditCard,
      image: "/lovable-uploads/f49c6138-5fd2-4375-9bec-956876822b41.png",
      title: "Badges, identification & contrôle d'accès",
      color: "from-[#f16925] to-[#ff6347]",
      hoverColor: "hover:border-[#e91e63]"
    },
    {
      icon: Settings,
      image: "/lovable-uploads/54bcffcc-a3f7-4a5b-8bfb-55867fe266cd.png",
      title: "TEKNET GROUP Made",
      color: "from-[#575756] to-[#2f2f2f]",
      hoverColor: "hover:border-[#e30613]"
    },
    {
      icon: Camera,
      image: "/lovable-uploads/f0e6fc28-286e-42b9-a6fe-025dc3c9b863.png",
      title: "Sûreté électronique & sécurité physique",
      color: "from-[#b9d531] to-[#9acd32]",
      hoverColor: "hover:border-[#ff5722]"
    },
    {
      icon: GraduationCap,
      image: "/lovable-uploads/9b8b9150-2234-4027-a827-3a971835ed29.png",
      title: "Formations professionnelles certifiées TOSA",
      color: "from-[#e30613] to-[#dc143c]",
      hoverColor: "hover:border-[#29c4f3]"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Blur and Transparency */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-sm"
        style={{
          backgroundImage: `url('/lovable-uploads/2e44af3d-0952-4272-a339-ce7250050925.png')`
        }}
      />
      
      {/* Overlay for additional transparency control */}
      <div className="absolute inset-0 bg-gray-50/80" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#575756] mb-4">
          Domaines d'<span className="text-[#e30613]">Intervention</span>
        </h2>
        <p className="text-xl text-center text-[#9b9b9b] mb-16 max-w-3xl mx-auto">
          Expertise complète pour sécuriser et optimiser votre environnement technologique
        </p>
        
        <div className="grid grid-cols-5 gap-4">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br from-gray-100 to-gray-200 ${domain.hoverColor} hover:bg-gradient-to-br ${domain.color} p-6 rounded-lg border-2 border-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-xl h-48 flex flex-col items-center justify-center backdrop-blur-sm bg-white/90`}>
                <div className="w-28 h-28 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <img 
                    src={domain.image} 
                    alt={domain.title}
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold leading-tight text-center text-[#575756] group-hover:text-white transition-colors duration-300">
                  {domain.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
