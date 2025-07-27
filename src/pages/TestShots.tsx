import { useState } from "react";
import { Camera, Download, Heart, Eye, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";

const TestShots = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCamera, setFilterCamera] = useState('all');
  const [filterGenre, setFilterGenre] = useState('all');

  const testShots = [
    {
      id: 1,
      title: "Golden Hour Portrait",
      camera: "Leica M11",
      lens: "Summilux-M 50mm f/1.4",
      settings: "ISO 400, f/1.4, 1/250s",
      photographer: "Elena Rodriguez",
      genre: "Portrait",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
      likes: 324,
      downloads: 89,
      description: "Captured during the golden hour, showcasing the beautiful bokeh and natural skin tones achievable with the Leica M11."
    },
    {
      id: 2,
      title: "Urban Architecture",
      camera: "Canon EOS R5",
      lens: "RF 24-70mm f/2.8L IS USM",
      settings: "ISO 100, f/8, 1/125s",
      photographer: "Marcus Chen",
      genre: "Architecture",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop",
      likes: 567,
      downloads: 123,
      description: "Sharp architectural details captured with excellent dynamic range, demonstrating the R5's capability in challenging lighting."
    },
    {
      id: 3,
      title: "Wildlife in Motion",
      camera: "Nikon Z9",
      lens: "Z 70-200mm f/2.8 VR S",
      settings: "ISO 1600, f/2.8, 1/1000s",
      photographer: "Sarah Thompson",
      genre: "Wildlife",
      image: "https://images.unsplash.com/photo-1441154722652-225c0dd3162e?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1441154722652-225c0dd3162e?w=400&h=300&fit=crop",
      likes: 892,
      downloads: 267,
      description: "Fast-moving wildlife captured with incredible autofocus precision and minimal noise at high ISO."
    },
    {
      id: 4,
      title: "Street Photography",
      camera: "Fujifilm X-T5",
      lens: "XF 35mm f/1.4 R",
      settings: "ISO 800, f/2, 1/500s",
      photographer: "James Wilson",
      genre: "Street",
      image: "https://images.unsplash.com/photo-1517467139951-f5a925c9cd04?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1517467139951-f5a925c9cd04?w=400&h=300&fit=crop",
      likes: 445,
      downloads: 156,
      description: "Candid street moment captured with beautiful film-like color reproduction characteristic of Fujifilm sensors."
    },
    {
      id: 5,
      title: "Macro Details",
      camera: "Sony α7R V",
      lens: "FE 90mm f/2.8 Macro G OSS",
      settings: "ISO 200, f/5.6, 1/160s",
      photographer: "Nina Patel",
      genre: "Macro",
      image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=400&h=300&fit=crop",
      likes: 678,
      downloads: 234,
      description: "Incredible macro detail showcasing the high resolution and sharpness capabilities of the α7R V."
    },
    {
      id: 6,
      title: "Landscape Vista",
      camera: "Canon EOS R5",
      lens: "RF 16-35mm f/2.8L IS USM",
      settings: "ISO 100, f/11, 1/60s",
      photographer: "David Park",
      genre: "Landscape",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      likes: 1234,
      downloads: 445,
      description: "Sweeping landscape with incredible dynamic range and color depth, perfect for large format printing."
    }
  ];

  const cameras = ['Leica M11', 'Canon EOS R5', 'Nikon Z9', 'Fujifilm X-T5', 'Sony α7R V'];
  const genres = ['Portrait', 'Architecture', 'Wildlife', 'Street', 'Macro', 'Landscape'];

  const filteredShots = testShots.filter(shot => {
    const matchesCamera = filterCamera === 'all' || shot.camera === filterCamera;
    const matchesGenre = filterGenre === 'all' || shot.genre === filterGenre;
    return matchesCamera && matchesGenre;
  });

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
              Test <span className="text-primary">Shots</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              See real-world examples shot with our cameras. Each image includes camera settings and technical details.
            </p>
          </div>

          {/* Filters */}
          <div className="glass-card p-6 rounded-xl mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Select value={filterCamera} onValueChange={setFilterCamera}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="All Cameras" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cameras</SelectItem>
                    {cameras.map(camera => (
                      <SelectItem key={camera} value={camera}>{camera}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filterGenre} onValueChange={setFilterGenre}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="All Genres" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Genres</SelectItem>
                    {genres.map(genre => (
                      <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

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

          {/* Gallery */}
          <div className={`grid gap-6 mb-12 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredShots.map((shot) => (
              <Card key={shot.id} className="camera-card group cursor-pointer overflow-hidden">
                <CardContent className={`p-0 ${viewMode === 'list' ? 'flex' : ''}`}>
                  {/* Image */}
                  <Dialog>
                    <DialogTrigger className={`block ${viewMode === 'list' ? 'w-80 flex-shrink-0' : 'w-full'}`}>
                      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'h-48' : 'h-64'}`}>
                        <img 
                          src={shot.thumbnail} 
                          alt={shot.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Eye className="h-8 w-8 text-white" />
                        </div>
                        <Badge className="absolute top-4 left-4 bg-background/80 text-foreground">
                          {shot.genre}
                        </Badge>
                      </div>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                      <div className="w-full h-full flex items-center justify-center bg-background">
                        <img 
                          src={shot.image} 
                          alt={shot.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {shot.title}
                      </h3>
                      <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-red-500">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Camera className="h-4 w-4 text-primary" />
                        <span className="font-medium">{shot.camera}</span>
                      </div>
                      <p className="text-sm text-foreground/60">{shot.lens}</p>
                      <p className="text-sm text-foreground/60">{shot.settings}</p>
                      <p className="text-sm text-foreground/60">by {shot.photographer}</p>
                    </div>

                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                      {shot.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-foreground/60">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{shot.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          <span>{shot.downloads}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="glass border-border/40">
                        <Download className="h-4 w-4 mr-2" />
                        Download
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
              Load More Test Shots
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestShots;