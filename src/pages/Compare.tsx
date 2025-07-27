import { useState } from "react";
import { ArrowLeftRight, Plus, X, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navigation from "@/components/Navigation";
import FloatingCart from "@/components/FloatingCart";

const Compare = () => {
  const [selectedProducts, setSelectedProducts] = useState([
    {
      id: 1,
      name: "Leica M11",
      price: "$8,295",
      image: "https://images.unsplash.com/photo-1495707902641-75ce1028f6d2?w=300&h=300&fit=crop",
      specs: {
        sensor: "60MP Full Frame",
        iso: "64-50000",
        autofocus: "Contrast Detection",
        video: "4K at 30fps",
        weight: "640g",
        battery: "1800mAh",
        connectivity: "Wi-Fi, Bluetooth",
        mount: "M-Mount"
      },
      rating: 4.9
    },
    {
      id: 2,
      name: "Canon EOS R5",
      price: "$3,899",
      image: "https://images.unsplash.com/photo-1567450297517-45b55c17cd9e?w=300&h=300&fit=crop",
      specs: {
        sensor: "45MP Full Frame",
        iso: "100-51200",
        autofocus: "Dual Pixel CMOS AF II",
        video: "8K at 30fps",
        weight: "738g",
        battery: "2130mAh",
        connectivity: "Wi-Fi, Bluetooth, GPS",
        mount: "RF Mount"
      },
      rating: 4.7
    }
  ]);

  const availableProducts = [
    {
      id: 3,
      name: "Nikon Z9",
      price: "$5,499",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop",
      specs: {
        sensor: "45.7MP Full Frame",
        iso: "64-25600",
        autofocus: "493-point AF",
        video: "8K at 30fps",
        weight: "1340g",
        battery: "3300mAh",
        connectivity: "Wi-Fi, Bluetooth, GPS",
        mount: "Z Mount"
      },
      rating: 4.9
    },
    {
      id: 4,
      name: "Fujifilm X-T5",
      price: "$1,699",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop",
      specs: {
        sensor: "40MP APS-C",
        iso: "125-12800",
        autofocus: "425-point AF",
        video: "6K at 30fps",
        weight: "557g",
        battery: "1260mAh",
        connectivity: "Wi-Fi, Bluetooth",
        mount: "X Mount"
      },
      rating: 4.8
    },
    {
      id: 5,
      name: "Sony α7R V",
      price: "$3,898",
      image: "https://images.unsplash.com/photo-1609194298087-ce2b6c9f4500?w=300&h=300&fit=crop",
      specs: {
        sensor: "61MP Full Frame",
        iso: "100-32000",
        autofocus: "693-point AF",
        video: "8K at 24fps",
        weight: "723g",
        battery: "2280mAh",
        connectivity: "Wi-Fi, Bluetooth, GPS",
        mount: "E Mount"
      },
      rating: 4.8
    }
  ];

  const addProduct = (product: any) => {
    if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeProduct = (id: number) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== id));
  };

  const specRows = [
    { key: 'sensor', label: 'Sensor' },
    { key: 'iso', label: 'ISO Range' },
    { key: 'autofocus', label: 'Autofocus' },
    { key: 'video', label: 'Video' },
    { key: 'weight', label: 'Weight' },
    { key: 'battery', label: 'Battery' },
    { key: 'connectivity', label: 'Connectivity' },
    { key: 'mount', label: 'Mount' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCart />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-hero">
              Camera <span className="text-primary">Comparison</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Compare cameras side by side to find the perfect match for your photography needs.
            </p>
          </div>

          {/* Selected Products */}
          <div className="glass-card p-6 rounded-xl mb-8">
            <h2 className="font-semibold text-xl mb-6 flex items-center gap-2">
              <ArrowLeftRight className="h-5 w-5 text-primary" />
              Comparing {selectedProducts.length} Camera{selectedProducts.length !== 1 ? 's' : ''}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {selectedProducts.map((product) => (
                <Card key={product.id} className="camera-card relative">
                  <CardContent className="p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-foreground/60 hover:text-red-500"
                      onClick={() => removeProduct(product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    
                    <div className="text-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg mx-auto mb-3"
                      />
                      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                      <p className="text-primary font-bold text-xl">{product.price}</p>
                      
                      <div className="flex items-center justify-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-foreground/20'
                            }`} 
                          />
                        ))}
                        <span className="text-sm text-foreground/60 ml-1">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Add Product Slot */}
              {selectedProducts.length < 3 && (
                <Card className="camera-card border-dashed border-2 border-border/40">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Plus className="h-8 w-8 text-foreground/40 mx-auto mb-2" />
                      <p className="text-foreground/60">Add Camera</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Comparison Table */}
            {selectedProducts.length > 1 && (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-32">Specification</TableHead>
                      {selectedProducts.map((product) => (
                        <TableHead key={product.id} className="text-center">
                          {product.name}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specRows.map((spec) => (
                      <TableRow key={spec.key}>
                        <TableCell className="font-medium">{spec.label}</TableCell>
                        {selectedProducts.map((product) => (
                          <TableCell key={product.id} className="text-center">
                            {product.specs[spec.key as keyof typeof product.specs]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>

          {/* Available Products */}
          <div className="mb-12">
            <h2 className="font-semibold text-xl mb-6">Add Cameras to Compare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="camera-card group cursor-pointer"
                  onClick={() => addProduct(product)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-primary font-bold">{product.price}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-foreground/20'
                              }`} 
                            />
                          ))}
                          <span className="text-sm text-foreground/60 ml-1">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <Plus className="h-5 w-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;