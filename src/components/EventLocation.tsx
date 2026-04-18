import { Navigation, Star } from "lucide-react";

const EventLocation = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;

  const venue = {
    icon: Star,
    tag: "Engagement Ceremony",
    name: "Simran Hotel",
    address: "Gandhi Nagar Basti, 272001",
    time: "11:00 AM onwards",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Simran+Hotel+Gandhi+Nagar+Basti+272001",
  };

  const Icon = venue.icon;

  return (
    <section className="relative z-10 px-6 py-16 overflow-visible">
      <div className="max-w-sm mx-auto text-center">

        {/* Section heading */}
        <h2
          className="font-display text-3xl sm:text-4xl text-gold-gradient leading-[1.3] py-2 tracking-wide animate-soft-glow animate-fade-up"
          style={{ animationDelay: "2.9s" }}
        >
          Venue
        </h2>

        <div
          className="glass-card p-8 gold-glow animate-fade-up overflow-visible"
          style={{ animationDelay: "3.1s" }}
        >
          {/* Event type */}
          <p className="font-serif text-xs uppercase tracking-[0.3em] text-bougainvillea-light mb-2">
            {venue.tag}
          </p>

          {/* Time */}
          <p className="font-serif text-sm text-ivory/70 mb-4 tracking-wide">
            {venue.time}
          </p>

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Name */}
          <h3 className="font-heading text-xl text-primary mb-2 leading-[1.3]">
            {venue.name}
          </h3>

          {/* Address */}
          <p className="font-serif text-muted-foreground text-sm leading-relaxed mb-6">
            {venue.address}
          </p>

          {/* Maps Button */}
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full font-serif text-sm text-primary tracking-wide hover:bg-primary/20 transition-colors duration-300"
          >
            <Navigation className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};

export default EventLocation;