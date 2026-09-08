import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  autoplayOnView?: boolean;
}

export const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
  ({ src, poster, className = '', autoplayOnView = true, muted = true, loop = true, playsInline = true, ...props }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => videoRef.current as HTMLVideoElement);

    useEffect(() => {
      const videoEl = videoRef.current;
      if (!videoEl || !autoplayOnView) return;

      let isCurrentInView = false;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isCurrentInView = true;
              const playPromise = videoEl.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // Autoplay was prevented or interrupted by rapid scroll
                });
              }
            } else {
              isCurrentInView = false;
              if (!videoEl.paused) {
                videoEl.pause();
              }
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '400px',
        }
      );

      const handleVisibilityChange = () => {
        if (document.hidden) {
          if (!videoEl.paused) videoEl.pause();
        } else if (isCurrentInView) {
          videoEl.play().catch(() => {});
        }
      };

      observer.observe(videoEl);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        observer.disconnect();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, [autoplayOnView, src]);

    return (
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        disablePictureInPicture
        disableRemotePlayback
        className={className}
        {...props}
      />
    );
  }
);

LazyVideo.displayName = 'LazyVideo';
export default LazyVideo;
