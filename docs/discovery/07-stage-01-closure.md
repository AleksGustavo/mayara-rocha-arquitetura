# Encerramento — ETAPA 01

**Projeto:** Mayara Rocha Arquitetura — Website e Ecossistema Digital
**Data do encerramento:** 08/09/2026
**Fontes:** [`01-business-discovery.md`](01-business-discovery.md) · [`02-interview-guide.md`](02-interview-guide.md) · [`03-client-questionnaire.md`](03-client-questionnaire.md) · [`04-google-forms-setup.md`](04-google-forms-setup.md) · [`05-discovery-findings.md`](05-discovery-findings.md) · [`06-open-decisions-register.md`](06-open-decisions-register.md)

## Status

```
CONCLUÍDA
```

O Discovery reúne informação suficiente sobre o negócio para avançar. As questões **Q7** (pacote de arquivos entregue) e **Q8** (política de revisão/cancelamento/reembolso) permanecem abertas **por decisão deliberada da cliente** e **não** são bloqueios de Discovery.

## O que foi realizado

- **Discovery inicial** do negócio, com separação explícita entre fatos e hipóteses (`01`).
- **Hipóteses** de objetivos, oferta, público, riscos e oportunidades registradas e rastreáveis (`01`).
- **Roteiro interno de entrevista** com 45 perguntas priorizadas em 4 partes (`02`).
- **Questionário para a cliente** especificado (59 perguntas, lógica condicional, tempo-alvo 12–15 min) (`03`).
- **Automação do Google Forms** via Google Apps Script, criando o formulário completo sem cadastro manual, com guia de execução (`scripts/google-forms/create-discovery-form.gs`, `04`).
- **Coleta das respostas** reais da Mayara (formulário respondido em 04/09/2026).
- **Consolidação** das respostas contra as hipóteses: matriz de validação, perfil comercial, oferta, catálogo, portfólio, marca, marketing (`05`).
- **Esclarecimentos complementares** Q1–Q10 em conversa complementar, consolidados em `05` (seção 12).
- **Análise de riscos** reavaliada e reclassificada (`05`, seção 9).
- **Registro de decisões abertas** criado, com categorização e responsáveis (`06`).
- **Gate final** reavaliado e aprovado para encerramento (`05`, seção "Gate de encerramento da ETAPA 01").

## Principais descobertas

- **Profissional:** 5–10 anos de atuação; **registro ativo no CAU**; atende presencialmente em **Leme, SP**; remoto "com algumas limitações". Diferencial declarado: *"projetos criativos e diferenciados, adaptados à necessidade do cliente, sem perder estética e funcionalidade"*.
- **Oferta atual:** serviço mais procurado = **projeto arquitetônico**; mais rentável e preferido = **design de interiores**. Também oferece fachadas, 3D interno/externo, renderização, personalização e consultoria.
- **Capacidade:** apenas **1–2 projetos simultâneos**. Honorário atual predominante **até R$ 5 mil**; meta de ticket **até R$ 10 mil**.
- **Público desejado:** **pessoas construindo ou comprando o imóvel próprio** (pessoa física; não B2B).
- **Portfólio:** **mais de 10 projetos divulgáveis e mais de 10 construídos** — volume não é o problema; faltam **fotos profissionais, depoimentos e autorizações formais**.
- **Marca:** usa o **nome pessoal "Mayara Rocha"**; logo só em imagem (sem vetor); identidade visual informal; **sem domínio**; **sem Instagram profissional**; **sem LinkedIn**; prefere **não gravar Reels** com regularidade.
- **Site:** objetivo nº 1 = **vender plantas prontas**; CTA principal = **comprar uma planta**; venda **já no lançamento**.
- **Catálogo de plantas:** **mais de 10** plantas, precisando de **pequenos ajustes**; arquivos disponíveis em PDF, DWG, 3D e renders; **estilo contemporâneo**; faixa de preço imaginada **R$ 500–1.500**; **compra automática com contato posterior**.
- **3D/IA:** renders autoavaliados em **9/10**; interesse em IA no marketing **4/5**, condicionado a **anonimização** de vários projetos.
- **Marketing:** orçamento para anúncios **até R$ 500/mês**, focado em **venda de plantas**.

## Decisões confirmadas

| Tema | Decisão da cliente |
|---|---|
| Região | Atendimento presencial em **Leme, SP** (não ampliar sem decisão) |
| Objetivo do site | Vender plantas prontas |
| CTA principal | Comprar uma planta |
| Momento da venda de plantas | Já no lançamento |
| Público inicial | Pessoas construindo/comprando o imóvel próprio |
| Nome/marca | Nome pessoal "Mayara Rocha" |
| Uso da planta pelo comprador (intenção comercial) | Sem alteração livre, sem revenda, **1 compra = 1 construção** — a formalizar juridicamente |
| Pequenos ajustes | Permitidos, solicitados à Mayara (ex.: portas, disposição de mobiliário) — limites a detalhar |
| Suporte pós-compra | Entrega dos arquivos + **chat de dúvidas no site** |
| Pagamentos | **Pix, cartão e boleto** |
| Autorizações de portfólio | Mayara **aceita solicitar** autorização formal aos clientes |
| KPIs primários | **Quantidade de plantas vendidas** e **faturamento com plantas** |
| KPIs secundários | Alcance e seguidores (awareness) |
| Uso de IA | Autorizado **com anonimização** quando necessário |

