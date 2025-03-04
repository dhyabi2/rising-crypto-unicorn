
import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CoinRating {
  coin: string;
  consensus: string;
  tps: string;
  scalability: string;
  blockTime: string;
  energyEfficiency: string;
  finality: string;
  security: string;
  programmingLanguage: string;
  decentralization: string;
  totalScore: string;
}

const RatingsTable = () => {
  const coinRatings: CoinRating[] = [
    { coin: "XNO", consensus: "ORV", tps: "7,000", scalability: "5/5", blockTime: "0.3s", energyEfficiency: "5/5", finality: "5/5", security: "5/5", programmingLanguage: "C++", decentralization: "5/5", totalScore: "45/45" },
    { coin: "SOL", consensus: "PoH+PoS", tps: "65,000", scalability: "5/5", blockTime: "0.4s", energyEfficiency: "4/5", finality: "4/5", security: "4/5", programmingLanguage: "Rust", decentralization: "4/5", totalScore: "41/45" },
    { coin: "HBAR", consensus: "Hashgraph", tps: "10,000", scalability: "5/5", blockTime: "3s", energyEfficiency: "5/5", finality: "5/5", security: "4/5", programmingLanguage: "Java", decentralization: "3/5", totalScore: "40/45" },
    { coin: "ICP", consensus: "Threshold", tps: "5,000", scalability: "5/5", blockTime: "2s", energyEfficiency: "4/5", finality: "4/5", security: "5/5", programmingLanguage: "Motoko", decentralization: "4/5", totalScore: "39/45" },
    { coin: "AVAX", consensus: "Avalanche", tps: "4,500", scalability: "5/5", blockTime: "2s", energyEfficiency: "4/5", finality: "4/5", security: "4/5", programmingLanguage: "Go", decentralization: "4/5", totalScore: "38/45" },
    { coin: "XLM", consensus: "SCP", tps: "1,000", scalability: "4/5", blockTime: "5s", energyEfficiency: "5/5", finality: "5/5", security: "4/5", programmingLanguage: "C++", decentralization: "3/5", totalScore: "36/45" },
    { coin: "ALGO", consensus: "PPoS", tps: "6,000", scalability: "4/5", blockTime: "4s", energyEfficiency: "4/5", finality: "4/5", security: "4/5", programmingLanguage: "Python", decentralization: "4/5", totalScore: "36/45" },
    { coin: "MATIC", consensus: "PoS", tps: "7,000", scalability: "5/5", blockTime: "2s", energyEfficiency: "4/5", finality: "4/5", security: "4/5", programmingLanguage: "Solidity", decentralization: "4/5", totalScore: "36/45" },
    { coin: "XRP", consensus: "Ripple", tps: "1,500", scalability: "4/5", blockTime: "3-5s", energyEfficiency: "5/5", finality: "5/5", security: "4/5", programmingLanguage: "C++", decentralization: "2/5", totalScore: "35/45" },
    { coin: "EOS", consensus: "DPoS", tps: "4,000", scalability: "4/5", blockTime: "0.5s", energyEfficiency: "4/5", finality: "4/5", security: "3/5", programmingLanguage: "C++", decentralization: "3/5", totalScore: "35/45" },
    { coin: "FLOW", consensus: "Multi-role", tps: "1,000", scalability: "4/5", blockTime: "5s", energyEfficiency: "4/5", finality: "4/5", security: "4/5", programmingLanguage: "Cadence", decentralization: "3/5", totalScore: "34/45" },
  ];

  return (
    <section id="ratings" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-crypto-gold/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-sm font-medium text-crypto-charcoal">Comparative Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-4">Cryptocurrency Performance Rating</h2>
          <p className="text-lg text-crypto-charcoal/70 max-w-2xl mx-auto">
            See how Nano (XNO) compares to other major cryptocurrencies across key technical metrics.
          </p>
        </div>
        
        <div className="overflow-x-auto glass-card rounded-2xl p-6 shadow-lg animate-scale-up">
          <table className="w-full min-w-[800px] text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50 text-crypto-charcoal">
              <tr>
                <th className="px-4 py-3 font-bold">
                  <div className="flex items-center gap-1">
                    Coin <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 font-bold">Consensus</th>
                <th className="px-4 py-3 font-bold">
                  <div className="flex items-center gap-1">
                    TPS <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 font-bold">
                  <div className="flex items-center gap-1">
                    Scalability <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 font-bold">Block Time</th>
                <th className="px-4 py-3 font-bold">
                  <div className="flex items-center gap-1">
                    Energy Eff. <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 font-bold">
                  <div className="flex items-center gap-1">
                    Finality <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 font-bold">
                  <div className="flex items-center gap-1">
                    Security <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 font-bold">Prog. Lang.</th>
                <th className="px-4 py-3 font-bold">
                  <div className="flex items-center gap-1">
                    Decentral. <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 font-bold">
                  <div className="flex items-center gap-1 text-crypto-blue font-bold">
                    Total Score <ArrowUpDown size={14} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {coinRatings.map((rating, index) => {
                // Set the background color based on the coin
                const isXNO = rating.coin === "XNO";
                const rowClass = cn(
                  "border-b hover:bg-gray-50 transition-colors",
                  isXNO ? "bg-green-50" : index % 2 === 0 ? "bg-white" : "bg-blue-50/30"
                );

                // Function to determine cell background color
                const getCellClass = (value: string) => {
                  if (value.includes("5/5")) {
                    return "bg-green-100";
                  } else if (value.includes("4/5")) {
                    return "bg-blue-50";
                  } else {
                    return "";
                  }
                };

                const getTotalScoreClass = (score: string) => {
                  const numericScore = parseInt(score.split('/')[0]);
                  if (numericScore >= 40) {
                    return "text-green-600 font-bold";
                  } else if (numericScore >= 35) {
                    return "text-blue-600 font-bold";
                  } else {
                    return "text-gray-600";
                  }
                };

                return (
                  <tr key={rating.coin} className={rowClass}>
                    <td className="px-4 py-3 font-medium">
                      {isXNO ? <span className="text-green-600 font-bold">{rating.coin}</span> : rating.coin}
                    </td>
                    <td className="px-4 py-3">{rating.consensus}</td>
                    <td className="px-4 py-3">{rating.tps}</td>
                    <td className={cn("px-4 py-3", getCellClass(rating.scalability))}>{rating.scalability}</td>
                    <td className="px-4 py-3">{rating.blockTime}</td>
                    <td className={cn("px-4 py-3", getCellClass(rating.energyEfficiency))}>{rating.energyEfficiency}</td>
                    <td className={cn("px-4 py-3", getCellClass(rating.finality))}>{rating.finality}</td>
                    <td className={cn("px-4 py-3", getCellClass(rating.security))}>{rating.security}</td>
                    <td className="px-4 py-3">{rating.programmingLanguage}</td>
                    <td className={cn("px-4 py-3", getCellClass(rating.decentralization))}>{rating.decentralization}</td>
                    <td className={cn("px-4 py-3", getTotalScoreClass(rating.totalScore))}>{rating.totalScore}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-6 text-sm text-crypto-charcoal/60">
          <p>Ratings based on technical specifications and performance metrics as of 2023.</p>
        </div>
      </div>
    </section>
  );
};

export default RatingsTable;
