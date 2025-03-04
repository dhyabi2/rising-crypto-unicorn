
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Twitter, MessageSquare, LineChart } from "lucide-react";
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

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/nanocurrency/nano-node" },
    { name: "X", icon: <Twitter size={20} />, url: "https://x.com/nano" },
    { name: "Reddit", icon: <MessageSquare size={20} />, url: "https://www.reddit.com/r/nanocurrency/" },
    { name: "CoinMarketCap", icon: <LineChart size={20} />, url: "https://coinmarketcap.com/currencies/nano/" }
  ];

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
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-charcoal hover:text-crypto-blue transition-colors duration-200"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
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
          
          {/* Social Links */}
          <div className="flex items-center space-x-6 my-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-crypto-charcoal hover:text-crypto-blue transition-colors duration-200"
                title={link.name}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex flex-col items-center">
                  {link.icon}
                  <span className="text-sm mt-1">{link.name}</span>
                </div>
              </a>
            ))}
          </div>
          
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
