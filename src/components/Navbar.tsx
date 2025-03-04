
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-crypto-charcoal">
            <span className="text-crypto-blue">Know</span>XNO
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="https://nano.org/en" className="text-crypto-charcoal hover:text-crypto-blue transition-colors duration-200">
            Features
          </a>
          <a href="https://nano.org/en/sustainability" className="text-crypto-charcoal hover:text-crypto-blue transition-colors duration-200">
            Reasons
          </a>
          <Button className="bg-crypto-blue hover:bg-crypto-blue/90 text-white rounded-full px-6" onClick={() => window.open("https://hub.nano.org/trading", "_blank")}>
            Buy Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-crypto-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-6">
          <a 
            href="https://nano.org/en" 
            className="text-xl text-crypto-charcoal hover:text-crypto-blue transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="https://nano.org/en/sustainability" 
            className="text-xl text-crypto-charcoal hover:text-crypto-blue transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Reasons
          </a>
          <Button 
            className="w-full bg-crypto-blue hover:bg-crypto-blue/90 text-white rounded-full px-6 mt-4"
            onClick={() => {
              setMobileMenuOpen(false);
              window.open("https://hub.nano.org/trading", "_blank");
            }}
          >
            Buy Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
