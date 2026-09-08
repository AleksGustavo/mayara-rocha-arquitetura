# 05 — Consolidação do Discovery (achados confirmados)

**Projeto:** Mayara Rocha Arquitetura — Website e Ecossistema Digital
**Etapa:** ETAPA 01 — Discovery do Negócio
**Fonte primária:** 1 resposta real da Mayara ao Google Forms gerado por [`create-discovery-form.gs`](../../scripts/google-forms/create-discovery-form.gs), recebida em **04/09/2026, 10:33 (GMT-3)**, **+ respostas complementares da conversa complementar (consolidadas em 08/09/2026 — ver seção 12).**
**Fontes de apoio (lidas integralmente, não alteradas):** [`01-business-discovery.md`](01-business-discovery.md) · [`02-interview-guide.md`](02-interview-guide.md) · [`03-client-questionnaire.md`](03-client-questionnaire.md)
**Documentos derivados:** [`06-open-decisions-register.md`](06-open-decisions-register.md) · [`07-stage-01-closure.md`](07-stage-01-closure.md)
**Saneamento documental:** 08/09/2026 — trechos anteriores foram reconciliados com as respostas complementares da seção 12; informação superada aparece marcada como `HISTÓRICO` / `SUPERADA` / `RESOLVIDA`.

> Este documento **reflete o estado das decisões até 08/09/2026**. Em caso de conflito entre um trecho antigo e uma seção atualizada, vale sempre a **seção 12** (respostas complementares). Nada foi inventado; pendências reais seguem marcadas.

## Convenção de marcação

| Marcação | Significado |
|---|---|
| `[FATO — CLIENTE]` | Resposta direta da Mayara (formulário de 04/09 ou conversa complementar de 08/09). |
| `[FATO]` | Já vinha confirmado na conversa inicial (`01-business-discovery.md`). |
| `[PENDÊNCIA CONTROLADA]` | Decisão conhecida como pendente, com momento futuro definido para resolução (rastreada no `06`). |
| `[VALIDAR PROFISSIONALMENTE]` | Tema legal/regulatório/fiscal — resposta da cliente é ponto de partida, não decisão jurídica. |
| `BLOQUEIO DE LANÇAMENTO` | Não impede planejamento nem a ETAPA 02; impede colocar a funcionalidade em produção. |
| `HISTÓRICO` / `SUPERADA` / `RESOLVIDA` | Informação que já foi verdadeira mas **não é mais o estado atual**; preservada apenas como registro. |
| `[NÃO INFORMADO — NÃO BLOQUEIA DISCOVERY]` | Dado não fornecido, de baixo impacto, que não impede o encerramento do Discovery. |

### Nota técnica sobre a coleta (não é achado de negócio)

A cliente respondeu **"Sim, já no lançamento"** em "pretende comercializar plantas prontas?" — o que deveria abrir a Seção 8A (detalhada) e **pular** a 8B (resumida). No CSV, porém, aparecem respostas preenchidas **tanto na 8A quanto na 8B** (`FORM-Q46` e `FORM-Q47`). Isso indica que a navegação condicional do formulário **não pulou a Seção 8B** para esta resposta — provável falha na configuração de `setGoToPage`/`setChoices` do script, a revisar antes de enviar o formulário para outra pessoa. Não há prejuízo aqui: todas as respostas foram usadas nesta consolidação (a cliente só respondeu 2 perguntas a mais do que o previsto). Registrado como **`PENDÊNCIA TÉCNICA` OD-012** no [`06-open-decisions-register.md`](06-open-decisions-register.md) — auditar a ramificação do `.gs` antes de reutilizar o formulário. Não altera o entendimento do negócio.

---

## 1. Resumo executivo

Mayara Rocha atua **entre 5 e 10 anos** como arquiteta e urbanista `[FATO — CLIENTE]`, com **registro ativo no CAU** `[FATO — CLIENTE]`. O atendimento presencial atual é em **Leme, SP** `[FATO — CLIENTE]` (conversa complementar — seção 12); aceita projetos remotos **"com algumas limitações"** `[FATO — CLIENTE]`. Não ampliar o atendimento presencial para outras cidades sem decisão.

Ela define seu diferencial como **"projetos criativos e diferenciados, adaptados à necessidade do cliente, sem perder estética e funcionalidade"** `[FATO — CLIENTE]` — frase literal da resposta, candidata a insumo de copy.

Hoje, **projeto arquitetônico é o serviço mais procurado**, enquanto **design de interiores é, ao mesmo tempo, o mais rentável e o que ela mais gosta de fazer** `[FATO — CLIENTE]` — uma divergência estratégica relevante (ver seção 5). A capacidade atual é de **apenas 1 a 2 projetos simultâneos** `[FATO — CLIENTE]`, com honorários hoje **predominantemente até R$ 5 mil** e uma meta de ticket médio de **até R$ 10 mil** `[FATO — CLIENTE]` — meta de dobrar o ticket, não de multiplicá-lo.

O público que ela quer atrair nos próximos anos é **"pessoas construindo ou comprando o imóvel próprio"** `[FATO — CLIENTE]`, priorizando casa térrea, sobrado, apartamento/reforma, e padrão médio/alto em construção nova — **sem** foco declarado em comércio, reforma avulsa ou clientes B2B (investidores/construtoras) `[FATO — CLIENTE]`.

Em portfólio, o volume é forte — **mais de 10 projetos divulgáveis e mais de 10 já construídos** `[FATO — CLIENTE]` — mas a formalização é fraca: **sem fotos profissionais** (só fotos de celular), **sem depoimentos** e **sem autorização de publicação formalizada** `[FATO — CLIENTE]`. A marca usa o **nome pessoal "Mayara Rocha"**, com **logo apenas em imagem** (sem vetor) e **identidade visual informal** `[FATO — CLIENTE]`; **não há domínio registrado**, **não há LinkedIn** e **não há Instagram profissional** — apenas perfil pessoal `[FATO — CLIENTE]` (Instagram esclarecido na conversa complementar — seção 12). Ela prefere **não gravar Reels com regularidade** `[FATO — CLIENTE]`.

O **objetivo número 1 do site é vender plantas prontas**, com **CTA principal "comprar uma planta"** `[FATO — CLIENTE]` — a venda deve começar **já no lançamento**. O catálogo é maior do que o Discovery inicial sugeria: **mais de 10 plantas**, mas **ainda exigindo pequenos ajustes**, com arquivos em **PDF, DWG, 3D e renders**, todas em **estilo contemporâneo** `[FATO — CLIENTE]`. O preço imaginado é **R$ 500 a R$ 1.500** por planta (estimativa interna), com **compra automática seguida de contato posterior**, aceitando **pequenos ajustes inclusos** `[FATO — CLIENTE]`. Na conversa complementar (seção 12), a **intenção comercial de uso da planta foi definida**: **1 compra = 1 construção, sem revenda e sem alteração livre pelo comprador** `[FATO — CLIENTE]`. O que permanece pendente é **converter essa intenção em licença/termos juridicamente adequados** (`BLOQUEIO DE LANÇAMENTO`, `[VALIDAR PROFISSIONALMENTE]` — OD-001/OD-006), além de **pagamento (Pix, cartão e boleto — só o gateway pendente, OD-010)**, **pacote de arquivos entregue (Q7 — decisão futura da cliente, OD-003)** e **política de revisão/cancelamento/reembolso (Q8 — decisão futura, `BLOQUEIO DE LANÇAMENTO`, OD-005)**.

