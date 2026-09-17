# Validação com a Cliente — ETAPA 02

**Projeto:** Mayara Rocha Arquitetura — Website e Ecossistema Digital
**Documento:** `docs/target-audience/06-client-validation-results.md`
**Data da validação:** 09/09/2026 (formulário respondido às 06:16 GMT-3)
**Status da ETAPA 02:** EM ANDAMENTO — esta execução **não** encerra a etapa e **não** cria personas.

## Convenção de marcação

| Marcação | Significado |
|---|---|
| `[FATO — CLIENTE]` | Resposta direta da Mayara (formulário da ETAPA 02 ou Discovery). |
| `[CONFIRMADO PELA VALIDAÇÃO]` | Hipótese anterior sustentada pela resposta da Mayara. |
| `[REFINADO PELA VALIDAÇÃO]` | Hipótese anterior ajustada (não confirmada nem refutada por inteiro). |
| `[REFUTADO PELA VALIDAÇÃO]` | Hipótese anterior contrariada pela resposta. |
| `[DERIVAÇÃO]` | Implicação lógica; não é fala da cliente. |
| `[HIPÓTESE — VALIDAR COM MERCADO]` | Depende de pesquisa externa. |
| `[VALIDAR COM ANALYTICS/DADOS FUTUROS]` | Depende de dados do site em operação. |

> A experiência da Mayara é **evidência sobre a experiência dela**, não prova de comportamento de mercado. Onde a resposta descreve o que ela **percebe**, o item recebe também `[HIPÓTESE — VALIDAR COM MERCADO]`.

---

## 1. Objetivo

Incorporar formalmente as respostas reais da Mayara ao trabalho de público-alvo, mantendo a rastreabilidade *hipótese inicial → resposta da Mayara → status → conclusão atual → validação externa futura*, e atualizar segmentação, priorização e o Gate intermediário.

## 2. Método

- Formulário **"ETAPA 02 — Validação do Público-alvo | Mayara Rocha Arquitetura"** (gerado por `scripts/google-forms/create-stage-02-target-audience-form.gs`), 5 seções, ~22 itens, respondido uma vez pela Mayara.
- Respostas exportadas para planilha e cruzadas com `01`–`05` de `docs/target-audience/` e com `05`/`06`/`07` de `docs/discovery/`.
- Nenhuma resposta foi inventada. Campos deixados em branco pela Mayara estão registrados como "sem resposta" (não como negativa, exceto quando o próprio enunciado torna o silêncio informativo — ex.: "existe serviço que exige presença?" em branco = nenhum apontado).

## 3. Fonte das respostas

- Arquivo: **`ETAPA 02 - Validação do Público-alvo _ Mayara Rocha Arquitetura (respostas).xlsx`** (e cópia `.csv`), 1 resposta, carimbo **2026/09/09 06:16:52 GMT-3**.
- Localização no momento desta execução: pasta de downloads do responsável pelo projeto (fora do repositório). As respostas literais estão transcritas na seção 4; a planilha em si **não** foi versionada.

## 4. Respostas consolidadas

