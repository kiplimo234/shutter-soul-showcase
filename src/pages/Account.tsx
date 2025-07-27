import { useState } from "react";
import { User, Camera, Heart, Settings, ShoppingBag, MapPin, Phone, Mail, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import FloatingCart from "@/components/FloatingCart";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Alex Chen",
    email: "alex.chen@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Photography Lane, San Francisco, CA 94102"
  });

  const recentOrders = [
    {
      id: "ORD-2024-001",
      date: "Jan 15, 2024",
      status: "Delivered",
      total: "$8,295",
      items: [
        { name: "Leica M11", image: "https://images.unsplash.com/photo-1495707902641-75ce1028f6d2?w=100&h=100&fit=crop" }
      ]
    },
    {
      id: "ORD-2024-002",
      date: "Jan 8, 2024",
      status: "Shipped",
      total: "$2,699",
      items: [
        { name: "Canon RF 85mm f/1.2L USM", image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=100&h=100&fit=crop" }
      ]
    },
    {
      id: "ORD-2024-003",
      date: "Dec 28, 2023",
      status: "Processing",
      total: "$1,299",
      items: [
        { name: "Peak Design Backpack", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop" }
      ]
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Nikon Z9",
      price: "$5,499",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=200&fit=crop",
      inStock: true
    },
    {
      id: 2,
      name: "Sony FE 24-70mm f/2.8 GM II",
      price: "$2,299",
      image: "https://images.unsplash.com/photo-1606983340619-49a1c07c4671?w=200&h=200&fit=crop",
      inStock: false
    },
    {
      id: 3,
      name: "Manfrotto Carbon Fiber Tripod",
      price: "$549",
      image: "https://images.unsplash.com/photo-1606983340882-b55f741b6e6e?w=200&h=200&fit=crop",
      inStock: true
    }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Shipped': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Processing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCart />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-hero">
              My <span className="text-primary">Account</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Manage your profile, orders, and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card className="glass-card sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{userInfo.name}</h3>
                    <p className="text-foreground/60 text-sm">{userInfo.email}</p>
                    <Badge variant="secondary" className="mt-2 bg-primary/20 text-primary border-primary/30">
                      Premium Member
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <MapPin className="h-4 w-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Camera className="h-4 w-4" />
                      <span>12 Cameras Owned</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <ShoppingBag className="h-4 w-4" />
                      <span>34 Orders Placed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 bg-secondary/50">
                  <TabsTrigger value="profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Orders
                  </TabsTrigger>
                  <TabsTrigger value="wishlist" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Wishlist
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Settings
                  </TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile">
                  <Card className="glass-card">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Personal Information</CardTitle>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                      >
                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                        <Edit className="h-4 w-4 ml-2" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            value={userInfo.address}
                            onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentOrders.map((order) => (
                          <div key={order.id} className="glass p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h4 className="font-semibold">{order.id}</h4>
                                <p className="text-sm text-foreground/60">{order.date}</p>
                              </div>
                              <div className="text-right">
                                <Badge className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                                <p className="font-bold text-primary mt-1">{order.total}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              {order.items.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-10 h-10 object-cover rounded"
                                  />
                                  <span className="text-sm">{item.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Wishlist Tab */}
                <TabsContent value="wishlist">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>My Wishlist</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {wishlistItems.map((item) => (
                          <div key={item.id} className="glass p-4 rounded-lg flex items-center gap-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.name}</h4>
                              <p className="text-primary font-bold">{item.price}</p>
                              <Badge 
                                variant={item.inStock ? "secondary" : "destructive"}
                                className="text-xs mt-1"
                              >
                                {item.inStock ? "In Stock" : "Out of Stock"}
                              </Badge>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button size="sm" className="btn-premium" disabled={!item.inStock}>
                                Add to Cart
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                                Remove
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-3">Notifications</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span>Email notifications</span>
                            <Button variant="outline" size="sm">Enable</Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>SMS notifications</span>
                            <Button variant="outline" size="sm">Enable</Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Marketing emails</span>
                            <Button variant="outline" size="sm">Disable</Button>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-medium mb-3">Security</h4>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start">
                            Change Password
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            Two-Factor Authentication
                          </Button>
                          <Button variant="destructive" className="w-full justify-start">
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;