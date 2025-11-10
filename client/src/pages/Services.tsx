import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      title: "Atendimento em Festas Privadas",
      description:
        "Serviço personalizado com atenção aos detalhes, garantindo que seus convidados se sintam mimados e bem cuidados em cada momento.",
      image: "/service-seaside.jpg",
      benefits: [
        "Serviço discreto e atencioso",
        "Conhecimento de etiqueta social",
        "Adaptação ao estilo do evento",
        "Apresentação impecável",
      ],
    },
    {
      title: "Eventos Corporativos",
      description:
        "Profissionalismo de primeira classe para seus eventos de negócios, jantares executivos e conferências de alto nível.",
      image: "/service-blacktie.jpg",
      benefits: [
        "Experiência em ambientes corporativos",
        "Discrição absoluta",
        "Eficiência e organização",
        "Conhecimento de protocolo empresarial",
      ],
    },
    {
      title: "Casamentos de Luxo",
      description:
        "Serviço elegante e sofisticado para tornar seu grande dia verdadeiramente memorável, com atenção a cada detalhe.",
      image: "/gallery-wedding.jpg",
      benefits: [
        "Experiência em cerimônias de luxo",
        "Coordenação com equipe de eventos",
        "Serviço impecável durante toda a celebração",
        "Contribuição para a elegância do evento",
      ],
    },
    {
      title: "Jantares Exclusivos",
      description:
        "Atendimento refinado para jantares íntimos e exclusivos, combinando elegância com conforto e discrição.",
      image: "/service-yacht.jpg",
      benefits: [
        "Serviço de mesa impecável",
        "Conhecimento de vinhos e bebidas",
        "Apresentação refinada de pratos",
        "Ambiente sofisticado garantido",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container text-center">
            <h1 className="mb-6 text-secondary-foreground">Nossos Serviços</h1>
            <p className="text-lg max-w-2xl mx-auto text-secondary-foreground/90">
              Oferecemos uma gama completa de serviços de garçom profissional para eventos de alto padrão
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg overflow-hidden shadow-luxury border border-border hover:shadow-2xl transition-shadow"
                >
                  {/* Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Benefícios:
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-foreground/80"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link href="/contato">
                      <Button
                        variant="default"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Solicitar Orçamento
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <h2 className="text-center mb-12 text-foreground">
              Por Que Contratar Meus Serviços?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">10+</div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  Anos de Experiência
                </h4>
                <p className="text-foreground/80">
                  Mais de uma década servindo em eventos de elite
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">500+</div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  Eventos Realizados
                </h4>
                <p className="text-foreground/80">
                  Centenas de clientes satisfeitos em todo o país
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">100%</div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  Satisfação
                </h4>
                <p className="text-foreground/80">
                  Compromisso com a excelência em cada detalhe
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
