
import { Clock, Shield, Users, Settings } from "lucide-react";

const Footer = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "Plus de 20 ans",
      subtitle: "d'expérience"
    },
    {
      icon: Settings,
      title: "Plus de 700 projets",
      subtitle: "réalisés"
    },
    {
      icon: Users,
      title: "85% clients",
      subtitle: "entreprises privées"
    },
    {
      icon: Shield,
      title: "Support technique",
      subtitle: "local et réactif"
    }
  ];

  const partnerLogos = [
    {
      src: "/lovable-uploads/95ab1f03-c864-4f05-ae14-a5c42af50e03.png",
      alt: "Evolis"
    },
    {
      src: "/lovable-uploads/4db9e929-eec8-4081-8a5c-4e046eaddfff.png",
      alt: "Fujitsu"
    },
    {
      src: "/lovable-uploads/6b677b98-86eb-475f-b5ee-c526923e7332.png",
      alt: "HikVision"
    },
    {
      src: "/lovable-uploads/dc5a7d2e-1f87-4857-ad0b-0f58350dd25a.png",
      alt: "HP"
    },
    {
      src: "/lovable-uploads/11573a58-241b-4ccf-b937-a4d9505d8a17.png",
      alt: "Hewlett Packard Enterprise"
    },
    {
      src: "/lovable-uploads/36f6dc51-1e80-46bd-9d46-0adb8e776129.png",
      alt: "Lenovo"
    },
    {
      src: "/lovable-uploads/f50c1a52-d1a3-4ab6-9ed1-f2faf26a08d2.png",
      alt: "Logitech"
    },
    {
      src: "/lovable-uploads/c7afda62-e1f6-48bf-ad9b-5a7832be07c0.png",
      alt: "Sophos"
    },
    {
      src: "/lovable-uploads/46148213-e48f-4699-b9b0-7d0621c6cc41.png",
      alt: "Zebra"
    },
    {
      src: "/lovable-uploads/30b8da5e-aeaf-4bde-9451-2992a5ffeb30.png",
      alt: "zeDoc"
    }
  ];

  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Guarantees */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {guarantees.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#e30613] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#575756]">
                {item.title}
              </h3>
              <p className="text-[#9b9b9b]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Partners Carousel */}
        <div className="border-t border-[#dadada] pt-12">
          <h3 className="text-2xl font-bold text-center text-[#575756] mb-8">
            Nos <span className="text-[#e30613]">Partenaires</span>
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <img 
                    src={partner.src} 
                    alt={partner.alt}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-[#dadada]">
          <p className="text-[#9b9b9b]">
            © 2025 TEKNET GROUP MADAGASCAR. Tous droits réservés. 
            <span className="block mt-2">
              Certifié ISO 9001:2015 - Premier intégrateur de solutions technologiques à Madagascar
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
