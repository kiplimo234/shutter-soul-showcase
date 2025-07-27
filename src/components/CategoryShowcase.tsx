import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CategoryShowcase = () => {
  const categories = [
    {
      title: "DSLR Excellence",
      description: "Professional-grade cameras for every photographer",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop",
      link: "/search?category=dslr"
    },
    {
      title: "Mirrorless Innovation",
      description: "Compact powerhouses with cutting-edge technology",
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=600&h=400&fit=crop",
      link: "/search?category=mirrorless"
    },
    {
      title: "Vintage Collection",
      description: "Timeless classics with character and charm",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=400&fit=crop",
      link: "/search?category=vintage"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Explore Our Collections</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From cutting-edge mirrorless systems to timeless vintage classics, discover the perfect camera for your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3] relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {category.description}
                  </p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;