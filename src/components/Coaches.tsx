import { ExternalLink, Sparkles } from 'lucide-react';

const COACHES = [
  {
    name: 'Bruce Davidson Jr.',
    location: 'BDJ Equestrian, Ocala FL',
    role: '5★ Eventer — Coach',
    text: 'A world-renowned eventer, training very selectively at BDJ Equestrian Centre in Ocala, FL and Chesterland, PA — the “Mecca of Eventing.” With five decades of top 5★ experience, Buck Davidson held world #3 and US #1 for a long period, and has coached numerous eventers to Olympics and World Championships. Son of legendary four-time Olympian Bruce Davidson Sr.',
    link: 'www.bdjequestrian.com',
    image: 'https://images.pexels.com/photos/5655498/pexels-photo-5655498.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Donna Smith',
    location: 'Waikato, New Zealand',
    role: '5★ Eventer — Coach',
    text: 'An acclaimed 5★ eventer, winner of 11 national titles, who has represented New Zealand eleven times internationally. An expert in training horses from lower levels to 5★, she is a sought-after coach and her country’s future Performance Potential Squad member. She trained Ved to higher difficulties of cross country, and in the huge importance of core strength and body balance.',
    link: 'www.donnasmitheventing.com',
    image: 'https://images.pexels.com/photos/16574820/pexels-photo-16574820.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Le Cadre Noir',
    location: 'IFCE, Saumur, France',
    role: 'Elite Equine Institute',
    text: 'Internationally one of the most respected equine institutes, supported by the French Government. The lessons from the Ecuyers — especially Mr. David — set the quality and detailing of Ved’s riding. A deep learning on covering higher fences with ease and using the body effectively.',
    link: 'le-cadre-noir.com',
    image: 'https://images.pexels.com/photos/4894978/pexels-photo-4894978.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Cullen Equine Solutions',
    location: 'Belfast, Northern Ireland',
    role: 'European 5★ Eventers',
    text: 'Ved’s cross-country training started under Mr. Declan Cullen and Mrs. Becky Cullen, European 5★ eventers. The learnings helped Ved later compete and win in Eventing. He gained knowledge about stable management, improving horse fitness through swimming, incline galloping, advanced equipment use, and nutrition.',
    link: 'cullenequine.com',
    image: 'https://images.pexels.com/photos/18892382/pexels-photo-18892382.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Sea Horse Equestrian',
    location: 'Nargol, Gujarat, India',
    role: 'Mr. Imtiaz Anees — Indian Olympian',
    text: 'Indian equestrian is well aware of the legendary Mr. Imtiaz Anees, the second Indian Olympian to participate in the Olympic Games, Sydney 2000, and winner of innumerable medals for India across the world. A certified instructor, coach and author, through Mr. Anees’ guidance, Ved developed technical knowledge of the game and the values required of a sportsman — resilience against set-backs and the attitude of a winner.',
    link: 'imtiazanees.com',
    image: '/assets/ved-3.jpeg',
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="bg-[#1c1610] text-[#ebe4d8] py-16 sm:py-24 lg:py-36 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
              <span className="h-[1px] w-6 bg-[#a8895c]" />
              World-Class Mentorship
            </div>
            <h1 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
              The People Who Shaped the Rider
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl font-serif text-base sm:text-lg italic text-[#d9cdb8]/85">
              From Indian Olympian Imtiaz Anees to five-star international masters in New Zealand, France, Northern Ireland, and the United States.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#a8895c]/40 bg-[#251e16] px-3.5 sm:px-4 py-2 text-xs font-sans text-[#e6c994] self-start md:self-auto shadow-lg">
            <Sparkles size={14} className="text-[#a8895c]" />
            <span>5★ Masters &bull; Olympic Mentors</span>
          </div>
        </div>

        {/* Coach List Cards */}
        <div className="mt-12 sm:mt-16 flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {COACHES.map((coach, i) => (
            <div
              key={coach.name}
              className={`reveal rounded-sm border border-white/10 bg-[#251e16] p-5 sm:p-8 lg:p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#a8895c]/60 grid items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12 ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Image Container with Fallback */}
              <div className="lg:col-span-5 overflow-hidden rounded-sm bg-[#120d08] border border-white/10 shadow-lg relative group aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
                <img
                  src={coach.image}
                  alt={coach.name}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/ved-3.jpeg';
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 rounded-full bg-black/80 px-2.5 sm:px-3 py-1 font-sans text-[8px] sm:text-[9px] uppercase tracking-widest text-[#e6c994] backdrop-blur-md border border-[#a8895c]/30">
                  {coach.location}
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-display text-xl sm:text-2xl font-bold text-[#e6c994]">0{i + 1}</span>
                    <span className="h-3.5 w-[1px] bg-[#a8895c]/40" />
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#a8895c] font-semibold">
                      {coach.location}
                    </span>
                  </div>

                  <h2 className="mt-2.5 sm:mt-3 font-display text-xl sm:text-2xl lg:text-3xl text-white">
                    {coach.name}
                  </h2>
                  <p className="mt-1 font-serif text-base sm:text-lg italic text-[#e6c994]/90 font-medium">
                    {coach.role}
                  </p>

                  <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm leading-[1.8] text-[#d9cdb8]/80">
                    {coach.text}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`https://${coach.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#a8895c]/40 bg-black/40 px-3.5 sm:px-4 py-2 font-sans text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#e6c994] font-medium hover:bg-[#a8895c] hover:text-[#2d2418] hover:border-[#a8895c] transition-all group min-h-[38px]"
                  >
                    <span>Visit {coach.link}</span>
                    <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <span className="rounded-full bg-black/50 px-3 py-1 font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c] border border-[#a8895c]/30">
                    Verified Mentor
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
