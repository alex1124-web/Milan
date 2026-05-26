import { useState } from 'react';
import { ShoppingBag, Star, BookOpen, Warehouse, Calendar, User, Menu } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onCartClick: () => void;
  onMenuToggle: () => void;
}

export default function Header({ activeTab, setActiveTab, cartCount, onCartClick, onMenuToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-40 bg-black/60 backdrop-blur-xl border-b border-neutral-900/40">
      <div className="flex justify-between items-center px-6 md:px-12 h-20 max-w-7xl mx-auto">
        
        {/* Left: Hamburger menu for more info */}
        <button 
          onClick={onMenuToggle}
          className="text-primary hover:text-white transition-colors duration-300 scale-95 hover:scale-100 p-2"
          title="Atelier Insights"
        >
          <Menu className="w-6 h-6 stroke-[1.5]" />
        </button>

        {/* Center: Brand Identity */}
        <div className="flex flex-col items-center justify-center cursor-pointer select-none" onClick={() => setActiveTab('welcome')}>
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-[#f2ca50] font-medium uppercase drop-shadow">
            L'Oro di Milano
          </h1>
        </div>

        {/* Right Nav & Shopping Bag */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveTab('home')}
              className={`font-sans text-xs tracking-[0.3em] uppercase py-2 transition-all ${
                activeTab === 'home' ? 'text-primary border-b border-primary font-semibold' : 'text-neutral-400 hover:text-primary'
              }`}
            >
              Atelier
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className={`font-sans text-xs tracking-[0.3em] uppercase py-2 transition-all ${
                activeTab === 'menu' ? 'text-primary border-b border-primary font-semibold' : 'text-neutral-400 hover:text-primary'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => setActiveTab('cellar')}
              className={`font-sans text-xs tracking-[0.3em] uppercase py-2 transition-all ${
                activeTab === 'cellar' ? 'text-primary border-b border-primary font-semibold' : 'text-neutral-400 hover:text-primary'
              }`}
            >
              Cellar
            </button>
            <button
              onClick={() => setActiveTab('reserve')}
              className={`font-sans text-xs tracking-[0.3em] uppercase py-2 transition-all ${
                activeTab === 'reserve' ? 'text-primary border-b border-primary font-semibold' : 'text-neutral-400 hover:text-primary'
              }`}
            >
              Reserve
            </button>
            <button
              onClick={() => setActiveTab('private')}
              className={`font-sans text-xs tracking-[0.3em] uppercase py-2 transition-all ${
                activeTab === 'private' ? 'text-primary border-b border-primary font-semibold' : 'text-neutral-400 hover:text-primary'
              }`}
            >
              Private
            </button>
          </nav>

          {/* Shopping Bag Button with Glowing Badge */}
          <button 
            onClick={onCartClick}
            className="text-primary hover:text-amber-300 transition-all duration-300 relative p-2"
          >
            <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-600 via-primary to-yellow-500 text-black font-semibold text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-[0_0_8px_rgba(212,175,55,0.8)] border border-black/50">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
