import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/galeria", label: "Galeria" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2 group">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Elite Waiter
              </h3>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contato">
              <Button variant="default" size="sm" className="ml-4">
                Agende Agora
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 block ${
                      location === link.href
                        ? "text-primary bg-muted"
                        : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link href="/contato">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Agende Agora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
