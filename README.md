# Elite Waiter Services - Site Profissional de Garçom de Luxo

Site moderno e responsivo para serviços de garçom freelancer de elite, desenvolvido com React 19, Tailwind CSS 4 e shadcn/ui.

## 🎯 Características

- ✅ **Design Luxuoso**: Paleta de cores sofisticada (preto, dourado, cinza, branco)
- ✅ **Totalmente Responsivo**: Desktop, tablet e mobile
- ✅ **Páginas Completas**:
  - Home com hero section e carrossel
  - Serviços com 4 tipos de atendimento
  - Galeria com 8 imagens profissionais
  - Sobre com biografia e qualificações
  - Contato com formulário funcional
- ✅ **Otimizado para SEO**: Meta tags e estrutura semântica
- ✅ **Acessibilidade**: WCAG compliant
- ✅ **16 Imagens de Alta Qualidade**: Geradas por IA

## 🚀 Quick Start

### 1. Instalar Dependências

```bash
npm install
```

### 2. Rodar Localmente

```bash
npm run dev
```

Acesse `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
elite-waiter-services/
├── client/
│   ├── public/              # Imagens e arquivos estáticos (16 imagens)
│   ├── src/
│   │   ├── pages/           # Páginas do site
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Carousel.tsx
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── lib/
│   │   │   ├── seo.ts       # Funções de SEO
│   │   │   └── utils.ts
│   │   ├── App.tsx
│   │   └── index.css        # Estilos globais
│   └── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Cria build de produção
npm run preview      # Visualiza build de produção
npm run lint         # Verifica erros de código
npm run type-check   # Verifica tipos TypeScript
```

## 📦 Dependências Principais

- **React 19**: Framework UI
- **Tailwind CSS 4**: Utility-first CSS
- **shadcn/ui**: Componentes reutilizáveis
- **Wouter**: Roteamento leve
- **Lucide React**: Ícones
- **TypeScript**: Type safety

## 🎨 Personalização

### Alterar Cores

Edite `client/src/index.css`:

```css
@theme {
  --color-primary: oklch(0.7 0.15 30);  /* Dourado */
  --color-secondary: oklch(0.15 0.05 0);  /* Preto */
}
```

### Alterar Textos

Edite os arquivos em `client/src/pages/`

### Adicionar Imagens

1. Coloque em `client/public/`
2. Use em componentes: `<img src="/imagem.jpg" />`

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 📱 Páginas

### Home
- Hero section com imagem de fundo
- Carrossel de 3 imagens
- Seção de depoimentos (5 estrelas)
- Bio profissional com foto
- CTA para agendar

### Serviços
- 4 cards de serviços
- Descrições e benefícios
- Estatísticas (10+ anos, 500+ eventos)
- CTA para solicitar orçamento

### Galeria
- Grid responsivo com 8 imagens
- Visualização ampliada (lightbox)
- Legendas para cada imagem

### Sobre
- Foto de perfil profissional
- Biografia detalhada
- Qualificações
- 6 razões para escolher
- Seção de valores

### Contato
- Formulário completo
- Informações de contato
- Horário de atendimento
- Mapa placeholder

## 🔧 Configuração

### Variáveis de Ambiente

Crie `.env` se necessário:

```env
VITE_API_URL=https://api.seudominio.com
```

### TypeScript

Configurado com modo strict. Edite `tsconfig.json` se necessário.

## 🎯 Próximos Passos

1. **Integrar Email**: Conecte o formulário a SendGrid/Mailgun
2. **Analytics**: Configure Google Analytics
3. **Email Profissional**: Configure domínio de email
4. **Agendamento**: Adicione calendário interativo
5. **Blog**: Adicione seção de blog

## 📚 Documentação

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vite](https://vitejs.dev)

## 📄 Licença

MIT

## 👤 Autor

Elite Waiter Services

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do formulário no site.

---

**Versão**: 1.0.0  
**Última atualização**: Novembro 2025
