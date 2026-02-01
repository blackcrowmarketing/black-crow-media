import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Newspaper, Podcast } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              The Publishing Division of Black Crow Group
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Black Crow Media
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Premium digital products, guides, and resources for the modern entrepreneur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/agency-os" className="w-full sm:w-auto">
                <Button size="lg" className="bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black font-bold text-lg px-8 py-6 h-auto w-full shadow-[0_0_20px_rgba(244,208,63,0.5)] transition-all hover:scale-105">
                  Explore Agency OS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-400 text-lg">Premium resources for ambitious builders.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Agency OS */}
            <Link to="/agency-os">
              <Card className="bg-zinc-900 border-zinc-800 hover:border-yellow-500/50 transition-colors group cursor-pointer h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-yellow-900/30 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Agency OS</h3>
                  <p className="text-gray-400">
                    The complete system architecture for running a Zero-Touch digital agency.
                  </p>
                  <div className="pt-4">
                    <span className="text-yellow-400 font-semibold group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Coming Soon - Newsletter */}
            <Card className="bg-zinc-900 border-zinc-800 opacity-60">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gray-900/30 flex items-center justify-center text-gray-400">
                  <Newspaper className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Newsletter</h3>
                <p className="text-gray-400">
                  Weekly insights on AI, automation, and building digital products.
                </p>
                <div className="pt-4">
                  <span className="text-gray-500 font-semibold">
                    Coming Soon
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon - Podcast */}
            <Card className="bg-zinc-900 border-zinc-800 opacity-60">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gray-900/30 flex items-center justify-center text-gray-400">
                  <Podcast className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Podcast</h3>
                <p className="text-gray-400">
                  Conversations with founders building the future of autonomous business.
                </p>
                <div className="pt-4">
                  <span className="text-gray-500 font-semibold">
                    Coming Soon
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-900/50 border-y border-zinc-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Black Crow Media
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            We are the publishing division of Black Crow Group, dedicated to creating premium digital products 
            that empower entrepreneurs to build high-performance, autonomous businesses. Our flagship product, 
            Agency OS, teaches the system architecture behind "Zero-Touch" operations.
          </p>
          <p className="text-gray-500">
            Built by operators, for operators.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 mb-4">
            <img 
              src="/black-crow-logo.png" 
              alt="Black Crow Logo" 
              className="h-16 w-16 object-contain"
            />
            <p className="text-lg font-semibold text-white">Black Crow Media</p>
          </div>
          <p className="text-sm">© 2026 Black Crow Media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
