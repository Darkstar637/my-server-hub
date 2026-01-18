import { Shield, Zap, Users, Sword, Map, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Chill",
    description: "Whitelisted server – only friends and trusted players allowed. No griefers here.",
  },
  {
    icon: Users,
    title: "Friend Group",
    description: "A small, tight-knit community where everyone knows each other.",
  },
  {
    icon: Sword,
    title: "Survival Focus",
    description: "Vanilla-style survival with a few quality-of-life plugins to make life easier.",
  },
  {
    icon: Map,
    title: "Shared World",
    description: "Build together, explore together. One world we all call home.",
  },
  {
    icon: Zap,
    title: "Always Online",
    description: "Server's up 24/7 so hop on whenever you're free to play.",
  },
  {
    icon: Sparkles,
    title: "Helpful Plugins",
    description: "Teleports, homes, and land claims to keep your builds safe.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="minecraft-text text-4xl md:text-5xl text-foreground mb-4">
            What We <span className="text-primary glow-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A laid-back server built for good times with friends.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border card-glow group"
            >
              <div className="feature-icon w-fit mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="minecraft-text text-2xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
