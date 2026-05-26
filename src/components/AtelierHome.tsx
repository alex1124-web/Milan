import { ArrowRight, Sparkles, Clock, MapPin, Milestone } from 'lucide-react';

interface AtelierHomeProps {
  onReserveClick: () => void;
  onExploreMenu: () => void;
}

export default function AtelierHome({ onReserveClick, onExploreMenu }: AtelierHomeProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Fullscreen Atmospheric Banner */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[0.3] brightness-[0.25]" 
            alt="Atelier interior" 
            src="/src/assets/images/atelier_bg_table_1779770657989.png" 
            referrerPolicy="no-referrer"
          />
          {/* Moody vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
          {/* Subtle noise grid */}
          <div className="absolute inset-0 opacity-[0.02] bg-[size:100px_100px] bg-repeat bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZngetFNicDCe6gKwx94Eap0PsRzTKnAVt6mALIIa_WSG2NjT03aEWHoD5C6uo2VDdbe-E6cK2oH4Ct4z3YPLm68c-yCmKO0yqps70Qk-ypDW1VGT0vaCu4aHs8Pd5I9Bi9JlMYucv_VT4uFYV-dO9casEoVI8Z14FbsHCtEDxQucGLNXN0xLRgXY7jHYyUiYB_-lv1ejQ7wDVbe6QXxQQR_GQz5yevt-3p2YwdvNieAq4hD2GrXFzQKk_kTD3yMe-CQ_3elNmN_k')]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl space-y-6">
          <span className="font-sans text-xs text-primary font-semibold tracking-[0.45em] uppercase block">
            Il Gusto Dell'Oro
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-on-surface leading-tight font-medium drop-shadow-md">
            Degustazione d'Elite
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto my-6"></div>
          <p className="font-sans text-base md:text-lg text-on-surface-variant font-light max-w-2xl mx-auto leading-relaxed opacity-90">
            A curated journey through the soul of Milanese gastronomy, where gold is not just a color, but a philosophy.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onReserveClick}
              className="px-10 py-4 bg-primary-container hover:bg-neutral-900 border border-primary text-black hover:text-primary font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-500 ease-out shadow-lg"
            >
              Reserve Your Table
            </button>
            <button 
              onClick={onExploreMenu}
              className="px-10 py-4 border border-white/20 hover:border-primary text-on-surface hover:text-primary font-sans text-xs tracking-[0.2em] uppercase transition-all duration-500"
            >
              Explore Menu
            </button>
          </div>
        </div>

        {/* Scroll cue animate */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 select-none pointer-events-none opacity-50 z-10 animate-bounce">
          <span className="font-sans text-[9px] tracking-[0.6em] text-on-surface-variant uppercase">Scroll</span>
          <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: '"wght" 200' }} data-icon="keyboard_double_arrow_down">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* The Legend & Concept Section - Bento layout */}
      <section className="py-24 px-6 md:px-12 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8">
          <span className="font-sans text-xs text-primary font-semibold tracking-[0.3em] uppercase block">
            Our Legacy
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-on-surface font-light leading-snug">
            Crafting Culinary Legacies Since 1924
          </h3>
          <div className="w-12 h-[1px] bg-primary"></div>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
            Founded amidst the post-war artistic Renaissance of Milan, L'Oro di Milano opened its doors in 1924 with a singular focus: to elevate authentic Lombardian recipes using the supreme purity of edible gold.
          </p>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
            A century later, we continue to greet royalty, artists, and lovers of gastronomic masterpiece at Via della Spiga 14, preserving the original hand-selected marble tables and dark walnut cellars.
          </p>
        </div>

        {/* Right side: visual storytelling with dual frames */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-6 relative">
          <div className="col-span-8 overflow-hidden rounded border border-outline-variant/30 group">
            <img 
              className="w-full h-80 object-cover grayscale transition-transform duration-[1200ms] group-hover:scale-105 group-hover:grayscale-0" 
              alt="Fine dining details" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZLWRr2rphIUzsYjXBwSwRIhI0GNYPU7SxtkQoWYIhW4ZSEgaZtD3cSktuzkwzk99iLOetXNPwRqFwSWMembn5rgiAcNLaS63NffhzIHPz22mm5lg97i-UFSxzieOny2zDTA37uN6ceXaWe2HA76cr28a_SyOX1RCDfYSTUVHQX7Ud1utcdKGWsWVjCVnYT9g6p_2Xh_0hD6sirXiChQtytOXeu3TQktpjNUhXonwvs9cczuIZDcztX1DwHoQrnmu9AU8USRZahfM" 
            />
          </div>
          <div className="col-span-4 mt-12 overflow-hidden rounded border border-outline-variant/30 group">
            <img 
              className="w-full h-56 object-cover grayscale transition-transform duration-[1200ms] group-hover:scale-110 group-hover:grayscale-[0.2]" 
              alt="Saffron specialty" 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=80" 
            />
          </div>
        </div>
      </section>

      {/* Luxury Details, Location, and Hours Dashboard */}
      <section className="py-16 w-full bg-surface-container-lowest border-t border-b border-neutral-900/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Card 1: Hours of Opulence */}
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-neutral-900 border border-primary/20 text-primary">
              <Clock className="w-5 h-5 stroke-[1.2]" />
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-on-surface">The Dining Hours</h4>
              <ul className="text-xs text-on-surface-variant font-light space-y-1">
                <li>Tue - Thu: 19:00 - 23:30</li>
                <li>Fri - Sat: 19:00 - 01:00</li>
                <li>Sun Lunch: 12:30 - 15:30</li>
                <li className="text-primary italic mt-1 font-sans">Mondays: Closed for Culinary Lab</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Strategic Location */}
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-neutral-900 border border-primary/20 text-primary">
              <MapPin className="w-5 h-5 stroke-[1.2]" />
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-on-surface">Atelier Location</h4>
              <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                Via della Spiga, 14<br />
                20121 Milano MI, Italy<br />
                Piazza del Duomo District
              </p>
              <span className="text-[10px] text-primary tracking-widest font-sans font-semibold uppercase block">
                Valet Services Available
              </span>
            </div>
          </div>

          {/* Card 3: Elite Philosophy */}
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-neutral-900 border border-primary/20 text-primary">
              <Sparkles className="w-5 h-5 stroke-[1.2]" />
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-on-surface">La Filosofia</h4>
              <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                Each of our tables receives dedicated, custom service. In alignment with our classic dress code, we politely request elegant, semi-formal attire for all sittings.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
