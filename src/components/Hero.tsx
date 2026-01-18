import { useState } from "react";
import { Copy, Check, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const serverIP = "play.mcserver.net";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast({
      title: "IP Copied!",
      description: "Server IP has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-glow overflow-hidden px-4">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-lg animate-float blur-sm" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/10 rounded-lg animate-float-delayed blur-sm" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gold/10 rounded-lg animate-float blur-sm" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Server Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-card rounded-2xl flex items-center justify-center border border-primary/30 animate-pulse-glow">
            <Gamepad2 className="w-12 h-12 md:w-16 md:h-16 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="minecraft-text text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 glow-text">
          MC<span className="text-primary">SERVER</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join the ultimate Minecraft experience. Play with friends, build amazing worlds, 
          and compete in exciting minigames.
        </p>

        {/* Server IP Box */}
        <div className="ip-box rounded-xl p-6 md:p-8 max-w-lg mx-auto mb-8">
          <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider font-medium">
            Server IP
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="minecraft-text text-3xl md:text-4xl text-primary glow-text">
              {serverIP}
            </span>
            <Button
              onClick={copyIP}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 transition-all"
            >
              {copied ? (
                <Check className="h-5 w-5 text-primary" />
              ) : (
                <Copy className="h-5 w-5 text-primary" />
              )}
            </Button>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          className="btn-minecraft bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl rounded-lg"
          onClick={copyIP}
        >
          Copy IP & Play
        </Button>

        {/* Online Players */}
        <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm">
            <span className="text-primary font-semibold">247</span> players online now
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
