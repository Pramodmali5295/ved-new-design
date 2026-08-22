import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, X, ChevronLeft, ChevronRight, Film, Image as ImageIcon, Sparkles } from 'lucide-react';

export const VIDEOS = [
  {
    id: 'video-1',
    src: '/assets/video-1.mp4',
    title: 'Cross-Country Power & Rhythm',
    category: 'Cross Country',
    description: 'Ved navigating open terrain with cadence, balance and precision pacing.',
    poster: '/assets/ved-1.jpeg',
  },
  {
    id: 'video-2',
    src: '/assets/video-2.mp4',
    title: 'Arena Precision & Stride Control',
    category: 'Arena Work',
    description: 'Technical line approaches and balanced take-off over competition fences.',
    poster: '/assets/ved-8.jpeg',
  },
  {
    id: 'video-3',
    src: '/assets/video-3.mp4',
    title: 'Flatwork & Form Alignment',
    category: 'Dressage & Flatwork',
    description: 'Developing connection, impulsion, and supple responsiveness with the horse.',
    poster: '/assets/ved-7.jpeg',
  },
  {
    id: 'video-4',
    src: '/assets/video-4.mp4',
    title: 'Full Course Jump Execution',
    category: 'Show Jumping',
    description: 'Clean clearance across high competition obstacles with zero penalties.',
    poster: '/assets/ved-8.jpeg',
  },
  {
    id: 'video-5',
    src: '/assets/video-5.mp4',
    title: 'Cross-Country Speed & Lines',
    category: 'Eventing Circuit',
    description: 'Speed control, straightness and obstacle navigation at full gallop.',
    poster: '/assets/ved-1.jpeg',
  },
  {
    id: 'video-6',
    src: '/assets/video-6.mp4',
    title: 'Technical Obstacle Sequence',
    category: 'Technical Training',
    description: 'Combination fences, quick recovery and balanced stride discipline.',
    poster: '/assets/ved-6.jpeg',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g-8',
    src: '/assets/ved-8.jpeg',
    title: 'Show Jumping Mastery',
    category: 'Competition',
    caption: 'Flawless clearance over high competition fences, showcasing exceptional rhythm, power, and the Team India emblem.',
  },
  {
    id: 'g-1',
    src: '/assets/ved-1.jpeg',
    title: 'Cross-Country Precision & Speed',
    category: 'Competition',
    caption: 'Ved in competition bib #16 executing a technical gallop across open terrain with perfect stride control.',
  },
  {
    id: 'g-5',
    src: '/assets/ved-5.jpeg',
    title: 'FEI World Challenge Podium',
    category: 'Milestones',
    caption: 'At age 16, Ved stood on the podium at the 2023 FEI Eventing World Challenge in New Delhi — the youngest rider in the field.',
  },
  {
    id: 'g-2',
    src: '/assets/ved-2.jpeg',
    title: 'Junior National Championship Silver',
    category: 'Milestones',
    caption: 'Team Silver presentation ceremony at the Junior National Equestrian Championship, establishing Ved on the national stage.',
  },
  {
    id: 'g-4',
    src: '/assets/ved-4.jpeg',
    title: 'Individual Bronze & Equine Bond',
    category: 'The Bond',
    caption: 'Celebrating the Junior National Individual Bronze medal alongside his trusted equine partner with the tricolor rosette.',
  },
  {
    id: 'g-7',
    src: '/assets/ved-7.jpeg',
    title: 'Formal Equestrian Athlete Portrait',
    category: 'Portraits',
    caption: 'Ved in official competition attire alongside his equine partner — representing focus, discipline, and pride for India.',
  },
  {
    id: 'g-3',
    src: '/assets/ved-3.jpeg',
    title: 'Foundations at Seahorse Academy',
    category: 'The Bond',
    caption: 'Formative training under Indian Olympian Imtiaz Anees, cultivating the fundamental trust and horsemanship behind every victory.',
  },
  {
    id: 'g-6',
    src: '/assets/ved-6.jpeg',
    title: 'Endurance & Trail Conditioning',
    category: 'Portraits',
    caption: 'Long-distance outdoor conditioning sessions designed to develop stamina, calmness, and mental endurance for rider and horse.',
  },
  {
    id: 'g-9',
    src: '/assets/ved-9.jpeg',
    title: 'Hillside Training Horizons',
    category: 'Landscapes',
    caption: 'Open hillside terrain where core training, fresh-air conditioning, and natural riding discipline are forged.',
  },
  {
    id: 'g-10',
    src: '/assets/ved-10.jpeg',
    title: 'The American Circuit & Facilities',
    category: 'Landscapes',
    caption: 'World-class training grounds and arenas in Ocala, Florida — the epicenter of international eventing excellence.',
  },
];


