import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";

const Lenses = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [filterBrand, setFilterBrand] = useState('all');
  const [filterMount, setFilterMount] = useState('all');

  const lenses = [
    {
      id: 1,
      name: "Canon RF 85mm f/1.2L USM",
      brand: "Canon",
      mount: "RF",
      price: 2699,
      originalPrice: 2899,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
      focalLength: "85mm",
      aperture: "f/1.2",
      type: "Prime",
      badge: "Professional"
    },
    {
      id: 2,
      name: "Sony FE 24-70mm f/2.8 GM II",
      brand: "Sony",
      mount: "E",
      price: 2299,
      originalPrice: 2499,
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1606983340619-49a1c07c4671?w=500&h=500&fit=crop",
      focalLength: "24-70mm",
      aperture: "f/2.8",
      type: "Zoom",
      badge: "Best Seller"
    },
    {
      id: 3,
      name: "Leica Summilux-M 50mm f/1.4",
      brand: "Leica",
      mount: "M",
      price: 4195,
      originalPrice: 4395,
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1606983356314-0ccb6b6d0dc8?w=500&h=500&fit=crop",
      focalLength: "50mm",
      aperture: "f/1.4",
      type: "Prime",
      badge: "Legendary"
    },
    {
      id: 4,
      name: "Fujifilm XF 56mm f/1.2 R WR",
      brand: "Fujifilm",
      mount: "X",
      price: 1199,
      originalPrice: 1299,
      rating: 4.7,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1606983340882-b55f741b6e6e?w=500&h=500&fit=crop",
      focalLength: "56mm",
      aperture: "f/1.2",
      type: "Prime",
      badge: "New"
    },
    {
      id: 5,
      name: "Nikon Z 70-200mm f/2.8 VR S",
      brand: "Nikon",
      mount: "Z",
      price: 2599,
      originalPrice: 2799,
      rating: 4.8,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1606983340231-56a67ecac7b1?w=500&h=500&fit=crop",
      focalLength: "70-200mm",
      aperture: "f/2.8",
      type: "Zoom",
      badge: "Popular"
    },
    {
      id: 6,
      name: "Sigma 35mm f/1.2 DG DN Art",
      brand: "Sigma",
      mount: "E/L",
      price: 1499,
      originalPrice: 1599,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1606983340845-d06b8d7d5e56?w=500&h=500&fit=crop",
      focalLength: "35mm",
      aperture: "f/1.2",
      type: "Prime",
      badge: "Art Series"
    }
  ];

  const brands = ['Canon', 'Sony', 'Leica', 'Fujifilm', 'Nikon', 'Sigma'];
  const mounts = ['RF', 'E', 'M', 'X', 'Z', 'EF'];

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
              Premium <span className="text-primary">Lenses</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Discover our collection of professional camera lenses from the world's finest manufacturers.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="glass-card p-6 rounded-xl mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 h-4 w-4" />
                  <Input
                    placeholder="Search lenses..."
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                
                <Select value={filterBrand} onValueChange={setFilterBrand}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand.toLowerCase()}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filterMount} onValueChange={setFilterMount}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Mount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Mounts</SelectItem>
                    {mounts.map(mount => (
                      <SelectItem key={mount} value={mount.toLowerCase()}>{mount}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4 items-center">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
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

                <div className="flex rounded-lg border border-border overflow-hidden">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {lenses.map((lens) => (
              <Card 
                key={lens.id} 
                className={`camera-card group cursor-pointer ${
                  viewMode === 'list' ? 'flex-row' : ''
                }`}
              >
                <CardContent className={`p-6 ${viewMode === 'list' ? 'flex gap-6' : ''}`}>
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {lens.badge}
                    </Badge>
                    <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-lg mb-4 ${
                    viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'h-48'
                  }`}>
                    <img 
                      src={lens.image} 
                      alt={lens.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {lens.name}
                      </h3>
                      <div className="flex gap-2 text-sm text-foreground/60 mt-1">
                        <span>{lens.focalLength}</span>
                        <span>•</span>
                        <span>{lens.aperture}</span>
                        <span>•</span>
                        <span>{lens.type}</span>
                        <span>•</span>
                        <span>{lens.mount} Mount</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(lens.rating) ? 'text-yellow-400 fill-current' : 'text-foreground/20'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-foreground/60">
                        {lens.rating} ({lens.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xl text-primary">${lens.price.toLocaleString()}</span>
                        <span className="text-sm text-foreground/50 line-through">${lens.originalPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex gap-2">
                        <Link to={`/product/lenses/${lens.id}`}>
                          <Button variant="outline" size="sm" className="glass border-border/40">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button className="btn-premium">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12 mb-12">
            <Button size="lg" variant="outline" className="glass border-border/40 hover:border-primary/50">
              Load More Lenses
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lenses;