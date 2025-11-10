import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Briefcase, Users, Star } from "lucide-react";

export default function About() {
  const qualifications = [
    {
      icon: Award,
      title: "Certificado em Hospitalidade",
      description: "Certificação profissional em serviços de hospitalidade de alto padrão",
    },
    {
      icon: Briefcase,
      title: "Experiência em Hotéis 5 Estrelas",
      description: "Trabalho comprovado em estabelecimentos de luxo internacionais",
    },
    {
      icon: Users,
      title: "Experiência em Eventos",
      description: "Mais de 500 eventos realizados com sucesso",
    },
    {
      icon: Star,
      title: "Avaliação 5 Estrelas",
      description: "Satisfação garantida de todos os clientes",
    },
  ];

  const whyChoose = [
    {
      title: "Confiabilidade",
      description:
        "Sou comprometido com a excelência em cada detalhe. Você pode contar comigo para entregar um serviço impecável, independentemente da complexidade do evento.",
    },
    {
      title: "Pontualidade",
      description:
        "Sempre presente e pronto antes do horário marcado. Entendo que o timing é crucial em eventos de alto padrão.",
    },
    {
      title: "Adaptação",
      description:
        "Capacidade comprovada de me adequar a qualquer tipo de evento, desde casamentos luxuosos até jantares corporativos exclusivos.",
    },
    {
      title: "Discrição",
      description:
        "Profissionalismo absoluto e sigilo garantido. Seus eventos e convidados são tratados com a máxima confidencialidade.",
    },
    {
      title: "Elegância",
      description:
        "Apresentação impecável em todos os momentos. Minha aparência e comportamento refletem a sofisticação do evento.",
    },
    {
      title: "Conhecimento",
      description:
        "Vasto conhecimento em etiqueta social, protocolo de eventos e serviço refinado de mesa.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container text-center">
            <h1 className="mb-6 text-secondary-foreground">Sobre Mim</h1>
            <p className="text-lg max-w-2xl mx-auto text-secondary-foreground/90">
              Conheça minha trajetória e experiência em serviços de garçom de elite
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center">
                <img
                  src="/profile-photo.jpg"
                  alt="Foto de perfil profissional"
                  className="w-80 h-96 object-cover rounded-lg shadow-luxury border-4 border-primary"
                />
              </div>

              {/* Bio */}
              <div>
                <h2 className="mb-6 text-foreground">Trajetória Profissional</h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Com mais de 10 anos de experiência em eventos exclusivos, tenho dedicado minha carreira 
                  à excelência no atendimento de alto padrão. Minha jornada começou em renomados hotéis 
                  5 estrelas, onde aprendi o verdadeiro significado de sofisticação e profissionalismo.
                </p>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Ao longo dos anos, tive o privilégio de servir em mansões luxuosas, iates de primeira 
                  classe e os mais prestigiosos salões de baile do país. Cada evento me ensinou algo novo 
                  sobre a arte de servir com elegância e discrição.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Meu compromisso é simples: garantir que cada cliente e cada convidado se sinta 
                  verdadeiramente cuidado e apreciado. A satisfação do cliente não é apenas um objetivo, 
                  é minha paixão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <h2 className="text-center mb-12 text-foreground">Qualificações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualifications.map((qual, index) => {
                const Icon = qual.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon size={48} className="text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {qual.title}
                    </h4>
                    <p className="text-foreground/80 text-sm">
                      {qual.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-center mb-12 text-foreground">
              Por Que Escolher Meus Serviços?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-luxury border border-border"
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <h2 className="text-center mb-12 text-secondary-foreground">
              Meus Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Excelência</h4>
                <p className="text-secondary-foreground/90">
                  Cada detalhe importa. Meu padrão é sempre o mais alto possível.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Integridade</h4>
                <p className="text-secondary-foreground/90">
                  Confiança e honestidade são a base de meu trabalho profissional.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Respeito</h4>
                <p className="text-secondary-foreground/90">
                  Cada cliente e convidado merece ser tratado com dignidade e consideração.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
