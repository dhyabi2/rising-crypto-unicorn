
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
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
            
            <h1 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-8">Terms and Conditions</h1>
            
            <div className="prose max-w-none">
              <p className="text-crypto-charcoal/80 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">1. Introduction</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                Welcome to KnowXNO. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">2. Disclaimer</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                The information provided on this website is for general informational purposes only. It is not intended as financial advice, investment advice, trading advice, or any other type of advice. You should conduct your own research and consult with a qualified professional before making any investment decisions.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">3. Risk Warning</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                Cryptocurrency investments are subject to high market risk. KnowXNO is not responsible for any direct, indirect, or consequential losses as a result of any user's actions. Please be aware that the value of cryptocurrencies can go down as well as up, and you may not get back the amount you invested.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">4. External Links</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with KnowXNO. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">5. Changes to Terms</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of this page. It is your responsibility to check these Terms periodically for changes.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">6. Contact Us</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                If you have any questions about these Terms, please visit the official Nano website at <a href="https://nano.org" className="text-crypto-blue hover:underline">nano.org</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
