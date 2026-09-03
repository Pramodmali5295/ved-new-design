import { Sparkles, Play, Pause, Volume2, VolumeX, Maximize2, X, Quote } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useGsapReveal } from '@/hooks/useGsapAnimations';

export default function Partnership() {
  const sectionRef = useGsapReveal<HTMLElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  // Lock scroll when lightbox modal is open
  useEffect(() => {
    if (showPhotoModal) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setShowPhotoModal(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [showPhotoModal]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section ref={sectionRef} id="partnership" className="bg-[#1f1912] py-16 sm:py-24 lg:py-36 text-[#ebe4d8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="reveal text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
            <span className="h-[1px] w-6 bg-[#a8895c]" />
            The Horse &middot; The Partnership
            <span className="h-[1px] w-6 bg-[#a8895c]" />
          </div>
          <h1 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
            Eventing isn&rsquo;t won by the rider alone.
          </h1>
          <p className="mt-3 sm:mt-4 font-serif text-base sm:text-xl italic leading-relaxed text-[#d9cdb8] lg:text-2xl">
            It is a partnership between athlete and horse &mdash; built through trust, training
            and thousands of small decisions.
          </p>
        </div>

        {/* 100% Full Panoramic image of Ved + Horse - Compact Height, No Crop */}
        <div className="reveal mt-10 sm:mt-12 overflow-hidden rounded-sm border border-[#a8895c]/30 bg-[#140e08] shadow-2xl p-1.5 sm:p-2">
          <div className="w-full overflow-hidden bg-[#120d08] rounded-sm flex items-center justify-center max-h-[320px] sm:max-h-[380px] lg:max-h-[420px]">
            <img
              src="/assets/ved-10.jpeg"
              alt="Ved with his horse in the open pasture"
              className="w-full h-auto max-h-[320px] sm:max-h-[380px] lg:max-h-[420px] object-contain rounded-sm transition-transform duration-700 hover:scale-102"
              loading="lazy"
            />
          </div>
          <div className="bg-[#251e16] p-2.5 sm:p-3 text-center border-t border-white/10 mt-1.5 sm:mt-2 rounded-sm">
            <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#d9cdb8]">
              Daily Trust &amp; Connection &middot; Ocala, Florida
            </p>
          </div>
        </div>

        {/* Matteo Section */}
        <div className="reveal mt-10 sm:mt-14 rounded-sm border border-[#a8895c]/40 bg-[#251e16] p-5 sm:p-8 lg:p-10 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-wider text-[#a8895c] font-semibold">
                <Sparkles size={13} className="text-[#e6c994]" />
                <span>Primary Equine Athlete &middot; CCI 2★ Partner</span>
              </div>
              <h2 className="mt-1.5 font-display text-2xl sm:text-3xl lg:text-4xl text-white">
                Fernhill Milchem Mateo
              </h2>
              <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-[#a8895c]">
                10yo &middot; CCI 2★ Irish Sport Horse &middot; Bay &middot; Gelding
              </p>
            </div>
            <span className="rounded-full bg-black/60 border border-[#a8895c]/40 px-3.5 py-1.5 font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-[#e6c994] self-start sm:self-auto">
              International Partner
            </span>
          </div>

          {/* 2-Column Media Showcase: 1 Photo & 1 Video (100% Full Uncropped, Balanced Height) */}
          <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:grid-cols-2 items-stretch">
            {/* 1 Photo - 100% Full Uncropped, Balanced Height */}
            <div className="relative overflow-hidden rounded-sm bg-[#120d08] border border-white/10 shadow-xl group flex flex-col justify-between p-3">
              <div 
                onClick={() => setShowPhotoModal(true)}
                className="relative w-full flex-1 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[300px] max-h-[350px] bg-[#0c0805] rounded-sm cursor-pointer"
              >
                <img
                  src="/assets/matto.jpeg"
                  alt="Fernhill Milchem Mateo in pasture"
                  className="w-full h-auto max-h-[350px] object-contain rounded-sm transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#e6c994] border border-[#a8895c]/40 backdrop-blur-sm">
                  100% High-Res Photograph
                </div>
                <div className="absolute bottom-2.5 right-2.5 rounded-full bg-black/80 p-2 text-[#e6c994] opacity-0 group-hover:opacity-100 transition-opacity border border-[#a8895c]/40">
                  <Maximize2 size={16} />
                </div>
              </div>
              <div className="w-full bg-[#1c1610] p-3 mt-3 border-t border-white/10 rounded-sm">
                <p className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-[#e6c994] font-medium">
                  Fernhill Milchem Mateo (Matteo)
                </p>
                <p className="font-sans text-[9px] text-[#d9cdb8]/70">Pasture &amp; Conditioning &middot; Ocala, Florida</p>
              </div>
            </div>

            {/* 1 Video - 100% Full Uncropped, Balanced Height */}
            <div className="relative overflow-hidden rounded-sm bg-[#120d08] border border-white/10 shadow-xl group flex flex-col justify-between p-3">
              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[300px] max-h-[350px] bg-[#0c0805] rounded-sm">
                <video
                  ref={videoRef}
                  src="/assets/matto.mp4"
                  poster="/assets/matto.jpeg"
                  playsInline
                  loop
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-auto max-h-[350px] object-contain rounded-sm"
                />
                
                {/* Play/Pause overlay button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 group-hover:bg-black/35 transition-colors">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="pointer-events-auto flex h-13 w-13 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-black/80 border border-[#e6c994] text-[#e6c994] shadow-2xl transition-all hover:scale-110 hover:bg-[#a8895c] hover:text-black active:scale-95"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-1" />}
                  </button>
                </div>
                <div className="absolute top-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#e6c994] border border-[#a8895c]/40 backdrop-blur-sm">
                  100% Video Reel
                </div>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="w-full bg-[#1c1610] p-3 mt-3 border-t border-white/10 rounded-sm flex items-center justify-between">
                <div>
                  <p className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-[#e6c994] font-medium">
                    Matteo in Action
                  </p>
                  <p className="font-sans text-[9px] text-[#d9cdb8]/70">Performance &amp; Movement Reel</p>
                </div>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 border border-white/20 text-[#d9cdb8] hover:text-white hover:border-[#e6c994] transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </div>
          </div>

          {/* Dedicated Quote Showcase - Luxury Centerpiece Card */}
          <div className="mt-10 sm:mt-12 relative overflow-hidden rounded-md border border-[#a8895c]/50 bg-gradient-to-br from-[#2a2016] via-[#1c150e] to-[#140e09] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Ambient gold glow backdrop */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a8895c]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              {/* Gold Quote Icon */}
              <div className="shrink-0 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#a8895c]/15 border border-[#a8895c]/40 text-[#f0c775] shadow-inner">
                <Quote size={26} className="fill-[#f0c775]/30" />
              </div>

              {/* Quote Content & Author */}
              <div className="flex-1">
                <blockquote className="font-serif text-base sm:text-lg lg:text-xl italic leading-relaxed text-[#f5efe6]">
                  &ldquo;I am so grateful to all the horses I have ridden. They have helped me through various competitions, never letting me down. And Matteo is spectacular. We share a bond that&rsquo;s a bit more special than normal. He is a great jumper. I have found that horses respond to love and technique. Hence, they have taught me trust, humility and patience.&rdquo;
                </blockquote>

                <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-[#e6c994]">
                      Ved Sarma Sarkar
                    </p>
                    <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#a8895c] mt-0.5">
                      On Fernhill Milchem Mateo
                    </p>
                  </div>

                  <span className="font-sans text-[9px] uppercase tracking-wider text-[#d9cdb8]/70 bg-black/50 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
                    Athlete &amp; Equine Bond
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Photo */}
      {showPhotoModal && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setShowPhotoModal(false)}
        >
          <button
            onClick={() => setShowPhotoModal(false)}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#a8895c] hover:text-[#2d2418] transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-4xl w-full flex flex-col items-center justify-center bg-[#140e08] rounded-sm border border-[#a8895c]/40 p-2 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/assets/matto.jpeg"
              alt="Fernhill Milchem Mateo"
              className="max-h-[75vh] w-full object-contain rounded-sm"
            />
            <div className="w-full mt-3 p-3 bg-[#1c1610] rounded-sm border border-white/10 text-center">
              <h4 className="font-display text-lg sm:text-xl text-[#e6c994]">Fernhill Milchem Mateo</h4>
              <p className="mt-1 font-sans text-xs text-[#d9cdb8]/80">10yo &bull; CCI 2★ Irish Sport Horse &bull; Ocala, Florida</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