export default function ActionGallery() {
  const [activeMediaTab, setActiveMediaTab] = useState<'all' | 'videos' | 'photos'>('all');

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
    <section id="media" className="bg-[#19140e] text-[#ebe4d8] py-16 sm:py-24 lg:py-36 relative overflow-hidden">
      {/* Anchors for legacy navigation */}
      <div id="action-reel" className="absolute -top-24" />
      <div id="gallery" className="absolute -top-24" />

      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Unified Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
              <span className="h-[1px] w-6 bg-[#a8895c]" />
              Media Archives &middot; 100% Uncropped
            </div>
            <h2 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
              In Action &amp; Gallery
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl font-serif text-base sm:text-lg italic text-[#d9cdb8]/85">
              Experience the full dynamic visual record &mdash; 6 competition action video reels and 10 high-resolution archival photographs.
            </p>
          </div>

          {/* Primary View Switcher Tabs */}
          <div className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-white/15 bg-black/60 p-1 sm:p-1.5 backdrop-blur-md self-start md:self-auto shadow-xl overflow-x-auto no-scrollbar touch-scroll max-w-full">
            <button
              onClick={() => setActiveMediaTab('all')}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 font-sans text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap min-h-[38px] ${
                activeMediaTab === 'all'
                  ? 'bg-[#a8895c] text-[#2d2418] font-bold shadow-md'
                  : 'text-[#d9cdb8] hover:text-white hover:bg-white/10'
              }`}
            >
              <Sparkles size={14} />
              <span>All Media (16)</span>
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
              <span>Videos (6)</span>
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
              <span>Photos (10)</span>
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
                6 Video Clips
              </span>
            </div>

            {/* Videos Grid */}
            <div className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#a8895c]/90 text-[#2d2418] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#c2a372]">
                        <Play size={18} className="fill-[#2d2418] ml-0.5" />
                      </div>
                    </div>

                    <span className="absolute top-2.5 left-2.5 rounded-full bg-black/75 px-2.5 py-1 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] backdrop-blur-md border border-white/10">
                      {vid.category}
                    </span>

                    <span className="absolute top-2.5 right-2.5 font-sans text-[10px] text-[#a8895c] font-medium bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-base sm:text-lg text-white transition-colors group-hover:text-[#d9cdb8]">
                        {vid.title}
                      </h4>
                      <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#d9cdb8]/70">
                        {vid.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
                      <span>Watch Full Clip</span>
                      <span>&rarr;</span>
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

            {/* Photo Grid with 100% Full Uncropped Image View */}
            <div className="mt-8 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(index)}
                  className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#251e16] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#a8895c]/60 flex flex-col"
                >
                  {/* Photo Container: 100% Uncropped with full view */}
                  <div className="relative h-64 sm:h-72 lg:h-80 w-full bg-[#120d08] flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                    
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-black/75 p-1.5 sm:p-2 text-white backdrop-blur-sm border border-white/10">
                      <Maximize2 size={14} />
                    </div>

                    <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/75 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] backdrop-blur-md border border-white/10">
                      {photo.category}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-base sm:text-lg text-white group-hover:text-[#d9cdb8] transition-colors">
                        {photo.title}
                      </h4>
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
        )}
      </div>

      {/* VIDEO MODAL PLAYER - 100% Uncropped & Responsive */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-4 backdrop-blur-md animate-modal-enter">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-md border border-[#a8895c]/40 bg-[#19140e] shadow-2xl flex flex-col max-h-[94vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4">
              <div className="pr-4">
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#a8895c]">
                  {selectedVideo.category} &middot; 100% Full Resolution
                </span>
                <h3 className="font-display text-lg sm:text-xl text-white truncate">{selectedVideo.title}</h3>
              </div>
              <button
                onClick={closeVideo}
                className="rounded-full border border-white/20 p-2 text-[#d9cdb8] transition-colors hover:bg-white/10 hover:text-white shrink-0 min-h-[38px] min-w-[38px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Canvas - 100% object-contain */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[35vh] max-h-[60vh] sm:max-h-[68vh] p-1">
              <video
                ref={modalVideoRef}
                src={selectedVideo.src}
                controls
                autoPlay
                className="h-full w-full max-h-[60vh] sm:max-h-[68vh] object-contain"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-[#251e16] px-4 sm:px-6 py-3 sm:py-4 text-xs font-sans text-[#d9cdb8]/80 border-t border-white/10">
              <p className="text-xs">{selectedVideo.description}</p>
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={toggleModalPlay}
                  className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-white hover:bg-white/10 min-h-[36px]"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button
                  onClick={toggleModalMute}
                  className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-white hover:bg-white/10 min-h-[36px]"
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PHOTO LIGHTBOX MODAL - 100% Uncropped & Responsive */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4 backdrop-blur-lg animate-modal-enter">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 rounded-full border border-white/20 bg-black/70 p-2 sm:p-3 text-white transition-colors hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={prevPhoto}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-white/20 bg-black/70 p-2 sm:p-3 text-white transition-colors hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Previous photo"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Navigation Next */}
          <button
            onClick={nextPhoto}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-white/20 bg-black/70 p-2 sm:p-3 text-white transition-colors hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Next photo"
          >
            <ChevronRight size={22} />
          </button>

          {/* Main Lightbox Content - 100% Uncropped View */}
          <div className="relative max-h-[94vh] max-w-6xl w-full overflow-hidden rounded-md border border-[#a8895c]/40 bg-[#19140e] shadow-2xl flex flex-col">
            <div className="flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[40vh] max-h-[64vh] sm:max-h-[74vh] p-2">
              <img
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-h-[62vh] sm:max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>
            
            <div className="bg-[#251e16] px-4 sm:px-6 py-3 sm:py-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
              <div>
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#a8895c]">
                  {filteredPhotos[selectedPhotoIndex].category} &middot; {selectedPhotoIndex + 1} of {filteredPhotos.length} &middot; 100% Original Frame
                </span>
                <h4 className="font-display text-lg sm:text-xl text-white">
                  {filteredPhotos[selectedPhotoIndex].title}
                </h4>
                <p className="mt-0.5 sm:mt-1 font-sans text-xs text-[#d9cdb8]/80 line-clamp-2 sm:line-clamp-none">
                  {filteredPhotos[selectedPhotoIndex].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
