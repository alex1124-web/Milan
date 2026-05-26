import { useState } from 'react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Sparkles, Info, ShoppingBag } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'antipasti' | 'primi' | 'secondi' | 'dolci'>('all');
  const [selectedInfoItem, setSelectedInfoItem] = useState<MenuItem | null>(null);

  // Filter items based on active category
  const filteredItems = selectedCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  const categories = [
    { key: 'all', label: 'Complete Tasting' },
    { key: 'antipasti', label: 'Antipasti (Prelude)' },
    { key: 'primi', label: 'Primi (Heart)' },
    { key: 'secondi', label: 'Secondi (Masterpiece)' },
    { key: 'dolci', label: 'Dolci (Finale)' }
  ];

  // Specific high-luxury chef secrets for deep engagement
  const retrieveChefNotes = (item: MenuItem): string => {
    switch(item.id) {
      case 'ant-1':
        return "The Wagyu Beef is hand-sourced from Kagoshima Prefecture and marbled perfectly. We garnish it with gold leaf representing Milan's architectural peaks.";
      case 'pri-1':
        return "Risotto is stirred exclusively using cherry-wood spoons to preserve rice shape. The saffron is imported from hand-seeded fields in Iran to provide unparalleled aromatic warmth.";
      case 'sec-1':
        return "The imperial vein breadcrumbs are made by crushing dry toasted brioche dough with pure metallic edible leaf, giving a brilliant shimmer upon frying.";
      default:
        return "This culinary ritual incorporates molecular accents, premium extra virgin oils from coastal olive groves, and 24k edible gold flakes representing Milanese wealth.";
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-16">
      
      {/* Title block */}
      <div className="text-center space-y-4">
        <span className="font-sans text-xs text-primary font-semibold tracking-[0.45em] uppercase block">
          Il Gusto Dell'Oro
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-on-surface font-light italic">
          Degustazione d'Elite
        </h2>
        <p className="font-sans text-xs text-on-surface-variant max-w-xl mx-auto leading-relaxed font-light">
          A meticulously crafted culinary progression where organic textures are highlighted by gold leaf, and traditional Milanese flavors are redefined.
        </p>
      </div>

      {/* Categories Horizontal Selector */}
      <div className="flex justify-start md:justify-center overflow-x-auto pb-4 gap-6 scrollbar-hide border-b border-neutral-900/40 select-none">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key as any)}
            className={`font-sans text-xs tracking-[0.25em] uppercase py-3 px-1 transition-all duration-300 relative whitespace-nowrap ${
              selectedCategory === cat.key 
                ? 'text-primary font-boldScale' 
                : 'text-neutral-500 hover:text-primary/80'
            }`}
          >
            {cat.label}
            {selectedCategory === cat.key && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#f2ca50] shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
            )}
          </button>
        ))}
      </div>

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="group flex flex-col bg-surface hover:bg-neutral-950 border border-neutral-900 hover:border-primary/20 rounded overflow-hidden transition-all duration-500 shadow-lg"
          >
            {/* Image frame */}
            <div className="relative h-64 overflow-hidden bg-neutral-900">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Luxury Badge overlays */}
              {item.isSignature && (
                <span className="absolute top-4 right-4 bg-[#d4af37] text-black font-sans font-bold text-[9px] tracking-[0.15em] px-3 py-1 uppercase rounded-sm shadow-md flex items-center gap-1.5 animate-pulse">
                  <Sparkles className="w-2.5 h-2.5 fill-black" />
                  SIGNATURE
                </span>
              )}

              {/* Price Tag Overlay */}
              <span className="absolute bottom-4 right-4 font-serif text-lg text-primary bg-black/50 backdrop-blur-md px-3 py-1 rounded">
                € {item.price}
              </span>
            </div>

            {/* Product details */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-4">
                  <h4 className="font-serif text-lg text-on-surface group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h4>
                  <button 
                    onClick={() => setSelectedInfoItem(item)}
                    className="p-1.5 text-on-surface-variant/40 hover:text-primary transition-colors"
                    title="Chef's Insight"
                  >
                    <Info className="w-4.5 h-4.5" />
                  </button>
                </div>
                <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onAddToCart(item)}
                className="w-full py-3 bg-neutral-900 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-black font-sans text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 rounded flex items-center justify-center gap-2 group-hover:shadow-[0_0_12px_rgba(212,175,55,0.06)]"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Experience
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Chef's secrets and background info dialog */}
      {selectedInfoItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-surface-container-high border border-primary/30 max-w-md w-full p-8 space-y-6 relative rounded shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <h4 className="font-serif text-2xl text-[#f2ca50] border-b border-neutral-800 pb-2">
              {selectedInfoItem.name}
            </h4>
            <div className="space-y-4">
              <p className="font-sans text-xs text-on-surface-variant font-light italic leading-relaxed">
                "{retrieveChefNotes(selectedInfoItem)}"
              </p>
              <div className="pt-4 flex items-center justify-between font-serif text-sm">
                <span className="text-neutral-500 font-sans text-xs tracking-wider">PREMIUM COMPOSITION</span>
                <span className="text-primary">€ {selectedInfoItem.price}</span>
              </div>
            </div>
            <div className="pt-4 flex gap-4">
              <button 
                onClick={() => {
                  onAddToCart(selectedInfoItem);
                  setSelectedInfoItem(null);
                }}
                className="flex-1 py-3 bg-primary text-black font-sans text-[10px] tracking-wider uppercase font-semibold"
              >
                Add To Atelier Cart
              </button>
              <button 
                onClick={() => setSelectedInfoItem(null)}
                className="px-6 py-3 border border-white/20 text-on-surface font-sans text-[10px] tracking-wider uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
