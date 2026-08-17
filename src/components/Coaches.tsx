import { COACHES, IMAGES } from '@/data';
import { ExternalLink } from 'lucide-react';

export default function Coaches() {
  const imageMap: Record<string, string> = {
    'IMAGES.coachBruce': IMAGES.coachBruce,
    'IMAGES.coachDonna': IMAGES.coachDonna,
    'IMAGES.coachCadre': IMAGES.coachCadre,
    'IMAGES.coachCullen': IMAGES.coachCullen,
    'IMAGES.coachImtiaz': IMAGES.coachImtiaz,
  };

  return (
    <section id="coaches" className="bg-[#f5f1ea] py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
            Coaches &amp; Mentors
          </p>
          <h2 className="mt-6 font-display text-4xl text-[#2d2418] lg:text-6xl">
            The people who shaped the rider.
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-16 lg:mt-24">
          {COACHES.map((coach, i) => (
            <div
              key={coach.name}
              className={`reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={imageMap[coach.image] ?? IMAGES.coachBruce}
                  alt={coach.name}
                  className="aspect-[5/4] w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                />
              </div>

              {/* Text */}
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#a8895c]">
                  {coach.location}
                </p>
                <h3 className="mt-4 font-display text-3xl text-[#2d2418] lg:text-4xl">
                  {coach.name}
                </h3>
                <p className="mt-2 font-serif text-lg italic text-[#5c4f3d]">{coach.role}</p>
                <p className="mt-6 font-sans text-sm leading-[1.8] text-[#5c4f3d]">
                  {coach.text}
                </p>
                <a
                  href={`https://${coach.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[#a8895c] transition-colors hover:text-[#2d2418]"
                >
                  {coach.link}
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
