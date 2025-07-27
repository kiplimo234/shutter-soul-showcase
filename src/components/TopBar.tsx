import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-secondary/50 border-b border-border/20 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-sm">
          {/* Left side - Contact info */}
          <div className="flex items-center space-x-6 text-foreground/70">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>123 Photography St, NYC</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>hello@shuttersoul.com</span>
            </div>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/about" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;