| # | Pergunta (resumida) | Resposta literal da Mayara |
|---|---|---|
| Q1 | Característica que se repete nos clientes | "As pessoas costumam querer um projeto maior do que o que elas podem pagar para construir e não tem noção do real tamanho da metragem" |
| Q2 | Motivos mais comuns de procura | Vai construir uma casa do zero · Quer planejar os interiores · Quer melhorar ou criar uma fachada |
| Q3 | (opcional) Quais motivos aparecem mais | *(em branco)* |
| Q4 | Projeto arquitetônico × interiores: mesmo perfil? | "Sim, geralmente é o mesmo tipo de cliente" |
| Q5 | (opcional) Diferenças percebidas | *(em branco)* |
| Q6 | Dúvidas mais frequentes antes de contratar | Preço · Prazo · Como funciona o processo · Forma de pagamento · Aprovação / documentação · Execução da obra |
| Q7 | Motivo de orçamento não fechar | Preço · Mudou ou adiou o projeto |
| Q8 | Quem demonstra mais interesse em planta pronta | Quem vai construir a primeira casa · Quem já possui um terreno · Quem quer economizar na etapa de projeto · Quem tem pressa para começar |
| Q9 | (opcional) Caso/exemplo | *(em branco)* |
| Q10 | Tipo de cliente/projeto que gostaria de receber mais | Compradores de plantas prontas · Design de interiores · Fachadas · Visualização / renderização 3D |
| Q11 | (opcional) Por quê | "Pq é o que eu mais gosto de fazer" |
| Q12 | O que compensa mais financeiramente (sem valores) | Projeto arquitetônico · Design de interiores · Plantas prontas (potencial de volume) |
| Q13 | (opcional) Explicação da escolha | *(em branco)* |
| Q14 | Além de Leme, de onde vieram clientes | "Leme, Araras, Pirassununga" |
| Q15 | Serviços que faria 100% à distância | Venda de plantas prontas · Pequenos ajustes em plantas prontas · Projeto arquitetônico · Design de interiores · Fachadas · Renderização / 3D **(todos)** |
| Q16 | (opcional) Serviço que exige presença | *(em branco — nenhum apontado)* |
| Q17 | Direção do negócio nos próximos anos | **"Quero que a venda de plantas prontas seja a principal fonte de crescimento do negócio."** |
| Q18 | (opcional) Como imagina o equilíbrio | *(em branco)* |
| Q19 | Cliente/projeto/situação que prefere não atender | *(em branco — nada além do já sabido: comércio e B2B)* |
| Q20 | Oferecer ativamente serviços extras a quem compra planta | "Ainda quero avaliar" |
| Q21 | Estilo além do contemporâneo para plantas | *(em branco — nenhum definido)* |
| Q22 | Projeto de portfólio representativo do cliente desejado | "Existe, mas só dá pra citar mostrando o projeto em si" → **AÇÃO FUTURA** |

### Tabela de rastreabilidade

