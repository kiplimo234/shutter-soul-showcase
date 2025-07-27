import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cameras.jpg";
import { useState } from "react";

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "✓",
      title: "Expert Curation",
      description: "Hand-picked cameras tested by professionals"
    },
    {
      icon: "⚡",
      title: "Fast Delivery", 
      description: "Free shipping on orders over $500"
    },
    {
      icon: "♥",
      title: "Lifetime Support",
      description: "Expert advice whenever you need it"
    }
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 text-hero leading-tight">
            Capture Life's
            <br />
            <span className="text-primary">Perfect Moments</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of vintage and modern cameras. 
            From timeless film cameras to cutting-edge digital systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-premium text-lg px-8 py-4 font-semibold"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass text-lg px-8 py-4 font-semibold border-border/40 hover:border-primary/50"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Features */}
          <div className="mt-16">
            {/* Desktop view - grid layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-xl font-bold">{feature.icon}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Mobile view - carousel */}
            <div className="md:hidden">
              {/* Icon row */}
              <div className="flex justify-center gap-8 mb-6">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-primary/30 scale-110' 
                        : 'bg-primary/20 hover:bg-primary/25'
                    }`}
                  >
                    <span className="text-primary text-xl font-bold">{feature.icon}</span>
                  </button>
                ))}
              </div>

              {/* Active feature content */}
              <div className="glass-card p-6 rounded-lg text-center transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2">{features[activeFeature].title}</h3>
                <p className="text-foreground/60">{features[activeFeature].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" />
    </section>
  );
};

export default Hero;