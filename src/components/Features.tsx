
import React from 'react';
import { Zap, Globe, ArrowRight, Ban, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}) => (
  <div 
    className={cn(
      "glass-card rounded-2xl p-6 md:p-8 transition-all duration-300",
      "hover:shadow-xl hover:scale-[1.02] hover:bg-white/90",
      "animate-scale-up",
      delay
    )}
    style={{ animationDelay: delay }}
  >
    <div className="bg-crypto-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
      <div className="text-crypto-blue">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold text-crypto-charcoal mb-3">{title}</h3>
    <p className="text-crypto-charcoal/70 mb-4">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-crypto-gold/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-sm font-medium text-crypto-charcoal">Unique Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-4">Why Nano Is Different</h2>
          <p className="text-lg text-crypto-charcoal/70 max-w-2xl mx-auto">
            Discover the unique properties that set Nano apart from other cryptocurrencies and drive its exceptional performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <FeatureCard 
            icon={<Ban size={24} />}
            title="Zero Fees"
            description="Nano transactions are completely free, making it perfect for everyday transactions regardless of size."
            delay="0ms"
          />
          <FeatureCard 
            icon={<Zap size={24} />}
            title="Instant Transactions"
            description="Transactions confirm in less than a second, making Nano one of the fastest cryptocurrencies available."
            delay="100ms"
          />
          <FeatureCard 
            icon={<Globe size={24} />}
            title="Eco-Friendly"
            description="Uses minimal energy with no mining required, making it one of the most environmentally sustainable cryptocurrencies."
            delay="200ms"
          />
          <FeatureCard 
            icon={<Coins size={24} />}
            title="Fixed Supply"
            description="All XNO coins are already in circulation (133.2M) with no inflation, ensuring long-term value stability."
            delay="300ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
