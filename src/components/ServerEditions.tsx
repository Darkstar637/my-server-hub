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
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="minecraft-text text-4xl md:text-5xl text-foreground mb-4">
            How To <span className="text-primary glow-text">Join</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jump in from Java or Bedrock – everyone's welcome!
          </p>
        </div>

        {/* Edition Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {editions.map((edition, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-8 card-glow relative overflow-hidden group"
            >
              {/* Background glow */}
              <div 
                className={`absolute top-0 right-0 w-32 h-32 bg-${edition.color}/10 rounded-full blur-3xl transition-all group-hover:w-48 group-hover:h-48`} 
              />
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{edition.icon}</span>
                  <div>
                    <h3 className="minecraft-text text-2xl text-foreground">
                      {edition.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Version: {edition.version}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">
                  {edition.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {edition.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* IP Box */}
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Server IP
                      </p>
                      <p className="minecraft-text text-xl text-primary">
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
                      className="h-10 w-10 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30"
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 text-primary" />
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