| ID | Tema | Estado anterior | Evidência da Mayara | Novo status | Impacto |
|---|---|---|---|---|---|
| V01 | Direção estratégica do negócio | Tensão aberta S01 × S02 × S03 (doc `03`); Q11 do formulário era o "destravador" | Q17: "Quero que a venda de plantas prontas seja a principal fonte de **crescimento** do negócio." | **CONFIRMADO** `[FATO — CLIENTE]` | S01 vira **prioridade de crescimento digital**; S02/S03 preservados como serviços — não é abandono |
| V02 | Trabalhos que deseja receber mais | H4 sugeria interiores como preferência; S04/S05 sem preferência declarada | Q10: plantas prontas, interiores, fachadas, 3D/render. Q11: "é o que eu mais gosto de fazer". **Não** marcou projeto arquitetônico de térrea/sobrado | **REFINADO** | Preferência profissional = trabalhos produtizáveis/visuais + interiores; projeto arquitetônico "puro" é demanda, não desejo de crescer |
| V03 | Perfil que procura planta pronta | H7: recorte "autoconstrutor / primeira casa" (hipótese) | Q8: primeira casa · já tem terreno · quer economizar no projeto · tem pressa | **CONFIRMADO** como experiência da Mayara `[FATO — CLIENTE SOBRE SUA EXPERIÊNCIA]` + `[HIPÓTESE — VALIDAR COM MERCADO]` | Dá substância a S01; não prova que é o perfil de todo o mercado |
| V04 | Dor de metragem × orçamento de obra | Não mapeado como dor central | Q1: "querem um projeto maior do que podem pagar para construir e não têm noção do real tamanho da metragem" | **NOVO INSIGHT — CONFIRMADO** `[FATO — CLIENTE]` | Ver seção 9 (insight I1) e derivações; **não** virar funcionalidade nesta etapa |
| V05 | Dúvidas antes de contratar | Hipóteses (doc `03`, confiança MÉDIA/BAIXA) | Q6: preço, prazo, processo, forma de pagamento, aprovação/documentação, execução da obra | **CONFIRMADO** `[FATO — CLIENTE]` | Vira base de DORES/DÚVIDAS/CRITÉRIOS observados (seção 9) |
| V06 | Motivos de perda de orçamento | Hipótese "preço" + objeção clássica | Q7: preço; mudou ou adiou o projeto | **CONFIRMADO** `[FATO — CLIENTE]` | Derivação: parte do público não está pronta para decidir/começar — timing importa |
| V07 | Arquitetura × interiores é o mesmo público? | Doc `03` tratava S02 e S03 com perfis potencialmente distintos | Q4: "Sim, geralmente é o mesmo tipo de cliente" | **REFINADO** `[FATO — CLIENTE]` | S02 e S03 seguem segmentos distintos por **necessidade/oferta**, mas **compartilham características de público** — não criar dois perfis humanos independentes |
| V08 | Geografia dos clientes | Só "Leme e região" | Q14: Leme, Araras, Pirassununga | **REFINADO** `[FATO — CLIENTE / HISTÓRICO OBSERVADO]` | Núcleo regional (Leme + eixo Araras/Pirassununga). **Não** vira mercado-alvo definitivo → `[HIPÓTESE — VALIDAR COM MERCADO]` "existe potencial regional além de Leme" |
| V09 | Atendimento remoto | Doc `03`: "remoto possível, com limitações"; alcance indefinido | Q15: acredita conseguir fazer **todos** os serviços à distância; Q16 em branco (nenhum exige presença) | **REFINADO PELA VALIDAÇÃO** | A restrição geográfica pode ser **menor** do que a análise inicial sugeria. **Não** concluir "mercado = Brasil". Alcance real por serviço/produto = `[HIPÓTESE — VALIDAR COM MERCADO]` + `[VALIDAR PROFISSIONALMENTE quando aplicável]` (RRT/municipal — OD-002) |
| V10 | Serviços extras para compradores de plantas (upsell) | H2: S01 como porta de entrada para upsell | Q20: "Ainda quero avaliar" | **ABERTO** | Manter como pendência estratégica; **não** criar upsell definitivo |
| V11 | Estilos futuros do catálogo | H6: catálogo só contemporâneo | Q21 em branco (nenhum outro estilo definido) | **CONFIRMADO** (mono-estilo) `[FATO — CLIENTE]` | Catálogo segue contemporâneo; risco de excluir quem quer outro estilo = `[HIPÓTESE — VALIDAR COM MERCADO]` |
| V12 | Projeto representativo do cliente desejado | Não existia | Q22: "Existe, mas só dá pra citar mostrando o projeto em si" | **AÇÃO FUTURA** | Pedir à Mayara que aponte o projeto (insumo para a ETAPA 03 — Personas). Não bloqueia esta etapa |
| V13 | Quem ela NÃO quer atrair | Doc `03`: comércio e B2B fora do foco | Q19 em branco | **ABERTO (sem acréscimo)** | Nada novo a excluir; confirmar em conversa se surgir dúvida |
| V14 | Rentabilidade percebida | Discovery: interiores = mais rentável | Q12: projeto arquitetônico + interiores + plantas prontas (por volume) | **REFINADO** `[FATO — CLIENTE]` | "Compensar" não é só valor unitário — plantas prontas entram pela escala; convergente com V01 |

---

## 5. Hipóteses confirmadas

- **V01 — Direção estratégica:** crescimento do negócio via **venda de plantas prontas**. `[FATO — CLIENTE]` `[CONFIRMADO PELA VALIDAÇÃO]`
- **V03 — Perfil observado para plantas prontas:** primeira casa, tem terreno, quer economizar no projeto, tem pressa. `[FATO — CLIENTE SOBRE SUA EXPERIÊNCIA]` (+ `[HIPÓTESE — VALIDAR COM MERCADO]` para generalizar).
- **V05 — Dúvidas pré-contratação:** preço, prazo, processo, pagamento, aprovação/documentação, execução da obra. `[FATO — CLIENTE]`
- **V06 — Motivos de perda:** preço e adiamento/mudança do projeto. `[FATO — CLIENTE]`
- **V11 — Estilo:** catálogo permanece **só contemporâneo** por decisão atual da Mayara. `[FATO — CLIENTE]`

