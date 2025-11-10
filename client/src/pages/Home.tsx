import { useEffect } from "react";
import { Link } from "wouter";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { setPageMeta } from "@/lib/seo";

export default function Home() {
  useEffect(() => {
    setPageMeta(
      "Elite Waiter Services - Garçom de Luxo para Eventos Inesquecíveis",
      "Serviços profissionais de garçom para eventos de alto padrão. Experiência impecável em festas privadas, casamentos, eventos corporativos e jantares exclusivos.",
      "garçom para festas, garçom de luxo, serviços de garçom elite, eventos corporativos, casamentos de luxo"
    );
  }, []);
  const carouselImages = [
    {
      src: "/carousel-pool.jpg",
      alt: "Garçom servindo coquetéis em piscina de luxo",
      caption: "Serviço impecável em ambientes sofisticados",
    },
    {
      src: "/carousel-ballroom.jpg",
      alt: "Garçom arrumando mesas em salão de baile",
      caption: "Atenção aos detalhes em cada detalhe",
    },
    {
      src: "/carousel-celebrity.jpg",
      alt: "Garçom interagindo discretamente com convidados",
      caption: "Discrição e profissionalismo garantidos",
    },
  ];

  const testimonials = [
    {
      name: "Marina Silva",
      event: "Casamento de Luxo",
      text: "Profissionalismo impecável! O serviço foi perfeito do início ao fim. Todos os nossos convidados comentaram sobre a elegância e discrição.",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      event: "Evento Corporativo",
      text: "Excelente atendimento. Superou nossas expectativas em todos os aspectos. Recomendo fortemente para qualquer evento de alto nível.",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      event: "Gala Beneficente",
      text: "Serviço de primeira qualidade. A discrição e a eficiência foram notáveis. Definitivamente contrataremos novamente.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/hero-gala.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 container text-center text-white">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Serviços de Garçom de Elite para Eventos Inesquecíveis
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
              Experiência impecável em festas de alto nível, casamentos e jantares corporativos
            </p>
            <Link href="/contato">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Agende Seu Evento Agora
              </Button>
            </Link>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-center mb-12 text-foreground">
              Nosso Trabalho em Ação
            </h2>
            <Carousel images={carouselImages} autoPlay interval={6000} />
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Profile Photo */}
              <div className="flex justify-center">
                <img
                  src="/profile-photo.jpg"
                  alt="Foto de perfil"
                  className="w-80 h-96 object-cover rounded-lg shadow-luxury"
                />
              </div>

              {/* Bio Content */}
              <div>
                <h2 className="mb-6 text-foreground">Sobre Mim</h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Com mais de 10 anos de experiência em eventos exclusivos, garanto discrição, eficiência e elegância em cada serviço prestado. Minha trajetória inclui trabalhos em mansões luxuosas, iates de primeira classe e os mais prestigiosos salões de baile do país.
                </p>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Sou certificado em hospitalidade de alto padrão e possuo experiência comprovada em hotéis 5 estrelas, onde aprendi o verdadeiro significado de excelência no atendimento.
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Por Que Escolher Meus Serviços?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-foreground/80">
                      <strong>Confiabilidade:</strong> Comprometido com a excelência em cada detalhe
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-foreground/80">
                      <strong>Pontualidade:</strong> Sempre presente e pronto antes do horário
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-foreground/80">
                      <strong>Adaptação:</strong> Capacidade de se adequar a qualquer tipo de evento de elite
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-foreground/80">
                      <strong>Discrição:</strong> Profissionalismo e sigilo garantidos
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-foreground/80">
                      <strong>Elegância:</strong> Apresentação impecável em todos os momentos
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-center mb-12 text-foreground">
              O Que Nossos Clientes Dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-luxury border border-border"
                >
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground/80 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container text-center">
            <h2 className="mb-6 text-secondary-foreground">
              Pronto para um Evento Impecável?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-secondary-foreground/90">
              Entre em contato conosco hoje mesmo e vamos discutir como posso tornar seu evento verdadeiramente memorável.
            </p>
            <Link href="/contato">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Agende uma Consulta
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
