import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lenses from "./pages/Lenses";
import Accessories from "./pages/Accessories";
import TestShots from "./pages/TestShots";
import Compare from "./pages/Compare";
import Search from "./pages/Search";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lenses" element={<Lenses />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/test-shots" element={<TestShots />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/search" element={<Search />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:type/:id" element={<ProductView />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
