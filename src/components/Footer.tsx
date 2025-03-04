
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-crypto-charcoal mb-4">
              <span className="text-crypto-blue">Know</span>XNO
            </div>
            <p className="text-crypto-charcoal/70 max-w-md mb-6">
              A revolutionary cryptocurrency with unique properties that drive unprecedented growth and market performance.
            </p>
            <p className="dir-rtl text-crypto-charcoal/80 font-arabic">
              This currency continues to rise above the largest currencies
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-crypto-charcoal mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://nano.org/en" className="text-crypto-charcoal/70 hover:text-crypto-blue transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="https://nano.org/en/sustainability" className="text-crypto-charcoal/70 hover:text-crypto-blue transition-colors">
                  Reasons
                </a>
              </li>
              <li>
                <a href="https://hub.nano.org/trading" className="text-crypto-charcoal/70 hover:text-crypto-blue transition-colors">
                  Buy Now
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-crypto-charcoal mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-crypto-charcoal/70 hover:text-crypto-blue transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-crypto-charcoal/70 hover:text-crypto-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/risk" className="text-crypto-charcoal/70 hover:text-crypto-blue transition-colors">
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={cn(
          "pt-8 mt-8 border-t border-gray-100",
          "flex flex-col md:flex-row justify-between items-center"
        )}>
          <p className="text-crypto-charcoal/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KnowXNO. All rights reserved.
          </p>
          <div className="text-crypto-charcoal/60 text-sm">
            <p>This is a demonstration website. Not financial advice.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