## Pendências controladas

_(Decisões conhecidas como pendentes, com momento futuro de resolução. Detalhe e responsáveis em [`06-open-decisions-register.md`](06-open-decisions-register.md).)_

- **OD-003** — pacote exato de arquivos entregue ao comprador (Q7). Responsável: Mayara.
- **OD-004** — limites comerciais dos "pequenos ajustes"/revisões (Q4). Responsável: Mayara.
- **OD-009** — obtenção das autorizações formais de publicação do portfólio. Responsável: Mayara.
- **OD-010** — escolha do gateway de pagamento (requisito já definido: Pix, cartão, boleto).
- **OD-011** — chat de dúvidas pós-compra (requisito candidato).
- **OD-012** — correção da ramificação condicional do Google Forms (pendência técnica).
- Esclarecer se **"plantas sob medida"** está embutida em "projeto arquitetônico" (`05`, seção 2.3).
- Completar categorização do catálogo (quartos, piscina) antes de estruturar filtros.

## Bloqueios de lançamento

_(Não impedem planejamento nem o início da ETAPA 02. Impedem colocar a venda pública no ar.)_

- **OD-001** — formalização da licença/direitos de uso da planta (intenção definida; falta converter em termos). `[VALIDAR PROFISSIONALMENTE]`
- **OD-002** — responsabilidade técnica / RRT na venda de projeto pronto. `[VALIDAR PROFISSIONALMENTE]`
- **OD-005** — política de cancelamento/reembolso/revisão do produto digital (Q8). `[VALIDAR PROFISSIONALMENTE]`
- **OD-006** — termos de uso / contrato de licença do produto digital. `[VALIDAR PROFISSIONALMENTE]`
- **OD-007** — emissão fiscal e enquadramento tributário do produto digital. `[VALIDAR PROFISSIONALMENTE]`
- **OD-008** — tratamento de dados dos compradores (LGPD). `[VALIDAR PROFISSIONALMENTE]`

## Artefatos produzidos

| Arquivo | Conteúdo |
|---|---|
| `docs/discovery/01-business-discovery.md` | Discovery inicial, hipóteses, riscos, oportunidades, questionário amplo |
| `docs/discovery/02-interview-guide.md` | Roteiro interno de entrevista (45 perguntas, 4 partes) |
| `docs/discovery/03-client-questionnaire.md` | Especificação do questionário da cliente (fonte do Google Forms) |
| `docs/discovery/04-google-forms-setup.md` | Guia de execução do script + checklist de teste (inclui mobile) |
| `scripts/google-forms/create-discovery-form.gs` | Google Apps Script que gera o formulário automaticamente |
| `docs/discovery/05-discovery-findings.md` | Consolidação do Discovery real + respostas complementares (seção 12) + Gate |
| `docs/discovery/06-open-decisions-register.md` | Registro de decisões abertas (OD-001…OD-012) |
| `docs/discovery/07-stage-01-closure.md` | Este documento — encerramento formal da ETAPA 01 |

## Gate final

| Área | Status |
|---|---|
| Negócio e objetivo | PRONTO |
| Público inicial | PRONTO |
| Oferta (serviços + produto) | PRONTO COM PENDÊNCIAS CONTROLADAS |
| Região | PRONTO |
| Catálogo de plantas | PRONTO COM PENDÊNCIAS CONTROLADAS |
| Intenção de uso / licenciamento | PRONTO COM PENDÊNCIAS CONTROLADAS |
| Suporte desejado | PRONTO |
| Pagamentos desejados | PRONTO |
| KPIs | PRONTO |
| Portfólio | PRONTO COM PENDÊNCIAS CONTROLADAS |
| Marca | PRONTO COM PENDÊNCIAS CONTROLADAS |
| Marketing | PRONTO |
| Riscos | PRONTO |
| Decisões futuras (Q7, Q8) | PRONTO COM PENDÊNCIAS CONTROLADAS |
| Aspectos profissionais/jurídicos (lançamento) | BLOQUEIO DE LANÇAMENTO (não de Discovery) |

**Resultado:** ETAPA 01 — Discovery do Negócio pode ser encerrada.

> **AVISO OBRIGATÓRIO.** O encerramento da ETAPA 01 significa que o Discovery possui informação suficiente para avançar para Público-alvo. **Não** significa que a loja esteja autorizada ou pronta para lançamento. Licença/termos, responsabilidade técnica, reembolso, fiscal, LGPD e demais bloqueios de lançamento deverão ser resolvidos antes da comercialização pública.

## Próxima etapa

```
ETAPA 02 — Público-alvo
```

**Não iniciada nesta execução.**
