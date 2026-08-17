import { IMAGES } from '@/data';

export default function About() {
  return (
    <section id="about" className="bg-[#f5f1ea] py-24 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="reveal relative">
            <div className="overflow-hidden">
              <img
                src={IMAGES.about}
                alt="Ved riding in an outdoor arena"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-[#a8895c]/40 lg:block" />
          </div>

          {/* Text */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <p className="font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
              Who is Ved
            </p>
            <h2 className="mt-6 font-display text-4xl text-[#2d2418] lg:text-5xl">
              The journey to the world&rsquo;s biggest stages.
            </h2>

            <blockquote className="mt-8 border-l border-[#a8895c]/40 pl-6 font-serif text-xl italic leading-relaxed text-[#5c4f3d] lg:text-2xl">
              &ldquo;To me, riding is freedom of my soul. I ride for the love of horses, the sport
              and most importantly to win. While I pursue Eventing as a discipline, I make sure
              that my horse and I are a team, and we work towards mastering the basics, for high
              performance.&rdquo;
            </blockquote>

            <p className="mt-8 font-sans text-sm leading-[1.8] text-[#5c4f3d]">
              At 16, he became one of India&rsquo;s youngest international eventing podium
              finishers. He didn&rsquo;t begin with the easiest path. He learned to make the most
              of every opportunity he was given.
            </p>

            <p className="mt-6 font-sans text-sm leading-[1.8] text-[#5c4f3d]">
              Determined to represent India at the Asian Games in 2030 and the Olympics in 2032
              &mdash; and multiple times thereafter &mdash; making India a formidable name in the
              world of equestrian sport. He believes in training hard and playing well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
