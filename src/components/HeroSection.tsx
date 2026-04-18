import dividerImg from "@/assets/floral-divider.png";
import ganeshImg from "/ganesh.png";

interface HeroSectionProps {
  visible?: boolean;
}

const HeroSection = ({ visible = true }: HeroSectionProps) => {
  if (!visible) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-visible z-10">
      <div className="text-center max-w-lg mx-auto pt-6 pb-6">

        {/* Opening blessing */}
        <p
          className="font-serif text-bougainvillea-light text-sm sm:text-base uppercase tracking-[0.3em] mb-2 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          With the blessings of the Almighty
        </p>

        {/* Ceremony label */}
        <p
          className="font-heading text-ivory/60 text-xs sm:text-sm uppercase tracking-[0.4em] mb-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          ✦ Engagement Ceremony ✦
        </p>

        {/* Ganesh Image */}
        <div
          className="flex justify-center mb-6 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <img
            src={ganeshImg}
            alt="Lord Ganesha"
            className="w-16 sm:w-20 md:w-24 opacity-90"
          />
        </div>

        <div className="overflow-visible">

          {/* Groom */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl text-gold-gradient leading-[1.3] pt-2 pb-1 tracking-wide animate-soft-glow animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Abhiyudaya Srivastava
          </h1>

          {/* Groom Parents */}
          <p
            className="font-serif text-ivory/80 text-sm sm:text-base leading-relaxed mb-4 animate-fade-up"
            style={{ animationDelay: "0.75s", fontWeight: 500 }}
          >
            Son of <br />
            <span style={{ fontWeight: 600, letterSpacing: "0.02em" }}>
              Mr. Girjesh Srivastava & Mrs. Meena Srivastava
            </span>
          </p>

          {/* & */}
          <p
            className="font-heading text-bougainvillea-light text-2xl sm:text-3xl my-3 italic animate-fade-up"
            style={{ animationDelay: "0.9s" }}
          >
            &
          </p>

          {/* Bride */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl text-gold-gradient leading-[1.3] pt-2 pb-1 tracking-wide animate-soft-glow animate-fade-up"
            style={{ animationDelay: "1.2s" }}
          >
            Divyanshi Srivastava
          </h1>

          {/* Bride Parents */}
          <p
            className="font-serif text-ivory/80 text-sm sm:text-base leading-relaxed mb-2 animate-fade-up"
            style={{ animationDelay: "1.35s", fontWeight: 500 }}
          >
            Daughter of <br />
            <span style={{ fontWeight: 600, letterSpacing: "0.02em" }}>
              Mr. Rakesh Srivastava & Mrs. Shashi Kala Srivastava
            </span>
          </p>

        </div>

        {/* ── Premium Scroll Hint ── */}
        <div
          className="flex flex-col items-center gap-3 mt-10 mb-2 animate-fade-up"
          style={{ animationDelay: "1.55s" }}
        >
          {/* Scroll label */}
          <span style={{
            fontFamily: "serif",
            fontSize: "9px",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: "rgba(255,248,220,0.38)",
          }}>
            scroll
          </span>

          {/* Chunky solid down-arrow — rotated version of client reference */}
          <svg
            width="38"
            height="38"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: "arrowBounce 2s ease-in-out infinite" }}
          >
            <defs>
              <linearGradient id="arrowGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5e17a" />
                <stop offset="50%" stopColor="#d4a837" />
                <stop offset="100%" stopColor="#a07828" />
              </linearGradient>
            </defs>
            {/* Chunky hollow arrow pointing DOWN — same style as reference image */}
            <path
              d="
                M28 52
                L6  30
                L6  34
                L18 34
                L18 8
                Q18 4 22 4
                L34 4
                Q38 4 38 8
                L38 34
                L50 34
                L50 30
                Z
              "
              fill="none"
              stroke="url(#arrowGold)"
              strokeWidth="3.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes arrowBounce {
            0%, 100% { transform: translateY(0px);  opacity: 1;   }
            50%       { transform: translateY(7px);  opacity: 0.6; }
          }
        `}</style>

        {/* Divider */}
        <div
          className="my-8 flex justify-center animate-fade-up"
          style={{ animationDelay: "1.6s" }}
        >
          <img
            src={dividerImg}
            alt="floral divider"
            className="w-56 sm:w-72 opacity-80"
          />
        </div>

        {/* Invitation text */}
        <p
          className="font-serif text-ivory/80 text-lg sm:text-xl leading-relaxed tracking-wide animate-fade-up"
          style={{ animationDelay: "1.9s" }}
        >
          Together with their families
          <br />
          invite you to celebrate the joyous occasion of their engagement
        </p>

        {/* Quote */}
        <p
          className="font-serif text-ivory/50 text-sm sm:text-base italic leading-relaxed mt-6 animate-fade-up"
          style={{ animationDelay: "2.2s" }}
        >
          "A new journey begins, two hearts unite,  
          and a promise of forever is made."
          <br />
          <span className="not-italic tracking-widest text-xs text-gold-gradient opacity-70">
            — Ring Ceremony
          </span>
        </p>

      </div>
    </section>
  );
};

export default HeroSection;