
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            
            <h1 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-8">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-crypto-charcoal/80 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                KnowXNO is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website. We do not collect personally identifiable information from visitors to our site unless they voluntarily provide it.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">2. Use of Cookies</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                Our website may use "cookies" to enhance user experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser that enables the site to recognize your browser and remember certain information. You can choose to disable cookies through your browser settings.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">3. Third-Party Links</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                Our website includes links to external sites, including exchanges and the official Nano website. These sites have their own privacy policies that you should review. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">4. Data Security</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                We implement a variety of security measures to maintain the safety of any information we collect. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2 className="text-xl font-semibold text-crypto-charcoal mt-8 mb-4">6. Contact Us</h2>
              <p className="text-crypto-charcoal/80 mb-4">
                If you have any questions about this Privacy Policy, please visit the official Nano website at <a href="https://nano.org" className="text-crypto-blue hover:underline">nano.org</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
