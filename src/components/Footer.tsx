import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-primary/30">
              <Gamepad2 className="w-5 h-5 text-primary" />
            </div>
            <span className="minecraft-text text-2xl text-foreground">
              MC<span className="text-primary">SERVER</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Store
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Rules
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Support
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Discord
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 MCServer. All rights reserved.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Not affiliated with Mojang Studios or Microsoft. Minecraft is a trademark of Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
