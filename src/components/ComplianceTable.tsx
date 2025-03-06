
import React, { useState } from 'react';
import { ArrowUpDown, Leaf, Battery, AlertTriangle, Waves, TrendingUp, Scale, Shield, Network, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CryptoCompliance {
  crypto: string;
  ecoFriendliness: number;
  energyConsumption: number;
  miningIssues: number;
  environmentalImpact: number;
  inflationHedge: number;
  compliance: number;
  security: number;
  decentralization: number;
  scalability: number;
  totalScore: number;
}

const ComplianceTable = () => {
  const [sortField, setSortField] = useState<keyof CryptoCompliance>('totalScore');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const cryptoData: CryptoCompliance[] = [
    { crypto: "BTC", ecoFriendliness: 1, energyConsumption: 1, miningIssues: 1, environmentalImpact: 1, inflationHedge: 5, compliance: 3, security: 5, decentralization: 5, scalability: 2, totalScore: 24 },
    { crypto: "ETH", ecoFriendliness: 1, energyConsumption: 2, miningIssues: 1, environmentalImpact: 1, inflationHedge: 3, compliance: 3, security: 4, decentralization: 4, scalability: 3, totalScore: 22 },
    { crypto: "XRP", ecoFriendliness: 5, energyConsumption: 5, miningIssues: 5, environmentalImpact: 5, inflationHedge: 5, compliance: 5, security: 4, decentralization: 1, scalability: 5, totalScore: 40 },
    { crypto: "XLM", ecoFriendliness: 5, energyConsumption: 5, miningIssues: 5, environmentalImpact: 5, inflationHedge: 3, compliance: 5, security: 4, decentralization: 2, scalability: 5, totalScore: 39 },
    { crypto: "LTC", ecoFriendliness: 1, energyConsumption: 1, miningIssues: 1, environmentalImpact: 1, inflationHedge: 5, compliance: 3, security: 5, decentralization: 5, scalability: 2, totalScore: 24 },
    { crypto: "BCH", ecoFriendliness: 1, energyConsumption: 1, miningIssues: 1, environmentalImpact: 1, inflationHedge: 5, compliance: 3, security: 5, decentralization: 4, scalability: 3, totalScore: 24 },
    { crypto: "ZEC", ecoFriendliness: 1, energyConsumption: 1, miningIssues: 1, environmentalImpact: 1, inflationHedge: 5, compliance: 2, security: 5, decentralization: 5, scalability: 2, totalScore: 23 },
    { crypto: "DASH", ecoFriendliness: 1, energyConsumption: 1, miningIssues: 1, environmentalImpact: 1, inflationHedge: 2, compliance: 2, security: 5, decentralization: 3, scalability: 4, totalScore: 20 },
    { crypto: "DCR", ecoFriendliness: 2, energyConsumption: 2, miningIssues: 3, environmentalImpact: 3, inflationHedge: 2, compliance: 3, security: 5, decentralization: 5, scalability: 2, totalScore: 27 },
    { crypto: "ZEN", ecoFriendliness: 1, energyConsumption: 1, miningIssues: 1, environmentalImpact: 1, inflationHedge: 2, compliance: 2, security: 5, decentralization: 5, scalability: 2, totalScore: 20 },
    { crypto: "SC", ecoFriendliness: 1, energyConsumption: 1, miningIssues: 1, environmentalImpact: 1, inflationHedge: 1, compliance: 2, security: 5, decentralization: 5, scalability: 2, totalScore: 19 },
    { crypto: "XNO", ecoFriendliness: 5, energyConsumption: 5, miningIssues: 5, environmentalImpact: 5, inflationHedge: 5, compliance: 2, security: 4, decentralization: 4, scalability: 5, totalScore: 40 },
    { crypto: "ALGO", ecoFriendliness: 5, energyConsumption: 5, miningIssues: 5, environmentalImpact: 5, inflationHedge: 5, compliance: 4, security: 5, decentralization: 3, scalability: 5, totalScore: 42 },
    { crypto: "HBAR", ecoFriendliness: 5, energyConsumption: 5, miningIssues: 5, environmentalImpact: 5, inflationHedge: 5, compliance: 5, security: 5, decentralization: 1, scalability: 5, totalScore: 41 },
    { crypto: "AVAX", ecoFriendliness: 5, energyConsumption: 5, miningIssues: 5, environmentalImpact: 5, inflationHedge: 4, compliance: 2, security: 5, decentralization: 5, scalability: 5, totalScore: 41 },
    { crypto: "SOL", ecoFriendliness: 5, energyConsumption: 5, miningIssues: 5, environmentalImpact: 5, inflationHedge: 3, compliance: 2, security: 3, decentralization: 3, scalability: 5, totalScore: 36 },
    { crypto: "LUNA", ecoFriendliness: 4, energyConsumption: 4, miningIssues: 5, environmentalImpact: 5, inflationHedge: 1, compliance: 1, security: 2, decentralization: 3, scalability: 5, totalScore: 30 },
    { crypto: "ATOM", ecoFriendliness: 4, energyConsumption: 4, miningIssues: 5, environmentalImpact: 5, inflationHedge: 2, compliance: 3, security: 5, decentralization: 5, scalability: 5, totalScore: 38 },
    { crypto: "FIL", ecoFriendliness: 3, energyConsumption: 3, miningIssues: 3, environmentalImpact: 3, inflationHedge: 3, compliance: 3, security: 5, decentralization: 5, scalability: 4, totalScore: 32 },
    { crypto: "FLOW", ecoFriendliness: 5, energyConsumption: 5, miningIssues: 5, environmentalImpact: 5, inflationHedge: 2, compliance: 3, security: 5, decentralization: 3, scalability: 5, totalScore: 38 },
  ];

  const handleSort = (field: keyof CryptoCompliance) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, set to descending by default
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedData = [...cryptoData].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (sortDirection === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  // Function to get cell background color based on rating
  const getRatingColor = (rating: number) => {
    if (rating === 5) return 'bg-green-100';
    if (rating === 4) return 'bg-green-50';
    if (rating === 3) return 'bg-blue-50';
    if (rating === 2) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  // Get icon and title for each column
  const columnConfig = {
    ecoFriendliness: { icon: <Leaf className="w-3 h-3" />, title: 'Eco-Friendliness' },
    energyConsumption: { icon: <Battery className="w-3 h-3" />, title: 'Energy Consumption' },
    miningIssues: { icon: <AlertTriangle className="w-3 h-3" />, title: 'Mining Issues' },
    environmentalImpact: { icon: <Waves className="w-3 h-3" />, title: 'Environmental Impact' },
    inflationHedge: { icon: <TrendingUp className="w-3 h-3" />, title: 'Inflation Hedge' },
    compliance: { icon: <Scale className="w-3 h-3" />, title: 'Compliance' },
    security: { icon: <Shield className="w-3 h-3" />, title: 'Security' },
    decentralization: { icon: <Network className="w-3 h-3" />, title: 'Decentralization' },
    scalability: { icon: <Maximize className="w-3 h-3" />, title: 'Scalability' },
  };

  return (
    <section id="compliance" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-4">
            <span className="text-sm font-medium text-crypto-charcoal">Sustainability & Compliance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-4">Cryptocurrency Compliance & Eco-Friendliness</h2>
          <p className="text-lg text-crypto-charcoal/70 max-w-2xl mx-auto">
            Compare cryptocurrencies based on their environmental impact, regulatory compliance, and adoption potential.
          </p>
        </div>
        
        <div className="overflow-x-auto glass-card rounded-2xl p-6 shadow-lg animate-scale-up">
          <table className="w-full min-w-[800px] text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50 text-crypto-charcoal">
              <tr>
                <th className="px-4 py-3 font-bold sticky left-0 bg-gray-50 z-10">
                  <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort('crypto')}>
                    Crypto <ArrowUpDown size={14} />
                  </div>
                </th>
                {Object.entries(columnConfig).map(([key, { icon, title }]) => (
                  <th key={key} className="px-3 py-3 font-bold">
                    <div 
                      className="flex items-center gap-1 cursor-pointer justify-center" 
                      onClick={() => handleSort(key as keyof CryptoCompliance)}
                    >
                      {icon}
                      <span className="hidden md:inline">{title}</span>
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 font-bold">
                  <div 
                    className="flex items-center gap-1 cursor-pointer justify-center text-crypto-blue" 
                    onClick={() => handleSort('totalScore')}
                  >
                    Total <ArrowUpDown size={14} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((crypto) => {
                // Highlight XNO row
                const isXNO = crypto.crypto === "XNO";
                const isHighScore = crypto.totalScore >= 40;
                
                const rowClass = cn(
                  "border-b hover:bg-gray-50 transition-colors",
                  isXNO ? "bg-green-50" : isHighScore ? "bg-blue-50/30" : ""
                );

                return (
                  <tr key={crypto.crypto} className={rowClass}>
                    <td className="px-4 py-3 font-medium sticky left-0 bg-inherit z-10">
                      {isXNO ? <span className="text-green-600 font-bold">{crypto.crypto}</span> : crypto.crypto}
                    </td>
                    {Object.keys(columnConfig).map((key) => (
                      <td 
                        key={key} 
                        className={cn(
                          "px-3 py-3 text-center", 
                          getRatingColor(crypto[key as keyof CryptoCompliance] as number)
                        )}
                      >
                        {crypto[key as keyof CryptoCompliance]}
                      </td>
                    ))}
                    <td className={cn(
                      "px-4 py-3 text-center font-bold",
                      crypto.totalScore >= 40 ? "text-green-600" : 
                      crypto.totalScore >= 35 ? "text-blue-600" :
                      "text-gray-600"
                    )}>
                      {crypto.totalScore}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-6 text-sm text-crypto-charcoal/60">
          <p>Ratings based on current market data, regulatory compliance, and environmental impact metrics.</p>
        </div>
      </div>
    </section>
  );
};

export default ComplianceTable;
