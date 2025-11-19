import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import { PHONE, EMAIL, SOCIAL_MEDIA, LOCATION } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary">Elite Waiter Services</h4>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Serviços profissionais de garçom para eventos de alto padrão. 
              Experiência impecável, discrição e elegância garantidas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm hover:text-primary transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/servicos">
                  <a className="text-sm hover:text-primary transition-colors">
                    Serviços
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/galeria">
                  <a className="text-sm hover:text-primary transition-colors">
                    Galeria
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a className="text-sm hover:text-primary transition-colors">
                    Sobre
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a className="text-sm hover:text-primary transition-colors">
                    Contato
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contato</h4>
            <div className="space-y-3 mb-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>{PHONE}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>{EMAIL}</span>
              </a>
              <div className="text-sm text-secondary-foreground/80">
                <p className="font-semibold">Localização:</p>
                <p>{LOCATION}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_MEDIA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Elite Waiter Services. Todos os direitos reservados.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacidade">
              <a className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
            </Link>
            <span className="text-secondary-foreground/40">|</span>
            <Link href="/termos">
              <a className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
