import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import ezequielImg from "@/assets/ezequiel.png";
import honorataImg from "@/assets/honorata.png";
import lucasImg from "@/assets/lucas.png";
import piranImg from "@/assets/piran.png";
import espaco1 from "@/assets/espaco-1.webp";
import espaco2 from "@/assets/espaco-2.webp";
import espaco3 from "@/assets/espaco-3.webp";
import espaco4 from "@/assets/espaco-4.webp";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/5511979839527";
const INSTAGRAM = "https://instagram.com/psi.ezequiell";
const EMAIL = "Ezequiell.fernandes@gmail.com";
const ADDRESS = "Av. Atlântica, 5441 - sala 5 - Parque Atlântico, São Paulo - SP, 04805-000";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-title");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="bg-[#F0F4F8] text-[#2C3E50] overflow-x-hidden">
      <Header />
      <Hero />
      <Credentials />
      <About />
      <Process />
      <Benefits />
      <Modalities />
      <Testimonials />
      <FinalCTA />
      <OurSpace />
      <LocationMap />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        setPastHero(y > window.innerHeight - 80);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        pastHero ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${scrolled ? "bg-[#050E18]/70 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <span className="font-display text-white text-xl md:text-2xl tracking-wide">Ezequiel Fernandes</span>
        <a
          href={WHATSAPP}
          className="eyebrow text-[#B0A090] hover:text-white transition-colors border border-[#B0A090]/40 hover:border-white/60 px-4 py-2 rounded-[4px]"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-[#050E18]">
      {/* Shader background */}
      <div className="absolute inset-0">
        <MeshGradient
          colors={["#050E18", "#0D2E4D", "#1A5276", "#B0A090"]}
          distortion={0.85}
          swirl={0.35}
          speed={0.35}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050E18]/40 via-transparent to-[#050E18]/70" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-40 md:py-0 max-w-7xl mx-auto w-full">
        <div className="max-w-xl">
          <div className="eyebrow text-[#B0A090] mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#B0A090]" />
            Gestalt-terapia · São Paulo
          </div>
          <h1 className="font-display text-white font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(42px, 8vw, 84px)" }}>
            Consciência<br/>que<br/><em className="not-italic text-[#B0A090]">transforma.</em>
          </h1>
          <p className="mt-8 text-white/70 text-base md:text-lg leading-relaxed max-w-md">
            11 anos ajudando pessoas a entenderem seus padrões emocionais e construírem uma vida com mais equilíbrio e autonomia.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5">
            <a
              href={WHATSAPP}
              className="inline-flex items-center gap-3 bg-[#1A5276] hover:bg-[#1f6391] transition-colors duration-200 text-white px-8 py-4 rounded-[4px] font-medium backdrop-blur"
            >
              Agendar minha consulta
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h16m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5"/></svg>
            </a>
            <div className="flex flex-col gap-1 text-white/60 text-xs">
              <span>Atendimento presencial e online</span>
              <span className="flex items-center gap-2">
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none"><path d="M5.5 12s4.5-4 4.5-7.5a4.5 4.5 0 10-9 0C1 8 5.5 12 5.5 12z" stroke="#B0A090" strokeWidth="1"/><circle cx="5.5" cy="4.5" r="1.5" stroke="#B0A090" strokeWidth="1"/></svg>
                Interlagos, São Paulo
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 md:left-12 z-10 eyebrow text-white/40">
        CRP 06/129984 · SP
      </div>
    </section>
  );
}

