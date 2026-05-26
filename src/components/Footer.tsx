import { Star, Mail, Globe } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="w-full bg-[#080808] border-t border-neutral-900/40 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Brand statement */}
        <div className="md:col-span-4 space-y-4">
          <h2 className="font-serif text-2xl text-[#f2ca50] tracking-[0.2em] uppercase font-medium">
            L'Oro di Milano
          </h2>
          <p className="font-sans text-xs text-neutral-500 font-light leading-relaxed">
            Via della Spiga, 14, 20121 Milano MI, Italy<br />
            Crafting culinary legacies since 1924, representing Italian haute cuisine with 24k gold.
          </p>
        </div>

        {/* Dynamic navigation links */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-serif text-sm text-on-surface">The Experience</h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500 font-light">
            <button onClick={() => setActiveTab('home')} className="text-left hover:text-primary transition-colors">Atelier Home</button>
            <button onClick={() => setActiveTab('menu')} className="text-left hover:text-primary transition-colors">Elite Menu</button>
            <button onClick={() => setActiveTab('cellar')} className="text-left hover:text-primary transition-colors">Wine Cellar</button>
            <button onClick={() => setActiveTab('reserve')} className="text-left hover:text-primary transition-colors">Table Booking</button>
            <button onClick={() => setActiveTab('private')} className="text-left hover:text-primary transition-colors">Private Dining</button>
          </div>
        </div>

        {/* Social connections and newsletters */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-serif text-sm text-on-surface">Atelier Newsletters</h4>
          <p className="font-sans text-[10px] text-neutral-500 font-light leading-relaxed">
            To receive off-menu releases, rare cellar invitations, and seasonal chef omakase ritual cards.
          </p>
          <div className="flex gap-4">
            <button className="p-2 bg-neutral-950 border border-neutral-900 rounded text-primary hover:text-white transition-colors" title="Follow via Mail">
              <Mail className="w-4 h-4 stroke-[1.5]" />
            </button>
            <button className="p-2 bg-neutral-950 border border-neutral-900 rounded text-primary hover:text-white transition-colors" title="Official Gazette">
              <Globe className="w-4 h-4 stroke-[1.5]" />
            </button>
            <button className="p-2 bg-neutral-950 border border-neutral-900 rounded text-primary hover:text-white transition-colors" title="Member Registry">
              <Star className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 font-sans tracking-wider">
        <span>© 2026 L'ORO DI MILANO. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">PRIVACY POLICY</a>
          <a href="#" className="hover:text-primary">COOKIE SETTINGS</a>
        </div>
      </div>
    </footer>
  );
}
