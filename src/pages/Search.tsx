import { useState } from "react";
import { Search as SearchIcon, Filter, Star, Heart, ShoppingCart, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("relevance");

  const searchResults = [
    {
      id: 1,
      name: "Leica M11",
      type: "Camera",
      price: "$8,295",
      originalPrice: "$8,995",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1495707902641-75ce1028f6d2?w=300&h=300&fit=crop",
      description: "Full-frame rangefinder with 60MP BSI CMOS sensor",
      badge: "Best Seller",
      inStock: true
    },
    {
      id: 2,
      name: "Canon RF 85mm f/1.2L USM",
      type: "Lens",
      price: "$2,699",
      originalPrice: "$2,899",
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop",
      description: "Professional portrait lens with beautiful bokeh",
      badge: "Professional",
      inStock: true
    },
    {
      id: 3,
      name: "Peak Design Everyday Backpack",
      type: "Accessory",
      price: "$279",
      originalPrice: "$299",
      rating: 4.8,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      description: "Weather-resistant camera backpack with modular organization",
      badge: "Popular",
      inStock: false
    },
    {
      id: 4,
      name: "Fujifilm X-T5",
      type: "Camera",
      price: "$1,699",
      originalPrice: "$1,899",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop",
      description: "40MP X-Trans CMOS 5 HR sensor with in-body stabilization",
      badge: "New",
      inStock: true
    },
    {
      id: 5,
      name: "Godox AD600Pro Flash",
      type: "Accessory",
      price: "$899",
      originalPrice: "$999",
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      description: "Portable studio flash with wireless control",
      badge: "Wireless",
      inStock: true
    }
  ];

  const filters = [
    { id: "cameras", name: "Cameras", count: 45 },
    { id: "lenses", name: "Lenses", count: 78 },
    { id: "accessories", name: "Accessories", count: 123 },
    { id: "in-stock", name: "In Stock", count: 200 },
    { id: "on-sale", name: "On Sale", count: 56 }
  ];

  const popularSearches = [
    "Leica M11", "Canon R5", "Sony A7R V", "Nikon Z9", "85mm lens",
    "Camera bag", "Tripod", "Flash", "Memory card", "Filter"
  ];

  const addFilter = (filterId: string) => {
    if (!activeFilters.includes(filterId)) {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  const removeFilter = (filterId: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filterId));
  };

  const filteredResults = searchResults.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      <FloatingCart />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-hero">
              Search <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Find exactly what you're looking for in our extensive catalog of cameras, lenses, and accessories.
            </p>
          </div>

          {/* Search Bar */}
          <div className="glass-card p-6 rounded-xl mb-8">
            <div className="relative mb-6">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40 h-6 w-6" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for cameras, lenses, accessories..."
                className="pl-12 h-14 text-lg"
              />
            </div>

            {/* Popular Searches */}
            {!searchQuery && (
              <div>
                <h3 className="font-medium text-foreground/80 mb-3">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search) => (
                    <Button
                      key={search}
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchQuery(search)}
                      className="text-sm"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 rounded-xl sticky top-24">
                <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  Filters
                </h2>

                {/* Active Filters */}
                {activeFilters.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-medium text-sm mb-2">Active Filters</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeFilters.map((filterId) => {
                        const filter = filters.find(f => f.id === filterId);
                        return (
                          <Badge
                            key={filterId}
                            variant="secondary"
                            className="bg-primary/20 text-primary border-primary/30 cursor-pointer"
                            onClick={() => removeFilter(filterId)}
                          >
                            {filter?.name}
                            <X className="h-3 w-3 ml-1" />
                          </Badge>
                        );
                      })}
                    </div>
                    <Separator className="mt-4" />
                  </div>
                )}

                {/* Filter Options */}
                <div className="space-y-3">
                  {filters.map((filter) => (
                    <div
                      key={filter.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors"
                      onClick={() => addFilter(filter.id)}
                    >
                      <span className="text-sm">{filter.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {filter.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-semibold text-xl">
                    {searchQuery ? `Results for "${searchQuery}"` : 'All Products'}
                  </h2>
                  <p className="text-foreground/60 text-sm">
                    {filteredResults.length} product{filteredResults.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Results Grid */}
              <div className="space-y-4">
                {filteredResults.map((product) => (
                  <Card key={product.id} className="camera-card group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        {/* Product Image */}
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                          />
                          <Badge 
                            variant="secondary" 
                            className="absolute top-2 left-2 bg-primary/20 text-primary border-primary/30 text-xs"
                          >
                            {product.badge}
                          </Badge>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Camera className="h-4 w-4 text-primary" />
                                <span className="text-sm text-foreground/60">{product.type}</span>
                              </div>
                              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                            </div>
                            <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-red-500">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>

                          <p className="text-foreground/70">{product.description}</p>

                          {/* Rating */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-foreground/20'
                                  }`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-foreground/60">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>

                          {/* Price and Actions */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-xl text-primary">{product.price}</span>
                              <span className="text-sm text-foreground/50 line-through">{product.originalPrice}</span>
                              {!product.inStock && (
                                <Badge variant="destructive" className="text-xs">
                                  Out of Stock
                                </Badge>
                              )}
                            </div>
                            <Button 
                              className="btn-premium"
                              disabled={!product.inStock}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              {product.inStock ? 'Add to Cart' : 'Notify Me'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              {filteredResults.length > 0 && (
                <div className="text-center mt-8">
                  <Button size="lg" variant="outline" className="glass border-border/40 hover:border-primary/50">
                    Load More Results
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;