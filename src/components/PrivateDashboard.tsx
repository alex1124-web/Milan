import React, { useState } from 'react';
import { Reservation, MenuItem } from '../types';
import { Award, Star, History, Sparkles, UserCheck, ShieldAlert } from 'lucide-react';

interface PrivateDashboardProps {
  reservations: Reservation[];
  onAddToCart: (item: MenuItem) => void;
}

export default function PrivateDashboard({ reservations, onAddToCart }: PrivateDashboardProps) {
  const [isMember, setIsMember] = useState(false);
  const [memberName, setMemberName] = useState('');
  const [joinSubmitted, setJoinSubmitted] = useState(false);

  // Exclusive secret menu available only for Elite Members
  const EXCLUSIVE_DISHES: MenuItem[] = [
    {
      id: 'exc-1',
      name: "Elixir d'Atelier #9",
      price: 90,
      description: "Infused golden saffron cordial, absolute grain extract, white truffle water, and a thin gold leaf float. Served under an apple-wood smoke dome.",
      category: 'antipasti',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'exc-2',
      name: "Soffio al Tartufo d'Oro",
      price: 85,
      description: "Soufflé of delicate Alba truffle pulp, 24k edible gold dust crystals, and single-origin dark cacao cream pouring sauce.",
      category: 'dolci',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80'
    }
  ];

  const handleJoinCircle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName) return;
    setJoinSubmitted(true);
    setTimeout(() => {
      setIsMember(true);
      setJoinSubmitted(false);
    }, 1800);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-16">
      
      {/* Title Header */}
      <div className="text-center space-y-4">
        <span className="font-sans text-xs text-primary font-semibold tracking-[0.45em] uppercase block">
          Il Club Privato
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-on-surface font-light">
          The Elite Circle
        </h2>
        <div className="w-16 h-[1px] bg-primary mx-auto my-6"></div>
      </div>

      {isMember ? (
        // Render Gorgeous Gold Membership Pass & Private Member Experience
        <div className="space-y-16 animate-fadeIn">
          {/* Member Card */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-neutral-900 via-zinc-950 to-stone-900 border-2 border-primary p-8 md:p-12 rounded shadow-2xl relative overflow-hidden flex flex-col justify-between h-72 md:h-80 shadow-[0_0_35px_rgba(212,175,55,0.18)]">
            {/* Elegant Golden Metallic Badge Overlay */}
            <img 
              className="absolute right-0 bottom-0 md:-right-4 md:-bottom-4 w-72 h-72 object-contain opacity-20 pointer-events-none mix-blend-screen select-none"
              src="/src/assets/images/member_badge_gold_1779770887157.png"
              alt="Elite Member Gold Crest"
              referrerPolicy="no-referrer"
            />
            
            <div className="flex justify-between items-start z-10">
              <div className="space-y-1">
                <span className="font-sans text-[9px] tracking-[0.35em] text-primary font-bold uppercase block">MEMBRUM AUREUM</span>
                <h4 className="font-serif text-2xl text-on-surface">L'Oro di Milano</h4>
              </div>
              <Star className="w-8 h-8 text-[#f2ca50] fill-[#f2ca50]" />
            </div>

            <div className="flex justify-between items-end border-t border-neutral-900/80 pt-6">
              <div className="space-y-1">
                <span className="text-neutral-500 font-sans text-[8px] block">MEMBER NAME</span>
                <span className="text-[#f2ca50] font-semibold text-lg tracking-wide uppercase">{memberName}</span>
              </div>
              <div className="text-right space-y-1">
                <span className="text-neutral-500 font-sans text-[8px] block">ESTABLISHED</span>
                <span className="text-on-surface font-mono text-sm">MCXXIV</span>
              </div>
            </div>
          </div>

          {/* Exclusive off-menu rituals block */}
          <div className="space-y-8 pt-8">
            <div className="text-center space-y-2">
              <span className="font-sans text-xs text-primary font-semibold tracking-widest uppercase block">Off-Menu Rituals</span>
              <h3 className="font-serif text-3xl text-on-surface">The Member's Vault</h3>
              <p className="font-sans text-xs text-on-surface-variant font-light max-w-xs mx-auto leading-normal pb-4">
                Exclusive high-end recipes reserved solely for cardholders and their accompanied guests.
              </p>
            </div>

            {/* Exclusive dishes list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {EXCLUSIVE_DISHES.map((dish) => (
                <div 
                  key={dish.id}
                  className="flex flex-col md:flex-row bg-surface border border-primary/20 rounded overflow-hidden shadow-lg transition-transform duration-500 hover:scale-102"
                >
                  <div className="md:w-1/2 h-56 bg-neutral-900">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover grayscale-[0.1]"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-6">
                    <div className="space-y-2">
                      <span className="font-sans text-[9px] tracking-widest text-[#f2ca50] bg-black/40 px-2 py-1 rounded">ELITE SELECTION</span>
                      <h4 className="font-serif text-lg text-on-surface">{dish.name}</h4>
                      <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-primary text-base">€ {dish.price}</span>
                      <button
                        onClick={() => onAddToCart(dish)}
                        className="px-4 py-2 bg-primary text-black font-sans text-[10px] tracking-wider uppercase font-semibold"
                      >
                        Order Recipe
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Non-members enrollment form
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-3xl text-on-surface font-light leading-snug">
              Unlock the Ultimate Culinary Sanctuary
            </h3>
            <div className="w-12 h-[1px] bg-primary"></div>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
              By joining the exclusive Elite Circle at L'Oro di Milano, you receive immediate access to the private wine cellars, secret off-menu gold recipes, and guaranteed priority table placement.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 items-center text-xs text-on-surface-variant">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Privileged custom table-side chef services.</span>
              </div>
              <div className="flex gap-3 items-center text-xs text-on-surface-variant">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Zero service fees for all reservations.</span>
              </div>
            </div>
          </div>

          {/* Join Form Card */}
          <div className="lg:col-span-6 bg-surface-container-high border border-primary/20 p-8 md:p-12 rounded shadow-lg invitation-shadow text-center">
            {joinSubmitted ? (
               <div className="py-8 space-y-4">
                 <Sparkles className="w-12 h-12 text-[#f2ca50] mx-auto animate-spin" />
                 <h5 className="font-serif text-xl text-on-surface">Engraving Gold Card...</h5>
                 <p className="font-sans text-xs text-on-surface-variant font-light">
                   Please wait while we register your credentials into the Milanese Archive...
                 </p>
               </div>
            ) : (
              <form onSubmit={handleJoinCircle} className="space-y-8">
                <h4 className="font-serif text-2xl text-[#f2ca50] pb-2 border-b border-neutral-900">Atelier Registration</h4>
                <div className="space-y-4">
                  <div className="group text-left">
                    <label className="block font-sans text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Signore / Signora Surname</label>
                    <input 
                      required
                      type="text"
                      value={memberName}
                      onChange={(e) => setMemberName(e.target.value)}
                      placeholder="e.g., Visconti"
                      className="w-full bg-transparent border-0 border-b border-outline text-xs py-3.5 focus:ring-0 focus:border-primary transition-colors text-on-surface font-sans"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-black font-sans text-xs tracking-[0.25em] font-semibold uppercase hover:bg-amber-300 transition-colors shadow-lg"
                >
                  Join the Circle
                </button>
              </form>
            )}
          </div>

        </div>
      )}

      {/* Historically recorded reservations list */}
      <section className="max-w-5xl mx-auto w-full pt-16">
        <div className="flex gap-3 items-center border-b border-neutral-900 pb-3 mb-6">
          <History className="w-5 h-5 text-primary" />
          <h4 className="font-serif text-xl text-on-surface">Your Reservation Ledger</h4>
        </div>

        {reservations.length === 0 ? (
          <div className="text-center py-12 bg-neutral-950 border border-neutral-900 rounded p-8">
            <ShieldAlert className="w-10 h-10 text-neutral-600 mx-auto mb-4" />
            <p className="font-serif text-base text-neutral-400 italic">No bookings found on file</p>
            <p className="font-sans text-[10px] text-neutral-600 mt-1 max-w-xs mx-auto">
              Bookings made during this browser session are securely rendered inside this ledger.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {reservations.map((res) => (
              <div 
                key={res.id}
                className="bg-neutral-950 border border-neutral-900/60 p-6 rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div>
                  <h5 className="font-serif text-lg text-primary mb-1">{res.fullName}</h5>
                  <p className="text-xs text-on-surface-variant font-light font-sans">
                    Ritual: <span className="text-on-surface">{res.ritual}</span> • Size: <span className="text-on-surface">{res.partySize}</span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 text-right text-xs">
                  <span className="text-[#f2ca50] font-sans font-semibold uppercase tracking-wider">{res.time}</span>
                  <span className="text-neutral-500 font-sans text-[10px]">{res.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