Ela avalia a qualidade dos próprios renders em **9 de 10** `[FATO — CLIENTE]`, reforçando o 3D como diferencial real (não apenas hipótese). Sobre IA, o interesse é alto (**4 de 5**), mas a **autorização de uso dos projetos em ferramentas de IA é condicionada a anonimização** `[FATO — CLIENTE]` — e ela mesma identifica que **vários projetos precisam ser anonimizados** antes de qualquer uso `[FATO — CLIENTE]`.

Em marketing, o orçamento inicial para anúncios é **baixo (até R$ 500/mês)**, com foco declarado em **venda de plantas** `[FATO — CLIENTE]`. Os **KPIs comerciais** foram esclarecidos na conversa complementar (seção 12): **primários = quantidade de plantas vendidas + faturamento com plantas**; **secundários = alcance e seguidores** `[FATO — CLIENTE]`. O ponto de desalinhamento apontado na seção 2.1 fica **`RESOLVIDO POR ESCLARECIMENTO DA CLIENTE — 08/09/2026`**. As metas de volume são de **6 a 15 contatos/mês** e **1 a 2 novos projetos/mês** `[FATO — CLIENTE]` — esta última compatível com a capacidade de atendimento declarada.

---

## 2. Não silencie inconsistências

### 2.1 Objetivo de negócio × métrica escolhida — `RESOLVIDO POR ESCLARECIMENTO DA CLIENTE — 08/09/2026`

**Estado atual (08/09/2026):** os **KPIs comerciais primários** são **(1) quantidade de plantas vendidas** e **(2) faturamento com a venda de plantas**; **alcance e seguidores** são **KPIs secundários** (awareness) `[FATO — CLIENTE]` (seção 12, Q10). O objetivo do site (vender plantas) e o objetivo dos anúncios (vender plantas) ficam **alinhados** com a métrica primária. Não há mais desalinhamento ativo.

**`HISTÓRICO` (formulário de 04/09, preservado como registro):** no formulário, a métrica escolhida como "mais importante" havia sido **"seguidores e alcance"**, o que gerava tensão com o objetivo comercial (seguidores/alcance medem awareness, não venda). Essa tensão foi levada à cliente e **resolvida** pelo esclarecimento acima — a resposta original **não** representa mais a régua de sucesso do projeto.

### 2.2 Venda automática × uso da planta × responsabilidade técnica — `PARCIALMENTE RESOLVIDO` (intenção definida; formalização jurídica pendente)

**Estado atual (08/09/2026):** a **intenção comercial de uso da planta está definida** `[FATO — CLIENTE]` (seção 12, Q3):

- **1 compra = 1 construção** (a mesma aquisição não autoriza múltiplas construções);
- **comprador não pode revender** a planta;
- **comprador não pode alterar livremente** a planta;
- **pequenos ajustes** podem ser **solicitados à própria Mayara**, dentro das regras do produto ainda a detalhar (Q4 / OD-004) — isso **não** conflita com a proibição de alteração livre.

O que **permanece pendente** é a **formalização dessa intenção em licença/termos juridicamente adequados** (`BLOQUEIO DE LANÇAMENTO`, `[VALIDAR PROFISSIONALMENTE]` — OD-001, OD-006) e a **responsabilidade técnica / RRT** na venda de projeto pronto (`BLOQUEIO DE LANÇAMENTO`, `[VALIDAR PROFISSIONALMENTE]` — OD-002). O modelo de compra segue **"automática, com contato posterior"** `[FATO — CLIENTE]`.

Nada disso é `BLOQUEIO DE DISCOVERY` — são bloqueios de lançamento, a resolver em paralelo às próximas etapas.

**`HISTÓRICO` / `SUPERADA` (formulário de 04/09, preservado como registro):** o formulário registrava direitos de uso como **"uso livre para o comprador"**, sem restrição declarada de revenda ou de número de construções. Essa expressão ficou **`ESCLARECIDA / SUPERADA POR RESPOSTA COMPLEMENTAR DE 08/09/2026`** e **não é mais a regra vigente do negócio**.

### 2.3 Outras tensões observadas (menores, não bloqueantes)

- **Serviço "plantas sob medida" não marcado como oferecido hoje** _(ponto a confirmar na próxima conversa)_: o Discovery inicial (`01-business-discovery.md`) registrava "criação de plantas" como algo que a Mayara já exerce `[FATO]` (vindo da conversa inicial). No formulário, ao listar os serviços que oferece hoje, ela **não marcou "Plantas sob medida"** — marcou projeto arquitetônico, interiores, fachadas, 3D interno/externo, renderização, personalização e consultoria. Pode ser que "plantas" esteja embutida em "projeto arquitetônico" e não tenha sido percebida como item separado no formulário, ou pode indicar que ela não oferece mais "planta sob medida" como serviço avulso. Registrado como pendência de esclarecimento, não como fato alterado.
- **"Contato" não marcado como seção obrigatória do site**, apesar de WhatsApp ser hoje um canal relevante de aquisição (`FATO — CLIENTE`, ver seção 4). As seções marcadas como obrigatórias foram: Portfólio, Serviços, Loja de plantas e Preços — sem Sobre mim, Depoimentos, FAQ, Blog **ou Contato**. Pode ser omissão involuntária (ela pode considerar contato "óbvio"); vale confirmar antes de fechar a arquitetura do site.
- **Foco em "alto padrão" e "médio padrão" simultaneamente** com um ticket médio desejado de até R$ 10 mil — valor mais alinhado a médio padrão. Não é uma contradição forte, só um ponto a observar ao definir posicionamento único (não é obrigatório escolher apenas um).

---

## 3. Matriz de validação

> Coluna "Estado anterior" = o que se sabia **antes** das respostas da cliente (hipótese ou lacuna). Coluna "Resposta da cliente" = estado **atual**, incluindo os esclarecimentos da conversa complementar de 08/09/2026.

