
import React from 'react';
import { Zap, Leaf, Scale, ArrowUpDown, Shield, Globe, Clock, Cpu, BarChart2, Sparkles, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const ReasonCard = ({ 
  number, 
  title, 
  description, 
  icon,
  delay
}: { 
  number: string;
  title: string; 
  description: string;
  icon: React.ReactNode;
  delay: string;
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReasonCard 
            number="01"
            icon={<BarChart2 size={28} />}
            title="Scalability"
            description="Nano's protocol is built for high scalability, enabling fast transaction processing and high throughput. Unlike many cryptocurrencies that face network congestion during bull markets, Nano's design can handle increased demand efficiently."
            delay="0ms"
          />
          <ReasonCard 
            number="02"
            icon={<Leaf size={28} />}
            title="Energy Efficiency"
            description="Nano operates using an energy-efficient consensus mechanism called Open Representative Voting (ORV), which requires minimal computational power compared to proof-of-work systems like Bitcoin."
            delay="100ms"
          />
          <ReasonCard 
            number="03"
            icon={<DollarSign size={28} />}
            title="Feeless Transactions"
            description="Nano offers instant transactions with no fees, a major advantage over cryptocurrencies that charge for transfers. This feature makes Nano ideal for everyday purchases and microtransactions."
            delay="200ms"
          />
          <ReasonCard 
            number="04"
            icon={<ArrowUpDown size={28} />}
            title="Price Growth Potential"
            description="Price predictions suggest significant upside for Nano. Estimates include reaching $3.33 by 2025, while others predict $1.48 in 2025, with further gains expected later. These forecasts indicate strong growth potential."
            delay="300ms"
          />
          <ReasonCard 
            number="05"
            icon={<Sparkles size={28} />}
            title="Unique Use Cases"
            description="Nano is designed as a lightweight, accessible digital payment system, perfect for use cases like digital cash and low-cost remittances. Its instant, feeless transactions could make it a go-to choice for cross-border payments."
            delay="400ms"
          />
          <ReasonCard 
            number="06"
            icon={<Globe size={28} />}
            title="Alignment with Market Trends"
            description="The crypto market is seeing rising interest in diverse sectors. Nano's unique utility and efficiency could catch the eye of investors looking for fundamentally strong projects amidst speculative trends."
            delay="500ms"
          />
          <ReasonCard 
            number="07"
            icon={<Shield size={28} />}
            title="Institutional Adoption Potential"
            description="As institutional interest in cryptocurrencies grows, Nano could benefit if it gains traction among big players. Its practical features might position it as an attractive option for institutional portfolios."
            delay="600ms"
          />
          <ReasonCard 
            number="08"
            icon={<Scale size={28} />}
            title="Regulatory Clarity"
            description="Favorable regulatory developments could boost confidence in Nano. If regulations support efficient, low-cost digital currencies, Nano's design could give it an edge over less adaptable competitors."
            delay="700ms"
          />
          <ReasonCard 
            number="09"
            icon={<Clock size={28} />}
            title="Strong Community and Development"
            description="Nano boasts an active community and a dedicated development team, both critical for a cryptocurrency's long-term success. A supportive community can fuel adoption, while ongoing improvements ensure Nano stays competitive."
            delay="800ms"
          />
          <ReasonCard 
            number="10"
            icon={<Cpu size={28} />}
            title="Historical Resilience"
            description="Despite price volatility, Nano has demonstrated staying power since its inception. Its ability to persist and the cautious optimism in price predictions suggest it could rebound strongly, outperforming cryptocurrencies with weaker fundamentals."
            delay="900ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Reasons;
