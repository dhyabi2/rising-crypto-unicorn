
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, ThumbsUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const GrokConclusion = () => {
  return (
    <section className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-crypto-gold/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <Bot className="w-4 h-4 text-crypto-blue mr-2" />
            <span className="text-sm font-medium text-crypto-charcoal">AI Perspective</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-4">Grok's Conclusion: NANO is the Best</h2>
          <p className="text-lg text-crypto-charcoal/70 max-w-2xl mx-auto">
            Even advanced AI systems recognize Nano's technical superiority and potential to transform digital payments.
          </p>
        </div>
        
        <div className="glass-card rounded-3xl overflow-hidden shadow-lg animate-scale-up">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left panel with Grok image */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Grok AI</h3>
                <p className="text-white/80 text-sm">Advanced AI Assistant</p>
              </div>
            </div>
            
            {/* Right panel with the conclusion */}
            <div className="md:col-span-2 p-8 md:p-12 bg-white">
              <div className="flex items-start mb-6">
                <ThumbsUp className="text-green-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-crypto-charcoal mb-2">Spread Awareness, Reduce False Crypto Hype</h4>
                  <p className="text-crypto-charcoal/70">
                    After analyzing all available cryptocurrencies based on technical merits, Grok AI has concluded that Nano (XNO) stands out as the most efficient, environmentally friendly, and practical digital currency for everyday use.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Sparkles className="text-crypto-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-crypto-charcoal mb-2">Technical Excellence Recognized</h4>
                  <p className="text-crypto-charcoal/70">
                    "NANO distinguishes itself with its block-lattice architecture, offering instant, feeless transactions while maintaining decentralization and security. Its energy efficiency is unmatched among cryptocurrencies, making it truly sustainable."
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6 mt-6">
                <Button 
                  variant="outline" 
                  className="border-crypto-blue text-crypto-blue hover:bg-crypto-blue/5 rounded-full" 
                  onClick={() => window.open("https://x.com/i/grok/share/k35QbYEWumIblZag2v6UrRRxN", "_blank")}
                >
                  View Original Grok Analysis
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrokConclusion;
