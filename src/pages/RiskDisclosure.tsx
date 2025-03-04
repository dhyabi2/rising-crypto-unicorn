
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RiskDisclosure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-28 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/">
              <Button variant="ghost" className="mb-6 pl-2">
                <ArrowLeft size={18} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle size={32} className="text-amber-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-crypto-charcoal">Risk Disclosure</h1>
            </div>
            
            <div className="p-6 border border-amber-200 bg-amber-50 rounded-lg mb-8">
              <p className="text-crypto-charcoal/90 font-medium">
                Cryptocurrency investments involve a high degree of risk. Please carefully consider your investment objectives, level of experience, and risk appetite before investing in cryptocurrencies.
              </p>
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">Market Risk</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                The cryptocurrency market is highly volatile. The value of Nano (XNO) and other cryptocurrencies can fluctuate significantly in a short period of time. You should be prepared to lose all or a substantial portion of your investment.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">Regulatory Risk</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                The regulatory environment for cryptocurrencies is evolving. Changes in regulations in various jurisdictions may adversely affect the use, transfer, exchange, and value of cryptocurrencies.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">Technical Risk</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                Cryptocurrency transactions may be irreversible, and losses due to fraudulent or accidental transactions may not be recoverable. The security and operational stability of cryptocurrency networks cannot be guaranteed.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">Exchange Risk</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                Exchanges that allow you to buy and sell cryptocurrencies can be unregulated and may be subject to security breaches or failure. You may lose funds stored in exchanges due to theft, loss of private keys, or exchange bankruptcy.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">Liquidity Risk</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                There may be difficulty in finding a buyer/seller for Nano (XNO) at certain times. This reduced liquidity may impact your ability to sell or buy XNO at desired prices.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">Not Financial Advice</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                The information provided on this website is for general informational purposes only and should not be construed as financial advice. Always conduct your own research or consult with a professional financial advisor before making any investment decisions.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">Own Responsibility</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                By using this website and investing in Nano (XNO), you acknowledge that you are doing so at your own risk and you assume full responsibility for your investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RiskDisclosure;
