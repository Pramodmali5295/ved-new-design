import { useState, useRef } from 'react';
import { VIDEOS, GALLERY_ITEMS } from '@/data';
import { Play, Pause, Volume2, VolumeX, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ActionGallery() {
  // Video player modal state
  const [selectedVideo, setSelectedVideo] = useState<(typeof VIDEOS)[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Photo gallery lightbox state
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [photoFilter, setPhotoFilter] = useState<string>('All');

  const categories = ['All', 'Competition', 'Milestones', 'The Bond', 'Portraits', 'Landscapes'];

  const filteredPhotos = photoFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === photoFilter);

  const openVideo = (video: (typeof VIDEOS)[0]) => {
    setSelectedVideo(video);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const toggleModalPlay = () => {
    if (!modalVideoRef.current) return;
    if (isPlaying) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      modalVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleModalMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  return (
    <div className="bg-[#19140e] text-[#ebe4d8] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/5 blur-3xl pointer-events-none" />

      {/* SECTION 1: IN ACTION - VIDEO REELS */}
      <section id="action-reel" className="pt-24 lg:pt-36 relative">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                Video Gallery &middot; In Action
              </div>
              <h2 className="mt-4 font-display text-4xl text-white lg:text-6xl">
                Action Video Reels
              </h2>
              <p className="mt-4 max-w-xl font-serif text-lg italic text-[#d9cdb8]/80">
                Watch authentic footage from competition courses, training rounds, and stadium jumping.
              </p>
            </div>
            
            <span className="font-sans text-xs uppercase tracking-widest text-[#a8895c] border border-[#a8895c]/40 px-4 py-2 rounded-full self-start md:self-auto bg-black/40 backdrop-blur-sm">
              6 Video Clips &middot; 100% Uncropped
            </span>
          </div>

          {/* Videos Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((vid, i) => (
              <div
                key={vid.id}
                onClick={() => openVideo(vid)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#251e16] shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:border-[#a8895c]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col"
              >
                {/* Video Canvas 100% full view */}
                <div className="relative aspect-[16/10] w-full bg-black flex items-center justify-center overflow-hidden">
                  <video
                    src={vid.src}
                    poster={vid.poster}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-contain transition-all duration-500 group-hover:scale-102"
                    onMouseEnter={(e) => {
                      const target = e.currentTarget;
                      target.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget;
                      target.pause();
                      target.currentTime = 0;
                    }}
                  />

                  {/* Play Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a8895c]/90 text-[#2d2418] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#c2a372]">
                      <Play size={18} className="fill-[#2d2418] ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 rounded-full bg-black/75 px-2.5 py-1 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] backdrop-blur-md">
                    {vid.category}
                  </span>

                  <span className="absolute top-3 right-3 font-sans text-[10px] text-[#a8895c] font-medium bg-black/60 px-2 py-0.5 rounded-full">
                    0{i + 1}
                  </span>
                </div>

                {/* Meta */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl text-white transition-colors group-hover:text-[#d9cdb8]">
                      {vid.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-[#d9cdb8]/70">
                      {vid.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
                    <span>Watch Full Video</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: GALLERY - COMPLETE PHOTO ARCHIVES */}
      <section id="gallery" className="py-24 lg:py-36 relative">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-white/10 pt-16">
            <div>
              <div className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                Photography &middot; Archival Moments
              </div>
              <h2 className="mt-4 font-display text-4xl text-white lg:text-6xl">
                Photo Gallery
              </h2>
              <p className="mt-4 max-w-xl font-serif text-lg italic text-[#d9cdb8]/80">
                The visual journey &mdash; a complete uncropped photo collection capturing milestones, medals, equestrian partnerships, and life on the circuit.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPhotoFilter(cat)}
                  className={`rounded-full px-4 py-1.5 font-sans text-[11px] uppercase tracking-wider transition-all duration-300 ${
                    photoFilter === cat
                      ? 'bg-[#a8895c] text-[#2d2418] font-semibold shadow-sm'
                      : 'border border-white/15 bg-white/5 text-[#d9cdb8] hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid with 100% Full Uncropped Image View */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#251e16] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#a8895c]/60 flex flex-col"
              >
                {/* Photo Container: 100% Uncropped with full view */}
                <div className="relative h-72 sm:h-80 w-full bg-[#120d08] flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-black/75 p-2 text-white backdrop-blur-sm">
                    <Maximize2 size={14} />
                  </div>

                  <span className="absolute bottom-3 left-3 rounded-full bg-black/75 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] backdrop-blur-md">
                    {photo.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg text-white group-hover:text-[#d9cdb8] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#d9cdb8]/70">
                      {photo.caption}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-wider text-[#a8895c]">
                    <span>Open High-Res Lightbox</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL PLAYER - 100% Uncropped */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-md border border-[#a8895c]/40 bg-[#19140e] shadow-2xl flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#a8895c]">
                  {selectedVideo.category} &middot; 100% Full Resolution
                </span>
                <h3 className="font-display text-xl text-white">{selectedVideo.title}</h3>
              </div>
              <button
                onClick={closeVideo}
                className="rounded-full border border-white/20 p-2 text-[#d9cdb8] transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Canvas - 100% object-contain */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[50vh] max-h-[70vh] p-1">
              <video
                ref={modalVideoRef}
                src={selectedVideo.src}
                controls
                autoPlay
                className="h-full w-full max-h-[70vh] object-contain"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#251e16] px-6 py-4 text-xs font-sans text-[#d9cdb8]/80 border-t border-white/10">
              <p>{selectedVideo.description}</p>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={toggleModalPlay}
                  className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-white hover:bg-white/10"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button
                  onClick={toggleModalMute}
                  className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-white hover:bg-white/10"
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PHOTO LIGHTBOX MODAL - 100% Uncropped */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-lg animate-fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 rounded-full border border-white/20 bg-black/60 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-white/20 bg-black/60 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Navigation Next */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-white/20 bg-black/60 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Lightbox Content - 100% Uncropped View */}
          <div className="relative max-h-[92vh] max-w-6xl w-full overflow-hidden rounded-md border border-[#a8895c]/40 bg-[#19140e] shadow-2xl flex flex-col">
            <div className="flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[55vh] max-h-[75vh] p-2">
              <img
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>
            
            <div className="bg-[#251e16] px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#a8895c]">
                  {filteredPhotos[selectedPhotoIndex].category} &middot; {selectedPhotoIndex + 1} of {filteredPhotos.length} &middot; 100% Original Frame
                </span>
                <h4 className="font-display text-xl text-white">
                  {filteredPhotos[selectedPhotoIndex].title}
                </h4>
                <p className="mt-1 font-sans text-xs text-[#d9cdb8]/80">
                  {filteredPhotos[selectedPhotoIndex].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
