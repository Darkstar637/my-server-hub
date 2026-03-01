import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const editions = [
  {
    title: "Java Edition",
    icon: "☕",
    ip: "play.mcserver.net",
    port: null,
    version: "1.8 - 1.20.4",
    description: "Full PC experience with all features, mods support, and the complete Minecraft adventure.",
    features: ["Full modding support", "Resource packs", "Shaders compatible"],
    color: "primary",
  },
  {
    title: "Bedrock Edition",
    icon: "🎮",
    ip: "bedrock.mcserver.net",
    port: "19132",
    version: "Latest",
    description: "Play on mobile, console, or Windows 10. Cross-platform with your friends anywhere.",
    features: ["Cross-platform play", "Mobile & Console", "Xbox & PlayStation"],
    color: "diamond",
  },
];

const ServerEditions = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const copyIP = (ip: string, port: string | null, index: number) => {
    const fullIP = port ? `${ip}:${port}` : ip;
    navigator.clipboard.writeText(fullIP);
    setCopiedIndex(index);
    toast({
      title: "IP Copied!",
      description: `${fullIP} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-24 lg:py-32 xl:py-40 px-4 lg:px-8 xl:px-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="minecraft-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 lg:mb-6">
            How To <span className="text-primary glow-text">Join</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg xl:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            Jump in from Java or Bedrock – everyone's welcome!
          </p>
        </div>

        {/* Edition Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
          {editions.map((edition, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl lg:rounded-3xl border border-border p-8 lg:p-10 xl:p-12 card-glow relative overflow-hidden group"
            >
              {/* Background glow */}
              <div 
                className={`absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 bg-${edition.color}/10 rounded-full blur-3xl transition-all group-hover:w-48 group-hover:h-48 lg:group-hover:w-56 lg:group-hover:h-56`} 
              />
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 lg:gap-5 mb-6 lg:mb-8">
                  <span className="text-4xl lg:text-5xl xl:text-6xl">{edition.icon}</span>
                  <div>
                    <h3 className="minecraft-text text-2xl lg:text-3xl xl:text-4xl text-foreground">
                      {edition.title}
                    </h3>
                    <span className="text-sm lg:text-base text-muted-foreground">
                      Version: {edition.version}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm lg:text-base mb-6 lg:mb-8">
                  {edition.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
                  {edition.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 lg:px-4 lg:py-1.5 bg-secondary rounded-full text-xs lg:text-sm text-muted-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* IP Box */}
                <div className="bg-secondary/50 rounded-lg lg:rounded-xl p-4 lg:p-5 border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider mb-1 lg:mb-2">
                        Server IP
                      </p>
                      <p className="minecraft-text text-xl lg:text-2xl text-primary">
                        {edition.ip}
                        {edition.port && (
                          <span className="text-muted-foreground">:{edition.port}</span>
                        )}
                      </p>
                    </div>
                    <Button
                      onClick={() => copyIP(edition.ip, edition.port, index)}
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30"
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerEditions;
