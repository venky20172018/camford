
import { School } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <School className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Pine Valley Elementary</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-green-200 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('academics')}
              className="hover:text-green-200 transition-colors"
            >
              Academics
            </button>
            <button 
              onClick={() => scrollToSection('activities')}
              className="hover:text-green-200 transition-colors"
            >
              Activities
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="hover:text-green-200 transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-green-200 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
