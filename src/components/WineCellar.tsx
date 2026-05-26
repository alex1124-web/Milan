import React, { useState } from 'react';
import { WINE_ITEMS } from '../data';
import { WineItem } from '../types';
import { Sparkles, Calendar, Award, Compass, Wine, CheckCircle2 } from 'lucide-react';

export default function WineCellar() {
  const [showTastingModal, setShowTastingModal] = useState(false);
  const [tastingSubmitted, setTastingSubmitted] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [archiveSearch, setArchiveSearch] = useState('');

  // Handle the Private Sommelier Tasting submit
  const handleTastingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTastingSubmitted(true);
    setTimeout(() => {
      setTastingSubmitted(false);
      setShowTastingModal(false);
      setVisitorName('');
    }, 2800);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-24 pb-24">
      {/* Hero Cinematic Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[0.4] brightness-[0.25]" 
            alt="Wine Cellar Vault" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZdJmbVHpR4BAidaJsJAMRt4lis4-nGBieI-x3eMlm39aDLePk-DMEND28o5tkOqfPOPmCN7SSNHcp-LRPJwC8V51pMM4uvgtu4VeOjmxF67JGuQCGM9comQNUtp6zlDLUGCtZ_R_PvnxqN4nP8bGaZn5QemG6CG3I_229KdCIddBSdDF9n5R1X-2KRROcLE1C8C_FbHwUHUvcHW65fn6uGfp3hPQ3nhEYUigOt9dY5lVvcEjUb8Tol7ZwedG9DsIlRbo0up0P1cA" 
          />
          {/* Moody vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl space-y-6">
          <span className="font-sans text-xs text-primary font-semibold tracking-[0.45em] uppercase block">
            EST. 1924
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-on-surface leading-tight font-medium italic">
            Gilded Heritage
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto my-6"></div>
          <p className="font-sans text-base md:text-lg text-on-surface-variant font-light max-w-xl mx-auto leading-relaxed">
            Four levels beneath the streets of Milan lies a sanctuary where time stands still. A silent archive of Italy's liquid gold.
          </p>
        </div>
      </section>

      {/* Main Narrative Block */}
      <section className="px-6 md:px-12 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8">
          <h3 className="font-serif text-3.5xl text-primary font-light">The Silent Custodians</h3>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
            Since the restoration of the Palazzo in 1924, our cellar has remained undisturbed. The unique microclimate, naturally regulated by the subterranean springs of the Navigli, provides the perfect environment for the slow maturation of over twelve thousand rare vintages.
          </p>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
            Every bottle in our <span className="text-primary italic">Archive</span> section is a testament to the relationship between the earth, the vine, and the Milanese spirit. These are not merely wines; they are bottled memories.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => setShowTastingModal(true)}
              className="px-8 py-3.5 border border-primary text-primary hover:bg-[#d4af37]/10 font-sans text-xs tracking-widest uppercase transition-all duration-[600ms]"
            >
              Request Tasting Invitation
            </button>
          </div>
        </div>

        {/* Vintage-filtered old bottle image */}
        <div className="lg:col-span-7 relative h-96 overflow-hidden rounded border border-outline-variant/30 group">
          <img 
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-transform duration-[2000ms] group-hover:scale-105" 
            alt="Old wine bottles in dust" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_pVjmKMpiSy6Ft65If3nDjARZxpg_AmS7rmXlGg265e6koxAEhbcEME5V4w0ruCKUSB4i1poFxuFbY7iUuwH7yfrnrEUPRpt2h8It_TvD8Hiz1o1UG30i-CUqiy3FnXjXOxeGG-73Kygoa-PIXD-dcW9p63Jp9spEvBSvI3QbVlqKPkfcb_Zj4I9oigfNcJvtKvEJQpCQMNLPbJDY2PruIcN8BVShaVlAvijfWHfO6MOVkMRF_26TCcN0MIU5MqkwY4CqmpDjegg" 
          />
        </div>
      </section>

      {/* The Rare Vintage Vault - Interactive Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-900/60 pb-6 gap-6">
          <div className="space-y-2">
            <span className="font-sans text-xs text-primary font-semibold tracking-widest uppercase block">Rare &amp; Exceptional Vintages</span>
            <h3 className="font-serif text-3xl text-on-surface">The Archive Catalog</h3>
          </div>
          <div className="relative max-w-xs w-full">
            <input 
              type="text" 
              placeholder="Search vintage or region..."
              value={archiveSearch}
              onChange={(e) => setArchiveSearch(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 text-xs px-4 py-2.5 rounded text-on-surface focus:ring-0 focus:border-primary placeholder:text-neutral-600 font-sans"
            />
          </div>
        </div>

        {/* Wine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Exclusive invitation card for golden vault */}
          <div className="bg-surface-container-high border border-primary/20 p-8 flex flex-col justify-between space-y-8 rounded shadow-lg">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }} data-icon="star">star</span>
              <span className="font-sans text-[10px] text-neutral-500 tracking-widest uppercase">ARCHIVE NO. 422</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif text-2xl text-on-surface font-light">The Golden Vault</h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
                Access to our most exclusive reserves requires a private invitation. Guided by our head sommelier, discover the hidden stories within our rarest labels.
              </p>
            </div>
            <button 
              onClick={() => setShowTastingModal(true)}
              className="w-full py-3 border border-primary hover:bg-primary hover:text-black font-sans text-[10px] tracking-wider uppercase font-semibold text-primary transition-all duration-500"
            >
              Request Private Tasting
            </button>
          </div>

          {/* Dynamic filtered wine mapping */}
          {WINE_ITEMS.filter(item => 
            item.name.toLowerCase().includes(archiveSearch.toLowerCase()) || 
            item.region?.toLowerCase().includes(archiveSearch.toLowerCase())
          ).map((wine) => (
            <div 
              key={wine.id}
              className="group bg-surface hover:bg-neutral-950 border border-neutral-900 hover:border-primary/20 rounded overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-md"
            >
              <div className="relative h-48 overflow-hidden bg-neutral-900">
                <img 
                  src={wine.image} 
                  alt={wine.name}
                  className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 font-sans text-[10px] tracking-widest text-[#f2ca50] bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                  {wine.archiveNo}
                </span>
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="font-sans text-[10px] tracking-widest text-primary-container font-semibold uppercase">{wine.region}</span>
                  <h4 className="font-serif text-lg text-on-surface">{wine.name}</h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
                    {wine.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-900/60 flex justify-between items-center text-xs">
                  <span className="text-neutral-500 font-sans tracking-wide italic">{wine.limitation}</span>
                  <span className="font-serif text-primary text-base">€ {wine.price}</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Atmospheric Quote Component */}
      <section className="py-20 w-full flex flex-col items-center justify-center text-center bg-surface-container-lowest border-t border-b border-neutral-900/60">
        <div className="max-w-3xl px-6 space-y-6 flex flex-col items-center">
          <Wine className="w-10 h-10 text-primary-container" />
          <blockquote className="font-serif text-2xl md:text-3xl font-light italic text-on-surface leading-relaxed">
            "Wine is the only artwork you can drink, the only heritage you can taste, and the only history that improves with the passing of years."
          </blockquote>
          <span className="font-sans text-[10px] tracking-widest text-primary font-bold uppercase block">
            — Maestro della Cantina, L'Oro di Milano
          </span>
        </div>
      </section>

      {/* Interactive Tasting Modal */}
      {showTastingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-surface-container-high border border-primary/30 max-w-md w-full p-8 space-y-6 relative rounded shadow-[0_0_30px_rgba(212,175,55,0.15)]Invitation hover:scale-101">
            <h4 className="font-serif text-2xl text-[#f2ca50] border-b border-neutral-800 pb-2 flex items-center gap-3">
              <Award className="w-6 h-6 stroke-[1.2]" />
              The Sommelier's Invitation
            </h4>

            {tastingSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#f2ca50] mx-auto animate-bounce" />
                <h5 className="font-serif text-xl text-on-surface">Invitation Dispatched</h5>
                <p className="font-sans text-xs text-on-surface-variant font-light">
                  Thank you {visitorName}. Our head sommelier will review your credentials and reach out shortly to arrange your tasting.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTastingSubmit} className="space-y-6">
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
                  Our private cellar vault tasting features an intimate tour of exclusive pre-war vintages led by an expert sommelier. Please advise your name and preferred ritual date.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block font-sans text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Signore / Signora Name</label>
                    <input 
                      required
                      type="text" 
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      placeholder="e.g., Countess Visconti"
                      className="w-full bg-neutral-950 border-0 border-b border-outline text-xs px-1 py-3 text-on-surface focus:ring-0 focus:border-primary focus:transition-colors placeholder:text-neutral-700 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Preferred Tasting Window</label>
                    <input 
                      required
                      type="date"
                      className="w-full bg-neutral-950 border-0 border-b border-outline text-xs px-1 py-3 text-on-surface focus:ring-0 focus:border-primary transition-colors font-sans"
                    />
                  </div>
                </div>
                <div className="pt-4 flex gap-4">
                  <button 
                    type="submit"
                    className="flex-1 py-3 bg-primary text-black font-sans text-[10px] tracking-wider uppercase font-semibold"
                  >
                    Request Entry Passage
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowTastingModal(false)}
                    className="px-6 py-3 border border-white/20 text-on-surface font-sans text-[10px] tracking-wider uppercase"
                  >
                    Dismiss
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
