import { useState } from 'react';
import { Mail, MapPin, Sparkles, Award, Globe, Copy, Check, ExternalLink, ShieldCheck, Flag, Users } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'vedsarkar.equestrian@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="bg-[#1c1610] text-[#ebe4d8] py-16 sm:py-24 lg:py-36 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-1/4 right-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none animate-ambient-glow" style={{ animationDelay: '9s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
              <span className="h-[1px] w-6 bg-[#a8895c]" />
              Connect &bull; Partnerships &bull; Official Inquiries
            </div>
            <h1 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
              Contact &amp; Partnerships
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl font-serif text-base sm:text-lg italic text-[#d9cdb8]/85">
              Connect directly with Ved Sarma Sarkar and his management team for corporate sponsorships, CSR foundations, media coverage, and equestrian inquiries.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#a8895c]/40 bg-[#251e16] px-3.5 sm:px-4 py-2 text-xs font-sans text-[#e6c994] self-start md:self-auto shadow-lg">
            <Sparkles size={14} className="text-[#a8895c]" />
            <span>Target: Asian Games 2030 &bull; Olympics 2032</span>
          </div>
        </div>

        {/* Primary Contact Channels Grid */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Official Email & Communications */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-6 sm:p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#a8895c]/60 flex flex-col justify-between" style={{ transitionDelay: '0.05s' }}>
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994]">
                  <Mail size={20} />
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#a8895c] font-semibold bg-black/50 px-2.5 py-1 rounded-full border border-[#a8895c]/30">
                  Primary Channel
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl sm:text-2xl text-white">Direct Email</h3>
              <p className="mt-2 font-sans text-xs text-[#d9cdb8]/80 leading-relaxed">
                For sponsorship inquiries, press interviews, invitations, and official correspondence.
              </p>
              
              <div className="mt-5 rounded-sm bg-[#140e08] border border-white/10 p-3.5 flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-[#e6c994] truncate">
                  {email}
                </span>
                <button
                  onClick={copyEmail}
                  className="shrink-0 p-1.5 rounded bg-white/5 hover:bg-white/15 text-[#d9cdb8] hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#a8895c] hover:text-[#e6c994] transition-colors"
              >
                <span>Compose Email</span>
                <span>&rarr;</span>
              </a>
              {copied && (
                <span className="text-[10px] text-emerald-400 font-sans">
                  Copied to clipboard!
                </span>
              )}
            </div>
          </div>

          {/* Card 2: International Training Headquarters */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-6 sm:p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#a8895c]/60 flex flex-col justify-between" style={{ transitionDelay: '0.1s' }}>
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994]">
                  <MapPin size={20} />
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#a8895c] font-semibold bg-black/50 px-2.5 py-1 rounded-full border border-[#a8895c]/30">
                  United States
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl sm:text-2xl text-white">Training Base</h3>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-[#a8895c] font-semibold">
                Ocala, Florida, USA
              </p>
              
              <div className="mt-4 space-y-2 text-xs font-sans text-[#d9cdb8]/80 leading-relaxed">
                <p>&bull; <strong>Facility:</strong> BDJ Equestrian Center</p>
                <p>&bull; <strong>Coach:</strong> Bruce Davidson Jr. (5★ Eventer)</p>
                <p>&bull; <strong>Circuit:</strong> World Equestrian Center (WEC) Ocala</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
              <span>Active Circuit</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Card 3: Home Base & National Representation */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-6 sm:p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#a8895c]/60 flex flex-col justify-between" style={{ transitionDelay: '0.15s' }}>
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994]">
                  <Globe size={20} />
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#a8895c] font-semibold bg-black/50 px-2.5 py-1 rounded-full border border-[#a8895c]/30">
                  India
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl sm:text-2xl text-white">Home Base</h3>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-wider text-[#a8895c] font-semibold">
                Pune &bull; Gujarat, India
              </p>
              
              <div className="mt-4 space-y-2 text-xs font-sans text-[#d9cdb8]/80 leading-relaxed">
                <p>&bull; <strong>Academy:</strong> Seahorse Equestrian Academy</p>
                <p>&bull; <strong>Foundational Mentor:</strong> Imtiaz Anees (Indian Olympian)</p>
                <p>&bull; <strong>Federation:</strong> Equestrian Federation of India (EFI)</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
              <span>Team India Athlete</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#a8895c]" />
            </div>
          </div>
        </div>

        {/* Detailed Collaboration & Sponsorship Information Banner */}
        <div className="reveal mt-12 sm:mt-16 overflow-hidden rounded-sm border border-[#a8895c]/40 bg-gradient-to-br from-[#251e16] via-[#1f1811] to-[#17120c] p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-[#a8895c] font-semibold">
                <Award size={16} />
                <span>Corporate Partnerships &amp; CSR Alignment</span>
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl text-white">
                Partner with India&rsquo;s Olympic Eventing Pathway
              </h2>
              <p className="mt-4 font-serif text-base sm:text-lg italic text-[#d9cdb8]/90 leading-relaxed">
                Empowering an extraordinary young Indian equestrian athlete as he advances through elite 2★, 3★, and 4★ international competition stages toward the 2030 Asian Games and 2032 Olympic Games.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 pt-6 border-t border-white/10">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={18} className="text-[#a8895c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-wider">Brand Synergy</h4>
                    <p className="font-sans text-[11px] text-[#d9cdb8]/70 mt-0.5">High-visibility global sports and luxury branding.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Users size={18} className="text-[#a8895c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-wider">CSR Integration</h4>
                    <p className="font-sans text-[11px] text-[#d9cdb8]/70 mt-0.5">Youth sports empowerment &amp; Olympic development.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Flag size={18} className="text-[#a8895c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-wider">National Pride</h4>
                    <p className="font-sans text-[11px] text-[#d9cdb8]/70 mt-0.5">Putting Indian equestrian on world championship podiums.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href={`mailto:${email}?subject=Partnership%20%26%20Sponsorship%20Inquiry%20-%20Ved%20Sarma%20Sarkar`}
                className="inline-flex items-center gap-2 rounded-full border border-[#a8895c] bg-[#a8895c] px-7 py-3.5 font-sans text-xs uppercase tracking-widest font-bold text-[#2d2418] hover:bg-[#c2a372] transition-all shadow-xl min-h-[46px]"
              >
                <Mail size={15} />
                <span>Initiate Partnership</span>
              </a>
              <p className="mt-3 font-sans text-[11px] text-[#d9cdb8]/60 text-left lg:text-right">
                Responses typically within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
