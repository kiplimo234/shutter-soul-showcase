import { useState } from "react";
import { Plus, Minus, X, ArrowRight, ShoppingBag, Truck, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Leica M11",
      price: 8295,
      originalPrice: 8995,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1495707902641-75ce1028f6d2?w=200&h=200&fit=crop",
      description: "Full-frame rangefinder with 60MP BSI CMOS sensor",
      inStock: true,
      shipping: "Free"
    },
    {
      id: 2,
      name: "Canon RF 85mm f/1.2L USM",
      price: 2699,
      originalPrice: 2899,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=200&fit=crop",
      description: "Professional portrait lens with beautiful bokeh",
      inStock: true,
      shipping: "Free"
    },
    {
      id: 3,
      name: "Peak Design Everyday Backpack",
      price: 279,
      originalPrice: 299,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
      description: "Weather-resistant camera backpack",
      inStock: true,
      shipping: "$15"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'shuttersoul10') {
      setIsPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const shipping = cartItems.some(item => item.shipping !== "Free") ? 15 : 0;
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.0875; // 8.75% tax
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-hero">
              Shopping <span className="text-primary">Cart</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Review your items and proceed to checkout.
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 text-foreground/20 mx-auto mb-6" />
              <h2 className="font-display font-bold text-2xl mb-4">Your cart is empty</h2>
              <p className="text-foreground/60 mb-8">Start shopping to add items to your cart</p>
              <Button className="btn-premium">
                Continue Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        {/* Product Image */}
                        <div className="w-24 h-24 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{item.name}</h3>
                              <p className="text-sm text-foreground/60">{item.description}</p>
                              {item.inStock ? (
                                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 mt-2">
                                  In Stock
                                </Badge>
                              ) : (
                                <Badge variant="destructive" className="mt-2">
                                  Out of Stock
                                </Badge>
                              )}
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="text-foreground/60 hover:text-red-500"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex items-center justify-between">
                            {/* Price */}
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-lg text-primary">
                                ${item.price.toLocaleString()}
                              </span>
                              <span className="text-sm text-foreground/50 line-through">
                                ${item.originalPrice.toLocaleString()}
                              </span>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-foreground/60">Qty:</span>
                              <div className="flex items-center gap-1">
                                <Button 
                                  variant="outline" 
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, -1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                <Button 
                                  variant="outline" 
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          {/* Shipping */}
                          <div className="flex items-center gap-2 text-sm">
                            <Truck className="h-4 w-4 text-primary" />
                            <span className="text-foreground/60">
                              Shipping: {item.shipping === "Free" ? "Free" : item.shipping}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Promo Code */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Input
                        placeholder="Enter promo code (try: SHUTTERSOUL10)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={isPromoApplied}
                      />
                      <Button 
                        variant="outline" 
                        onClick={applyPromoCode}
                        disabled={isPromoApplied || !promoCode}
                      >
                        {isPromoApplied ? 'Applied' : 'Apply'}
                      </Button>
                    </div>
                    {isPromoApplied && (
                      <p className="text-green-400 text-sm mt-2">
                        ✓ Promo code applied - 10% discount!
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="glass-card sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Summary Lines */}
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Subtotal ({cartItems.length} items)</span>
                        <span>${subtotal.toLocaleString()}</span>
                      </div>
                      
                      {savings > 0 && (
                        <div className="flex justify-between text-green-400">
                          <span>You saved</span>
                          <span>-${savings.toLocaleString()}</span>
                        </div>
                      )}
                      
                      {isPromoApplied && (
                        <div className="flex justify-between text-green-400">
                          <span>Promo discount (10%)</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>

                    {/* Security Features */}
                    <div className="space-y-2 text-sm text-foreground/60">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>SSL Encrypted Checkout</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        <span>Free shipping on orders over $500</span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button className="w-full btn-premium text-lg py-6">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    {/* Continue Shopping */}
                    <Button variant="outline" className="w-full glass border-border/40">
                      Continue Shopping
                    </Button>

                    {/* Payment Methods */}
                    <div className="text-center pt-4">
                      <p className="text-sm text-foreground/60 mb-2">We accept</p>
                      <div className="flex justify-center gap-2 text-xs text-foreground/60">
                        <span>Visa</span>
                        <span>•</span>
                        <span>Mastercard</span>
                        <span>•</span>
                        <span>PayPal</span>
                        <span>•</span>
                        <span>Apple Pay</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;