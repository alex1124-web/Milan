import React, { useState } from 'react';
import { Reservation } from '../types';
import { Calendar, User, Clock, BellRing, Sparkles, Milestone, Compass, CheckCircle2 } from 'lucide-react';

interface ReservationFormProps {
  onAddReservation: (res: Reservation) => void;
}

export default function ReservationForm({ onAddReservation }: ReservationFormProps) {
  const [partySize, setPartySize] = useState('2 Guests');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:30 - Aperitivo Sunset');
  const [ritual, setRitual] = useState('The Milanese Classic');
  const [fullName, setFullName] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [lastCreatedReservation, setLastCreatedReservation] = useState<Reservation | null>(null);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName) return;

    const newRes: Reservation = {
      id: `res-${Date.now()}`,
      partySize,
      date: date || new Date().toISOString().split('T')[0],
      time,
      ritual,
      fullName,
      specialRequests,
      createdAt: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    onAddReservation(newRes);
    setLastCreatedReservation(newRes);

    // Reset some inputs for ease of use
    setFullName('');
    setSpecialRequests('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-16">
      
      {/* Title block */}
      <div className="text-center space-y-4">
        <span className="font-sans text-xs text-primary font-semibold tracking-[0.45em] uppercase block">
          Rito di Prenotazione
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-on-surface font-light">
          Reserve Your Table
        </h2>
        <div className="w-16 h-[1px] bg-primary mx-auto my-6"></div>
      </div>

      {/* Main Reservation Flow */}
      {lastCreatedReservation ? (
        // The Gold-Stamped Confirmation Card!
        <div className="bg-surface-container-high border-2 border-primary p-8 md:p-12 rounded shadow-2xl relative overflow-hidden flex flex-col items-center justify-center space-y-8 animate-fadeIn">
          {/* Shimmer / light accent overlay */}
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-primary text-[150px]" style={{ fontVariationSettings: '"FILL" 1' }} data-icon="auto_awesome">auto_awesome</span>
          </div>

          <div className="text-center space-y-4 select-none">
            <CheckCircle2 className="w-16 h-16 text-[#f2ca50] mx-auto animate-pulse" />
            <span className="font-sans text-[10px] tracking-[0.4em] text-primary font-bold uppercase block">CONFIRMATIO D'ATELIER</span>
            <p className="font-serif text-3xl text-on-surface font-medium italic">Accoglienza d'Onore</p>
          </div>

          <div className="w-full max-w-md bg-black/40 border border-neutral-900/60 p-6 space-y-6 text-sm">
            <div className="flex justify-between border-b border-neutral-900/60 pb-3">
              <span className="text-neutral-500 font-sans text-xs">HONORED GUEST</span>
              <span className="text-[#f2ca50] font-semibold tracking-wide">{lastCreatedReservation.fullName}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-neutral-500 font-sans text-[9px] block">PARTY SIZE</span>
                <span className="text-on-surface font-medium">{lastCreatedReservation.partySize}</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-500 font-sans text-[9px] block">DATE OF RITUAL</span>
                <span className="text-on-surface font-medium">{lastCreatedReservation.date}</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-500 font-sans text-[9px] block">PREFERRED TIME</span>
                <span className="text-on-surface font-medium">{lastCreatedReservation.time}</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-500 font-sans text-[9px] block">ATELIER RITUAL</span>
                <span className="text-on-surface font-medium">{lastCreatedReservation.ritual}</span>
              </div>
            </div>
            {lastCreatedReservation.specialRequests && (
              <div className="border-t border-neutral-900/60 pt-3 space-y-1">
                <span className="text-neutral-500 font-sans text-[9px] block">NOTES D'ACCUEIL</span>
                <span className="text-on-surface font-light italic text-xs leading-relaxed">
                  "{lastCreatedReservation.specialRequests}"
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={() => setLastCreatedReservation(null)}
              className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-950 border border-primary/20 text-[#f2ca50] font-sans text-[10px] tracking-widest uppercase font-semibold"
            >
              Book Another Table
            </button>
            <button
              onClick={() => window.print()}
              className="px-8 py-3.5 bg-primary text-black font-sans text-[10px] tracking-widest uppercase font-semibold"
            >
              Export Invitation
            </button>
          </div>
        </div>
      ) : (
        // The Booking Form
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reservation Card Form Wrapper */}
          <div className="lg:col-span-7 bg-surface-container-high border border-neutral-900 p-8 md:p-12 relative overflow-hidden shadow-lg">
            <form onSubmit={handleBookingSubmit} className="space-y-10">
              
              {/* Party Size & Date Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group focus-within:border-b focus-within:border-primary/50">
                  <label className="block font-sans text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Party Size</label>
                  <select 
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline text-on-surface font-sans text-xs py-3.5 focus:ring-0 focus:border-primary transition-colors cursor-pointer appearance-none"
                  >
                    <option class="bg-surface" value="2 Guests">2 Guests</option>
                    <option class="bg-surface" value="4 Guests">4 Guests</option>
                    <option class="bg-surface" value="6 Guests">6 Guests</option>
                    <option class="bg-surface" value="Private Salon (8+)">Private Salon (8+)</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="block font-sans text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Date of Arrival</label>
                  <input 
                    required
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline text-on-surface font-sans text-xs py-3.5 focus:ring-0 focus:border-primary transition-colors cursor-pointer"
                  />
                </div>
              </div>

              {/* Hour & Ritual Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block font-sans text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Preferred Hour</label>
                  <select 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline text-on-surface font-sans text-xs py-3.5 focus:ring-0 focus:border-primary transition-colors cursor-pointer appearance-none"
                  >
                    <option class="bg-surface" value="19:30 - Aperitivo Sunset">19:30 - Aperitivo Sunset</option>
                    <option class="bg-surface" value="20:30 - Prime Service">20:30 - Prime Service</option>
                    <option class="bg-surface" value="21:45 - Midnight Gold">21:45 - Midnight Gold</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="block font-sans text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Atelier Ritual</label>
                  <select 
                    value={ritual}
                    onChange={(e) => setRitual(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline text-on-surface font-sans text-xs py-3.5 focus:ring-0 focus:border-primary transition-colors cursor-pointer appearance-none"
                  >
                    <option class="bg-surface" value="The Milanese Classic">The Milanese Classic</option>
                    <option class="bg-surface" value="1924 Signature Tasting">1924 Signature Tasting</option>
                    <option class="bg-surface" value="Chef's Omakase Oro">Chef's Omakase Oro</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-8">
                <div className="group">
                  <label className="block font-sans text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Sigmund Visconti"
                    className="w-full bg-transparent border-0 border-b border-outline text-on-surface font-sans text-xs py-3.5 focus:ring-0 focus:border-primary transition-colors placeholder:text-neutral-700"
                  />
                </div>
                <div className="group">
                  <label className="block font-sans text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Special Requests (Optional)</label>
                  <textarea 
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Allergies, anniversaries, or preferred dining alcove..."
                    rows={2}
                    className="w-full bg-transparent border-0 border-b border-outline text-on-surface font-sans text-xs py-3.5 focus:ring-0 focus:border-primary transition-colors placeholder:text-neutral-700 resize-none"
                  />
                </div>
              </div>

              {/* Confirm submit */}
              <button
                type="submit"
                className="w-full py-4.5 bg-neutral-950 border border-primary text-primary font-sans text-xs tracking-[0.2em] uppercase font-bold hover:bg-primary hover:text-black transition-all duration-500 flex items-center justify-center gap-3 shadow-md"
              >
                Confirm Your Arrival
              </button>
            </form>
          </div>

          {/* Right Info: The Atelier Rituals & Ambience */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-high border border-neutral-900 p-8 space-y-6">
              <h4 className="font-serif text-lg text-primary border-b border-neutral-900 pb-2">The Atelier Rituals</h4>
              <div className="space-y-6 text-xs font-light">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary" data-icon="wine_bar">wine_bar</span>
                  <div className="space-y-1">
                    <p className="font-sans font-bold text-on-surface uppercase">Aperitivo d'Oro</p>
                    <p className="text-on-surface-variant leading-relaxed">A curated selection of pre-war vermouths and gold-flecked bitters to open the palate.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary" data-icon="restaurant">restaurant</span>
                  <div className="space-y-1">
                    <p className="font-sans font-bold text-on-surface uppercase">Saffron Mastery</p>
                    <p className="text-on-surface-variant leading-relaxed">Our signature Risotto alla Milanese, prepared table-side with 24k edible gold leaf.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary" data-icon="history_edu">history_edu</span>
                  <div className="space-y-1">
                    <p className="font-sans font-bold text-on-surface uppercase">Heritage Dress</p>
                    <p className="text-on-surface-variant leading-relaxed">We request guests adhere to a semi-formal aesthetic to honor the atelier's legacy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Accent Card */}
            <div className="relative h-[256px] overflow-hidden rounded border border-neutral-900 group">
              <img 
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 grayscale-[0.2]" 
                alt="Table set inside Milano Duomo" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZLWRr2rphIUzsYjXBwSwRIhI0GNYPU7SxtkQoWYIhW4ZSEgaZtD3cSktuzkwzk99iLOetXNPwRqFwSWMembn5rgiAcNLaS63NffhzIHPz22mm5lg97i-UFSxzieOny2zDTA37uN6ceXaWe2HA76cr28a_SyOX1RCDfYSTUVHQX7Ud1utcdKGWsWVjCVnYT9g6p_2Xh_0hD6sirXiChQtytOXeu3TQktpjNUhXonwvs9cczuIZDcztX1DwHoQrnmu9AU8USRZahfM" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <p className="font-serif text-xl italic text-primary">Since 1924</p>
                <p className="font-sans text-[10px] tracking-widest uppercase text-on-surface">Piazza del Duomo, Milano</p>
              </div>
            </div>
          </aside>

        </div>
      )}

    </div>
  );
}
