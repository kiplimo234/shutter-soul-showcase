import { Shield, Truck, Users, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Every camera is verified and comes with a certificate of authenticity"
    },
    {
      icon: Truck,
      title: "Worldwide Shipping",
      description: "Free shipping on orders over $500 with secure packaging"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Connect with photographers and get advice from professionals"
    },
    {
      icon: Award,
      title: "Quality Promise",
      description: "30-day return policy and lifetime technical support"
    }
  ];

  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Why Choose ShutterSoul</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're more than just a camera shop. We're your partner in capturing life's most precious moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;