| Tema | Estado anterior | Resposta da cliente | Resultado | Impacto |
|---|---|---|---|---|
| Registro no CAU | sem resposta prévia (pré-formulário) | Sim, ativo | VALIDADA | Pode ser comunicado no site; ainda assim, venda de plantas exige validação de RRT à parte |
| Região de atuação | Hipótese de alcance amplo (ecossistema nacional) | "Minha cidade e região" → esclarecido: **Leme, SP** (seção 12) | VALIDADA | Site/SEO local com âncora em Leme/SP; não ampliar para outras cidades sem decisão |
| Atendimento remoto | sem resposta prévia (pré-formulário) | "Sim, com algumas limitações" | PARCIALMENTE VALIDADA | Comunicar remoto como possibilidade, não como promessa irrestrita |
| Serviço mais procurado | Não definido | Projeto arquitetônico | VALIDADA | Serviço de maior demanda, mas não o mais rentável (ver linha abaixo) |
| Serviço mais rentável / preferido | Não definido | Design de interiores (ambos) | VALIDADA | Candidato a destaque/upsell — ver seção 5 |
| "Plantas sob medida" como serviço atual | `[FATO]` (conversa inicial) | Não marcada na lista de serviços oferecidos hoje | PARCIALMENTE VALIDADA | Esclarecer se está embutida em "projeto arquitetônico" — ver seção 2.3 |
| Capacidade de atendimento simultâneo | sem resposta prévia (pré-formulário) | 1 a 2 projetos | VALIDADA | Limita a meta de leads/mês; gerar demanda além disso cria fila |
| Faixa de honorário atual | sem resposta prévia (pré-formulário) | Até R$ 5 mil | VALIDADA | Ticket de entrada baixo; meta de R$ 10 mil representa ~2x |
| Ticket médio desejado | sem resposta prévia (pré-formulário) | Até R$ 10 mil | VALIDADA | Meta moderada, realista frente ao ticket atual |
| Cliente ideal / público desejado | Hipótese ampla (residências, B2B, investidores) | "Pessoas construindo ou comprando o imóvel próprio" | VALIDADA | Foco em pessoa física, não B2B — reduz escopo do site |
| Tipos de projeto a priorizar | Hipótese ampla | Térrea, sobrado, apto/reforma, alto e médio padrão, construção nova | PARCIALMENTE VALIDADA | Comércio, reforma avulsa e B2B ficam fora do foco atual |
| Projetos divulgáveis / construídos | Risco: "falta de material de portfólio" | Mais de 10 divulgáveis, mais de 10 construídos | REFUTADA (quanto a volume) | Quantidade não é o problema — qualidade/formalização é (ver linhas abaixo) |
| Fotografias profissionais | Risco hipotetizado | "Não, só fotos de celular" | VALIDADA (risco confirmado) | Priorizar sessão de fotos antes do lançamento do portfólio |
| Depoimentos de clientes | Risco hipotetizado | "Não tenho" | VALIDADA (risco confirmado) | Sem prova social pronta; não inventar depoimentos |
| Autorização de publicação | Risco hipotetizado (alto) | "Não tenho isso formalizado" | VALIDADA (risco confirmado) | Bloqueante para publicar qualquer projeto — `[VALIDAR PROFISSIONALMENTE]` |
| Nome pessoal x nome de escritório | sem resposta prévia (pré-formulário) | "Meu nome (Mayara Rocha)" | VALIDADA | Define domínio, e-mail, redes e todo material com o nome pessoal |
| Logotipo | sem resposta prévia (pré-formulário) | Só em imagem (PNG/JPG), sem vetor | PARCIALMENTE VALIDADA | Recriar em vetor antes de aplicar em materiais grandes/impressos |
| Identidade visual (cores/tipografia) | sem resposta prévia (pré-formulário) | Definida de forma informal | PARCIALMENTE VALIDADA | ETAPA de marca ainda necessária, mas não do zero absoluto |
| Domínio próprio | sem resposta prévia (pré-formulário) | Não tem | VALIDADA (pendência confirmada) | Registrar domínio é tarefa de curto prazo |
| LinkedIn como canal B2B ativo | Hipótese de canal já em uso | "Não tenho" | REFUTADA | Estratégia de LinkedIn parte do zero, não de uma base existente |
| Instagram profissional | sem resposta prévia (pré-formulário) | Esclarecido: **não possui Instagram profissional** (apenas pessoal) — seção 12 | VALIDADA | Presença profissional no Instagram é item a criar do zero na estratégia digital |
| Aparecer em vídeo / Reels | Hipótese de alta disposição para conteúdo em vídeo | "Prefiro não" gravar Reels com regularidade | PARCIALMENTE VALIDADA | Estratégia de conteúdo não pode depender de Reels pessoais recorrentes |
| Objetivo nº 1 do site | Múltiplas hipóteses (portfólio, leads, venda) | Vender plantas prontas | VALIDADA | Define prioridade de UX e conteúdo nas próximas etapas |
| CTA principal | sem resposta prévia (pré-formulário) | Comprar uma planta | VALIDADA | CTA primário do site inteiro |
| Venda de plantas: lançamento x fase 2 | Pendência crítica (K4) | "Sim, já no lançamento" | VALIDADA | Bloqueios de lançamento (licença, RRT, fiscal, LGPD, reembolso) a resolver antes da venda pública — ver seção 2.2 e `06` |
| Quantidade de plantas prontas | `[FATO]` vago ("algumas") | Mais de 10 | ATUALIZAÇÃO DE FATO | Catálogo maior do que o Discovery inicial sugeria |
| Estado das plantas | sem resposta prévia (pré-formulário) | Precisam de pequenos ajustes | VALIDADA | Não estão 100% prontas — planejar tempo de preparação |
| Arquivos existentes | sem resposta prévia (pré-formulário) | PDF, DWG, 3D, renders | VALIDADA | Bom nível de detalhamento técnico já disponível |
| Categorização por quartos/piscina | Hipótese do briefing original | Não perguntado/respondido neste formulário (só tamanho/tipologia) | AINDA PENDENTE | Completar na conversa curta antes de estruturar filtros do catálogo |
| Estilo do catálogo | Hipótese de múltiplos estilos | Só contemporâneo | PARCIALMENTE VALIDADA | Catálogo é mono-estilo por ora; simplifica filtros do catálogo |
| Personalização pós-venda | Hipótese de upsell estruturado (fachada, 3D, interiores) | "Pequenos ajustes inclusos" | PARCIALMENTE VALIDADA | Upsell explícito de fachada/3D/interiores ainda não confirmado como oferta formal |
| Preço da planta | sem resposta prévia (pré-formulário) | R$ 500 a R$ 1.500 | VALIDADA (estimativa interna) | Não publicar sem validação final |
| Modelo de compra | Hipótese "automática ou com contato" | "Automática, com contato depois" | VALIDADA | Modelo híbrido — ver tensão jurídica na seção 2.2 |
| Direitos de uso da planta | Pendência crítica/legal | Form: "uso livre para o comprador" → **SUPERADO** pela conversa complementar (seção 12, Q3): **1 compra = 1 construção, sem revenda, sem alteração livre** | `SUPERADO POR RESPOSTA COMPLEMENTAR DE 08/09/2026` | Intenção comercial definida; falta converter em licença/termos — `BLOQUEIO DE LANÇAMENTO`, não de Discovery (`[VALIDAR PROFISSIONALMENTE]`, OD-001/OD-006) |
| Qualidade dos renders | Hipótese "diferencial forte" | Nota 9/10 (autoavaliação) | VALIDADA | Reforça 3D como eixo central de comunicação |
| Vídeos de passeio 3D | Oportunidade hipotetizada | "Talvez" | PARCIALMENTE VALIDADA | Interesse existe, mas sem compromisso de produção regular |
| Interesse em IA no marketing | Hipótese de uso de IA no processo | 4 de 5 | VALIDADA COM CONDIÇÃO | Uso de IA avança, mas depende de anonimização (linha abaixo) |
| Necessidade de anonimização | Pendência (Bloco L) | "Sim, vários" projetos | VALIDADA | Política de anonimização é pré-requisito para qualquer uso de IA |
| Orçamento de mídia | sem resposta prévia (pré-formulário) | Até R$ 500/mês | VALIDADA | Planejamento de tráfego deve ser realista para esse teto |
| Objetivo dos anúncios | sem resposta prévia (pré-formulário) | Vendas de plantas | VALIDADA | Alinhado ao objetivo do site e à métrica primária (2.1 — resolvido) |
| Métrica principal de sucesso | Form: "seguidores e alcance" | Conversa complementar (seção 12, Q10): **KPIs primários = nº de plantas vendidas + faturamento com plantas**; seguidores/alcance = **secundários** (awareness) | `RESOLVIDO POR ESCLARECIMENTO POSTERIOR` | Desalinhamento da seção 2.1 encerrado; resposta do formulário preservada só como histórico |
| Meta de contatos/mês | sem resposta prévia (pré-formulário) | 6 a 15 | VALIDADA | ~2 a 3x o volume atual (0 a 5) |
| Meta de projetos novos/mês | sem resposta prévia (pré-formulário) | 1 a 2 | VALIDADA | Compatível com a capacidade de atendimento declarada |
| Uso de contrato | sem resposta prévia (pré-formulário) | "Às vezes" | PARCIALMENTE VALIDADA | Padronizar contrato é ainda mais urgente com a venda de plantas (`[VALIDAR PROFISSIONALMENTE]`) |
| Região — atendimento presencial | sem resposta prévia (pré-formulário) | **Leme, SP** (conversa complementar, Q1) | `RESOLVIDO POR ESCLARECIMENTO POSTERIOR` | SEO/comunicação com âncora local em Leme/SP; não ampliar sem decisão |
| Instagram profissional | Form: campo em branco | **Não possui** conta profissional — só perfil pessoal (Q2) | `RESOLVIDO POR ESCLARECIMENTO POSTERIOR` | Conta profissional é item a criar na estratégia digital |
| Suporte pós-compra | Pendência (Bloco de plantas) | Entrega dos arquivos + **chat de dúvidas no site** (Q5) | VALIDADA (intenção) | `[REQUISITO CANDIDATO]` — tecnologia do chat a decidir (OD-011) |
| Formas de pagamento | Pendência | **Pix, cartão e boleto** (Q6) | VALIDADA | Só a escolha do gateway/provedor segue pendente (OD-010) |
| Autorizações do portfólio | Risco hipotetizado (alto) | Cliente **aceita solicitar** autorização formal (Q9) | VALIDADA (disposição) — autorizações efetivas = `AÇÃO PENDENTE` | Nenhum projeto específico é considerado autorizado até haver evidência (OD-009) |
| Limites dos "pequenos ajustes" | Pendência | Exemplos dados: portas, disposição de mobiliário (Q4). Limites comerciais não definidos | `PARCIALMENTE DEFINIDA` / `[PENDÊNCIA CONTROLADA]` | OD-004 — nº de solicitações, revisões, prazo, medidas, estrutural, implantação, preço fora de escopo |
| Pacote de arquivos entregue ao comprador (Q7) | Pendência | Cliente **especificará depois** (decisão futura deliberada) | `[PENDÊNCIA CONTROLADA — DEFINIÇÃO DO PRODUTO]` | OD-003 — "arquivos disponíveis" (PDF/DWG/3D/renders) ≠ "arquivos incluídos na compra". Não bloqueia a ETAPA 02 |
| Política de revisão/cancelamento/reembolso (Q8) | Pendência | **"A definir"** (decisão futura deliberada) | `[PENDÊNCIA CONTROLADA]` + `[VALIDAR PROFISSIONALMENTE]` | OD-005 — `BLOQUEIO DE LANÇAMENTO` até definição/validação; não bloqueia planejamento |

