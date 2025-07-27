import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cameras.jpg";

const Hero = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">✓</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Curation</h3>
              <p className="text-foreground/60">Hand-picked cameras tested by professionals</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-foreground/60">Free shipping on orders over $500</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">♥</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Lifetime Support</h3>
              <p className="text-foreground/60">Expert advice whenever you need it</p>
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