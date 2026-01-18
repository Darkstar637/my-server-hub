import { Shield, Zap, Users, Sword, Map, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Low Latency",
    description: "Experience smooth gameplay with our optimized servers and worldwide network coverage.",
  },
  {
    icon: Shield,
    title: "Anti-Cheat",
    description: "Play fair with our advanced anti-cheat system that keeps the server clean.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join thousands of active players and make new friends every day.",
  },
  {
    icon: Sword,
    title: "PvP Battles",
    description: "Compete in intense PvP battles, tournaments, and leaderboard competitions.",
  },
  {
    icon: Map,
    title: "Custom Maps",
    description: "Explore unique custom-built maps and worlds exclusive to our server.",
  },
  {
    icon: Sparkles,
    title: "Weekly Events",
    description: "Participate in weekly events with exclusive rewards and special prizes.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="minecraft-text text-4xl md:text-5xl text-foreground mb-4">
            Why Choose <span className="text-primary glow-text">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide the best Minecraft server experience with top-tier performance and features.
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