---

## 4. Perfil comercial confirmado

- **Aquisição atual:** indicação, Instagram, WhatsApp e "já me conheciam" `[FATO — CLIENTE]`. Google e LinkedIn **não** foram marcados como canal de chegada hoje.
- **Ticket atual:** honorário predominante **até R$ 5 mil** por projeto `[FATO — CLIENTE]`.
- **Ticket desejado:** **até R$ 10 mil** por projeto `[FATO — CLIENTE]`.
- **Volume de contatos hoje:** **0 a 5 contatos/mês** `[FATO — CLIENTE]`.
- **Capacidade de atendimento:** **1 a 2 projetos simultâneos** `[FATO — CLIENTE]`.
- **Meta de contratos:** **1 a 2 novos projetos/mês** `[FATO — CLIENTE]` — compatível com a capacidade declarada.
- **Meta de contatos:** **6 a 15 contatos/mês** `[FATO — CLIENTE]` — de 1,2 a 3x o volume atual.
- **Canais confirmados:** indicação, Instagram, WhatsApp, boca a boca ("já me conheciam") `[FATO — CLIENTE]`.
- **Gargalo identificado:** a meta de contatos (6–15/mês) é maior, proporcionalmente, do que a meta de novos contratos (1–2/mês) — o que é normal em qualquer funil, mas **cruzado com a capacidade de apenas 1–2 projetos simultâneos**, isso significa que **gerar mais leads sem aumentar capacidade de entrega pode criar fila de espera ou frustração** de quem entra em contato e não é atendido a tempo. Vale decidir, antes de investir em tráfego, se a meta é de leads para *serviços* (limitados pela capacidade de 1–2) ou leads para *vendas de plantas* (produto digital, sem o mesmo limite de capacidade).
- **Taxa de conversão:** **não informada** `[NÃO INFORMADO — NÃO BLOQUEIA DISCOVERY]`. Não foi estimada nem inventada; pode ser levantada quando houver histórico comercial registrado.

---

## 5. Oferta confirmada — hierarquia preliminar

| Camada | Item | Evidência |
|---|---|---|
| **Produto digital estratégico** | Plantas prontas | Objetivo nº 1 do site + CTA principal `[FATO — CLIENTE]` |
| **Serviço de maior demanda** | Projeto arquitetônico | "Mais procurado" `[FATO — CLIENTE]` |
| **Serviço de maior rentabilidade e preferência pessoal** | Design de interiores | "Mais rentável" e "mais gosta de fazer" `[FATO — CLIENTE]` |
| **Serviços complementares confirmados como oferecidos hoje** | Fachadas, Vistas 3D internas, Vistas 3D externas, Renderização, Personalização de projetos, Consultoria | Lista marcada em "quais serviços oferece hoje" `[FATO — CLIENTE]` |
| **Serviço a esclarecer** | Plantas sob medida | Não marcado como oferecido hoje, apesar de constar no Discovery inicial — ver seção 2.3 |

**Diferenciação importante — "prioridade do site" ≠ "serviço mais procurado":**
O site vai priorizar a **venda de um produto** (plantas prontas) que **não é** o serviço mais procurado nem o mais rentável hoje. Isso é uma decisão estratégica legítima (escalar um produto digital em vez de depender só de projeto sob demanda), mas precisa ser deliberada, não acidental — a home do site comunicando "compre uma planta" pode ofuscar o que hoje sustenta o negócio (projeto arquitetônico) e o que a Mayara mais quer fazer (interiores). Recomenda-se que o site tenha uma hierarquia clara: **plantas prontas como porta de entrada/produto de volume**, com **projeto arquitetônico e interiores como upsell/serviço principal de receita**, replicando a lógica que já estava hipotetizada em `01-business-discovery.md` (seção 9, "plantas prontas como porta de entrada para serviços personalizados") — agora com uma base real de catálogo (>10 plantas) para sustentar isso.

