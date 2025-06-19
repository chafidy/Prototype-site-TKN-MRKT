
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const navbarHeight = 80; // hauteur approximative de la navbar
        
        // La navbar est considérée comme étant sur hero si le top de hero est visible ou proche
        const isOnHero = heroRect.bottom > navbarHeight;
        setIsScrolled(!isOnHero);
      }
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Nos Métiers', id: 'services' },
    { label: 'Domaines d\'Intervention', id: 'domains' },
    { label: 'Notre Processus', id: 'process' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="flex items-center focus:outline-none"
            >
              <img
              src="/lovable-uploads/3664ed48-a9ad-467c-8611-8542dfa28799.png" 
              alt="TEKNET GROUP" 
              className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'} w-auto`}
            />
           </button>
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-[#575756] hover:text-[#e30613]'
                    : 'text-white hover:text-[#e30613]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#e30613] text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Devis Gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#575756] hover:text-[#e30613]'
                  : 'text-white hover:text-[#e30613]'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-[#575756] hover:text-[#e30613] hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-[#e30613] text-white rounded-md hover:bg-red-700 transition-colors duration-200 mt-2"
              >
                Devis Gratuit
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
