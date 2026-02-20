import { Link } from "react-router-dom";
import voidreignLogo from "@/assets/voidreign-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 lg:py-16 xl:py-20 px-4 lg:px-8 xl:px-16">
      <div className="max-w-6xl lg:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 lg:gap-4">
            <img src={voidreignLogo} alt="VoidReign" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
            <span className="minecraft-text text-2xl lg:text-3xl text-foreground">
              VOID<span className="text-primary">REIGN</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 xl:gap-10 text-sm lg:text-base">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Store</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Rules</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Support</a>
            <a href="/#discord" className="text-muted-foreground hover:text-primary transition-colors font-medium">Discord</a>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</Link>
          </div>

          {/* Copyright */}
          <p className="text-sm lg:text-base text-muted-foreground">
            © 2026 VoidReign. Made with ❤️ for friends.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border/50 text-center">
          <p className="text-xs lg:text-sm text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
            Not affiliated with Mojang Studios or Microsoft. Minecraft is a trademark of Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;