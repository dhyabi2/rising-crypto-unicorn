import React from 'react';
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
const Hero = () => {
  return <section className="relative pt-20 pb-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-crypto-blue/5 rounded-full blur-3xl animate-pulse-subtle -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-crypto-gold/5 rounded-full blur-3xl animate-pulse-subtle delay-700 -z-10" />
      
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Column: Text Content */}
            <div className="w-full md:w-1/2 space-y-6 animate-slide-up">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                <TrendingUp className="w-4 h-4 text-crypto-blue mr-2" />
                <span className="text-sm font-medium text-crypto-charcoal">Eco-friendly & Sustainable</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-crypto-charcoal tracking-tight">
                <span className="text-crypto-blue">Nano (XNO)</span>: The Future of Digital Money
              </h1>
              
              <p className="text-lg text-crypto-charcoal/80 max-w-xl">
                Instant, feeless, and eco-friendly transactions. Discover the cryptocurrency that uses minimal energy while delivering maximum performance.
              </p>
              
              <div className="dir-rtl mt-2 mb-6 text-xl text-crypto-charcoal/90 font-arabic font-medium">
                This currency continues to rise above the largest currencies despite Trump not mentioning it, but it has excelled in growth
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-crypto-blue hover:bg-crypto-blue/90 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-blue-300/20 transition-all hover:shadow-xl hover:shadow-blue-300/30" onClick={() => window.open("https://hub.nano.org/trading", "_blank")}>
                  Get Nano
                </Button>
                <Button variant="outline" className="border-crypto-blue text-crypto-blue hover:bg-crypto-blue/5 rounded-full px-8 py-6 text-lg font-medium transition-all" onClick={() => window.open("https://nano.org", "_blank")}>
                  Learn More
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Right Column: Coin Visualization */}
            <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-crypto-gold to-crypto-light-gold rounded-full blur-xl opacity-20 animate-pulse-subtle" />
                <div className={cn("w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center", "bg-gradient-to-br from-crypto-blue to-blue-400", "shadow-2xl shadow-crypto-blue/20", "animate-float")}>
                  <div className="text-white text-6xl md:text-7xl font-bold">Ӿ</div>
                </div>
                
                {/* Performance indicator */}
                <div className="absolute -bottom-4 right-0 bg-white py-2 px-4 rounded-lg shadow-lg animate-slide-in-right">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-medium text-crypto-charcoal">Eco-friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;