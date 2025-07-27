import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, X, Star, Eye, Grid, List } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Wishlist = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Leica M11",
      type: "cameras",
      price: "$8,295",
      originalPrice: "$8,995",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1495707902641-75ce1028f6d2?w=500&h=500&fit=crop",
      badge: "Best Seller",
      description: "Full-frame rangefinder with 60MP BSI CMOS sensor",
      dateAdded: "2024-01-15"
    },
    {
      id: 2,
      name: "Canon RF 70-200mm f/2.8L",
      type: "lenses",
      price: "$2,699",
      originalPrice: "$2,899",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
      badge: "Pro",
      description: "Professional telephoto zoom lens with image stabilization",
      dateAdded: "2024-01-10"
    },
    {
      id: 3,
      name: "Peak Design Tripod",
      type: "accessories",
      price: "$599",
      originalPrice: "$649",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1567450297517-45b55c17cd9e?w=500&h=500&fit=crop",
      badge: "New",
      description: "Carbon fiber travel tripod with quick-release system",
      dateAdded: "2024-01-08"
    },
    {
      id: 4,
      name: "Sony A7R V",
      type: "cameras",
      price: "$3,899",
      originalPrice: "$4,199",
      rating: 4.9,
      reviews: 93,
      image: "https://images.unsplash.com/photo-1496359565684-501272338a1c?w=500&h=500&fit=crop",
      badge: "Featured",
      description: "61MP full-frame mirrorless with AI-powered autofocus",
      dateAdded: "2024-01-05"
    }
  ]);

  const removeFromWishlist = (itemId: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
  };

  const addToCart = (item: any) => {
    // Add to cart logic here
    console.log("Added to cart:", item);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      <FloatingCart />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display font-bold text-4xl mb-4 text-hero">
              My Wishlist
            </h1>
            <p className="text-lg text-foreground/70 mb-6">
              Save your favorite items for later. {wishlistItems.length} items in your wishlist.
            </p>
            
            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="glass border-border/40"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="glass border-border/40"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {wishlistItems.length > 0 && (
                <Button 
                  variant="outline" 
                  onClick={clearWishlist}
                  className="glass border-border/40 text-red-500 hover:text-red-600"
                >
                  Clear All
                </Button>
              )}
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Wishlist Items */}
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-foreground/20 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-foreground">Your wishlist is empty</h3>
              <p className="text-foreground/60 mb-6">
                Start browsing and save your favorite items to your wishlist.
              </p>
              <Link to="/">
                <Button className="btn-premium">
                  Start Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "space-y-4"
            }>
              {wishlistItems.map((item) => (
                <div key={item.id} className={viewMode === "grid" ? "camera-card rounded-xl p-6" : ""}>
                  {viewMode === "grid" ? (
                    // Grid View
                    <div className="space-y-4">
                      {/* Remove Button */}
                      <div className="flex justify-between items-start">
                        <Badge 
                          variant={item.badge === "Best Seller" ? "default" : "secondary"}
                          className="bg-primary/20 text-primary border-primary/30"
                        >
                          {item.badge}
                        </Badge>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Product Image */}
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="space-y-3">
                        <Link 
                          to={`/product/${item.type}/${item.id}`}
                          className="block"
                        >
                          <h3 className="font-semibold text-lg text-foreground hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        
                        <p className="text-sm text-foreground/60 line-clamp-2">
                          {item.description}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-foreground/20'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-foreground/60">
                            {item.rating} ({item.reviews})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xl text-primary">{item.price}</span>
                          <span className="text-sm text-foreground/50 line-through">{item.originalPrice}</span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button 
                            onClick={() => addToCart(item)}
                            className="flex-1 btn-premium"
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Link to={`/product/${item.type}/${item.id}`}>
                            <Button variant="outline" size="icon" className="glass border-border/40">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <Card className="camera-card">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <Link 
                                  to={`/product/${item.type}/${item.id}`}
                                  className="block"
                                >
                                  <h3 className="font-semibold text-lg text-foreground hover:text-primary transition-colors">
                                    {item.name}
                                  </h3>
                                </Link>
                                <p className="text-sm text-foreground/60 mt-1">
                                  {item.description}
                                </p>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => removeFromWishlist(item.id)}
                                className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                {/* Rating */}
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="text-sm text-foreground/60">{item.rating}</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-lg text-primary">{item.price}</span>
                                  <span className="text-sm text-foreground/50 line-through">{item.originalPrice}</span>
                                </div>
                              </div>

                              {/* Actions */}
                              <div className="flex gap-2">
                                <Button 
                                  onClick={() => addToCart(item)}
                                  className="btn-premium"
                                >
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  Add to Cart
                                </Button>
                                <Link to={`/product/${item.type}/${item.id}`}>
                                  <Button variant="outline" size="icon" className="glass border-border/40">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;