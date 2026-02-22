import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import voidreignLogo from "@/assets/voidreign-logo.png";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const serverIP = "t3.hexonode.fun:25999";

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
    <section className="relative min-h-screen flex items-center justify-center section-glow overflow-hidden px-4 lg:px-8 xl:px-16 pt-20 lg:pt-24">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 lg:w-28 lg:h-28 bg-primary/10 rounded-lg animate-float blur-sm" />
      <div className="absolute bottom-32 right-16 w-16 h-16 lg:w-24 lg:h-24 bg-accent/10 rounded-lg animate-float-delayed blur-sm" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg animate-float blur-sm" />
      <div className="hidden xl:block absolute top-1/4 left-1/6 w-20 h-20 bg-accent/10 rounded-lg animate-float-delayed blur-sm" />
      <div className="hidden xl:block absolute bottom-1/4 left-1/5 w-14 h-14 bg-primary/10 rounded-lg animate-float blur-sm" />
      
      <div className="relative z-10 text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        {/* Server Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={voidreignLogo} 
            alt="VoidReign Logo" 
            className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 object-contain drop-shadow-[0_0_30px_hsl(271,81%,56%,0.5)]"
          />
        </div>

        {/* Title */}
        <h1 className="minecraft-text text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground mb-4 lg:mb-6 glow-text">
          VOID<span className="text-primary">REIGN</span>
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