function Credentials() {
  const items = [
    { num: "11", label: "Anos de experiência" },
    { num: "Gestalt", label: "Abordagem principal" },
    { num: "Neuro", label: "Especialização em neurociências" },
  ];
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const touchRef = useRef({ startX: 0, startY: 0 });

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const goTo = (idx: number) => {
    setActive(((idx % items.length) + items.length) % items.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    pausedRef.current = true;
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.startY = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchRef.current.startX;
    const dy = e.changedTouches[0].clientY - touchRef.current.startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      goTo(active + (dx < 0 ? 1 : -1));
    }
    setTimeout(() => { pausedRef.current = false; }, 2000);
  };

  return (
    <section className="bg-[#F0F4F8] py-20 md:py-28 px-6 select-none">
      <div className="max-w-4xl mx-auto reveal"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative h-40 md:h-48 overflow-hidden">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: active === i ? 1 : 0,
                y: active === i ? 0 : 24,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
            >
              <div className="font-display text-[#0D2E4D] font-semibold leading-none mb-4"
                style={{ fontSize: "clamp(56px, 9vw, 96px)" }}>
                {it.num}
              </div>
              <div className="eyebrow text-[#2C3E50]/60">{it.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-[#1A5276]" : "w-1.5 bg-[#1A5276]/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center reveal">
        <div>
          <div
            className="organic relative aspect-[4/5] max-w-md mx-auto"
            style={{ background: "linear-gradient(135deg, #0D2E4D 0%, #1A5276 100%)" }}
          >
            <img
              src={ezequielImg}
              alt="Ezequiel Fernandes, psicólogo clínico"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="eyebrow text-[#1A5276] mb-4">Sobre</div>
          <h3 className="reveal-title font-display text-[#0D2E4D] font-semibold leading-tight mb-1"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
            Ezequiel Fernandes
          </h3>
          <div className="eyebrow text-[#1A5276]/80 mb-6">CRP 06/129984 · São Paulo</div>
          <h2 className="reveal-title font-display text-[#0D2E4D] font-semibold leading-tight mb-8"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Antes de mudar,<br/>é preciso enxergar.
          </h2>
          <p className="text-[#2C3E50]/90 leading-relaxed mb-5">
            Ezequiel Fernandes é psicólogo clínico com 11 anos de experiência
            e especialização em neurociências aplicada à psicologia.
          </p>
          <p className="text-[#2C3E50]/90 leading-relaxed mb-8">
            Sua abordagem em Gestalt-terapia parte de uma premissa simples:
            antes de mudar, é preciso enxergar. Cada atendimento é um espaço
            de descoberta — do que você sente, do que você evita e do que você
            é capaz de construir.
          </p>
          <div className="inline-flex items-center gap-3 eyebrow text-[#B0A090]">
            <span className="h-px w-6 bg-[#B0A090]" />
            CRP · São Paulo
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Escuta ativa", body: "Compreendemos juntos o que te trouxe até aqui e o que você quer transformar." },
    { n: "02", title: "Consciência do padrão", body: "Identificamos os comportamentos e emoções que geram sofrimento ou limitação." },
    { n: "03", title: "Autonomia", body: "Você desenvolve recursos internos para fazer escolhas mais conscientes e satisfatórias." },
  ];
  return (
    <section className="relative bg-[#0A1E30] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 30%, rgba(26,82,118,0.4), transparent 50%)" }}/>
      <div className="relative max-w-6xl mx-auto">
        <div className="reveal mb-16 max-w-2xl">
          <div className="eyebrow text-[#B0A090] mb-6">O processo terapêutico</div>
          <h2 className="reveal-title font-display text-white font-semibold leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            Da primeira sessão<br/>à mudança real.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass relative p-8 md:p-10 rounded-sm overflow-hidden"
            >
              <span className="absolute top-2 right-4 font-display text-white/[0.06] font-bold pointer-events-none"
                style={{ fontSize: "120px", lineHeight: 1 }}>
                {s.n}
              </span>
              <div className="relative">
                <div className="eyebrow text-[#B0A090] mb-6">Etapa {s.n}</div>
                <h3 className="font-display text-white text-2xl md:text-3xl mb-4 font-semibold">{s.title}</h3>
                <p className="text-white/65 leading-relaxed text-sm">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Benefits() {
  const items = [
    "Autoconhecimento ampliado",
    "Gestão emocional mais eficaz",
    "Relacionamentos mais saudáveis",
    "Redução de ansiedade e sofrimento",
    "Maior autonomia e autoestima",
  ];
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 80%", "end 30%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const heightPct = useTransform(progress, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);

  const [activeCount, setActiveCount] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    setActiveCount(Math.round(Math.max(0, Math.min(1, v)) * items.length));
  });

  return (
    <section className="bg-[#F0F4F8] py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto reveal">
        <div className="eyebrow text-[#1A5276] mb-6">O que a terapia constrói</div>
        <h2 className="reveal-title font-display text-[#0D2E4D] font-semibold leading-tight mb-14"
          style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          Resultados que você sente<br/>no cotidiano.
        </h2>
      </div>

      <div ref={wrapperRef} className="max-w-4xl mx-auto grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr] gap-6 md:gap-10">
        {/* Vertical progress track */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-[#B0A090]/30 rounded-full" />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-2 w-[2px] bg-[#1A5276] rounded-full origin-top"
            style={{ height: heightPct }}
          />
          {items.map((_, i) => {
            const filled = i < activeCount;
            return (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: `calc(${(i / (items.length - 1)) * 100}% - 8px)` }}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                    filled
                      ? "bg-[#1A5276] border-[#1A5276]"
                      : "bg-[#F0F4F8] border-[#B0A090]/60"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Items */}
        <ul className="space-y-10 md:space-y-14 py-1">
          {items.map((it, i) => {
            const filled = i < activeCount;
            return (
              <li
                key={i}
                className="transition-opacity duration-500"
                style={{ opacity: filled ? 1 : 0.35 }}
              >
                <div className="eyebrow text-[#1A5276]/70 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-[#0D2E4D] text-2xl md:text-[28px] leading-tight">
                  {it}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Modalities() {
  const items = [
    {
      tag: "Presencial",
      title: "Consultório em Parque Atlântico",
      body: "Av. Atlântica, 5441 — sala 5\nParque Atlântico, São Paulo/SP",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mb-6">
          <path d="M12 22s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" stroke="#1A5276" strokeWidth="1.5"/>
          <circle cx="12" cy="10" r="2.5" stroke="#1A5276" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      tag: "Online",
      title: "De qualquer lugar",
      body: "Sessões por videochamada,\ncom a mesma profundidade do presencial.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mb-6">
          <rect x="2" y="5" width="20" height="14" rx="1" stroke="#1A5276" strokeWidth="1.5"/>
          <path d="M8 21h8M12 19v2" stroke="#1A5276" strokeWidth="1.5"/>
        </svg>
      ),
    },
  ];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0, minDist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const child = c as HTMLElement;
        const cc = child.offsetLeft + child.clientWidth / 2 - el.offsetLeft;
        const d = Math.abs(center - cc);
        if (d < minDist) { minDist = d; closest = i; }
      });
      setActive(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const onDown = (e: MouseEvent) => {
      dragRef.current.isDown = true;
      dragRef.current.startX = e.pageX - el.offsetLeft;
      dragRef.current.scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.scrollSnapType = "none";
    };
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current.isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = dragRef.current.scrollLeft - (x - dragRef.current.startX) * 1.2;
    };
    const onUp = () => {
      if (!dragRef.current.isDown) return;
      dragRef.current.isDown = false;
      el.style.cursor = "";
      el.style.scrollSnapType = "";
    };
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
    };
  }, []);

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 reveal">
        <div className="eyebrow text-[#1A5276] mb-6">Modalidades</div>
        <h2 className="reveal-title font-display text-[#0D2E4D] font-semibold leading-tight mb-14"
          style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          Como você prefere<br/>ser atendido.
        </h2>
      </div>
      <div
        ref={scrollerRef}
        className="no-scrollbar snap-x-mandatory flex gap-5 overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center px-[7.5vw] md:px-6 md:max-w-5xl md:mx-auto pb-4 scroll-smooth cursor-grab md:cursor-default active:cursor-grabbing select-none"
      >
        {items.map((m, i) => (
          <article key={i} className="snap-center border border-[#E0E8F0] p-8 md:p-10 shrink-0 w-[85vw] md:w-[460px] bg-white">
            {m.icon}
            <div className="eyebrow text-[#B0A090] mb-3">{m.tag}</div>
            <h3 className="font-display text-[#0D2E4D] text-2xl md:text-3xl font-semibold mb-3">{m.title}</h3>
            <p className="text-[#2C3E50]/75 leading-relaxed whitespace-pre-line">{m.body}</p>
          </article>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8 md:hidden">
        {items.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-[#1A5276]" : "w-1.5 bg-[#1A5276]/30"}`} />
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Honorata Lima",
      meta: "9 avaliações · 3 meses atrás",
      avatar: honorataImg,
      text: "Ezequiel é um profissional excelente! Muito objetivo, mas ao mesmo tempo empático, conduzindo o tratamento com excelência! Faz realmente o paciente se avaliar, refletir. Em poucas sessões conseguiu me conduzir a acessar crenças limitantes que eu não havia percebido que tinha, já tinha feito terapia antes por anos e demorava muito tempo para conseguir acessar essas questões.",
    },
    {
      name: "Lucas Amaral",
      meta: "3 avaliações · um ano atrás",
      avatar: lucasImg,
      text: "Excelente profissional, muito atencioso e dedicado. Explica tudo com clareza e realmente busca o melhor para o cliente. Recomendo de olhos fechados!",
    },
    {
      name: "Piran Motu",
      meta: "1 review · 2 meses atrás",
      avatar: piranImg,
      text: "Profissionais excelentes, sem dúvidas os melhores da região. Trabalham sempre com muita dedicação e compromisso, e o resultado é um trabalho de altíssimo nível. Indico de olhos fechados!",
    },
  ];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let idx = 0;
    const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;
    const interval = setInterval(() => {
      if (pausedRef.current || !el || isDesktop()) return;
      idx = (idx + 1) % items.length;
      const card = el.children[idx] as HTMLElement | undefined;
      if (card) {
        el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
        setActive(idx);
      }
    }, 5500);

    const onScroll = () => {
      if (!el) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const child = c as HTMLElement;
        const cc = child.offsetLeft + child.clientWidth / 2 - el.offsetLeft;
        const d = Math.abs(center - cc);
        if (d < minDist) { minDist = d; closest = i; }
      });
      setActive(closest);
      idx = closest;
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    /* Drag-to-scroll */
    const onMouseDown = (e: MouseEvent) => {
      dragRef.current.isDown = true;
      dragRef.current.startX = e.pageX - el.offsetLeft;
      dragRef.current.scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.scrollSnapType = "none";
      pause();
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - dragRef.current.startX) * 1.2;
      el.scrollLeft = dragRef.current.scrollLeft - walk;
    };
    const onMouseUp = () => {
      if (!dragRef.current.isDown) return;
      dragRef.current.isDown = false;
      el.style.cursor = "";
      el.style.scrollSnapType = "";
      setTimeout(resume, 2000);
    };
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseUp);

    return () => {
      clearInterval(interval);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseUp);
    };
  }, [items.length]);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <section className="bg-[#0A1E30] py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="eyebrow text-[#B0A090] mb-6">Depoimentos reais · Google</div>
        <h2 className="reveal-title font-display text-white font-semibold leading-tight mb-14"
          style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          Histórias de quem<br/>fez o trabalho.
        </h2>
      </div>
      <div
        ref={scrollerRef}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={() => setTimeout(resume, 2000)}
        className="md:hidden no-scrollbar snap-x-mandatory flex gap-5 overflow-x-auto px-[7.5vw] pb-6 scroll-smooth cursor-grab active:cursor-grabbing"
      >
        {items.map((t, i) => (
          <article
            key={i}
            className="snap-center glass p-8 md:p-10 shrink-0 w-[85vw]"
          >
            <div className="flex items-center gap-3 mb-5">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                className="w-11 h-11 rounded-full object-cover ring-1 ring-white/15"
              />
              <div>
                <div className="text-white font-medium text-sm">{t.name}</div>
                <div className="text-white/40 text-[11px]">{t.meta}</div>
              </div>
            </div>
            <div className="flex gap-1 mb-5 text-[#F5C518]">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
              ))}
            </div>
            <p className="font-display italic text-white/85 text-lg md:text-xl leading-relaxed">
              "{t.text}"
            </p>
          </article>
        ))}
      </div>
      <div className="hidden md:grid md:grid-cols-3 gap-5 max-w-6xl mx-auto px-6">
        {items.map((t, i) => (
          <article
            key={i}
            className="glass p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-5">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                className="w-11 h-11 rounded-full object-cover ring-1 ring-white/15"
              />
              <div>
                <div className="text-white font-medium text-sm">{t.name}</div>
                <div className="text-white/40 text-[11px]">{t.meta}</div>
              </div>
            </div>
            <div className="flex gap-1 mb-5 text-[#F5C518]">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
              ))}
            </div>
            <p className="font-display italic text-white/85 text-lg md:text-xl leading-relaxed">
              "{t.text}"
            </p>
          </article>
        ))}
      </div>
      <div className="md:hidden flex justify-center gap-2 mt-8">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-[#B0A090]" : "w-1.5 bg-[#B0A090]/40"}`}
          />
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      className="py-28 md:py-40 px-6 text-center"
      style={{ background: "linear-gradient(180deg, #0D2E4D 0%, #0A1E30 100%)" }}
    >
      <div className="max-w-3xl mx-auto reveal">
        <div className="eyebrow text-[#B0A090] mb-8">Primeiro passo</div>
        <h2 className="reveal-title font-display text-white font-semibold leading-[1.05] mb-6"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}>
          Pronto para<br/>começar?
        </h2>
        <p className="text-white/65 text-lg mb-12 max-w-md mx-auto">
          O primeiro passo é uma conversa. Sem compromisso.
        </p>
        <div className="flex justify-center">
          <a href={WHATSAPP}
            className="bg-white text-[#0D2E4D] px-8 py-4 rounded-[4px] font-medium inline-flex items-center justify-center gap-3">
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function OurSpace() {
  const photos = [
    { src: espaco1, alt: "Sala de espera do consultório" },
    { src: espaco2, alt: "Ambiente de acolhimento com poltronas" },
    { src: espaco3, alt: "Recepção do consultório" },
    { src: espaco4, alt: "Fachada do prédio do consultório" },
  ];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0, minDist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const child = c as HTMLElement;
        const cc = child.offsetLeft + child.clientWidth / 2 - el.offsetLeft;
        const d = Math.abs(center - cc);
        if (d < minDist) { minDist = d; closest = i; }
      });
      setActive(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const onDown = (e: MouseEvent) => {
      dragRef.current.isDown = true;
      dragRef.current.startX = e.pageX - el.offsetLeft;
      dragRef.current.scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.scrollSnapType = "none";
    };
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current.isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = dragRef.current.scrollLeft - (x - dragRef.current.startX) * 1.2;
    };
    const onUp = () => {
      if (!dragRef.current.isDown) return;
      dragRef.current.isDown = false;
      el.style.cursor = "";
      el.style.scrollSnapType = "";
    };
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
    };
  }, []);

  return (
    <section className="bg-[#F0F4F8] py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="eyebrow text-[#1A5276] mb-6">Conheça o espaço</div>
        <h2 className="reveal-title font-display text-[#0D2E4D] font-semibold leading-tight mb-14"
          style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          Um ambiente pensado<br/>para acolher você.
        </h2>
      </div>
      <div
        ref={scrollerRef}
        className="no-scrollbar snap-x-mandatory flex gap-5 overflow-x-auto px-[7.5vw] md:px-[calc(50vw-260px)] pb-4 scroll-smooth cursor-grab active:cursor-grabbing select-none"
      >
        {photos.map((p, i) => (
          <div
            key={i}
            className="snap-center relative overflow-hidden rounded-sm border border-[#E0E8F0] bg-white shrink-0 w-[85vw] md:w-[520px] aspect-[4/3]"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {photos.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-[#1A5276]" : "w-1.5 bg-[#1A5276]/30"}`} />
        ))}
      </div>
    </section>
  );
}

function LocationMap() {
  const mapsQuery = encodeURIComponent(ADDRESS);
  return (
    <section className="bg-[#050E18] px-6 pt-20 md:pt-28 pb-16">
      <div className="max-w-6xl mx-auto reveal">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
          <div>
            <div className="eyebrow text-[#B0A090] mb-6">Onde nos encontrar</div>
            <h2 className="reveal-title font-display text-white font-semibold leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
              Consultório<br/>em São Paulo.
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Av. Atlântica, 5441 — sala 5<br/>
              Parque Atlântico, São Paulo/SP<br/>
              CEP 04805-000
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#B0A090] hover:text-white transition-colors eyebrow"
            >
              Traçar rota
              <svg width="14" height="10" viewBox="0 0 18 12" fill="none"><path d="M1 6h16m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5"/></svg>
            </a>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[16/11] rounded-sm overflow-hidden border border-[#B0A090]/20">
            <iframe
              title="Localização do consultório"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="w-full h-full"
              style={{ border: 0, filter: "grayscale(0.35) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050E18] text-white/70 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <div className="font-display text-white text-xl mb-3">Psicólogo Ezequiel Fernandes</div>
            <div className="eyebrow text-[#B0A090]">CRP 06/129984 · SP</div>
          </div>
          <div className="text-sm space-y-2">
            <div className="eyebrow text-[#B0A090] mb-3">Contato</div>
            <div><a href={WHATSAPP} className="hover:text-white">(11) 97983-9527</a></div>
            <div><a href={`mailto:${EMAIL}`} className="hover:text-white break-all">{EMAIL}</a></div>
            <div><a href={INSTAGRAM} className="hover:text-white">@psi.ezequiell</a></div>
          </div>
          <div className="text-sm space-y-2">
            <div className="eyebrow text-[#B0A090] mb-3">Endereço</div>
            <div>Av. Atlântica, 5441 — sala 5</div>
            <div>Parque Atlântico, São Paulo/SP</div>
          </div>
        </div>
        <div className="h-px bg-[#B0A090]/40 my-10" />
        <div className="text-center text-[11px] tracking-wider text-white/40 uppercase">
          © 2026 · Psicólogo Ezequiel Fernandes
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      aria-label="WhatsApp"
      className="md:hidden fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.5-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.2-1.4c1.4.8 2.9 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.2.8.9-3.1-.2-.3C3.9 15 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.2-8.5 8.2z"/>
      </svg>
    </a>
  );
}
