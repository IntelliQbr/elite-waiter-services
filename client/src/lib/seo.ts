export const SEO_METADATA = {
  home: {
    title: "Elite Waiter Services - Garçom de Luxo para Eventos Inesquecíveis",
    description:
      "Serviços profissionais de garçom para eventos de alto padrão. Experiência impecável em festas privadas, casamentos, eventos corporativos e jantares exclusivos.",
    keywords:
      "garçom para festas, garçom de luxo, serviços de garçom elite, eventos corporativos, casamentos de luxo, jantares exclusivos",
  },
  services: {
    title: "Nossos Serviços - Elite Waiter Services",
    description:
      "Conheça nossos serviços de garçom profissional para festas privadas, eventos corporativos, casamentos de luxo e jantares exclusivos.",
    keywords:
      "serviços de garçom, atendimento em festas, eventos corporativos, casamentos, jantares executivos",
  },
  gallery: {
    title: "Galeria de Fotos - Elite Waiter Services",
    description:
      "Veja nosso trabalho em ação. Galeria com fotos de eventos de elite realizados com profissionalismo e elegância.",
    keywords:
      "fotos de eventos, galeria de serviços, eventos de luxo, atendimento profissional",
  },
  about: {
    title: "Sobre Mim - Elite Waiter Services",
    description:
      "Conheça minha trajetória profissional com mais de 10 anos de experiência em eventos exclusivos e hotéis 5 estrelas.",
    keywords:
      "garçom profissional, experiência em eventos, certificado em hospitalidade, eventos de elite",
  },
  contact: {
    title: "Entre em Contato - Elite Waiter Services",
    description:
      "Solicite um orçamento ou agende uma consulta. Estou disponível para discutir seu evento especial.",
    keywords:
      "contato garçom, agendar garçom, solicitar orçamento, eventos de luxo",
  },
};

export function setPageMeta(
  title: string,
  description: string,
  keywords?: string
) {
  // Set title
  document.title = title;

  // Set or update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", description);

  // Set or update meta keywords
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);
  }

  // Set Open Graph tags
  setOpenGraphMeta("og:title", title);
  setOpenGraphMeta("og:description", description);
}

function setOpenGraphMeta(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}
