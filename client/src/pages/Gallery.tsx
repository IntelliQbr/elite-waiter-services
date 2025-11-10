import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/gallery-garden.jpg",
      alt: "Servindo hors d'oeuvres em jardim iluminado",
      caption: "Serviço impecável em gala de elite",
    },
    {
      src: "/gallery-crystalbar.jpg",
      alt: "Preparando drinks em bar de cristal",
      caption: "Expertise em mixologia e bebidas premium",
    },
    {
      src: "/gallery-buffet.jpg",
      alt: "Organizando buffets com lustres",
      caption: "Apresentação refinada de iguarias",
    },
    {
      src: "/gallery-formal.jpg",
      alt: "Circulando entre convidados em trajes formais",
      caption: "Discrição e profissionalismo em eventos",
    },
    {
      src: "/gallery-outdoor.jpg",
      alt: "Servindo em evento ao ar livre luxuoso",
      caption: "Elegância em ambientes sofisticados",
    },
    {
      src: "/gallery-corporate.jpg",
      alt: "Atendimento em jantar corporativo elegante",
      caption: "Serviço impecável em eventos corporativos",
    },
    {
      src: "/gallery-wedding.jpg",
      alt: "Serviço em casamento de luxo",
      caption: "Contribuindo para momentos memoráveis",
    },
    {
      src: "/gallery-cocktail.jpg",
      alt: "Garçom em coquetel de gala",
      caption: "Sofisticação em cada movimento",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container text-center">
            <h1 className="mb-6 text-secondary-foreground">Galeria de Fotos</h1>
            <p className="text-lg max-w-2xl mx-auto text-secondary-foreground/90">
              Conheça nosso trabalho através de momentos capturados em eventos de elite
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-luxury h-64"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-semibold">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container text-center">
            <h2 className="mb-6 text-foreground">Qualidade e Profissionalismo</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Cada imagem em nossa galeria representa um momento de excelência e dedicação. 
              Nosso trabalho é caracterizado pela discrição, elegância e atenção aos detalhes que 
              transformam eventos em experiências memoráveis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">Profissionalismo</h4>
                <p className="text-foreground/80">
                  Apresentação impecável em todos os eventos
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">Discrição</h4>
                <p className="text-foreground/80">
                  Sigilo e confidencialidade garantidos
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">Elegância</h4>
                <p className="text-foreground/80">
                  Sofisticação em cada movimento
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[selectedImage].caption}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
