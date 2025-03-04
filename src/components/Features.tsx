
import React from 'react';
import { Wallet, TrendingUp, Shield, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay,
  arabicText
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
  arabicText?: string;
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
    {arabicText && (
      <p className="dir-rtl text-crypto-charcoal/80 font-arabic">{arabicText}</p>
    )}
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
          <h2 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-4">Why This Currency Is Different</h2>
          <p className="text-lg text-crypto-charcoal/70 max-w-2xl mx-auto">
            Discover the unique properties that set this cryptocurrency apart from the market and drive its exceptional performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <FeatureCard 
            icon={<Shield size={24} />}
            title="No Mining Required"
            description="Unlike other cryptocurrencies, this one doesn't rely on mining, making it more environmentally friendly."
            arabicText="لا يوجد بها تعدين اي انه لا ممكن الحصول ع عملات غيرها بالسوق"
            delay="0ms"
          />
          <FeatureCard 
            icon={<TrendingUp size={24} />}
            title="Consistent Growth"
            description="Shows remarkable stability and growth even without celebrity endorsements or market manipulation."
            delay="100ms"
          />
          <FeatureCard 
            icon={<Coins size={24} />}
            title="Limited Supply"
            description="Fixed supply means no inflation risk, preserving and increasing value over time."
            arabicText="ولا تتضخم"
            delay="200ms"
          />
          <FeatureCard 
            icon={<Wallet size={24} />}
            title="Market Exclusivity"
            description="Cannot be replaced by other currencies in the market, ensuring its long-term viability."
            delay="300ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
