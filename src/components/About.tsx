import { IMAGES } from '@/data';

export default function About() {
  return (
    <section id="about" className="bg-[#f5f1ea] py-24 lg:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* 100% Full Uncropped Image Presentation */}
          <div className="reveal relative lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full overflow-hidden rounded-sm bg-[#2d2418] shadow-2xl border border-[#a8895c]/30 p-2 flex items-center justify-center">
              <img
                src={IMAGES.about}
                alt="Ved Sarma Sarkar in official equestrian uniform with horse"
                className="h-auto max-h-[580px] w-full object-contain transition-transform duration-700 hover:scale-102"
              />
              <div className="absolute bottom-3 left-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-sm flex items-center justify-between text-white">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#d9cdb8]">
                  FEI International Athlete
                </span>
                <p className="font-display text-sm">Ved Sarma Sarkar</p>
              </div>
            </div>

            {/* Inset Secondary Image - 100% Uncropped */}
            <div className="absolute -bottom-6 -right-4 hidden sm:block w-44 overflow-hidden rounded-sm border-2 border-[#a8895c] bg-[#1f1912] shadow-2xl p-1">
              <img
                src={IMAGES.aboutSecondary}
                alt="Ved training outdoors on trail"
                className="h-36 w-full object-contain"
              />
              <div className="bg-[#2d2418] py-1 text-center">
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#a8895c]">
                  Trail &amp; Conditioning
                </span>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -top-4 -left-4 -z-10 h-28 w-28 border border-[#a8895c]/30" />
          </div>

          {/* Text */}
          <div className="reveal lg:col-span-6" style={{ transitionDelay: '0.15s' }}>
            <div className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
              <span className="h-[1px] w-6 bg-[#a8895c]" />
              Who is Ved
            </div>
            
            <h2 className="mt-5 font-display text-4xl text-[#2d2418] lg:text-5xl leading-tight">
              The journey to the world&rsquo;s biggest stages.
            </h2>

            <blockquote className="mt-6 border-l-2 border-[#a8895c] pl-6 font-serif text-xl italic leading-relaxed text-[#5c4f3d] lg:text-2xl">
              &ldquo;To me, riding is freedom of my soul. I ride for the love of horses, the sport
              and most importantly to win. While I pursue Eventing as a discipline, I make sure
              that my horse and I are a team, and we work towards mastering the basics, for high
              performance.&rdquo;
            </blockquote>

            <div className="mt-6 space-y-4 font-sans text-sm leading-[1.8] text-[#5c4f3d]">
              <p>
                At 16, he became one of India&rsquo;s youngest international eventing podium
                finishers. He didn&rsquo;t begin with the easiest path. He learned to make the most
                of every opportunity he was given.
              </p>
              <p>
                Determined to represent India at the Asian Games in 2030 and the Olympics in 2032
                &mdash; and multiple times thereafter &mdash; making India a formidable name in the
                world of equestrian sport. He believes in training hard and playing well.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#a8895c]/20 flex items-center gap-6">
              <div>
                <p className="font-display text-2xl text-[#2d2418]">Ocala, FL</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#a8895c]">Training Circuit</p>
              </div>
              <div className="h-8 w-[1px] bg-[#a8895c]/30" />
              <div>
                <p className="font-display text-2xl text-[#2d2418]">2030 &amp; 2032</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#a8895c]">Asian &amp; Olympic Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
