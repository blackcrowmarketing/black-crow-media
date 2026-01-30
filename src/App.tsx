import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Brain, Server } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              The Missing Manual for Power Users
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Stop Coding. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Start Architecting.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              The "Zero-Touch" System to Run a 6-Figure Agency from Your Phone.
              Replace your entire IT department with a single text file.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg px-8 py-6 h-auto w-full sm:w-auto shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:scale-105">
                Get The Guide - $27
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-500 mt-2 sm:mt-0">
                Launch Price (Increasing to $47 soon)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-zinc-900/50 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                You didn’t buy AI to chat with a bot. <br />
                <span className="text-gray-400">You bought it to build an empire.</span>
              </h2>
              <p className="text-lg text-gray-400">
                But right now, you’re stuck. You’re stuck copy-pasting code. You’re stuck debugging "localhost" errors. You’re stuck explaining to clients why their site is hosted on a temp link.
              </p>
              <p className="text-lg text-gray-400 font-semibold border-l-4 border-cyan-500 pl-4">
                You aren’t an Agency Director yet. You’re just a freelancer with a faster keyboard.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/agency-os/preface_agent_vs_chatbot.png" 
                alt="Agent vs Chatbot" 
                className="rounded-xl shadow-2xl border border-zinc-800"
              />
              <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg border border-zinc-800 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-sm font-mono text-gray-400">Status: Manual Mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Agency OS Architecture</h2>
            <p className="text-gray-400 text-lg">This isn’t a prompt guide. It’s a System Architecture.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Module 1 */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-cyan-500/50 transition-colors group">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-cyan-900/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">The Master Prompt</h3>
                <p className="text-gray-400">
                  Stop typing the same instructions. Install a "Constitution" that forces the AI to code like a Senior Engineer, every single time.
                </p>
              </CardContent>
            </Card>

            {/* Module 2 */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-cyan-500/50 transition-colors group">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">The Seed Card</h3>
                <p className="text-gray-400">
                  The secret to "Infinite Context." Store your project’s DNA in a single file so you never have to repeat yourself again.
                </p>
              </CardContent>
            </Card>

            {/* Module 3 */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-cyan-500/50 transition-colors group">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Zero-Touch Deploy</h3>
                <p className="text-gray-400">
                  The "Trojan Horse" strategy. Deploy to real servers (DigitalOcean, AWS) without lifting a finger.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Infographic Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 order-2 md:order-1">
              <img 
                src="/images/agency-os/infographic_agency_os.png" 
                alt="Agency OS Stack" 
                className="w-full rounded-lg shadow-2xl border border-zinc-800 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                What You Will Build
              </h2>
              <div className="space-y-6">
                {[
                  "Module 1: The Master Prompt (The Constitution)",
                  "Module 2: The Seed Card Protocol (Memory)",
                  "Module 3: The Infrastructure (The Trojan Horse)",
                  "Module 4: Zero-Touch Deployment (Workflow)",
                  "Module 5: Safety Guardrails (Risk Management)",
                  "Module 6: The Agency Dashboard (Scale)",
                  "Module 7: Universal Application (Beyond Websites)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-black/50 border border-zinc-800">
                    <div className="h-8 w-8 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 font-mono text-sm">
                      {i + 1}
                    </div>
                    <span className="text-lg font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Guarantee */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
            <Shield className="h-12 w-12 text-cyan-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">The "Architect" Guarantee</h3>
            <p className="text-gray-400 text-lg mb-8">
              If you don’t save at least 10 hours of work in your first week using the Seed Card alone, I’ll refund every penny. No questions asked.
            </p>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg w-full py-6">
                Get Instant Access - $27
              </Button>
              <p className="text-sm text-gray-500">Secure Payment via Stripe • Instant Download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p className="mb-4">A Black Crow Media Production</p>
          <p className="text-sm">© 2024 Black Crow Media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
