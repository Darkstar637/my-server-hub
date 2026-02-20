import { MessageCircle, Users, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Discord = () => {
  return (
    <section id="discord" className="py-24 lg:py-32 xl:py-40 px-4 lg:px-8 xl:px-16 relative section-glow">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {/* Discord Header */}
          <div className="discord-btn p-8 md:p-12 lg:p-16 xl:p-20">
            <div className="flex items-center justify-center gap-4 lg:gap-6 mb-6 lg:mb-8">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <h2 className="minecraft-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
                Hang With The Crew
              </h2>
            </div>
            <p className="text-white/80 text-center text-base lg:text-lg xl:text-xl max-w-xl lg:max-w-2xl mx-auto mb-8 lg:mb-10">
              Chat, share your builds, and coordinate adventures with the group.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-white text-[hsl(235,86%,55%)] hover:bg-white/90 px-8 py-6 lg:px-12 lg:py-7 text-lg lg:text-xl font-bold rounded-lg lg:rounded-xl btn-minecraft"
              >
                <a href="https://discord.gg/AdEZzWdtgU" target="_blank" rel="noopener noreferrer">
                  Join Discord Server
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-border bg-secondary/50 p-6 lg:p-8 xl:p-10">
            <div className="text-center px-2 sm:px-4 lg:px-6">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 mb-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <span className="minecraft-text text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground">Friends</span>
              </div>
              <p className="text-sm lg:text-base text-muted-foreground">Only</p>
            </div>
            <div className="text-center px-4 lg:px-6">
              <div className="flex items-center justify-center gap-2 lg:gap-3 mb-2">
                <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                <span className="minecraft-text text-2xl md:text-3xl lg:text-4xl text-foreground">Chill</span>
              </div>
              <p className="text-sm lg:text-base text-muted-foreground">Vibes</p>
            </div>
            <div className="text-center px-4 lg:px-6">
              <div className="flex items-center justify-center gap-2 lg:gap-3 mb-2">
                <Bell className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                <span className="minecraft-text text-2xl md:text-3xl lg:text-4xl text-foreground">24/7</span>
              </div>
              <p className="text-sm lg:text-base text-muted-foreground">Online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discord;
