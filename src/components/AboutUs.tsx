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
              FriendCraft started as a small world between a few friends who wanted a chill place to hang out and play Minecraft together. No drama, no sweats – just good vibes and blocky adventures.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              We keep our server whitelisted to maintain that cozy, safe environment where everyone knows everyone. Whether you're into building epic bases, going on adventures, or just vibing while farming, there's a spot for you here.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our goal is simple: have fun with friends. We're not trying to be the biggest server out there – we're just here to enjoy the game with people we trust.
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
              <div className="minecraft-text text-2xl text-primary">2024</div>
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