---

## 6. Catálogo de plantas — requisitos de negócio confirmados

- Comercialização confirmada **já no lançamento** `[FATO — CLIENTE]`.
- **Mais de 10** plantas no acervo `[FATO — CLIENTE]`.
- Estado: **precisam de pequenos ajustes** antes de entrar no catálogo `[FATO — CLIENTE]`.
- Arquivos disponíveis: **PDF, DWG (CAD), arquivo 3D (SketchUp/Revit) e renders/imagens 3D** `[FATO — CLIENTE]` (memorial descritivo não foi marcado como existente).
- Tipologias/tamanhos informados: térrea pequena, média e grande; sobrado; terreno pequeno e grande `[FATO — CLIENTE]` (quantidade de quartos e presença de piscina **não** foram perguntados neste formulário).
- Estilo: **contemporâneo** (único estilo marcado) `[FATO — CLIENTE]`.
- Faixa de preço imaginada: **R$ 500 a R$ 1.500** por planta `[FATO — CLIENTE]` — estimativa interna, não publicar sem validação.
- Modelo de compra: **automática, com contato posterior** `[FATO — CLIENTE]`.
- Personalização: **pequenos ajustes inclusos** no preço — exemplos: **portas, disposição de mobiliário** `[FATO — CLIENTE]` (Q4).
- Uso da planta pelo comprador (intenção comercial): **1 compra = 1 construção, sem revenda, sem alteração livre** `[FATO — CLIENTE]` (Q3) — a formalizar juridicamente.
- Suporte: **entrega dos arquivos + chat de dúvidas no site** `[FATO — CLIENTE]` (Q5).
- Pagamento: **Pix, cartão e boleto** `[FATO — CLIENTE]` (Q6).

### Pendências antes de comercializar

**Nenhuma destas é `BLOQUEIO DE DISCOVERY`.** São `PENDÊNCIA CONTROLADA` (decisão futura conhecida) ou `BLOQUEIO DE LANÇAMENTO` (impede a venda pública, não o planejamento). Rastreio completo em [`06-open-decisions-register.md`](06-open-decisions-register.md).

| Item | Estado atual | Classificação | Referência |
|---|---|---|---|
| **Pacote de arquivos entregue ao comprador (Q7)** | Mayara **especificará posteriormente**. Já se sabe que existem **PDF, DWG, 3D e renders** = `ARQUIVOS DISPONÍVEIS` — **não** presumir que sejam `ARQUIVOS INCLUÍDOS NA COMPRA` (nada editável está confirmado como entregável) | `[PENDÊNCIA CONTROLADA — DEFINIÇÃO DO PRODUTO]` | OD-003 |
| **Licença / direitos de uso** | Intenção comercial **definida**: uma compra autoriza **uma única construção**, **sem revenda** e **sem alteração livre** pelo comprador. Falta **formalizar em licença/termos juridicamente adequados** | `BLOQUEIO DE LANÇAMENTO` · `[VALIDAR PROFISSIONALMENTE]` | OD-001, OD-006 |
| **Direitos autorais do projeto licenciado** | Sem definição formal — citado pela cliente como uma de suas maiores dúvidas | `BLOQUEIO DE LANÇAMENTO` · `[VALIDAR PROFISSIONALMENTE]` | OD-001, OD-006 |
| **Responsabilidade técnica / RRT** na venda de projeto pronto e/ou adaptação | Sem definição | `BLOQUEIO DE LANÇAMENTO` · `[VALIDAR PROFISSIONALMENTE]` | OD-002 |
| **Limites dos "pequenos ajustes" / revisões (Q4)** | `PARCIALMENTE DEFINIDO`. Confirmado: pequenas mudanças de **portas** e **disposição do mobiliário**. Pendentes: quantidade de solicitações; número de revisões; prazo para solicitar; alterações de medidas; alterações estruturais; mudança de implantação; critério do que **deixa de ser** "pequeno"; preço de mudanças fora do escopo | `[PENDÊNCIA CONTROLADA — DEFINIÇÃO DO PRODUTO]` | OD-004 |
| **Suporte ao comprador (Q5)** | `[FATO — CLIENTE]` — **entrega dos arquivos + chat no site para dúvidas**. Tecnologia/arquitetura do chat ainda não escolhida | `[REQUISITO CANDIDATO]` (tecnologia) | OD-011 |
| **Política de revisão / cancelamento / reembolso (Q8)** | **"A definir"** — decisão futura deliberada. Não criar política aqui | `[PENDÊNCIA CONTROLADA]` · `[VALIDAR PROFISSIONALMENTE]` · `BLOQUEIO DE LANÇAMENTO` | OD-005 |
| **Termos de uso / contrato de licença** do produto digital | A produzir, a partir de OD-001 | `BLOQUEIO DE LANÇAMENTO` · `[VALIDAR PROFISSIONALMENTE]` | OD-006 |
| **Processo de entrega** (download imediato, e-mail, área do cliente) | `["o que" será entregue = OD-003]` × `["como" será entregue = pendência de definição]`. Ainda não definido | `[PENDÊNCIA CONTROLADA]` | OD-003 (relacionado) |
| **Forma de pagamento (Q6)** | `[FATO — CLIENTE]` — **Pix, cartão e boleto**. Só o **gateway/provedor** segue pendente | `[PENDÊNCIA CONTROLADA]` (só o provedor) | OD-010 |
| **Emissão fiscal e enquadramento tributário** do produto digital | Sem definição | `BLOQUEIO DE LANÇAMENTO` · `[VALIDAR PROFISSIONALMENTE]` | OD-007 |
| **Tratamento de dados dos compradores (LGPD)** | Sem definição | `BLOQUEIO DE LANÇAMENTO` · `[VALIDAR PROFISSIONALMENTE]` | OD-008 |

---

## 7. Portfólio e marca

**Pontos fortes (oportunidade):**
- Acervo forte em **quantidade**: mais de 10 projetos divulgáveis, mais de 10 construídos `[FATO — CLIENTE]`.
- Renders bem avaliados pela própria cliente (9/10) `[FATO — CLIENTE]`.

**Lacunas confirmadas (risco):**
- **Ausência de fotografia profissional** de obras concluídas — só fotos de celular `[FATO — CLIENTE]`.
- **Ausência de depoimentos** de clientes `[FATO — CLIENTE]`.
- **Autorização de publicação não formalizada** — bloqueante para publicar qualquer projeto com segurança `[FATO — CLIENTE]` `[VALIDAR PROFISSIONALMENTE]`.
- **Logo sem arquivo vetorial** informado (só PNG/JPG) `[FATO — CLIENTE]`.
- **Identidade visual informal** (cores/tipografia não documentadas formalmente) `[FATO — CLIENTE]`.
- **Domínio próprio inexistente** `[FATO — CLIENTE]`.
- **LinkedIn inexistente** `[FATO — CLIENTE]`.
- **Sem Instagram profissional** — a cliente possui **apenas perfil pessoal** `[FATO — CLIENTE]` (Q2; o campo em branco do formulário foi esclarecido na conversa complementar). Conta profissional é item a **criar** na estratégia digital.