## 6. Hipóteses refinadas

- **V02 — Preferência profissional:** trabalhos que a Mayara quer receber mais = plantas prontas, interiores, fachadas, 3D/render (os produtizáveis/visuais + o preferido). Projeto arquitetônico personalizado "puro" **não** entrou nessa lista → é demanda a atender, não a amplificar.
- **V07 — Arquitetura × interiores:** mesmo tipo de cliente, na percepção dela. S02 e S03 seguem distintos por necessidade/oferta, mas **compartilham público**.
- **V08 — Geografia:** núcleo Leme + Araras + Pirassununga (histórico observado).
- **V09 — Remoto:** restrição geográfica possivelmente menor do que a análise inicial supôs; nenhum serviço apontado como obrigatoriamente presencial.
- **V14 — Rentabilidade:** "compensar" combina valor por trabalho (interiores, projeto) **e** potencial de volume (plantas prontas).

## 7. Hipóteses refutadas

Nenhuma hipótese anterior foi **integralmente refutada** pela validação. Ajustes foram de refinamento (seção 6). Registro explícito para rastreabilidade:

- A ideia de que **projeto arquitetônico personalizado seria o eixo que a Mayara deseja crescer** não se sustentou — Q17 aponta plantas prontas como motor de crescimento, e Q10 não elegeu projeto arquitetônico entre os trabalhos que ela quer receber mais. Isso **não** rebaixa S02 como público (a demanda atual continua real); rebaixa apenas a hipótese de que ele seria a *ambição de crescimento*.

## 8. Hipóteses ainda abertas

- **V10 — Upsell pós-compra de planta pronta:** "ainda quero avaliar" (Q20). `[ABERTO]`
- **H1/V09 — Alcance geográfico real** de plantas prontas e serviços remotos: `[HIPÓTESE — VALIDAR COM MERCADO]` + `[VALIDAR PROFISSIONALMENTE]` (OD-002).
- **H3 — Peso de S02 na receita atual:** não medido; segue `[DERIVAÇÃO]` sustentada pelo Discovery ("serviço mais procurado").
- **H8 — S07 (3D para colegas / B2B):** sem evidência nova; segue `[HIPÓTESE — VALIDAR FUTURAMENTE]`.
- **Demanda de mercado por plantas prontas** (volume, preço, comportamento de compra, demografia): `[HIPÓTESE — VALIDAR COM MERCADO]`.

## 9. Novos insights

### I1 — Descompasso "sonho × orçamento de obra" + percepção de metragem `[FATO — CLIENTE]` (Q1)
Clientes frequentemente querem um projeto **maior do que conseguem pagar para construir** e **não têm boa noção do tamanho real em m²**.

`[DERIVAÇÃO]` — implicações potenciais (não desenvolver agora):
- oportunidade de **conteúdo educativo** (o que cabe em X m², quanto custa construir por m²);
- necessidade de **comunicar metragem com clareza** nas plantas (área construída, por ambiente, referências visuais de escala);
- apoio futuro à **comparação entre plantas** (filtros por área/quartos/terreno);
- possível **tema de qualificação de lead** (entender orçamento de obra e expectativa antes de recomendar planta ou projeto).

### I2 — O pós-projeto pesa na decisão `[FATO — CLIENTE]` (Q6)
"Aprovação / documentação" e "execução da obra" aparecem entre as dúvidas mais comuns. O público quer saber **o que acontece depois do projeto**. Relaciona-se a pendências da ETAPA 01 (OD-002 RRT, OD-003 pacote de arquivos) — **não** redefinidas aqui; apenas registradas como dúvida de público.

### I3 — Timing da decisão `[FATO — CLIENTE]` (Q7)
"Mudou ou adiou o projeto" como motivo de perda indica que parte do público **não está pronta para começar**. `[DERIVAÇÃO]` — há espaço para nutrição/relacionamento, não só conversão imediata.

