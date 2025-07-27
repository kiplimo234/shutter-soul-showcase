import { useState } from "react";
import { Heart, ShoppingCart, Eye, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Leica M11",
      price: "$8,295",
      originalPrice: "$8,995",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1495707902641-75ce1028f6d2?w=500&h=500&fit=crop",
      badge: "Best Seller",
      description: "Full-frame rangefinder with 60MP BSI CMOS sensor"
    },
    {
      id: 2,
      name: "Fujifilm X-T5",
      price: "$1,699",
      originalPrice: "$1,899",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
      badge: "New",
      description: "40MP X-Trans CMOS 5 HR sensor with in-body stabilization"
    },
    {
      id: 3,
      name: "Canon EOS R5",
      price: "$3,899",
      originalPrice: "$4,199",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1567450297517-45b55c17cd9e?w=500&h=500&fit=crop",
      badge: "Popular",
      description: "45MP full-frame mirrorless with 8K video recording"
    },
    {
      id: 4,
      name: "Nikon Z9",
      price: "$5,499",
      originalPrice: "$5,799",
      rating: 4.9,
      reviews: 93,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
      badge: "Pro",
      description: "45.7MP stacked CMOS sensor with 8K video capabilities"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-hero">
            Featured <span className="text-primary">Cameras</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our handpicked selection of professional cameras, 
            each tested and approved by our expert photographers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="camera-card rounded-xl p-6 group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <Badge 
                  variant={product.badge === "Best Seller" ? "default" : "secondary"}
                  className="bg-primary/20 text-primary border-primary/30"
                >
                  {product.badge}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-foreground/60 hover:text-red-500 transition-colors"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" className="btn-premium">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm" className="glass border-border/40">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm text-foreground/60 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-foreground/20'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-foreground/60">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl text-primary">{product.price}</span>
                  <span className="text-sm text-foreground/50 line-through">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass border-border/40 hover:border-primary/50">
            View All Cameras
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;