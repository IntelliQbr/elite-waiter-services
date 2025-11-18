import { MessageCircle } from "lucide-react";
import { WHATSAPP, getWhatsAppLink } from "@/const";

export default function WhatsAppButton() {
  const defaultMessage = "Olá! Gostaria de agendar um serviço de garçom para meu evento.";
  const whatsappLink = getWhatsAppLink(defaultMessage);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Abrir WhatsApp"
      title={`Enviar mensagem via WhatsApp: ${WHATSAPP}`}
    >
      <MessageCircle size={28} />
    </a>
  );
}
