
import React from 'react';
import { Zap, Leaf, Scale, ArrowUpDown } from 'lucide-react';
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
            <span className="text-sm font-medium text-crypto-charcoal">Technical Advantages</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-4">The Secret Behind Nano's Success</h2>
          <p className="text-lg text-crypto-charcoal/70 max-w-2xl mx-auto">
            Understand the fundamental technological innovations that make Nano one of the most efficient cryptocurrencies in the world.
          </p>
          <p className="dir-rtl mt-4 text-lg text-crypto-charcoal/80 font-arabic">
            الاسباب الخفية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ReasonCard 
            number="01"
            icon={<Leaf size={28} />}
            title="Block-Lattice Architecture"
            description="Unlike blockchain, Nano uses a block-lattice structure where each account has its own blockchain, eliminating mining and drastically reducing energy consumption."
            arabicText="لا يوجد بها تعدين"
            delay="0ms"
          />
          <ReasonCard 
            number="02"
            icon={<Zap size={28} />}
            title="Open Representative Voting"
            description="Nano uses a lightweight consensus mechanism called ORV (Open Representative Voting) instead of mining or staking, enabling instant transaction confirmations."
            arabicText="اي انه لا ممكن الحصول ع عملات غيرها بالسوق"
            delay="100ms"
          />
          <ReasonCard 
            number="03"
            icon={<Scale size={28} />}
            title="Pre-Mined Supply"
            description="All 133.2 million Nano coins are already in circulation with no mining, inflation, or additional issuance, ensuring long-term value preservation."
            arabicText="ولا تتضخم"
            delay="200ms"
          />
          <ReasonCard 
            number="04"
            icon={<ArrowUpDown size={28} />}
            title="Asynchronous Processing"
            description="Transactions are processed independently and asynchronously, allowing the network to scale efficiently while maintaining high throughput and low latency."
            delay="300ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Reasons;
