import { BELIEVERS } from '@/data';

export default function Believers() {
  return (
    <section id="believers" className="bg-[#ebe4d8] py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
            The Early Believers
          </p>
          <h2 className="mt-6 font-display text-4xl text-[#2d2418] lg:text-6xl">
            Those who saw it first.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-[#a8895c]/20 sm:grid-cols-3">
          {BELIEVERS.map((b, i) => (
            <div
              key={b.name}
              className="reveal bg-[#ebe4d8] p-10 lg:p-12"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="font-display text-4xl text-[#a8895c]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 font-display text-2xl text-[#2d2418]">{b.name}</h3>
              <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#a8895c]">
                {b.role}
              </p>
              <p className="mt-6 font-sans text-sm leading-[1.8] text-[#5c4f3d]">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
