import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Share2, 
  Shield, 
  Truck, 
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus
} from "lucide-react";
import Navigation from "@/components/Navigation";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const ProductView = () => {
  const { id, type } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Reset state when route parameters change
  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setIsWishlisted(false);
  }, [id, type]);

  // Mock product data - in real app this would come from API
  const product = {
    id: id,
    type: type,
    name: "Leica M11 Rangefinder Camera",
    price: "$8,295",
    originalPrice: "$8,995",
    rating: 4.9,
    reviews: 127,
    inStock: true,
    badge: "Best Seller",
    shortDescription: "Full-frame rangefinder with 60MP BSI CMOS sensor",
    longDescription: "The Leica M11 represents the pinnacle of rangefinder photography, featuring a revolutionary 60MP BSI CMOS sensor that delivers exceptional image quality in a compact, minimalist design. With its timeless aesthetic and cutting-edge technology, the M11 continues Leica's legacy of creating cameras that inspire photographers to capture life's most precious moments.",
    
    images: [
      "https://images.unsplash.com/photo-1495707902641-75ce1028f6d2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567450297517-45b55c17cd9e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496359565684-501272338a1c?w=800&h=800&fit=crop"
    ],
    
    specifications: {
      "Sensor": "60MP BSI CMOS",
      "Image Processor": "Maestro III",
      "ISO Range": "64-50,000",
      "Video": "4K UHD at 30fps",
      "Storage": "SD/SDHC/SDXC",
      "Battery Life": "700 shots",
      "Weight": "640g",
      "Dimensions": "139 x 80 x 38.5mm"
    },
    
    features: [
      "60MP BSI CMOS sensor for exceptional detail",
      "Iconic rangefinder design with modern technology",
      "4K UHD video recording capabilities",
      "ISO range up to 50,000 for low-light photography",
      "Compact and lightweight body",
      "Premium build quality with weather sealing"
    ],
    
    warranty: "2 years international warranty",
    shipping: "Free shipping on orders over $500"
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Fujifilm X-T5",
      price: "$1,699",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop",
      rating: 4.8
    },
    {
      id: 3,
      name: "Canon EOS R5",
      price: "$3,899",
      image: "https://images.unsplash.com/photo-1567450297517-45b55c17cd9e?w=300&h=300&fit=crop",
      rating: 4.7
    },
    {
      id: 4,
      name: "Nikon Z9",
      price: "$5,499",
      image: "https://images.unsplash.com/photo-1496359565684-501272338a1c?w=300&h=300&fit=crop",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-foreground/60 mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to={`/${type}`} className="hover:text-primary capitalize">{type}</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden glass-card">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-primary/20 text-primary border-primary/30"
                >
                  {product.badge}
                </Badge>
              </div>
              
              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-border/20'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-display font-bold text-3xl mb-2 text-hero">
                  {product.name}
                </h1>
                <p className="text-lg text-foreground/70 mb-4">
                  {product.shortDescription}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-foreground/20'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-foreground/60">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-3xl text-primary">{product.price}</span>
                  <span className="text-lg text-foreground/50 line-through">{product.originalPrice}</span>
                </div>
                <p className="text-sm text-green-500">
                  Save ${parseInt(product.originalPrice.replace('$', '').replace(',', '')) - parseInt(product.price.replace('$', '').replace(',', ''))}
                </p>
              </div>

              <Separator />

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center border border-border/20 rounded-lg">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="flex-1 btn-premium">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`glass border-border/40 ${isWishlisted ? 'text-red-500 border-red-500/50' : ''}`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="outline" size="lg" className="glass border-border/40">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg glass-card">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Warranty</p>
                    <p className="text-xs text-foreground/60">{product.warranty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg glass-card">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Free Shipping</p>
                    <p className="text-xs text-foreground/60">On orders over $500</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg glass-card">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Returns</p>
                    <p className="text-xs text-foreground/60">30-day policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="grid w-full grid-cols-3 glass">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  {product.longDescription}
                </p>
                <h3 className="font-semibold text-xl mt-8 mb-4 text-foreground">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-4 rounded-lg glass-card">
                    <span className="font-medium text-foreground">{key}</span>
                    <span className="text-foreground/70">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <div className="text-center py-12">
                <p className="text-foreground/60">Reviews coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <div>
            <h2 className="font-display font-bold text-2xl mb-8 text-hero">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id}
                  to={`/product/${type}/${relatedProduct.id}`}
                  className="camera-card rounded-xl p-6 group cursor-pointer block"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{relatedProduct.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-foreground/60">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingCart />
    </div>
  );
};

export default ProductView;