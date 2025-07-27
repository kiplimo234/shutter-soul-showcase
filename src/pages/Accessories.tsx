import { useState } from "react";
import { Search, Filter, Grid, Star, Heart, ShoppingCart, Zap, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import FloatingCart from "@/components/FloatingCart";

const Accessories = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [activeCategory, setActiveCategory] = useState('all');

  const accessories = [
    {
      id: 1,
      name: "Peak Design Everyday Backpack 30L",
      category: "bags",
      price: 279,
      originalPrice: 299,
      rating: 4.8,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      description: "Weather-resistant camera backpack with modular organization",
      badge: "Best Seller",
      features: ["Weather Resistant", "Modular Design", "Lifetime Warranty"]
    },
    {
      id: 2,
      name: "Manfrotto Carbon Fiber Tripod",
      category: "tripods",
      price: 549,
      originalPrice: 599,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1606983340882-b55f741b6e6e?w=500&h=500&fit=crop",
      description: "Professional carbon fiber tripod with fluid head",
      badge: "Professional",
      features: ["Carbon Fiber", "Fluid Head", "Quick Release"]
    },
    {
      id: 3,
      name: "SanDisk Extreme Pro CFexpress",
      category: "storage",
      price: 199,
      originalPrice: 229,
      rating: 4.7,
      reviews: 789,
      image: "https://images.unsplash.com/photo-1616000875747-3de4ffac1e73?w=500&h=500&fit=crop",
      description: "High-speed CFexpress card for 8K video recording",
      badge: "Fast",
      features: ["8K Ready", "1700MB/s", "Temperature Proof"]
    },
    {
      id: 4,
      name: "Godox AD600Pro Flash",
      category: "lighting",
      price: 899,
      originalPrice: 999,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      description: "Portable studio flash with wireless control",
      badge: "Wireless",
      features: ["600Ws Power", "Wireless TTL", "High Speed Sync"]
    },
    {
      id: 5,
      name: "BlackRapid Sport Breathe",
      category: "straps",
      price: 89,
      originalPrice: 99,
      rating: 4.6,
      reviews: 324,
      image: "https://images.unsplash.com/photo-1606127530880-77d0be1c9b29?w=500&h=500&fit=crop",
      description: "Breathable camera strap for active photography",
      badge: "Comfort",
      features: ["Breathable Mesh", "Quick Release", "Weight Distribution"]
    },
    {
      id: 6,
      name: "Hoya Variable ND Filter 77mm",
      category: "filters",
      price: 179,
      originalPrice: 199,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1606983340882-b55f741b6e6e?w=500&h=500&fit=crop",
      description: "Variable neutral density filter for creative control",
      badge: "Creative",
      features: ["ND3-400", "Multi-Coated", "Slim Profile"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Accessories', icon: Grid },
    { id: 'bags', name: 'Camera Bags', icon: Shield },
    { id: 'tripods', name: 'Tripods & Support', icon: Zap },
    { id: 'lighting', name: 'Lighting', icon: Zap },
    { id: 'storage', name: 'Memory Cards', icon: Headphones },
    { id: 'filters', name: 'Filters', icon: Shield },
    { id: 'straps', name: 'Straps & Grips', icon: Shield }
  ];

  const filteredAccessories = activeCategory === 'all' 
    ? accessories 
    : accessories.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCart />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-hero">
              Camera <span className="text-primary">Accessories</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Complete your photography setup with professional accessories designed for creators.
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <div className="glass-card p-6 rounded-xl">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 bg-transparent h-auto">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="text-xs font-medium">{category.name}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
          </Tabs>

          {/* Filters */}
          <div className="glass-card p-6 rounded-xl mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 h-4 w-4" />
                <Input
                  placeholder="Search accessories..."
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              <div className="flex gap-4 items-center w-full sm:w-auto">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredAccessories.map((accessory) => (
              <Card key={accessory.id} className="camera-card group cursor-pointer">
                <CardContent className="p-6">
                  {/* Badge and Heart */}
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {accessory.badge}
                    </Badge>
                    <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                    <img 
                      src={accessory.image} 
                      alt={accessory.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {accessory.name}
                      </h3>
                      <p className="text-sm text-foreground/60 mt-1">
                        {accessory.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {accessory.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(accessory.rating) ? 'text-yellow-400 fill-current' : 'text-foreground/20'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-foreground/60">
                        {accessory.rating} ({accessory.reviews})
                      </span>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xl text-primary">${accessory.price}</span>
                        <span className="text-sm text-foreground/50 line-through">${accessory.originalPrice}</span>
                      </div>
                      <Button className="btn-premium">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mb-12">
            <Button size="lg" variant="outline" className="glass border-border/40 hover:border-primary/50">
              Load More Accessories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;