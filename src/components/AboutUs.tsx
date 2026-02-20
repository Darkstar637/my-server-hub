import { Heart, Users, Calendar, Pickaxe } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="minecraft-text text-4xl md:text-5xl text-foreground mb-4">
            About <span className="text-primary glow-text">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Just a group of friends who love building and exploring together.
          </p>
        </div>

        {/* About Content */}
        <div className="bg-card rounded-xl p-8 border border-border card-glow">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              VoidReign began as a private world for a small group of friends who wanted a calm space to play, build, and explore together. No drama, no sweats — just good vibes and endless adventures beyond the void.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              The server is whitelisted to keep that warm, familiar atmosphere where every player matters and everyone knows each other. Whether you're crafting massive bases, setting out on journeys, or relaxing with a bit of farming, you'll always have a place here.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              VoidReign isn’t about becoming the biggest server — it’s about ruling our own little universe and enjoying Minecraft with people we trust.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="feature-icon w-fit mx-auto mb-2">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="minecraft-text text-2xl text-primary">15+</div>
              <div className="text-xs text-muted-foreground">Friends</div>
            </div>
            <div className="text-center">
              <div className="feature-icon w-fit mx-auto mb-2">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="minecraft-text text-2xl text-primary">2026</div>
              <div className="text-xs text-muted-foreground">Started</div>
            </div>
            <div className="text-center">
              <div className="feature-icon w-fit mx-auto mb-2">
                <Pickaxe className="w-5 h-5 text-primary" />
              </div>
              <div className="minecraft-text text-2xl text-primary">1000+</div>
              <div className="text-xs text-muted-foreground">Hours Played</div>
            </div>
            <div className="text-center">
              <div className="feature-icon w-fit mx-auto mb-2">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div className="minecraft-text text-2xl text-primary">100%</div>
              <div className="text-xs text-muted-foreground">Good Vibes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
