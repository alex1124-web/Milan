import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Header from './components/Header';
import AtelierHome from './components/AtelierHome';
import MenuSection from './components/MenuSection';
import WineCellar from './components/WineCellar';
import ReservationForm from './components/ReservationForm';
import PrivateDashboard from './components/PrivateDashboard';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { MenuItem, Reservation, CartItem } from './types';
import { Sparkles, Compass, Milestone, CheckCircle2, Star, Mail, Info } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('welcome');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Load reservations from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('milan_reservations');
    if (saved) {
      try {
        setReservations(JSON.parse(saved));
      } catch (err) {
        console.error('Error parsing stored bookings:', err);
      }
    }
  }, []);

  const handleEnterAtelier = () => {
    setActiveTab('home');
  };

  // Add Item to Cart (Increments quantity if already exists)
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((c) => c.menuItem.id === item.id);
      if (existing) {
        return prev.map((c) => 
          c.menuItem.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
    setIsCartOpen(true); // Open luxury drawer on add
  };

  // Update Cart quantities
  const handleUpdateQuantity = (itemId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) => 
      prev.map((c) => c.menuItem.id === itemId ? { ...c, quantity: qty } : c)
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((c) => c.menuItem.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Add new Booking
  const handleAddReservation = (res: Reservation) => {
    const updated = [...reservations, res];
    setReservations(updated);
    localStorage.setItem('milan_reservations', JSON.stringify(updated));
  };

  const menuCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-primary/20 flex flex-col justify-between">
      
      {/* 1. Welcoming Screen (Movie Intro Page) */}
      {activeTab === 'welcome' && (
        <WelcomeScreen onEnter={handleEnterAtelier} />
      )}

      {/* Main app render only when splash bypassed */}
      {activeTab !== 'welcome' && (
        <>
          {/* Header element */}
          <Header 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            cartCount={menuCount} 
            onCartClick={() => setIsCartOpen(!isCartOpen)}
            onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          />

          {/* Core Content Switching Routing */}
          <main className="pt-20 flex-grow w-full">
            <div className="animate-fadeIn">
              {activeTab === 'home' && (
                <AtelierHome 
                  onReserveClick={() => setActiveTab('reserve')} 
                  onExploreMenu={() => setActiveTab('menu')} 
                />
              )}
              {activeTab === 'menu' && (
                <MenuSection onAddToCart={handleAddToCart} />
              )}
              {activeTab === 'cellar' && (
                <WineCellar />
              )}
              {activeTab === 'reserve' && (
                <ReservationForm onAddReservation={handleAddReservation} />
              )}
              {activeTab === 'private' && (
                <PrivateDashboard 
                  reservations={reservations} 
                  onAddToCart={handleAddToCart} 
                />
              )}
            </div>
          </main>

          {/* Cart Sliding Drawer Container */}
          <CartDrawer 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            cartItems={cartItems} 
            onUpdateQuantity={handleUpdateQuantity} 
            onRemoveItem={handleRemoveItem} 
            onClearCart={handleClearCart} 
          />

          {/* Info Sidebars */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-start animate-fadeIn"
              onClick={() => setIsSidebarOpen(false)}
            >
              <div 
                className="bg-surface-container-high w-80 h-full p-8 border-r border-neutral-900/60 shadow-2xl flex flex-col justify-between relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-8">
                  <h3 className="font-serif text-2xl text-[#f2ca50] border-b border-neutral-800 pb-2">Atelier Insights</h3>
                  <div className="space-y-6 text-xs font-light text-on-surface-variant leading-relaxed">
                    <div className="space-y-1">
                      <p className="font-sans font-bold text-on-surface">The 24K Philosophy</p>
                      <p>At L'Oro di Milano, gold is used not only as a visual crowning but as a catalyst that enhances Saffron and Alba mushroom flavors, based on ancient Milanese lore.</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-sans font-bold text-on-surface">The Vault Access</p>
                      <p>Vintages over 50 years are protected under argon gas domes. Premium tastings require somatic pre-selection via our booking ledger system.</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-full py-3 border border-white/15 hover:border-primary text-on-surface font-sans text-[10px] tracking-wider uppercase font-semibold"
                >
                  Return to Table
                </button>
              </div>
            </div>
          )}

          {/* Shared Luxury Footer */}
          <Footer setActiveTab={setActiveTab} />

          {/* Mobile Bottom Navigation (Visible on compact views only) */}
          <nav className="md:hidden fixed bottom-row bottom-0 left-0 w-full z-30 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-t border-outline-variant/20 flex justify-around items-center pt-2 pb-6 px-6">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center justify-center transition-all ${
                activeTab === 'home' ? 'text-primary scale-105 font-semibold' : 'text-neutral-500 opacity-60'
              }`}
            >
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: activeTab === 'home' ? '"FILL" 1' : '"FILL" 0' }}>auto_awesome</span>
              <span className="text-[9px] tracking-wider uppercase">Atelier</span>
            </button>
            <button 
              onClick={() => setActiveTab('menu')}
              className={`flex flex-col items-center justify-center transition-all ${
                activeTab === 'menu' ? 'text-primary scale-105 font-semibold' : 'text-neutral-500 opacity-60'
              }`}
            >
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: activeTab === 'menu' ? '"FILL" 1' : '"FILL" 0' }}>restaurant_menu</span>
              <span className="text-[9px] tracking-wider uppercase">Menu</span>
            </button>
            <button 
              onClick={() => setActiveTab('cellar')}
              className={`flex flex-col items-center justify-center transition-all ${
                activeTab === 'cellar' ? 'text-primary scale-105 font-semibold' : 'text-neutral-500 opacity-60'
              }`}
            >
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: activeTab === 'cellar' ? '"FILL" 1' : '"FILL" 0' }}>wine_bar</span>
              <span className="text-[9px] tracking-wider uppercase">Cellar</span>
            </button>
            <button 
              onClick={() => setActiveTab('reserve')}
              className={`flex flex-col items-center justify-center transition-all ${
                activeTab === 'reserve' ? 'text-primary scale-105 font-semibold' : 'text-neutral-500 opacity-60'
              }`}
            >
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: activeTab === 'reserve' ? '"FILL" 1' : '"FILL" 0' }}>calendar_today</span>
              <span className="text-[9px] tracking-wider uppercase">Reserve</span>
            </button>
            <button 
              onClick={() => setActiveTab('private')}
              className={`flex flex-col items-center justify-center transition-all ${
                activeTab === 'private' ? 'text-primary scale-105 font-semibold' : 'text-neutral-500 opacity-60'
              }`}
            >
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: activeTab === 'private' ? '"FILL" 1' : '"FILL" 0' }}>lock</span>
              <span className="text-[9px] tracking-wider uppercase">Private</span>
            </button>
          </nav>
        </>
      )}

      {/* Shared Golden Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.025] bg-[size:100px_100px] bg-repeat bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZngetFNicDCe6gKwx94Eap0PsRzTKnAVt6mALIIa_WSG2NjT03aEWHoD5C6uo2VDdbe-E6cK2oH4Ct4z3YPLm68c-yCmKO0yqps70Qk-ypDW1VGT0vaCu4aHs8Pd5I9Bi9JlMYucv_VT4uFYV-dO9casEoVI8Z14FbsHCtEDxQucGLNXN0xLRgXY7jHYyUiYB_-lv1ejQ7wDVbe6QXxQQR_GQz5yevt-3p2YwdvNieAq4hD2GrXFzQKk_kTD3yMe-CQ_3elNmN_k')]" />
    </div>
  );
}
