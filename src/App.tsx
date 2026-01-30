import { Terminal, Cpu, Shield, Zap, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono p-4 md:p-8 selection:bg-neon-green selection:text-black">
      {/* Header / Nav */}
      <header className="flex justify-between items-center mb-16 border-b border-white/20 pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-neon-green" />
          <span className="text-xl font-bold tracking-tighter">BLACK_CROW_MEDIA</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-neon-green transition-colors">./manifesto</a>
          <a href="#" className="hover:text-neon-green transition-colors">./curriculum</a>
          <a href="#" className="hover:text-neon-green transition-colors">./pricing</a>
        </nav>
        <button className="border border-white/20 px-4 py-2 text-sm hover:bg-neon-green hover:text-black hover:border-neon-green transition-all cursor-pointer">
          ACCESS_TERMINAL
        </button>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-block px-2 py-1 bg-white/10 text-xs border border-white/20 text-neon-green mb-4">
              v2.0 SYSTEM ONLINE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              THE AGENCY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-600">OPERATING SYSTEM</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              Run a one-person digital agency at scale. Zero-touch deployment. Self-hosted infrastructure. Autonomous AI workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-neon-green text-black px-8 py-4 font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 group cursor-pointer">
                INITIALIZE_SYSTEM
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 px-8 py-4 font-bold hover:bg-white/5 transition-colors text-gray-300 cursor-pointer">
                READ_DOCS
              </button>
            </div>
          </div>
          
          {/* Terminal Graphic */}
          <div className="border border-white/20 bg-black/50 backdrop-blur-sm p-1 rounded-sm shadow-2xl shadow-neon-green/10">
            <div className="bg-white/10 p-2 flex gap-2 items-center border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <div className="ml-2 text-xs text-gray-500">bash — 80x24</div>
            </div>
            <div className="p-6 font-mono text-sm space-y-2 h-[400px] overflow-hidden">
              <div className="text-gray-500">$ ./init_agency.sh</div>
              <div className="text-green-500">✓ Loading Master Prompt v2.1...</div>
              <div className="text-green-500">✓ Connecting to Hostinger VPS (82.29.190.177)...</div>
              <div className="text-green-500">✓ Authenticating GitHub Runners...</div>
              <div className="text-blue-400">ℹ Deploying 5 client sites in parallel...</div>
              <div className="pl-4 border-l border-white/10 my-2 space-y-1 text-gray-400">
                <div>→ stephbrowncoaching.co.uk [3000] ... ONLINE</div>
                <div>→ blackcrowmarketing.co.uk [3001] ... ONLINE</div>
                <div>→ e3global.info [3002] ............ ONLINE</div>
                <div>→ highgroundsecurity.co.uk [3003] . ONLINE</div>
                <div>→ youraiprofitpilot.com [3004] .... ONLINE</div>
              </div>
              <div className="text-neon-green animate-pulse">_ Awaiting next command...</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="border border-white/10 p-8 hover:border-neon-green/50 transition-colors group">
            <Cpu className="w-10 h-10 text-gray-500 group-hover:text-neon-green mb-6 transition-colors" />
            <h3 className="text-xl font-bold mb-4">Autonomous Agents</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stop coding every line. Feed the Master Prompt to the AI and watch it build, deploy, and fix issues automatically.
            </p>
          </div>
          <div className="border border-white/10 p-8 hover:border-neon-green/50 transition-colors group">
            <Shield className="w-10 h-10 text-gray-500 group-hover:text-neon-green mb-6 transition-colors" />
            <h3 className="text-xl font-bold mb-4">Trojan Horse Runners</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bypass firewalls with self-hosted GitHub runners. Push to main and let the infrastructure update itself. Zero FTP.
            </p>
          </div>
          <div className="border border-white/10 p-8 hover:border-neon-green/50 transition-colors group">
            <Zap className="w-10 h-10 text-gray-500 group-hover:text-neon-green mb-6 transition-colors" />
            <h3 className="text-xl font-bold mb-4">Seed Card Memory</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Never lose context. Project-specific memory files allow any agent to pick up exactly where the last one left off.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-12 pb-8 text-center text-gray-600 text-sm">
        <p>© 2026 BLACK CROW MEDIA. SYSTEM STATUS: NORMAL.</p>
      </footer>
    </div>
  );
}

export default App;
