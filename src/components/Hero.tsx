import { useState, useRef } from 'react';
import { IMAGES, VIDEOS } from '@/data';
import { Play, Pause, Volume2, VolumeX, Film, Expand } from 'lucide-react';

export default function Hero() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [mode, setMode] = useState<'video' | 'photo'>('video');
  const [fitMode, setFitMode] = useState<'cover' | 'contain'>('cover');
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlayingVideo) {
      videoRef.current.pause();
      setIsPlayingVideo(false);
    } else {
      videoRef.current.play();
      setIsPlayingVideo(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#140e08]">
      {/* Background Media with 100% Fit Toggle Support */}
      <div className="absolute inset-0 flex items-center justify-center">
        {mode === 'video' ? (
          <video
            ref={videoRef}
            src={VIDEOS[0].src}
            poster={IMAGES.hero}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className={`h-full w-full ${
              fitMode === 'contain' ? 'object-contain' : 'object-cover'
            } transition-all duration-700`}
          />
        ) : (
          <img
            src={IMAGES.hero}
            alt="Ved Sarma Sarkar jumping in competition with Indian flag"
            className={`h-full w-full ${
              fitMode === 'contain' ? 'object-contain' : 'object-cover'
            } transition-all duration-700`}
          />
        )}
        
        {/* Subtle overlays that preserve clarity */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          fitMode === 'contain'
            ? 'bg-gradient-to-b from-black/60 via-transparent to-black/75'
            : 'bg-gradient-to-b from-black/65 via-black/35 to-black/80'
        }`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e08] via-transparent to-[#140e08]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div
          className="animate-fade-in-up inline-flex items-center gap-3 rounded-full border border-[#d9cdb8]/30 bg-black/40 px-4 py-1.5 backdrop-blur-md opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#a8895c] animate-pulse" />
          <span className="font-sans text-[10px] uppercase tracking-luxe text-[#d9cdb8]">
            Eventing &middot; Team India Athlete
          </span>
        </div>

        <h1
          className="animate-fade-in-up mt-6 font-display text-5xl text-white opacity-0 sm:text-7xl lg:text-8xl tracking-tight drop-shadow-md"
          style={{ animationDelay: '0.45s' }}
        >
          Ved Sarma Sarkar
        </h1>

        <p
          className="animate-fade-in-up mt-6 max-w-xl font-serif text-xl italic text-[#ebe4d8] opacity-0 sm:text-2xl drop-shadow"
          style={{ animationDelay: '0.8s' }}
        >
          A young rider.
          <br />
          A great road ahead.
        </p>

        <p
          className="animate-fade-in-up mt-6 font-sans text-[10px] uppercase tracking-[0.25em] text-[#d9cdb8]/95 opacity-0 drop-shadow"
          style={{ animationDelay: '1.1s' }}
        >
          International podium achiever &nbsp;&bull;&nbsp; National medallist &nbsp;&bull;&nbsp; FEI athlete
        </p>

        {/* Action Buttons */}
        <div
          className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0"
          style={{ animationDelay: '1.35s' }}
        >
          <button
            onClick={() => document.getElementById('action-reel')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2.5 rounded-full bg-[#a8895c] px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-[#2d2418] font-medium transition-all duration-300 hover:bg-[#c2a372] hover:shadow-[0_0_20px_rgba(168,137,92,0.4)]"
          >
            <Play size={14} className="fill-[#2d2418] transition-transform group-hover:scale-110" />
            Watch In Action (6 Videos)
          </button>
          
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full border border-white/30 bg-black/40 px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50"
          >
            Photo Gallery (10 Images)
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-fade-in-up mt-12 flex flex-col items-center gap-2.5 opacity-0"
          style={{ animationDelay: '1.6s' }}
          aria-label="Scroll down"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/70">Scroll</span>
          <span className="flex h-10 w-[1px] items-start overflow-hidden bg-white/30">
            <span className="h-full w-full animate-[fadeInUp_1.5s_ease-in-out_infinite] bg-white/80" />
          </span>
        </button>
      </div>

      {/* Hero Media Controls with 100% Fit Mode toggle */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-black/60 p-1.5 backdrop-blur-md shadow-xl">
        <button
          onClick={() => setFitMode(fitMode === 'cover' ? 'contain' : 'cover')}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-wider transition-colors ${
            fitMode === 'contain' ? 'bg-[#a8895c] text-[#2d2418] font-bold' : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
          title="Toggle 100% Uncropped View"
        >
          <Expand size={12} />
          <span>{fitMode === 'contain' ? '100% Full' : 'Fit Screen'}</span>
        </button>

        <button
          onClick={() => setMode(mode === 'video' ? 'photo' : 'video')}
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/80 transition-colors hover:text-white hover:bg-white/10"
          title={`Switch to ${mode === 'video' ? 'Photo' : 'Video'}`}
        >
          <Film size={12} />
          <span>{mode === 'video' ? 'Video' : 'Photo'}</span>
        </button>

        {mode === 'video' && (
          <>
            <button
              onClick={togglePlay}
              className="rounded-full p-2 text-white/80 transition-colors hover:text-white hover:bg-white/10"
              aria-label={isPlayingVideo ? 'Pause video' : 'Play video'}
            >
              {isPlayingVideo ? <Pause size={13} /> : <Play size={13} />}
            </button>
            <button
              onClick={toggleMute}
              className="rounded-full p-2 text-white/80 transition-colors hover:text-white hover:bg-white/10"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
