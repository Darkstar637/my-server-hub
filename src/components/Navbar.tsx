import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import voidreignLogo from "@/assets/voidreign-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", isExternal: false },
    { label: "About", href: "/about", isExternal: false },
    { label: "Discord", href: "/#discord", isExternal: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 lg:gap-3">
            <img src={voidreignLogo} alt="VoidReign" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" />
            <span className="minecraft-text text-xl lg:text-2xl text-foreground">
              VOID<span className="text-primary">REIGN</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-12">
            {navItems.map((item) =>
              item.isExternal ? (
                <a key={item.label} href={item.href} className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors font-medium">{item.label}</a>
              ) : (
                <Link key={item.label} to={item.href} className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors font-medium">{item.label}</Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-minecraft bg-primary hover:bg-primary/90 text-primary-foreground px-6 lg:px-8 lg:py-5 lg:text-base">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.isExternal ? (
                  <a key={item.label} href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>{item.label}</a>
                ) : (
                  <Link key={item.label} to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>{item.label}</Link>
                )
              )}
              <Button className="btn-minecraft bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2">Join Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;