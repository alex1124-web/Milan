import { CartItem } from '../types';
import { X, Trash2, ShieldCheck, Ticket } from 'lucide-react';
import { useState } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, qty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isOpen) return null;

  const getSubtotal = () => {
    return cartItems.reduce((acc, curr) => acc + (curr.menuItem.price * curr.quantity), 0);
  };

  const getDiscount = () => {
    return promoApplied ? getSubtotal() * 0.1 : 0;
  };

  const getServiceFee = () => {
    return getSubtotal() > 0 ? 15 : 0; // Fixed luxury service fee
  };

  const getTotal = () => {
    return getSubtotal() - getDiscount() + getServiceFee();
  };

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'MILANO1924') {
      setPromoApplied(true);
    } else {
      alert('This signature ritual code has expired.');
    }
    setPromoCode('');
  };

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      onClearCart();
      setCheckedOut(false);
      onClose();
    }, 3000); // 3 second transition
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface-container-high border-l border-neutral-900 shadow-2xl flex flex-col justify-between animate-slideLeft">
      
      {/* Header */}
      <div className="p-6 border-b border-neutral-900/60 flex justify-between items-center bg-black/40">
        <div className="space-y-1">
          <h3 className="font-serif text-xl text-primary">Your Culinary Selection</h3>
          <p className="font-sans text-[9px] text-neutral-500 tracking-wider uppercase">L'Oro di Milano experiences</p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 text-on-surface-variant hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {checkedOut ? (
        // Glowing confirmation receipt
        <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-6">
          <div className="p-4 bg-neutral-900 border border-primary text-primary rounded-full animate-bounce">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h4 className="font-serif text-2xl text-[#f2ca50]">Order Synced to Seat</h4>
          <p className="font-sans text-xs text-on-surface-variant max-w-xs leading-relaxed font-light">
            Your gastronomic selection has been sent directly to the Atelier kitchen. It will be served table-side matching your reservation hour in golden elegance.
          </p>
        </div>
      ) : (
        // Items list and totalizer
        <>
          <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <p className="font-serif text-lg text-neutral-500 italic">No delicacies selected</p>
                <p className="font-sans text-[10px] text-neutral-600 leading-normal max-w-[200px] mx-auto">
                  Browse our elite menu and add dishes to begin building your fine dining program.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.menuItem.id}
                  className="flex gap-4 items-start border-b border-neutral-900/40 pb-4"
                >
                  <div className="w-16 h-16 rounded overflow-hidden bg-neutral-900 border border-neutral-900 flex-shrink-0">
                    <img 
                      src={item.menuItem.image} 
                      alt={item.menuItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-serif text-sm text-on-surface leading-tight">{item.menuItem.name}</h4>
                      <button 
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="text-neutral-600 hover:text-red-400 p-1 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      {/* Quantity counters */}
                      <div className="flex items-center border border-neutral-900 rounded bg-neutral-950 px-2 py-1">
                        <button 
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                          className="text-neutral-500 hover:text-primary px-1 font-sans"
                        >
                          -
                        </button>
                        <span className="px-3 text-on-surface font-sans">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                          className="text-neutral-500 hover:text-primary px-1 font-sans"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-serif text-primary">€ {item.menuItem.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pricing calculations footer */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-black/40 border-t border-neutral-900/60 space-y-6">
              {/* Promo input */}
              <div className="flex gap-3">
                <input 
                  type="text" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="MILANO1924 (Atelier Ritual Code)"
                  className="flex-1 bg-neutral-950 border border-neutral-800 text-xs px-3 py-2.5 rounded text-on-surface focus:ring-0 focus:border-primary placeholder:text-neutral-700 font-sans"
                />
                <button 
                  onClick={handleApplyPromo}
                  className="px-4 py-2.5 bg-neutral-900 border border-primary/20 text-[#f2ca50] hover:bg-neutral-950 font-sans text-[10px] tracking-wider uppercase font-semibold"
                >
                  Apply
                </button>
              </div>

              {/* Subtotal table */}
              <div className="space-y-2 text-xs font-light text-on-surface-variant">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>€ {getSubtotal()}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-yellow-600">
                    <span>Ritual Code Discount (10%)</span>
                    <span>- € {getDiscount()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Atelier Service &amp; Table Cover</span>
                  <span>€ {getServiceFee()}</span>
                </div>
                <div className="flex justify-between border-t border-neutral-900/60 pt-2 font-serif text-sm text-[#f2ca50]">
                  <span>Total Due</span>
                  <span>€ {getTotal()}</span>
                </div>
              </div>

              {/* Action checkout button */}
              <button
                onClick={handleCheckout}
                className="w-full py-4.5 bg-primary text-black font-sans text-xs tracking-[0.2em] uppercase font-bold hover:bg-amber-300 transition-colors shadow-lg"
              >
                Sync with Dining Hour
              </button>
            </div>
          )}
        </>
      )}

    </div>
  );
}
