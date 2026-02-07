# CLAUDE.md - MSS Consultoria

> Arquivo de contexto para assistentes de IA. Atualizado em: 2026-01-01

## Architecture

### Visão Geral
Projeto de consultoria B2B focado em automação e IA para PMEs brasileiras.

### Estrutura de Pastas (Planejada)
```
04_MSS_Consultoria/
├── CLAUDE.md                    # Contexto para IA (este arquivo)
├── README.md                    # Documentação principal
├── site/                        # Presença web
│   └── landing_page/            # Landing page interativa
│       ├── index.html
│       ├── styles.css
│       └── scripts.js
├── comercial/                   # Materiais de vendas
│   ├── proposta_template.md     # Modelo de proposta comercial
│   ├── pitch_deck.md            # Apresentação de vendas
│   └── calculadora_roi/         # Calculadora interativa
│       ├── index.html
│       ├── calculator.js
│       └── styles.css
├── portfolio/                   # Cases e social proof
│   └── cases.md                 # Casos de sucesso documentados
├── processos/                   # SOPs operacionais
│   ├── onboarding.md            # Processo de entrada de clientes
│   └── entrega.md               # Processo de entrega de projetos
└── marketing/                   # Geração de leads
    ├── lead_magnet.md           # eBook/checklist gratuito
    └── email_sequences.md       # Fluxos de email marketing
```

### Padrão de Design
- **Tipo**: Site estático + componentes interativos (calculadora ROI)
- **Abordagem**: Progressive Enhancement - funciona sem JS, melhora com JS
- **Responsividade**: Mobile-first design

## Commands

### Desenvolvimento Local
```bash
# Se usar servidor estático simples
npx serve site/landing_page

# Alternativa com Python
python -m http.server 8000 --directory site/landing_page
```

### Build (quando aplicável)
```bash
# Atualmente não há processo de build
# Arquivos estáticos servidos diretamente
```

### Testes
```bash
# Validação HTML
npx html-validate site/**/*.html

# Lighthouse audit (requer Chrome)
npx lighthouse http://localhost:8000 --output html
```

### Deploy
```bash
# Recomendado: Vercel, Netlify ou GitHub Pages
# Configurar conforme plataforma escolhida
```

## Conventions

### Stack Tecnológica
| Camada | Tecnologia | Justificativa |
|--------|------------|---------------|
| Frontend | HTML5, CSS3, Vanilla JS | Simplicidade, sem dependências |
| Hospedagem | GitHub Pages / Vercel | Custo zero, SSL incluso |
| Analytics | Google Analytics 4 | Tracking de conversões |
| Forms | Formspree / Netlify Forms | Captura de leads sem backend |

### Bibliotecas Preferidas (se necessário)
- **CSS Framework**: Tailwind CSS ou Bootstrap 5
- **Animações**: AOS (Animate on Scroll)
- **Gráficos**: Chart.js (para calculadora ROI)
- **Icons**: Heroicons ou Font Awesome

### Regras de Código
1. **HTML**: Semântico, acessível (WCAG 2.1 AA)
2. **CSS**: BEM naming convention quando aplicável
3. **JS**: ES6+, sem jQuery, comentários em português
4. **Arquivos**: kebab-case para nomes

### Linting & Formatação
```bash
# Prettier para formatação (se configurado)
npx prettier --write "**/*.{html,css,js,md}"

# ESLint para JS (se configurado)
npx eslint site/**/*.js
```

### Idioma
- **Código**: Variáveis e funções em inglês
- **Conteúdo**: Português brasileiro (pt-BR)
- **Commits**: Português brasileiro

### Git Workflow
- Branch principal: `main`
- Feature branches: `feature/nome-da-feature`
- Commits: Mensagens descritivas em português

---

## Contexto de Negócio

### Serviços Oferecidos
| Serviço | Faixa de Preço |
|---------|----------------|
| Consultoria RPA | R$5k-15k |
| Desenvolvimento | R$10k-50k |
| Treinamento | R$3k-10k |
| Suporte mensal | R$2k-5k/mês |

### Meta Principal
- **MRR Target**: R$20.000/mês
- **Público**: PMEs brasileiras

### Responsável
- **Owner**: Marlow Santos Silva
- **Background**: Tech Lead RPA @ Banco Omni
