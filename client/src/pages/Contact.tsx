import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        eventDate: "",
        eventType: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const eventTypes = [
    "Casamento",
    "Festa Privada",
    "Evento Corporativo",
    "Jantar Exclusivo",
    "Gala Beneficente",
    "Outro",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container text-center">
            <h1 className="mb-6 text-secondary-foreground">Entre em Contato</h1>
            <p className="text-lg max-w-2xl mx-auto text-secondary-foreground/90">
              Vamos discutir como posso tornar seu evento verdadeiramente
              memorável
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-semibold mb-8 text-foreground">
                  Informações de Contato
                </h3>

                {/* Phone */}
                <div className="mb-8">
                  <div className="flex items-start space-x-4">
                    <Phone
                      className="text-primary mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Telefone
                      </h4>
                      <a
                        href="tel:+5511999999999"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        +55 11 99999-9999
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <div className="flex items-start space-x-4">
                    <Mail
                      className="text-primary mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:contato@elitewaiter.com"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        contato@elitewaiter.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-8">
                  <div className="flex items-start space-x-4">
                    <MapPin
                      className="text-primary mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Localização
                      </h4>
                      <p className="text-foreground/80">
                        Disponível em toda a região metropolitana e cidades
                        adjacentes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-4">
                    Horário de Atendimento
                  </h4>
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    <li>Segunda - Sexta: 09:00 - 18:00</li>
                    <li>Sábado: 10:00 - 20:00</li>
                    <li>Domingo: Sob agendamento</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>

                  {/* Event Date */}
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Data do Evento
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Tipo de Evento
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Selecione o tipo de evento</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Descreva seu evento e suas necessidades..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                  >
                    {submitted ? "Mensagem Enviada!" : "Enviar Mensagem"}
                  </Button>

                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      Obrigado! Entraremos em contato em breve para discutir
                      seu evento.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <h2 className="text-center mb-12 text-foreground">Localização</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-luxury bg-muted flex items-center justify-center">
              <div className="text-center text-foreground/60">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg">Disponível em toda a região</p>
                <p className="text-sm mt-2">Atendemos eventos em qualquer localização</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