### I4 — Convergência preferência × estratégia
Q10 (o que quer receber) + Q11 (o que gosta) + Q17 (o que quer crescer) apontam na mesma direção: **produtos e serviços visuais/produtizáveis**, com plantas prontas puxando o crescimento e interiores como o trabalho de maior afinidade.

---

## 10. Impactos na segmentação

Resumo (detalhe aplicado em `02-segmentation-matrix.md`):

| Segmento | Mudança após validação |
|---|---|
| **S01 — Comprador de planta pronta** | Confiança da **prioridade estratégica** sobe para ALTA (Q17). Perfil ganha substância (Q8). Mantida a separação: *prioridade confirmada pela cliente* ≠ *demanda de mercado confirmada* (esta segue `[VALIDAR COM MERCADO]`). |
| **S02 — Projeto arquitetônico personalizado** | **Preservado** como público de serviço de demanda atual (Discovery). Fatos: Q17 = crescimento desejado via plantas prontas; Q10 = projeto arquitetônico **não selecionado** entre os trabalhos que ela gostaria de receber mais. `[DERIVAÇÃO]`: o foco de aquisição do site não é S02 — **não** equivale a "a Mayara não deseja crescer em projeto arquitetônico". Papel = atender a demanda que chega; sem prioridade de amplificação. Compartilha público com S03 (Q4). |
| **S03 — Design de interiores** | Confiança sobe: rentável (Discovery) + preferido (Q11) + desejo de receber mais (Q10) + "compensa" (Q12). Secundário **estratégico** consolidado. Compartilha público com S02. |
| **S04 — Fachada** | Refinado: **preferência declarada** da Mayara (Q10) e motivo de procura frequente (Q2). Continua **complementar** — preferência ≠ demanda autônoma de mercado (`[VALIDAR COM MERCADO]`). Não promover a primário. |
| **S05 — Visualização 3D / render** | Refinado: **preferência declarada** (Q10). Continua **complementar / insumo de venda**. Sem evidência de procura autônoma do consumidor final. |
| **S06 — Reforma / adequação** | Sem evidência nova (Q2 não marcou "quer reformar"). Continua **recorte de S03/S02**, não segmento autônomo. `[HIPÓTESE]` |
| **S07 — Parceiro / B2B** | Sem evidência nova. Continua **futuro / hipótese**. |

## 11. Impactos na priorização

Aplicado em `03-priority-audiences.md`. Classificação pós-validação:

```
S01 — PÚBLICO PRIMÁRIO DIGITAL / CRESCIMENTO   (confirmado pela cliente — Q17)
S02 — PÚBLICO PRIMÁRIO DE SERVIÇOS             (demanda atual — não rebaixado)
S03 — PÚBLICO SECUNDÁRIO ESTRATÉGICO           (rentável + preferido; não é motor de crescimento)
S04 / S05 — PÚBLICOS COMPLEMENTARES            (com preferência declarada da Mayara — registrada, não promovida)
S06 / S07 — HIPÓTESES / FUTUROS
```

**Dupla leitura** (detalhe em `03`): a prioridade do **ecossistema digital** (quem o site deve focar em atrair/converter) coloca **S01 em primeiro lugar**, apoiado por conteúdo de S03; a **importância para o negócio atual** mantém **S02 e S03** como sustentação de receita. Não é "plantas *ou* arquitetura" — é produto escalável **+** serviços.

## 12. Lacunas que agora dependem de mercado/dados

| Lacuna | Fonte |
|---|---|
| Demanda real de mercado por plantas prontas (volume, sazonalidade) | `[HIPÓTESE — VALIDAR COM MERCADO]` |
| Demografia do comprador (idade, renda, profissão, composição familiar) | `[HIPÓTESE — VALIDAR COM MERCADO]` |
| Faixa de preço praticada por concorrentes de plantas prontas | `[HIPÓTESE — VALIDAR COM MERCADO]` |
| Alcance geográfico viável por serviço/produto | `[HIPÓTESE — VALIDAR COM MERCADO]` + `[VALIDAR PROFISSIONALMENTE]` (OD-002) |
| O público compra planta pronta 100% online ou quase sempre fala antes? | `[HIPÓTESE — VALIDAR COM MERCADO]` + `[VALIDAR COM ANALYTICS/DADOS FUTUROS]` |
| Termos de busca e canais que mais convertem | `[VALIDAR COM ANALYTICS/DADOS FUTUROS]` |
| Taxa de conversão do catálogo e ticket médio real por planta | `[VALIDAR COM ANALYTICS/DADOS FUTUROS]` |
| Demanda por estilos além do contemporâneo | `[HIPÓTESE — VALIDAR COM MERCADO]` |

