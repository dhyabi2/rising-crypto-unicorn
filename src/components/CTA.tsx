import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-crypto-gold/10 to-crypto-blue/10 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            {/* Left side with gradient */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-crypto-blue to-blue-400 p-8 md:p-12 text-white flex items-center">
              <div className="animate-slide-up">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Nano Revolution</h3>
                <p className="text-white/90">
                  Experience the future of digital money with instant, feeless transactions and minimal environmental impact.
                </p>
              </div>
            </div>
            
            {/* Right side with call to action */}
            <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
              <div className="animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-bold text-crypto-charcoal mb-4">Ready to Use Nano?</h3>
                <p className="text-crypto-charcoal/70 mb-6">
                  Join millions of users worldwide who are already benefiting from Nano's instant, feeless transactions and sustainable approach to cryptocurrency.
                </p>
                <div className="dir-rtl mb-8 text-crypto-charcoal/80 font-arabic">
                  This currency continues to rise above major currencies and has no mining
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-crypto-blue hover:bg-crypto-blue/90 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                    Get Nano
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-crypto-charcoal text-crypto-charcoal hover:bg-crypto-charcoal/5 rounded-full px-8 py-6 text-lg font-medium">
                    View Exchanges
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