**Confirmado sobre a marca:**
- Nome: **"Mayara Rocha"** (nome pessoal, não nome de escritório) `[FATO — CLIENTE]`.
- Autorizações de portfólio: a cliente **aceita solicitar** autorização formal aos clientes `[FATO — CLIENTE]` (Q9); as autorizações efetivas seguem como **`AÇÃO PENDENTE`** — nenhum projeto específico está autorizado até haver evidência (OD-009).

---

## 8. Marketing

- Orçamento mensal disponível para anúncios: **até R$ 500** `[FATO — CLIENTE]` — baixo; planejamento de mídia deve ser realista para esse teto (poucas campanhas simultâneas, foco em um único objetivo).
- Foco declarado dos anúncios: **venda de plantas** `[FATO — CLIENTE]`.
- Preferência: **não gravar Reels com regularidade** `[FATO — CLIENTE]`. **Não forçar** uma estratégia de conteúdo apoiada em vídeos com a Mayara aparecendo com frequência — respeitar essa preferência explícita.
- Interesse em IA no marketing: **4 de 5** na escala `[FATO — CLIENTE]`, com uso condicionado a anonimização de projetos sensíveis.
- Vídeos de "passeio" pelo imóvel (câmera/drone): interesse **"talvez"** `[FATO — CLIENTE]` — não é um "sim" forte; não tratar como compromisso de produção.
- Necessidade de anonimização de **vários** projetos antes de qualquer uso (IA ou não) `[FATO — CLIENTE]`.

**Leitura combinada:** o caminho de conteúdo mais alinhado às respostas da própria cliente é um que se apoie em **renders e material 3D existente** (nota 9/10, já produzido) e em **produto (plantas)**, e não em aparições pessoais recorrentes da Mayara em vídeo.

---

## 9. Riscos atualizados

Cada risco classificado como **`ATIVO`** (risco de Discovery/projeto a monitorar agora), **`BLOQUEIO DE LANÇAMENTO`** (não impede planejamento; impede a venda pública), **`PENDÊNCIA CONTROLADA`** (decisão futura conhecida) ou **`RESOLVIDO`** (deixou de ser risco após esclarecimento).

| Risco | Severidade | Classificação | Evidência / atualização |
|---|---|---|---|
| Formalização jurídica da licença/direitos de uso da planta | ALTO | `BLOQUEIO DE LANÇAMENTO` | Reformulado a partir do antigo "uso livre indefinido" → agora **"intenção de uso definida, mas ainda sem formalização jurídica/licença"**: cliente definiu 1 compra = 1 construção, sem revenda, sem alteração livre (seção 12, Q3). `[VALIDAR PROFISSIONALMENTE]` — OD-001, OD-006 |
| Responsabilidade técnica / RRT na venda de projeto pronto | ALTO | `BLOQUEIO DE LANÇAMENTO` | Sem definição. `[VALIDAR PROFISSIONALMENTE]` — OD-002 |
| Autorizações de publicação do portfólio ainda não obtidas | ALTO | `PENDÊNCIA CONTROLADA` | Cliente **aceita solicitar** (Q9), mas nada foi obtido — `AÇÃO PENDENTE`. Nenhum projeto específico pode ser publicado até haver evidência — OD-009 |
| Falta de prova social — sem fotos profissionais e sem depoimentos | ALTO | `ATIVO` | `[FATO — CLIENTE]` nos dois itens. Lacuna real de portfólio a endereçar antes do lançamento |
| Capacidade operacional de apenas 1–2 projetos simultâneos frente a metas de leads maiores | ALTO | `ATIVO` | Ver gargalo na seção 4 — decidir se o tráfego mira produto (plantas) ou serviço (limitado pela capacidade) |
| "Pequenos ajustes inclusos" sem limite definido → carga operacional não remunerada | MÉDIO | `PENDÊNCIA CONTROLADA` | Exemplos confirmados (portas, mobiliário); limites comerciais pendentes — OD-004 |
| Proteção dos arquivos digitais vendidos contra cópia/redistribuição | MÉDIO | `BLOQUEIO DE LANÇAMENTO` | A regra comercial existe ("sem revenda / 1 construção"), mas **sem controle técnico** definido; depende também do pacote entregue — OD-003 |
| Emissão fiscal / enquadramento tributário do produto digital | MÉDIO | `BLOQUEIO DE LANÇAMENTO` | Sem definição. `[VALIDAR PROFISSIONALMENTE]` — OD-007 |
| LGPD / dados dos compradores (checkout e chat) | MÉDIO | `BLOQUEIO DE LANÇAMENTO` | Sem definição. `[VALIDAR PROFISSIONALMENTE]` — OD-008 |
| Ausência de domínio próprio | MÉDIO | `ATIVO` | `[FATO — CLIENTE]` — trava publicação e e-mail profissional; resolvível rapidamente |
| Orçamento de mídia limitado (até R$ 500/mês) frente às metas | MÉDIO | `ATIVO` | `[FATO — CLIENTE]` — exige foco em um único objetivo de campanha por vez |
| Pacote de arquivos entregue ao comprador ainda não especificado (Q7) | BAIXO (Discovery) / MÉDIO (lançamento) | `PENDÊNCIA CONTROLADA` | Decisão futura deliberada da cliente — OD-003. Não é falha de Discovery |
| Política de revisão/cancelamento/reembolso "a definir" (Q8) | BAIXO (Discovery) / ALTO (lançamento) | `PENDÊNCIA CONTROLADA` + `BLOQUEIO DE LANÇAMENTO` | `[VALIDAR PROFISSIONALMENTE]` — OD-005. Não bloqueia planejamento |
| Correção da ramificação condicional do Google Forms | BAIXO | `PENDÊNCIA CONTROLADA` (técnica) | Não altera o entendimento do negócio — OD-012 |
| ~~Métrica de sucesso desalinhada (seguidores/alcance × vendas)~~ | — | `RESOLVIDO POR ESCLARECIMENTO DA CLIENTE — 08/09/2026` | KPIs primários passam a ser **plantas vendidas + faturamento**; seguidores/alcance são secundários (seção 2.1 e seção 12, Q10). **Não é mais risco ativo.** |
| ~~Ausência/incógnita sobre Instagram profissional~~ | — | `RESOLVIDO POR ESCLARECIMENTO DA CLIENTE — 08/09/2026` | Esclarecido: **não possui** conta profissional (Q2). Deixa de ser incógnita; vira item de estratégia, não risco |

---

## 10. Oportunidades atualizadas

- **Catálogo contemporâneo com mais de 10 produtos** já é uma base real (não hipotética) para lançar a loja de plantas — maior do que o Discovery inicial sugeria.
- **Upsell de personalização:** "pequenos ajustes inclusos" já é uma porta de entrada natural para venda de ajustes maiores, fachada personalizada, 3D personalizado — falta só formalizar como oferta.
- **Design de interiores como upsell de maior valor:** já é o serviço mais rentável e mais desejado por ela — pode ser oferecido a quem compra uma planta ou fecha um projeto arquitetônico.
- **Projeto arquitetônico como serviço de demanda comprovada** — mantém relevância mesmo com o site priorizando o produto digital.
- **Uso de renders de alta qualidade (9/10)** como argumento de venda tanto do catálogo de plantas quanto do portfólio de serviços — ativo já existente, não a construir do zero.
- **SEO futuro para páginas individuais de cada planta** (ex.: "planta sobrado 3 quartos contemporânea") — viável justamente porque o catálogo já tem volume (>10) e categorização por tamanho/tipologia.
- **Anúncios direcionados a produtos específicos** (uma planta ou uma faixa de preço) em vez de campanha genérica — mais compatível com orçamento de R$ 500/mês do que uma campanha ampla de marca.
- **Conteúdo sem necessidade de a Mayara aparecer em vídeo:** renders, plantas, antes/depois de obras construídas e (eventualmente) vídeos de passeio 3D sustentam uma estratégia de conteúdo inteira sem depender de Reels pessoais recorrentes, respeitando a preferência dela.