## 13. Próxima ação

1. Executar a **validação externa de mercado** conforme o "Escopo recomendado" abaixo.
2. Pedir à Mayara o **projeto de portfólio representativo** (V12 / AÇÃO FUTURA) — insumo para Personas.
3. Cruzar Discovery + respostas da cliente + pesquisa de mercado e então **consolidar o público-alvo definitivo**.
4. Só depois: atualizar o Gate para SUFICIENTE nas áreas de mercado e **encerrar a ETAPA 02**, seguindo para a **ETAPA 03 — Personas**.

---

## Escopo recomendado para validação externa

> **Não executado nesta tarefa.** Plano para a próxima execução.

### Mercado e concorrência
- Empresas/profissionais que vendem plantas prontas (Brasil e SP interior): quantos, porte, há quanto tempo.
- Arquitetos/estúdios com oferta semelhante (catálogo + personalização).
- Modelo de apresentação dos produtos (ficha da planta, o que mostram, o que ocultam até a compra).
- Diferenciais comunicados; formação de **pacotes**; **sinais de confiança** (CREA/CAU, RRT, depoimentos, obras entregues, garantia).

### Preços
- Faixas observadas de plantas prontas e o que costuma estar incluído em cada faixa.
- Diferença de preço/entrega entre **produto pronto** e **projeto personalizado**.
- Preços de add-ons (fachada, 3D, adaptação).

### Intenção de busca
- Termos: "planta pronta", "planta de casa", "projeto de casa", "projeto arquitetônico", "design de interiores", "fachada de casa", "renderização/3D de casa".
- Variações por nº de quartos, dimensão de terreno, tipologia (térrea/sobrado), estilo (contemporânea).
- Buscas locais/regionais quando houver dados.

### Geografia
- Sinais de demanda em **Leme, Araras, Pirassununga** e no eixo Campinas/Limeira/Rio Claro/Piracicaba.
- Avaliar expansão potencial além desse núcleo — **não** limitar a pesquisa a essas cidades se o produto digital indicar mercado mais amplo.

### Comportamento
- Fatores de confiança e dúvidas recorrentes; objeções (preço, timing, "faço com engenheiro/construtor").
- Jornada de compra (tempo, comparações, quem decide).
- Importância relativa de **metragem, estilo, nº de quartos, terreno e preço** na escolha.

### Tráfego pago
- Ângulos/ofertas usados por concorrentes (biblioteca de anúncios).
- Concorrência aparente e hipóteses de intenção por tipo de anúncio.

---

## Gate intermediário — ETAPA 02 (pós-validação)

> Substitui, para fins de acompanhamento, a versão anterior em `04-validation-questions.md`. **A ETAPA 02 continua EM ANDAMENTO.**

