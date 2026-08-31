import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Play, Maximize2, X, ChevronLeft, ChevronRight, Film, Image as ImageIcon, Sparkles } from 'lucide-react';
import { VIDEOS, GALLERY_ITEMS } from '@/data';
import { useGsapReveal } from '@/hooks/useGsapAnimations';


export default function ActionGallery() {
  const [activeMediaTab, setActiveMediaTab] = useState<'all' | 'videos' | 'photos'>('all');

  // Video modal state
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);

  // Photo gallery lightbox state
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [photoFilter, setPhotoFilter] = useState<string>('All');

  const sectionRef = useGsapReveal<HTMLElement>([activeMediaTab, photoFilter]);

  const categories = ['All', 'Competition', 'Milestones', 'The Bond', 'Portraits', 'Landscapes'];

  const filteredPhotos = photoFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === photoFilter);

  const openVideoModal = (index: number) => {
    setSelectedVideoIndex(index);
  };

  const closeVideoModal = () => {
    setSelectedVideoIndex(null);
  };

  const prevVideo = useCallback(() => {
    setSelectedVideoIndex((prev) => (prev === null ? null : (prev - 1 + VIDEOS.length) % VIDEOS.length));
  }, []);

  const nextVideo = useCallback(() => {
    setSelectedVideoIndex((prev) => (prev === null ? null : (prev + 1) % VIDEOS.length));
  }, []);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const prevPhoto = useCallback(() => {
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  const nextPhoto = useCallback(() => {
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  // Lock & preserve scroll position when modal is open
  useEffect(() => {
    if (selectedPhotoIndex !== null || selectedVideoIndex !== null) {
      const scrollY = window.scrollY;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
        window.scrollTo({ top: scrollY, behavior: 'instant' });
      };
    }
  }, [selectedPhotoIndex, selectedVideoIndex]);

  // Keyboard navigation & Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
        closeVideoModal();
      } else if (e.key === 'ArrowLeft') {
        if (selectedPhotoIndex !== null) prevPhoto();
        if (selectedVideoIndex !== null) prevVideo();
      } else if (e.key === 'ArrowRight') {
        if (selectedPhotoIndex !== null) nextPhoto();
        if (selectedVideoIndex !== null) nextVideo();
      }
    };
    if (selectedPhotoIndex !== null || selectedVideoIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, selectedVideoIndex, prevPhoto, nextPhoto, prevVideo, nextVideo]);

  return (
    <section ref={sectionRef} id="media" className="bg-[#19140e] text-[#ebe4d8] py-16 sm:py-24 lg:py-36 relative overflow-hidden">
      {/* Anchors for legacy navigation */}
      <div id="action-reel" className="absolute -top-24" />
      <div id="gallery" className="absolute -top-24" />

      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Unified Section Header - Centered */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
            <span className="h-[1px] w-6 bg-[#a8895c]" />
            Media Archives &middot; 100% Uncropped
            <span className="h-[1px] w-6 bg-[#a8895c]" />
          </div>
          <h2 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
            In Action &amp; Gallery
          </h2>
          <p className="mt-3 sm:mt-4 font-serif text-base sm:text-lg italic text-[#d9cdb8]/85 text-center">
            Experience the full dynamic visual record &mdash; {VIDEOS.length} competition action video reels and {GALLERY_ITEMS.length} high-resolution archival photographs.
          </p>

          {/* Primary View Switcher Tabs - Centered */}
          <div className="mt-6 flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-white/15 bg-black/60 p-1 sm:p-1.5 backdrop-blur-md shadow-xl overflow-x-auto no-scrollbar touch-scroll max-w-full">
            <button
              onClick={() => setActiveMediaTab('all')}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 font-sans text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap min-h-[38px] ${
                activeMediaTab === 'all'
                  ? 'bg-[#a8895c] text-[#2d2418] font-bold shadow-md'
                  : 'text-[#d9cdb8] hover:text-white hover:bg-white/10'
              }`}
            >
              <Sparkles size={14} />
              <span>All Media ({VIDEOS.length + GALLERY_ITEMS.length})</span>
            </button>
            <button
              onClick={() => setActiveMediaTab('videos')}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 font-sans text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap min-h-[38px] ${
                activeMediaTab === 'videos'
                  ? 'bg-[#a8895c] text-[#2d2418] font-bold shadow-md'
                  : 'text-[#d9cdb8] hover:text-white hover:bg-white/10'
              }`}
            >
              <Film size={14} />
              <span>Videos ({VIDEOS.length})</span>
            </button>
            <button
              onClick={() => setActiveMediaTab('photos')}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 font-sans text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap min-h-[38px] ${
                activeMediaTab === 'photos'
                  ? 'bg-[#a8895c] text-[#2d2418] font-bold shadow-md'
                  : 'text-[#d9cdb8] hover:text-white hover:bg-white/10'
              }`}
            >
              <ImageIcon size={14} />
              <span>Photos ({GALLERY_ITEMS.length})</span>
            </button>
          </div>
        </div>

        {/* VIDEOS SUB-SECTION */}
        {(activeMediaTab === 'all' || activeMediaTab === 'videos') && (
          <div className="reveal mt-12 sm:mt-16">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Film size={18} className="text-[#a8895c]" />
                <h3 className="font-display text-xl sm:text-2xl text-white">Action Video Reels</h3>
              </div>
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#a8895c]">
                {VIDEOS.length} Video Clips
              </span>
            </div>

            {/* Videos Grid */}
            <div className="gsap-stagger-container mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {VIDEOS.map((vid, i) => (
                <div
                  key={vid.id}
                  onClick={() => openVideoModal(i)}
                  className="gsap-stagger-item group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#120d08] shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:border-[#a8895c]/70 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center p-1"
                >
                  <video
                    src={vid.src}
                    poster={vid.poster}
                    preload="none"
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-102 pointer-events-none"
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

                  {/* Play Button Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="play-ripple flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#a8895c] text-[#2d2418] shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#c2a372]">
                      <Play size={20} className="fill-[#2d2418] ml-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PHOTOS SUB-SECTION */}
        {(activeMediaTab === 'all' || activeMediaTab === 'photos') && (
          <div className="reveal mt-16 sm:mt-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-12 sm:pt-16 pb-4">
              <div className="flex items-center gap-3">
                <ImageIcon size={18} className="text-[#a8895c]" />
                <h3 className="font-display text-xl sm:text-2xl text-white">Archival Photography</h3>
              </div>

              {/* Photo Category Filter Pills with horizontal touch-scroll */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar touch-scroll py-1 max-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setPhotoFilter(cat)}
                    className={`rounded-full px-3 sm:px-3.5 py-1 font-sans text-[9px] sm:text-[10px] uppercase tracking-wider transition-all duration-300 whitespace-nowrap min-h-[32px] ${
                      photoFilter === cat
                        ? 'bg-[#a8895c] text-[#2d2418] font-bold shadow-sm'
                        : 'border border-white/15 bg-white/5 text-[#d9cdb8] hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Grid with Organic Masonry Flow (Vertical & Horizontal seamlessly mixed) */}
            <div className="gsap-stagger-container mt-8 columns-1 xs:columns-2 md:columns-3 xl:columns-4 gap-3.5 sm:gap-4">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openLightbox(index);
                  }}
                  className="gsap-stagger-item group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#140e08] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#a8895c]/70 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] mb-4 break-inside-avoid"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-104 block"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Subtle Hover Overlay with category tag & zoom icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 pointer-events-none">
                    <div className="flex justify-end">
                      <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-[#e6c994] bg-black/80 px-2 py-0.5 rounded-sm border border-[#a8895c]/40 backdrop-blur-sm">
                        {photo.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="rounded-full bg-black/80 p-2.5 text-[#d9cdb8] border border-[#a8895c]/50 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 size={18} className="text-[#a8895c]" />
                      </div>
                    </div>
                    <div />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* VIDEO MODAL - Rendered via Portal directly into document.body */}
      {selectedVideoIndex !== null && VIDEOS[selectedVideoIndex] && typeof document !== 'undefined' && createPortal(
        <div
          onClick={closeVideoModal}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md animate-modal-enter cursor-pointer"
        >
          {/* Main Video Card Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[82vh] max-w-3xl w-full overflow-hidden rounded-lg border border-[#a8895c]/50 bg-[#140e08] shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center p-3 sm:p-5 cursor-default my-auto"
          >
            {/* Top Close Button attached right on the video card */}
            <button
              onClick={closeVideoModal}
              className="absolute top-3 right-3 z-30 flex items-center gap-1.5 rounded-full bg-black/90 hover:bg-[#a8895c] px-3 py-1.5 text-xs text-white hover:text-[#19140e] font-sans font-medium border border-white/20 hover:border-[#a8895c] shadow-lg transition-all duration-200 cursor-pointer"
              aria-label="Close video"
            >
              <X size={15} />
              <span>Close</span>
            </button>

            {/* Navigation Prev Button */}
            <button
              onClick={prevVideo}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 rounded-full border border-white/20 bg-black/80 hover:bg-[#a8895c] p-2 sm:p-2.5 text-white hover:text-[#19140e] transition-all hover:border-[#a8895c] shadow-lg cursor-pointer"
              aria-label="Previous video"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Navigation Next Button */}
            <button
              onClick={nextVideo}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 rounded-full border border-white/20 bg-black/80 hover:bg-[#a8895c] p-2 sm:p-2.5 text-white hover:text-[#19140e] transition-all hover:border-[#a8895c] shadow-lg cursor-pointer"
              aria-label="Next video"
            >
              <ChevronRight size={20} />
            </button>

            {/* Centered Video with balanced, comfortable height */}
            <div className="w-full flex items-center justify-center overflow-hidden py-1">
              <video
                src={VIDEOS[selectedVideoIndex].src}
                controls
                autoPlay
                playsInline
                disablePictureInPicture
                className="max-h-[62vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded shadow-md"
              />
            </div>

            {/* Counter indicator */}
            <div className="mt-2.5 text-center px-4">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#a8895c] font-medium">
                Video {selectedVideoIndex + 1} / {VIDEOS.length}
              </span>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* PHOTO LIGHTBOX MODAL - Rendered via Portal directly into document.body */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && typeof document !== 'undefined' && createPortal(
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md animate-modal-enter cursor-pointer"
        >
          {/* Main Lightbox Card Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[82vh] max-w-3xl w-full overflow-hidden rounded-lg border border-[#a8895c]/50 bg-[#140e08] shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center p-3 sm:p-5 cursor-default my-auto"
          >
            {/* Top Close Button attached right on the image card */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-30 flex items-center gap-1.5 rounded-full bg-black/90 hover:bg-[#a8895c] px-3 py-1.5 text-xs text-white hover:text-[#19140e] font-sans font-medium border border-white/20 hover:border-[#a8895c] shadow-lg transition-all duration-200 cursor-pointer"
              aria-label="Close image"
            >
              <X size={15} />
              <span>Close</span>
            </button>

            {/* Navigation Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 rounded-full border border-white/20 bg-black/80 hover:bg-[#a8895c] p-2 sm:p-2.5 text-white hover:text-[#19140e] transition-all hover:border-[#a8895c] shadow-lg cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Navigation Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 rounded-full border border-white/20 bg-black/80 hover:bg-[#a8895c] p-2 sm:p-2.5 text-white hover:text-[#19140e] transition-all hover:border-[#a8895c] shadow-lg cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight size={20} />
            </button>

            {/* Centered Image with balanced, comfortable height */}
            <div className="w-full flex items-center justify-center overflow-hidden py-1">
              <img
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-h-[62vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded select-none shadow-md"
              />
            </div>

            {/* Counter indicator */}
            <div className="mt-2.5 text-center px-4">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#a8895c] font-medium">
                Photo {selectedPhotoIndex + 1} / {filteredPhotos.length} &middot; {filteredPhotos[selectedPhotoIndex].title}
              </span>
            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
