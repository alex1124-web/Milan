import { useState, useEffect } from 'react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoaded(true);
          return 100;
        }
        const step = Math.random() * 15 + 5;
        return Math.min(100, prev + step);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    if (!isLoaded) return;
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 850); // Match transit curve
  };

  return (
    <div
      id="welcome-splash"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center space-y-12 transition-all duration-1000 ${
        isExiting ? 'opacity-0 scale-[1.08] pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at center, rgb(15, 15, 15) 0%, rgb(0, 0, 0) 100%)',
      }}
    >
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-repeat bg-[size:100px_100px]"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZngetFNicDCe6gKwx94Eap0PsRzTKnAVt6mALIIa_WSG2NjT03aEWHoD5C6uo2VDdbe-E6cK2oH4Ct4z3YPLm68c-yCmKO0yqps70Qk-ypDW1VGT0vaCu4aHs8Pd5I9Bi9JlMYucv_VT4uFYV-dO9casEoVI8Z14FbsHCtEDxQucGLNXN0xLRgXY7jHYyUiYB_-lv1ejQ7wDVbe6QXxQQR_GQz5yevt-3p2YwdvNieAq4hD2GrXFzQKk_kTD3yMe-CQ_3elNmN_k')"
        }}
      ></div>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)] z-1"></div>

      {/* Large Brand Visual Container */}
      <div className="relative flex items-center justify-center h-64 w-64 z-10 transition-transform duration-1000 transform hover:scale-102">
        {/* Concentric Drawing SVG circles */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90 opacity-40" viewBox="0 0 100 100">
          <circle 
            className="transition-all duration-500 stroke-[#d4af37]" 
            cx="50" 
            cy="50" 
            fill="none" 
            r="46" 
            strokeWidth="0.5" 
            strokeDasharray="2,2"
          />
          <circle 
            className="transition-all duration-1000 ease-out" 
            cx="50" 
            cy="50" 
            fill="none" 
            r="43" 
            stroke="#f2ca50" 
            strokeWidth="1.2" 
            strokeDasharray="270"
            strokeDashoffset={270 - (270 * progress) / 100}
          />
          <circle 
            className="opacity-30 stroke-[#d4af37]" 
            cx="50" 
            cy="50" 
            fill="none" 
            r="39" 
            strokeWidth="0.3" 
          />
        </svg>

        {/* Monogram letters in custom serif display */}
        <div className="flex flex-col items-center justify-center z-10 text-center animate-pulse drop-shadow-[0_0_12px_rgba(212,175,55,0.25)]">
          <span className="font-serif text-5xl font-semibold tracking-wider text-primary">LM</span>
        </div>
      </div>

      {/* Brand Subtitle and Typography */}
      <div className="flex flex-col items-center text-center space-y-4 z-10 select-none">
        <h1 className="font-serif text-3xl md:text-4xl text-[#f2ca50] font-medium tracking-[0.35em] uppercase text-shadow">
          L'Oro di Milano
        </h1>
        <p className="font-sans text-xs text-on-surface-variant font-medium tracking-[0.55em] opacity-60">
          ESTABLISHED 1924
        </p>
      </div>

      {/* Enter Action Button & Glow Progress bar */}
      <div className="flex flex-col items-center space-y-8 z-10">
        <button
          onClick={handleEnter}
          disabled={!isLoaded}
          id="enter-btn"
          className={`group relative px-12 py-3.5 border transition-all duration-[800ms] cursor-pointer ${
            isLoaded 
              ? 'border-primary/40 hover:border-primary opacity-100 translate-y-0 shadow-[0_0_20px_rgba(212,175,55,0.1)]' 
              : 'border-white/10 opacity-40 translate-y-3 cursor-not-allowed'
          }`}
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-primary relative z-10 transition-colors duration-500 group-hover:text-amber-300">
            {isLoaded ? "Enter Atelier" : "Refining Palate..."}
          </span>
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-700"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-md bg-primary/20"></div>
        </button>

        {/* Sophisticated Slim Loading Bar */}
        <div className="w-56 md:w-64 h-[2px] bg-neutral-900 relative overflow-hidden rounded-full">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-700 via-[#f2ca50] to-yellow-600 shadow-[0_0_10px_rgba(212,175,55,0.7)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