| Área | Antes | Depois da validação | Evidência | Próxima ação |
|---|---|---|---|---|
| Segmentos candidatos | SUFICIENTE | **SUFICIENTE** | S01–S07 estáveis; S06 confirmado como recorte de S03/S02 | Manter |
| Público primário | PARCIAL | **SUFICIENTE** | Q17 (S01 = crescimento) + Discovery (S02 = demanda) | Validar demanda de S01 com mercado |
| Público secundário | PARCIAL | **SUFICIENTE** | Q10, Q11, Q12 + Discovery (S03 rentável) | Manter |
| Dores | PARCIAL | **PARCIAL** (mais forte) | Q1, Q6, Q7 = dores observadas reais | Cruzar com pesquisa de mercado |
| Necessidades | PARCIAL | **SUFICIENTE** | Q2, Q8 | Manter |
| Objeções | PARCIAL | **PARCIAL** | Q6, Q7 (observadas); faltam objeções de mercado | Pesquisa de mercado |
| Critérios de decisão | PARCIAL | **PARCIAL** | Q6 ajuda; faltam reviews/benchmarks de concorrentes | Pesquisa de mercado |
| Geografia | PARCIAL | **PARCIAL** | Q14 (núcleo regional) + Q15/Q16 (remoto possível) | Mercado + `[VALIDAR PROFISSIONALMENTE]` (OD-002) |
| Produto × público | SUFICIENTE | **SUFICIENTE** | Matriz revista (doc `02`) | Revisar após mercado |
| Preferência da cliente | (não avaliado) | **SUFICIENTE** | Q10, Q11, Q17 | Manter |
| Direção estratégica | PARCIAL/INSUFICIENTE | **SUFICIENTE** | Q17 | Manter |
| Pesquisa externa | SUFICIENTE (planejada) | **SUFICIENTE** (plano refinado) | Este documento | Executar na próxima etapa |

**Conclusão do Gate:** a **validação com a cliente está incorporada e suficiente**. Para encerrar a ETAPA 02 falta apenas a **validação externa de mercado** (plano acima) e a indicação do projeto representativo (V12). ETAPA 02 permanece **EM ANDAMENTO**.

---

## Atualização pós-validação externa — 09/09/2026

A pesquisa de mercado foi executada. Resultado completo em [`07-market-validation.md`](07-market-validation.md). O que muda aqui:

- `[EVIDÊNCIA EXTERNA]` **Mercado digital de plantas prontas confirmado** (13 sites BR, ~9 detalhados). O contexto estrutural — 82% das moradias sem arquiteto/engenheiro (Datafolha/CAU 2022) e 3,5 mi de imóveis em obra/reforma (Censo 2022) — sustenta a demanda latente de S01. Fontes F1, F2 no doc `07`.
- `[EVIDÊNCIA EXTERNA]` **Atributos de S01 confirmados** como critérios de comparação reais: dimensão do terreno, nº de quartos/suítes, área construída, pavimentos são filtros universais nos catálogos concorrentes.
- `[EVIDÊNCIA EXTERNA]` **Faixa R$ 500–1.500 é compatível** com a metade média/alta do benchmark (mínimo observado R$ 150; R$ 3–5/m² no piso). Há concorrência agressiva na base — a faixa é defensável, não a mais barata. Nenhum preço final foi recomendado.
- `[EVIDÊNCIA EXTERNA]` **Modelo híbrido (self-service + WhatsApp)** e **Pix/cartão/boleto** são padrão de mercado — convergem com o que a Mayara já pretende (V-Q6, Discovery).
- `[EVIDÊNCIA EXTERNA]` **Mercado de interiores em crescimento e digitalizado** (~8%/ano; ~60% das vendas do setor via digital) — reforça S03 como secundário estratégico.
- `[NOVO PADRÃO EXTERNO]` **Objeções técnicas de planta pronta** (adequação ao terreno, orientação solar, entorno, legislação municipal, responsável técnico local) que não estavam nos docs — precisam ser endereçadas no conteúdo do site.
- **Correção semântica (instrução do PROMPT 04):** onde este documento dizia "a Mayara não deseja crescer em projeto arquitetônico", a redação foi ajustada — os fatos são Q17 (crescimento via plantas prontas) e Q10 (projeto arquitetônico não selecionado entre os trabalhos que ela gostaria de receber mais); a conclusão de que o foco de aquisição não é S02 é `[DERIVAÇÃO]`, não fala da cliente.
- **V12 (projeto representativo):** segue como AÇÃO FUTURA — pedir à Mayara.

**Situação:** validação da cliente **e** validação externa concluídas e convergentes. A resposta à condição de encerramento do PROMPT 04 é **SIM** — há base para consolidar o público-alvo (recomendação: PROMPT 05). ETAPA 02 permanece **EM ANDAMENTO** até essa consolidação.
