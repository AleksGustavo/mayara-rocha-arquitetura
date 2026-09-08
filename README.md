# Mayara Rocha Arquitetura — Website e ecossistema digital

Concepção e construção do site e do ecossistema digital de uma arquiteta e urbanista,
conduzida de forma incremental e rastreável, com apoio de ferramentas de IA
(Claude Code, ChatGPT, Google Stitch, Canva).

## Status das etapas

| # | Etapa | Situação |
|---|---|---|
| 01 | Discovery do Negócio | **Concluída (08/09/2026)** — ver [`docs/discovery/07-stage-01-closure.md`](docs/discovery/07-stage-01-closure.md) |
| 02 | Público-alvo | Não iniciada |
| 03 | Personas | Não iniciada |
| 04 | Proposta de Valor e Posicionamento | Não iniciada |
| 05 | Jornada do Cliente e Funil | Não iniciada |
| 06 | Arquitetura da Informação | Não iniciada |
| 07 | Requisitos Funcionais e Não Funcionais | Não iniciada |
| 08 | Diagramas e Modelagem | Não iniciada |
| 09 | Wireframes | Não iniciada |
| 10 | Design System e UI/UX | Não iniciada |
| 11 | Protótipo Responsivo | Não iniciada |
| 12 | Planejamento Técnico e GitHub | Não iniciada |
| 13 | Desenvolvimento | Não iniciada |
| 14 | Testes e Qualidade | Não iniciada |
| 15 | SEO, Analytics e Tracking | Não iniciada |
| 16 | Estratégia LinkedIn e Instagram | Não iniciada |
| 17 | Tráfego Pago | Não iniciada |
| 18 | CRO e Otimização Contínua | Não iniciada |

> **Discovery concluído ≠ loja pronta para lançamento.** Licença/termos, responsabilidade
> técnica (RRT), reembolso, fiscal e LGPD são bloqueios de lançamento registrados em
> [`docs/discovery/06-open-decisions-register.md`](docs/discovery/06-open-decisions-register.md)
> e devem ser resolvidos antes da comercialização pública.

## Estrutura

```text
docs/
├── discovery/
│   ├── 01-business-discovery.md      # Discovery inicial: fatos, hipóteses, riscos, oportunidades
│   ├── 02-interview-guide.md         # Roteiro interno de entrevista (45 perguntas, 4 partes)
│   ├── 03-client-questionnaire.md    # Especificação do questionário da cliente (fonte do Google Forms)
│   ├── 04-google-forms-setup.md      # Guia de execução do script + checklist de teste
│   ├── 05-discovery-findings.md      # Consolidação das respostas reais + saneamento (08/09/2026)
│   ├── 06-open-decisions-register.md # Decisões abertas: OD-001..OD-012 (categoria, responsável, status)
│   └── 07-stage-01-closure.md        # Encerramento formal da ETAPA 01
└── portfolio/
    ├── linkedin-post.md              # Post de abertura do projeto (anonimizado)
    ├── linkedin-etapa-01.md          # Post de conclusão da ETAPA 01 (anonimizado)
    └── etapa-01-card.svg             # Card 1200x1200 para acompanhar o post da ETAPA 01

scripts/
└── google-forms/
    └── create-discovery-form.gs      # Google Apps Script que gera o formulário de Discovery
```

## Princípios do projeto

- **Não inventar informação** sobre a cliente. O que não foi confirmado fica marcado como
  `[HIPÓTESE — NECESSITA VALIDAÇÃO]`, `[PENDÊNCIA CONTROLADA]` ou `[NÃO INFORMADO]`. Respostas
  posteriores da cliente prevalecem sobre hipóteses; o histórico contraditório é preservado
  e marcado como `HISTÓRICO` / `SUPERADA` / `RESOLVIDA`.
- Evolução incremental, uma etapa por vez. A ETAPA 02 só começa depois do encerramento da 01.
- Decisões, premissas e pendências ficam versionadas em `docs/`.
- Temas legais/regulatórios/fiscais (CAU, RRT, direitos autorais, LGPD, tributário) são
  marcados `[VALIDAR PROFISSIONALMENTE]` e nunca tratados como conclusão.
- **Uma publicação de portfólio no LinkedIn a cada etapa concluída** (anonimizada), em `docs/portfolio/`.

## Ferramentas de IA previstas

- **Claude Code** — construção e organização do projeto
- **ChatGPT** — planejamento, análise e documentação
- **Google Stitch** — prototipação e exploração de interfaces
- **Canva** — materiais visuais e apresentações
