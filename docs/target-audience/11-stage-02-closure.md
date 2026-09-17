# Encerramento — ETAPA 02

**Projeto:** Mayara Rocha Arquitetura — Website e Ecossistema Digital
**Status:** `CONCLUÍDA`
**Data:** 17/09/2026
**Base:** [`10-target-audience-final.md`](10-target-audience-final.md) e todos os artefatos de `docs/target-audience/01`–`09`.

## Objetivo atingido

Mapear, segmentar, validar (com a cliente, com o mercado nacional e com a concorrência regional) e priorizar os públicos do ecossistema digital da Mayara Rocha, sem criar personas. O Gate final (`10`, seção "Gate final") não aponta nenhum critério estrutural `INSUFICIENTE` — a definição do público-alvo está sustentada por evidência convergente de quatro camadas independentes.

## Entregáveis

| # | Arquivo | Conteúdo |
|---|---|---|
| 01 | `01-target-audience-discovery.md` | Discovery de público: segmentos candidatos, necessidades, hipóteses, riscos |
| 02 | `02-segmentation-matrix.md` | Matriz de segmentação S01–S07 + produto × público |
| 03 | `03-priority-audiences.md` | Priorização, JTBD, dores/desejos/objeções, geografia |
| 04 | `04-validation-questions.md` | Perguntas de validação + status pós-formulário |
| 05 | `05-form-guide.md` | Guia de execução do formulário da ETAPA 02 |
| — | `scripts/google-forms/create-stage-02-target-audience-form.gs` | Gerador automático do formulário |
| 06 | `06-client-validation-results.md` | Respostas reais da Mayara incorporadas e rastreadas |
| 07 | `07-market-validation.md` | Validação externa de mercado (13 concorrentes + dados institucionais) |
| 08 | `08-regional-competitors-input.md` | Lista de concorrentes regionais (descoberta por pesquisa) |
| 09 | `09-regional-competitive-analysis.md` | Inteligência competitiva regional (7 concorrentes) |
| 10 | `10-target-audience-final.md` | Consolidação definitiva do público-alvo |
| 11 | `11-stage-02-closure.md` | Este documento |

## Decisões

- **Público-alvo definido por necessidade e contexto de compra**, não por demografia (que não foi inventada).
- **S01 (comprador de planta pronta) é o público primário digital** — motor de crescimento confirmado pela cliente e sustentado por mercado nacional ativo e espaço regional aberto.
- **S02 (projeto arquitetônico) é o público primário de serviços** — sustenta a operação hoje; capturado, não amplificado por tráfego pago.
- **S03 (design de interiores) é o público secundário estratégico** — maior valor por cliente e maior afinidade da Mayara; conteúdo e upsell, não CTA principal.
- **S04 (fachada) e S05 (3D/render) são complementares** — sem demanda autônoma comprovada; S05 é, sobretudo, diferencial de material de venda.
- **S06 (reforma) não é segmento independente**; **S07 (B2B) segue hipótese/futuro**, sem ação nesta etapa.

## Segmentação final

Ver hierarquia completa em `10`, seção 9. Resumo:

```
S01 — PRIMÁRIO DIGITAL       (crescimento)
S02 — PRIMÁRIO DE SERVIÇOS   (demanda atual)
S03 — SECUNDÁRIO ESTRATÉGICO (rentabilidade + afinidade)
S04 — COMPLEMENTAR           (add-on)
S05 — COMPLEMENTAR/DIFERENCIAL (não segmento autônomo)
S06 — NÃO PRIORITÁRIO        (recorte de S02/S03)
S07 — HIPÓTESE/FUTURO        (B2B)
```

## Evidências

Quatro camadas convergentes, detalhadas em `10` (seções 5–7, 23–24, 31):
1. Discovery interno (ETAPA 01 + `01`–`03`).
2. Validação direta com a cliente — formulário respondido em 09/09/2026 (`06`).
3. Validação externa de mercado — 13 concorrentes nacionais + IBGE, CAU/BR-Datafolha, Sinduscon (`07`).
4. Inteligência competitiva regional — 7 concorrentes de Leme/Araras/Pirassununga (`09`).

## Pendências não bloqueadoras

- Volume absoluto de busca (Google Trends/keyword tool) — `DADO NÃO OBTIDO`.
- Demografia do comprador — `DADO NÃO OBTIDO` (não vira persona sem dado real).
- Leitura da Meta Ad Library — `EVIDÊNCIA INSUFICIENTE`.
- Comportamento de compra real, conversão, CAC — `[VALIDAR COM ANALYTICS/DADOS FUTUROS]` (só existem com o site no ar).
- Demanda por estilos além do contemporâneo — `INCONCLUSIVA`.
- Decisão sobre upsell planta→interiores/fachada — `A VALIDAR` (Q20 em aberto).
- Preferência de canal do próprio público — `PREFERÊNCIA DO PÚBLICO NÃO VALIDADA`.

Nenhuma delas impede a definição do público-alvo; todas têm plano de validação futura (`10`, seção 29).

## Riscos transferidos

Para a **ETAPA 03 (Personas)** e etapas seguintes:
- Não inventar demografia, biografia, nome ou foto — só usar dados reais quando existirem (`10`, seção 30).
- Não tratar a experiência da Mayara nem a amostra regional como prova de mercado — manter as marcações de confiança.

Para o **lançamento** (bloqueios já registrados na ETAPA 01, não redefinidos aqui):
- Licença/termos de uso da planta pronta (OD-001, OD-006) — `[VALIDAR PROFISSIONALMENTE]`.
- Responsabilidade técnica/RRT (OD-002) — `[VALIDAR PROFISSIONALMENTE]`, condiciona o alcance geográfico real de S01.
- Política de revisão/cancelamento/reembolso (OD-005) — `[VALIDAR PROFISSIONALMENTE]`.
- Fiscal e LGPD (OD-007, OD-008) — `[VALIDAR PROFISSIONALMENTE]`.
- Gateway de pagamento (OD-010) e tecnologia do chat (OD-011) — pendências técnicas de implementação.

## Insumos para a ETAPA 03

Ver `10`, seção 30 (Fatos utilizáveis / Padrões validados / Derivações permitidas / Informações que não podem ser inventadas). Em especial: os **três Jobs-to-be-done por segmento primário/secundário** (`10`, seção 15) e as **fichas de segmento** (`10`, seções "Fichas de segmento") são o ponto de partida direto para as personas — sem inventar nada além do que está registrado.

## Fora de escopo (não feito nesta etapa, por decisão)

- Nenhuma persona foi criada.
- Nenhum wireframe ou decisão de UI foi tomado (implicações para o site ficaram como `REQUISITO CANDIDATO — VALIDAR NA ETAPA 07`).
- Nenhuma campanha de tráfego pago foi criada ou executada.
- Nenhum preço final foi definido.
- Nenhuma pesquisa de mercado adicional (volume de busca, Ad Library) foi executada além do que já constava em `07`/`09`.

## Gate

Ver `10-target-audience-final.md`, seção "Gate final" — 17 critérios avaliados, nenhum `INSUFICIENTE` em elemento estrutural. `SUFICIENTE`/`PARCIAL` distribuídos, todos os `PARCIAL` com plano de validação futura que não bloqueia a definição do público.

## Próxima etapa

```
ETAPA 03 — Personas
```

**Não iniciada nesta execução.**
