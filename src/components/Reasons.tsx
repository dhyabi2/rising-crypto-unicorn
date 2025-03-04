
import React from 'react';
import { Shield, TrendingUp, DollarSign, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const ReasonCard = ({ 
  number, 
  title, 
  description, 
  icon,
  delay,
  arabicText
}: { 
  number: string;
  title: string; 
  description: string;
  icon: React.ReactNode;
  delay: string;
  arabicText?: string;
}) => (
  <div 
    className={cn(
      "relative glass-card rounded-2xl p-8 transition-all duration-300",
      "hover:shadow-xl hover:translate-y-[-4px]",
      "animate-slide-up",
    )}
    style={{ animationDelay: delay }}
  >
    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-crypto-blue flex items-center justify-center text-white font-bold text-lg shadow-lg">
      {number}
    </div>
    <div className="mb-6 text-crypto-blue">{icon}</div>
    <h3 className="text-xl font-semibold text-crypto-charcoal mb-3">{title}</h3>
    <p className="text-crypto-charcoal/70 mb-4">{description}</p>
    {arabicText && (
      <p className="dir-rtl text-crypto-charcoal/80 font-arabic">{arabicText}</p>
    )}
  </div>
);

const Reasons = () => {
  return (
    <section id="reasons" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-crypto-gold/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-sm font-medium text-crypto-charcoal">Hidden Reasons</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-4">The Secret Behind Its Success</h2>
          <p className="text-lg text-crypto-charcoal/70 max-w-2xl mx-auto">
            Understand the fundamental factors that drive this cryptocurrency's exceptional performance in the market.
          </p>
          <p className="dir-rtl mt-4 text-lg text-crypto-charcoal/80 font-arabic">
            الاسباب الخفية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ReasonCard 
            number="01"
            icon={<Shield size={28} />}
            title="No Mining Structure"
            description="Unlike traditional cryptocurrencies, this one doesn't require energy-intensive mining operations, making it more sustainable and environmentally friendly."
            arabicText="لا يوجد بها تعدين"
            delay="0ms"
          />
          <ReasonCard 
            number="02"
            icon={<TrendingUp size={28} />}
            title="Market Exclusivity"
            description="Its unique structure ensures it cannot be replaced by other currencies in the market, creating a natural scarcity that drives value."
            arabicText="اي انه لا ممكن الحصول ع عملات غيرها بالسوق"
            delay="100ms"
          />
          <ReasonCard 
            number="03"
            icon={<DollarSign size={28} />}
            title="Inflation Resistant"
            description="The currency is designed to be immune to inflation, preserving its value over time even as fiat currencies depreciate."
            arabicText="ولا تتضخم"
            delay="200ms"
          />
          <ReasonCard 
            number="04"
            icon={<Lock size={28} />}
            title="Value-Driven Growth"
            description="Instead of relying on hype or endorsements, this cryptocurrency grows based on its inherent utility and technological advantages."
            delay="300ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Reasons;