---

## 11. Pendências para conversa curta — status após respostas complementares

A conversa complementar foi realizada. Situação de cada ponto (respostas detalhadas na seção 12):

| # | Pergunta | Status |
|---|---|---|
| 1 | Cidade/região exata de atuação | **RESPONDIDA** — Leme, SP |
| 2 | Instagram profissional | **RESPONDIDA** — não possui (apenas pessoal) |
| 3 | O que o comprador pode fazer com a planta | **RESPONDIDA (intenção comercial)** — sem alteração livre, sem revenda, 1 compra = 1 construção; falta formalizar em licença/termos (`[VALIDAR PROFISSIONALMENTE]`) |
| 4 | Limites dos "pequenos ajustes" | **PARCIALMENTE DEFINIDA** — exemplos dados (portas, disposição de mobiliário); limites comerciais = `[PENDÊNCIA CONTROLADA]` (OD-004) |
| 5 | Como funciona o suporte ao comprador | **RESPONDIDA** — entrega dos arquivos + chat de dúvidas no site (`[REQUISITO CANDIDATO]`, OD-011) |
| 6 | Formas de pagamento | **RESPONDIDA** — Pix, cartão e boleto (OD-010) |
| 7 | Quais arquivos exatos o comprador recebe | **DELIBERADAMENTE ADIADA** — `[PENDÊNCIA CONTROLADA]` (OD-003); não bloqueia a ETAPA 02 |
| 8 | Política de revisão/cancelamento/reembolso | **DELIBERADAMENTE ADIADA** — `[PENDÊNCIA CONTROLADA]` + `[VALIDAR PROFISSIONALMENTE]` (OD-005); `BLOQUEIO DE LANÇAMENTO` |
| 9 | Formalizar autorização de publicação do portfólio | **RESPONDIDA (disposição)** — aceita solicitar; status das autorizações = `AÇÃO PENDENTE` (OD-009) |
| 10 | Métrica principal do negócio | **RESPONDIDA** — plantas vendidas + faturamento com plantas (primários); seguidores/alcance (secundários) |

Nenhum item da lista permanece como **`BLOQUEIO DE DISCOVERY`**. Os itens 7 e 8 seguem abertos por decisão consciente da cliente, classificados como pendências controladas / bloqueio de lançamento — **não** como falhas de Discovery.

---

## Gate de encerramento da ETAPA 01 — reavaliação (08/09/2026)

> Não confundir **"Discovery encerrado"** com **"Loja pronta para lançamento"**. O Gate abaixo mede apenas se conhecemos o negócio o suficiente para avançar para a **ETAPA 02 — Público-alvo**.

| Área | Status | Pode avançar? | Pendências |
|---|---|---|---|
| Negócio e objetivo | **PRONTO** | Sim | — (objetivo nº 1: vender plantas; KPIs esclarecidos na seção 12) |
| Público inicial | **PRONTO** | Sim | Detalhar quartos/piscina do catálogo é refinamento de produto, não de público |
| Oferta (serviços + produto) | **PRONTO COM PENDÊNCIAS CONTROLADAS** | Sim | Esclarecer se "plantas sob medida" está embutida em "projeto arquitetônico" (seção 2.3) |
| Região | **PRONTO** | Sim | Leme, SP (seção 12) — não ampliar sem decisão |
| Catálogo de plantas | **PRONTO COM PENDÊNCIAS CONTROLADAS** | Sim | Pacote de arquivos entregue (OD-003) e limites dos ajustes (OD-004) — decisões futuras da Mayara |
| Intenção de uso / licenciamento | **PRONTO COM PENDÊNCIAS CONTROLADAS** | Sim | Intenção definida (1 compra = 1 construção, sem revenda, sem alteração livre); falta formalizar em licença/termos (OD-001/OD-006) — `BLOQUEIO DE LANÇAMENTO` |
| Suporte desejado | **PRONTO** | Sim | Entrega de arquivos + chat de dúvidas (`[REQUISITO CANDIDATO]`, OD-011) |
| Pagamentos desejados | **PRONTO** | Sim | Pix, cartão e boleto; escolha de gateway = OD-010 (`PENDÊNCIA CONTROLADA`) |
| KPIs | **PRONTO** | Sim | Primários: plantas vendidas + faturamento; secundários: alcance/seguidores |
| Portfólio | **PRONTO COM PENDÊNCIAS CONTROLADAS** | Sim | Sem fotos profissionais/depoimentos; autorizações = `AÇÃO PENDENTE` (OD-009) |
| Marca | **PRONTO COM PENDÊNCIAS CONTROLADAS** | Sim | Nome definido (Mayara Rocha); identidade informal, sem domínio — resolvível em paralelo |
| Marketing | **PRONTO** | Sim | Orçamento (até R$ 500/mês), foco (venda de plantas) e preferências (sem Reels recorrentes) definidos |
| Riscos | **PRONTO** | Sim | Mapeados e reclassificados (seção 9); nenhum é `BLOQUEIO DE DISCOVERY` |
| Decisões futuras (Q7, Q8) | **PRONTO COM PENDÊNCIAS CONTROLADAS** | Sim | Q7 (arquivos entregues) e Q8 (revisão/reembolso) adiadas por decisão consciente da cliente — não bloqueiam a ETAPA 02 |
| Aspectos profissionais/jurídicos (lançamento) | **BLOQUEIO DE LANÇAMENTO** (não de Discovery) | Sim, para planejamento | RRT, licença/termos, reembolso, fiscal, LGPD — registrados no `06-open-decisions-register.md`; resolver antes da venda pública |

### Conclusão

**A) A ETAPA 01 — Discovery do Negócio pode ser encerrada — status: `CONCLUÍDA`.** O Discovery reúne informação suficiente sobre negócio, objetivo, oferta, público inicial, região, catálogo, intenção de uso/licenciamento, suporte desejado, pagamentos, KPIs, riscos e decisões futuras para avançar para a **ETAPA 02 — Público-alvo** (não iniciada nesta execução). Vale o princípio: **Discovery concluído ≠ loja pronta para lançamento.**

As questões **Q7 (pacote de arquivos entregue)** e **Q8 (revisão/cancelamento/reembolso)** permanecem abertas **por decisão deliberada da cliente**. Elas são **pendências controladas** e **não** são bloqueios de Discovery. Q8, em particular, permanece como **`BLOQUEIO DE LANÇAMENTO`** até ser definida e validada.

O detalhe do encerramento formal está em [`07-stage-01-closure.md`](07-stage-01-closure.md); o rastreio das decisões abertas, em [`06-open-decisions-register.md`](06-open-decisions-register.md).

