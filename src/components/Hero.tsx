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
    <section className="relative min-h-screen flex items-center justify-center section-glow overflow-hidden px-4 lg:px-8 xl:px-16">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 lg:w-28 lg:h-28 bg-primary/10 rounded-lg animate-float blur-sm" />
      <div className="absolute bottom-32 right-16 w-16 h-16 lg:w-24 lg:h-24 bg-accent/10 rounded-lg animate-float-delayed blur-sm" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-gold/10 rounded-lg animate-float blur-sm" />
      <div className="hidden xl:block absolute top-1/4 left-1/6 w-20 h-20 bg-diamond/10 rounded-lg animate-float-delayed blur-sm" />
      <div className="hidden xl:block absolute bottom-1/4 left-1/5 w-14 h-14 bg-emerald/10 rounded-lg animate-float blur-sm" />
      
      <div className="relative z-10 text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        {/* Server Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-card rounded-2xl lg:rounded-3xl flex items-center justify-center border border-primary/30 animate-pulse-glow">
            <Gamepad2 className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="minecraft-text text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground mb-4 lg:mb-6 glow-text">
          FRIEND<span className="text-primary">CRAFT</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 lg:mb-16 max-w-2xl lg:max-w-3xl mx-auto">
          A chill survival server for friends. No drama, just good vibes, 
          epic builds, and adventures together.
        </p>

        {/* Server IP Box */}
        <div className="ip-box rounded-xl lg:rounded-2xl p-6 md:p-8 lg:p-10 max-w-lg lg:max-w-xl mx-auto mb-8 lg:mb-10">
          <p className="text-sm lg:text-base text-muted-foreground mb-3 lg:mb-4 uppercase tracking-wider font-medium">
            Server IP
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="minecraft-text text-3xl md:text-4xl lg:text-5xl text-primary glow-text">
              {serverIP}
            </span>
            <Button
              onClick={copyIP}
              variant="ghost"
              size="icon"
              className="h-12 w-12 lg:h-14 lg:w-14 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 transition-all"
            >
              {copied ? (
                <Check className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              ) : (
                <Copy className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              )}
            </Button>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          className="btn-minecraft bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 lg:px-14 lg:py-7 text-xl lg:text-2xl rounded-lg lg:rounded-xl"
          onClick={copyIP}
        >
          Copy IP & Play
        </Button>

        {/* Online Players */}
        <div className="mt-12 lg:mt-16 flex items-center justify-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm lg:text-base">
            <span className="text-primary font-semibold">Friends</span> are waiting for you!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
