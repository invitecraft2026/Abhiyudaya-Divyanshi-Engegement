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
            className="font-serif text-ivory/70 text-sm sm:text-base leading-relaxed mb-4 animate-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            Son of <br />
            Mr. Girjesh Srivastava & Mrs. Meena Srivastava
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
            className="font-serif text-ivory/70 text-sm sm:text-base leading-relaxed mb-2 animate-fade-up"
            style={{ animationDelay: "1.35s" }}
          >
            Daughter of <br />
            Mr. Rakesh Srivastava & Mrs. Shashi Kala Srivastava
          </p>

        </div>

        {/* ── Premium Scroll Hint ── */}
        <div
          className="flex flex-col items-center gap-3 mt-10 mb-2 animate-fade-up"
          style={{ animationDelay: "1.55s" }}
        >
          {/* Ornamental side lines + label */}
          <div className="flex items-center gap-3">
            <span style={{
              display: "block",
              width: "36px",
              height: "0.5px",
              background: "linear-gradient(to right, transparent, rgba(212,175,55,0.45))",
            }} />
            <span style={{
              fontFamily: "serif",
              fontSize: "9px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "rgba(255,248,220,0.38)",
            }}>
              scroll
            </span>
            <span style={{
              display: "block",
              width: "36px",
              height: "0.5px",
              background: "linear-gradient(to left, transparent, rgba(212,175,55,0.45))",
            }} />
          </div>

          {/* Mouse shell */}
          <div style={{
            width: "26px",
            height: "42px",
            borderRadius: "13px",
            border: "1px solid rgba(212,175,55,0.35)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "7px",
            boxShadow: "0 0 18px rgba(212,175,55,0.08), inset 0 0 10px rgba(212,175,55,0.04)",
            position: "relative",
          }}>
            {/* Scroll wheel pearl */}
            <div style={{
              width: "4px",
              height: "7px",
              borderRadius: "2px",
              background: "linear-gradient(180deg, #e8c96a 0%, #c9a84c 100%)",
              animation: "pearlDrop 2.2s cubic-bezier(0.45,0,0.55,1) infinite",
              opacity: 0.85,
            }} />
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes pearlDrop {
            0%   { transform: translateY(0px);  opacity: 0.85; }
            40%  { transform: translateY(9px);  opacity: 0.5;  }
            60%  { transform: translateY(9px);  opacity: 0;    }
            61%  { transform: translateY(0px);  opacity: 0;    }
            100% { transform: translateY(0px);  opacity: 0.85; }
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