> **AVISO OBRIGATÓRIO.** O encerramento da ETAPA 01 significa que o Discovery possui informação suficiente para avançar para Público-alvo. **Não** significa que a loja esteja autorizada ou pronta para lançamento. Licença/termos, responsabilidade técnica, reembolso, fiscal, LGPD e demais bloqueios de lançamento deverão ser resolvidos antes da comercialização pública.

---

## 12. Respostas complementares e resolução do Gate

Consolidação das respostas complementares da Mayara (conversa complementar; registradas neste documento em **08/09/2026**). Novas respostas prevalecem sobre hipóteses anteriores; as respostas históricas contraditórias são **preservadas** nas seções acima com nota de esclarecimento.

### Q1 — Região de atendimento

```
[FATO — CLIENTE]
Atendimento presencial atual: Leme, SP.
```

Não ampliar automaticamente para outras cidades. Atendimento remoto segue existindo "com algumas limitações" (formulário).

### Q2 — Instagram profissional

```
[FATO — CLIENTE]
Mayara ainda não possui Instagram profissional (apenas perfil pessoal).
```

Insumo para a futura estratégia de presença digital: a conta profissional é um item **a criar**, não uma base existente.

### Q3 — Uso permitido da planta comprada  *(esta resposta SUBSTITUI a interpretação anterior de que a Q3 estava "sem resposta")*

```
[FATO — CLIENTE / INTENÇÃO COMERCIAL]
- O comprador não poderá alterar livremente a planta adquirida.
- O comprador não poderá revender a planta.
- A mesma aquisição não autoriza múltiplas construções.
- A intenção é vincular a compra a uma única execução/construção.
```

```
[VALIDAR PROFISSIONALMENTE]
A intenção comercial acima deverá ser convertida posteriormente em termos/licença
juridicamente adequados antes do lançamento.
```

A expressão anterior **"uso livre para o comprador"** fica **`ESCLARECIDA / SUPERADA POR RESPOSTA COMPLEMENTAR DE 08/09/2026`** e **não** permanece como regra atual do negócio (ver seção 2.2 e a linha atualizada na matriz da seção 3). Classificação da pendência restante: **`BLOQUEIO DE LANÇAMENTO`** + `[VALIDAR PROFISSIONALMENTE]`, **não** `BLOQUEIO DE DISCOVERY` (OD-001, OD-006).

**Distinção importante:** proibir o comprador de **alterar livremente** a planta **não** conflita com a Q4. A Q4 trata de ajustes **solicitados à própria Mayara**, dentro do serviço previsto na compra:

```
O comprador não altera/reutiliza/revende livremente o projeto.
Pequenos ajustes poderão ser solicitados à Mayara dentro das regras do produto.
```

Os limites desses ajustes ainda serão detalhados.

### Q4 — Pequenos ajustes

```
[FATO — CLIENTE]
Exemplos de pequenos ajustes: alterações pontuais de portas e disposição do mobiliário.
```

```
[PENDÊNCIA CONTROLADA — DEFINIÇÃO DO PRODUTO]
Ainda a definir: quantidade máxima de solicitações; número de revisões; prazo para
solicitar; alterações de medidas; alterações estruturais; mudança de implantação;
o que deixa de ser "pequeno"; preço de mudanças fora do escopo.
```

### Q5 — Suporte pós-compra

```
[FATO — CLIENTE]
Suporte desejado: entrega dos arquivos + canal de chat no site para esclarecimento de dúvidas.
```

```
[REQUISITO CANDIDATO]
Canal de chat de dúvidas dentro do site (pós-compra).
```

Não escolher biblioteca, SaaS, chatbot, IA ou arquitetura técnica nesta etapa.

### Q6 — Pagamentos

```
[FATO — CLIENTE]
Meios de pagamento desejados: Pix, cartão e boleto.
```

Não escolher gateway/provedor nesta etapa (OD-010).

### Q7 — Arquivos entregues *(decisão futura, aceita deliberadamente)*

```
[PENDÊNCIA CONTROLADA — DEFINIÇÃO DO PRODUTO]
O pacote exato de arquivos entregue ao comprador será especificado posteriormente pela Mayara.
```

Mayara informou possuir **PDF, DWG, arquivos 3D e renders** — isso significa **`ARQUIVOS DISPONÍVEIS`**, e **não** `ARQUIVOS INCLUÍDOS NA COMPRA`. Não presumir que DWG, 3D ou qualquer arquivo editável será entregue.

**Momento limite:** não bloqueia ETAPA 02, Personas, Posicionamento ou UX inicial. Deve estar resolvido antes de: fechar o conteúdo definitivo da página do produto; implementar a entrega/download definitiva; redigir termos comerciais finais; disponibilizar a venda em produção.

### Q8 — Revisões, cancelamentos e reembolso *(decisão futura, aceita deliberadamente)*

```
[PENDÊNCIA CONTROLADA]
Política comercial de revisões/cancelamentos/reembolso ainda será definida.
```

```
[VALIDAR PROFISSIONALMENTE]
Quando definida, revisar juridicamente (direito de arrependimento / CDC / produto digital).
```

**Momento limite:** não bloqueia a continuidade das próximas etapas de planejamento. É um **`BLOQUEIO DE LANÇAMENTO`** e deverá estar resolvido/validado antes de disponibilizar checkout e venda pública.

### Q9 — Autorizações do portfólio

```
[FATO — CLIENTE]
Mayara concorda em buscar autorização formal para publicação de projetos.
```

Status das autorizações: **`AÇÃO PENDENTE`**. Nenhum projeto específico é considerado autorizado até existir evidência (OD-009).

### Q10 — Métricas comerciais

```
[FATO — CLIENTE]
KPIs comerciais primários:
1. quantidade de plantas vendidas;
2. faturamento com a venda de plantas.

KPIs secundários de awareness:
- alcance;
- seguidores.
```

O desalinhamento identificado na seção 2.1 fica **`RESOLVIDO POR ESCLARECIMENTO DA CLIENTE — 08/09/2026`** e **não** permanece como risco ativo na seção 9. A resposta anterior ("seguidores e alcance" como métrica mais importante) é preservada apenas como `HISTÓRICO`.

---

## Histórico de execuções sobre este documento

- **08/09/2026 — Consolidação (PROMPT 04):** criada a seção 12 (respostas complementares Q1–Q10), notas de resolução nas seções 2.1/2.2, Gate reavaliado. Criados `06-open-decisions-register.md` e `07-stage-01-closure.md`.
- **08/09/2026 — Saneamento documental (PROMPT 05):** reconciliação de todo o documento com a seção 12. Removidas as ocorrências de `[AGUARDANDO RESPOSTA]` que não eram mais o estado atual; "uso livre" marcado como `SUPERADA` em todos os trechos; risco de "métrica desalinhada" e incógnita de Instagram movidos para `RESOLVIDO`; seção 6 ("Pendências antes de comercializar") reclassificada item a item (`PENDÊNCIA CONTROLADA` × `BLOQUEIO DE LANÇAMENTO`); matriz da seção 3 completada (região, Instagram, suporte, pagamentos, autorizações, Q4, Q7, Q8); seção 9 ganhou coluna de classificação. Sem alteração em `06` e `07`.

Sugestão de commit (não executada nesta etapa de escrita):

```text
docs: reconcile final discovery findings
```
