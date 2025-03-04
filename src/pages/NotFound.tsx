
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
      <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-md mx-auto animate-scale-up">
        <div className="w-20 h-20 bg-crypto-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-bold text-crypto-blue">404</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-crypto-charcoal mb-4">Page Not Found</h1>
        <p className="text-crypto-charcoal/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button className="bg-crypto-blue hover:bg-crypto-blue/90 text-white rounded-full px-6 py-5 shadow-lg shadow-blue-300/20 transition-all hover:shadow-xl hover:shadow-blue-300/30">
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
