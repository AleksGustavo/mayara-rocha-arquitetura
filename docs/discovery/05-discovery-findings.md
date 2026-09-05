# 05 — Consolidação do Discovery (achados confirmados)

**Projeto:** Mayara Rocha Arquitetura — Website e Ecossistema Digital
**Etapa:** ETAPA 01 — Discovery do Negócio
**Fonte primária:** 1 resposta real da Mayara ao Google Forms gerado por [`create-discovery-form.gs`](../../scripts/google-forms/create-discovery-form.gs), recebida em **04/09/2026, 10:33 (GMT-3)**.
**Fontes de apoio (lidas integralmente, não alteradas):** [`01-business-discovery.md`](01-business-discovery.md) · [`02-interview-guide.md`](02-interview-guide.md) · [`03-client-questionnaire.md`](03-client-questionnaire.md)

> Este documento **substitui hipóteses por respostas confirmadas** sempre que há evidência no CSV. Onde não há evidência, a pendência permanece aberta — nada foi inventado.

## Convenção de marcação

| Marcação | Significado |
|---|---|
| `[FATO — CLIENTE]` | Resposta direta da Mayara no formulário (evidência primária desta consolidação). |
| `[FATO]` | Já vinha confirmado na conversa inicial (`01-business-discovery.md`). |
| `[AGUARDANDO RESPOSTA DA CLIENTE]` | Segue sem resposta. |
| `[VALIDAR PROFISSIONALMENTE]` | Tema legal/regulatório/fiscal — resposta da cliente é ponto de partida, não decisão jurídica. |
| `[PONTO DE ALINHAMENTO]` | Duas respostas da própria cliente entram em tensão entre si; não foi alterado nada, só sinalizado. |

### Nota técnica sobre a coleta (não é achado de negócio)

A cliente respondeu **"Sim, já no lançamento"** em "pretende comercializar plantas prontas?" — o que deveria abrir a Seção 8A (detalhada) e **pular** a 8B (resumida). No CSV, porém, aparecem respostas preenchidas **tanto na 8A quanto na 8B** (`FORM-Q46` e `FORM-Q47`). Isso indica que a navegação condicional do formulário **não pulou a Seção 8B** para esta resposta — provável falha na configuração de `setGoToPage`/`setChoices` do script, a revisar antes de enviar o formulário para outra pessoa. Não há prejuízo aqui: todas as respostas foram usadas nesta consolidação (a cliente só respondeu 2 perguntas a mais do que o previsto). Ação recomendada: abrir uma tarefa técnica separada para auditar a ramificação do `.gs` antes de reutilizar o formulário.

---

## 1. Resumo executivo

Mayara Rocha atua **entre 5 e 10 anos** como arquiteta e urbanista `[FATO — CLIENTE]`, com **registro ativo no CAU** `[FATO — CLIENTE]`. Atende hoje **presencialmente na própria cidade/região** e aceita projetos remotos **"com algumas limitações"** `[FATO — CLIENTE]` — ou seja, atendimento remoto existe, mas não é irrestrito nem nacional como o ecossistema digital planejado sugeria.

Ela define seu diferencial como **"projetos criativos e diferenciados, adaptados à necessidade do cliente, sem perder estética e funcionalidade"** `[FATO — CLIENTE]` — frase literal da resposta, candidata a insumo de copy.

Hoje, **projeto arquitetônico é o serviço mais procurado**, enquanto **design de interiores é, ao mesmo tempo, o mais rentável e o que ela mais gosta de fazer** `[FATO — CLIENTE]` — uma divergência estratégica relevante (ver seção 5). A capacidade atual é de **apenas 1 a 2 projetos simultâneos** `[FATO — CLIENTE]`, com honorários hoje **predominantemente até R$ 5 mil** e uma meta de ticket médio de **até R$ 10 mil** `[FATO — CLIENTE]` — meta de dobrar o ticket, não de multiplicá-lo.

O público que ela quer atrair nos próximos anos é **"pessoas construindo ou comprando o imóvel próprio"** `[FATO — CLIENTE]`, priorizando casa térrea, sobrado, apartamento/reforma, e padrão médio/alto em construção nova — **sem** foco declarado em comércio, reforma avulsa ou clientes B2B (investidores/construtoras) `[FATO — CLIENTE]`.

Em portfólio, o volume é forte — **mais de 10 projetos divulgáveis e mais de 10 já construídos** `[FATO — CLIENTE]` — mas a formalização é fraca: **sem fotos profissionais** (só fotos de celular), **sem depoimentos** e **sem autorização de publicação formalizada** `[FATO — CLIENTE]`. A marca usa o **nome pessoal "Mayara Rocha"**, com **logo apenas em imagem** (sem vetor) e **identidade visual informal** `[FATO — CLIENTE]`; **não há domínio registrado** e **não há LinkedIn** `[FATO — CLIENTE]`; Instagram profissional **não foi informado** (campo deixado em branco). Ela prefere **não gravar Reels com regularidade** `[FATO — CLIENTE]`.

O **objetivo número 1 do site é vender plantas prontas**, com **CTA principal "comprar uma planta"** `[FATO — CLIENTE]` — a venda deve começar **já no lançamento**. O catálogo é maior do que o Discovery inicial sugeria: **mais de 10 plantas**, mas **ainda exigindo pequenos ajustes**, com arquivos em **PDF, DWG, 3D e renders**, todas em **estilo contemporâneo** `[FATO — CLIENTE]`. O preço imaginado é **R$ 500 a R$ 1.500** por planta, com **compra automática seguida de contato posterior**, aceitando **pequenos ajustes inclusos** `[FATO — CLIENTE]`. As maiores dúvidas dela mesma sobre esse modelo são **preço, direitos autorais e suporte ao comprador** `[FATO — CLIENTE]` — ou seja, a própria cliente reconhece que o modelo comercial ainda não está fechado.

Ela avalia a qualidade dos próprios renders em **9 de 10** `[FATO — CLIENTE]`, reforçando o 3D como diferencial real (não apenas hipótese). Sobre IA, o interesse é alto (**4 de 5**), mas a **autorização de uso dos projetos em ferramentas de IA é condicionada a anonimização** `[FATO — CLIENTE]` — e ela mesma identifica que **vários projetos precisam ser anonimizados** antes de qualquer uso `[FATO — CLIENTE]`.

Em marketing, o orçamento inicial para anúncios é **baixo (até R$ 500/mês)**, com foco declarado em **venda de plantas** `[FATO — CLIENTE]` — mas, como aponta a seção 2, a métrica que ela escolheu como mais importante foi **"seguidores e alcance"**, que não mede vendas diretamente. As metas de volume são de **6 a 15 contatos/mês** e **1 a 2 novos projetos/mês** `[FATO — CLIENTE]` — esta última compatível com a capacidade de atendimento declarada.

---

## 2. Não silencie inconsistências

### 2.1 Objetivo de negócio × métrica escolhida `[PONTO DE ALINHAMENTO]`

- Objetivo nº 1 do site: **vender plantas prontas** `[FATO — CLIENTE]`
- Objetivo principal dos anúncios: **vendas de plantas** `[FATO — CLIENTE]`
- Métrica mais importante escolhida: **"seguidores e alcance"** `[FATO — CLIENTE]`

**Por que isso é uma tensão:** seguidores e alcance são métricas de *awareness* (topo de funil) — crescem mesmo que ninguém compre nada. Se o objetivo real é vender plantas, as métricas primárias deveriam ser algo como: número de vendas, taxa de conversão do catálogo, receita gerada, leads qualificados para orçamento, ou custo de aquisição por venda. Alcance e seguidores podem continuar como métrica **secundária** (saúde da marca), mas não deveriam ser a régua principal de sucesso de um site com objetivo comercial declarado.

**Ação:** não alteramos a resposta da cliente. Este ponto entra na lista de "Pendências para conversa curta" (seção 11) para alinhamento direto com ela.

### 2.2 Venda automática × "uso livre" × responsabilidade técnica indefinida `[VALIDAR PROFISSIONALMENTE]`

Três respostas da própria cliente, colocadas lado a lado, geram tensão:

- Modelo de compra: **"automática, com contato depois"** `[FATO — CLIENTE]` — ou seja, a venda acontece **antes** de qualquer conversa.
- Direitos de uso: **"uso livre para o comprador"** `[FATO — CLIENTE]` — sem restrição declarada de quantas vezes a planta pode ser construída, revendida, etc.
- Responsabilidade técnica / RRT / direitos autorais na venda de projeto pronto: segue **sem definição formal** — a própria cliente listou "direitos autorais" como uma de suas maiores dúvidas (Bloco de plantas, pergunta "resumido").

**Por que isso é uma tensão:** vender de forma 100% automática, com "uso livre", sem ter resolvido responsabilidade técnica e direitos autorais, é o cenário de maior exposição jurídica possível (venda sem controle de quem compra, sem limite de uso, sem cláusula de responsabilidade). Isso não significa que o modelo esteja errado — significa que **precisa de validação profissional antes do lançamento**, não depois.

**Ação:** marcado `[VALIDAR PROFISSIONALMENTE]`. Nenhuma resposta foi alterada; ver seção 6 ("Pendências antes de comercializar").

### 2.3 Outras tensões observadas (menores, não bloqueantes)

- **Serviço "plantas sob medida" não marcado como oferecido hoje** `[PONTO DE ALINHAMENTO]`: o Discovery inicial (`01-business-discovery.md`) registrava "criação de plantas" como algo que a Mayara já exerce `[FATO]` (vindo da conversa inicial). No formulário, ao listar os serviços que oferece hoje, ela **não marcou "Plantas sob medida"** — marcou projeto arquitetônico, interiores, fachadas, 3D interno/externo, renderização, personalização e consultoria. Pode ser que "plantas" esteja embutida em "projeto arquitetônico" e não tenha sido percebida como item separado no formulário, ou pode indicar que ela não oferece mais "planta sob medida" como serviço avulso. Registrado como pendência de esclarecimento, não como fato alterado.
- **"Contato" não marcado como seção obrigatória do site**, apesar de WhatsApp ser hoje um canal relevante de aquisição (`FATO — CLIENTE`, ver seção 4). As seções marcadas como obrigatórias foram: Portfólio, Serviços, Loja de plantas e Preços — sem Sobre mim, Depoimentos, FAQ, Blog **ou Contato**. Pode ser omissão involuntária (ela pode considerar contato "óbvio"); vale confirmar antes de fechar a arquitetura do site.
- **Foco em "alto padrão" e "médio padrão" simultaneamente** com um ticket médio desejado de até R$ 10 mil — valor mais alinhado a médio padrão. Não é uma contradição forte, só um ponto a observar ao definir posicionamento único (não é obrigatório escolher apenas um).

---

## 3. Matriz de validação

| Tema | Hipótese anterior | Resposta da cliente | Resultado | Impacto |
|---|---|---|---|---|
| Registro no CAU | `[AGUARDANDO RESPOSTA]` | Sim, ativo | VALIDADA | Pode ser comunicado no site; ainda assim, venda de plantas exige validação de RRT à parte |
| Região de atuação | Hipótese de alcance amplo (ecossistema nacional) | "Minha cidade e região" | PARCIALMENTE VALIDADA | Site/SEO local devem ser priorizados sobre alcance nacional imediato |
| Atendimento remoto | `[AGUARDANDO RESPOSTA]` | "Sim, com algumas limitações" | PARCIALMENTE VALIDADA | Comunicar remoto como possibilidade, não como promessa irrestrita |
| Serviço mais procurado | Não definido | Projeto arquitetônico | VALIDADA | Serviço de maior demanda, mas não o mais rentável (ver linha abaixo) |
| Serviço mais rentável / preferido | Não definido | Design de interiores (ambos) | VALIDADA | Candidato a destaque/upsell — ver seção 5 |
| "Plantas sob medida" como serviço atual | `[FATO]` (conversa inicial) | Não marcada na lista de serviços oferecidos hoje | PARCIALMENTE VALIDADA | Esclarecer se está embutida em "projeto arquitetônico" — ver seção 2.3 |
| Capacidade de atendimento simultâneo | `[AGUARDANDO RESPOSTA]` | 1 a 2 projetos | VALIDADA | Limita a meta de leads/mês; gerar demanda além disso cria fila |
| Faixa de honorário atual | `[AGUARDANDO RESPOSTA]` | Até R$ 5 mil | VALIDADA | Ticket de entrada baixo; meta de R$ 10 mil representa ~2x |
| Ticket médio desejado | `[AGUARDANDO RESPOSTA]` | Até R$ 10 mil | VALIDADA | Meta moderada, realista frente ao ticket atual |
| Cliente ideal / público desejado | Hipótese ampla (residências, B2B, investidores) | "Pessoas construindo ou comprando o imóvel próprio" | VALIDADA | Foco em pessoa física, não B2B — reduz escopo do site |
| Tipos de projeto a priorizar | Hipótese ampla | Térrea, sobrado, apto/reforma, alto e médio padrão, construção nova | PARCIALMENTE VALIDADA | Comércio, reforma avulsa e B2B ficam fora do foco atual |
| Projetos divulgáveis / construídos | Risco: "falta de material de portfólio" | Mais de 10 divulgáveis, mais de 10 construídos | REFUTADA (quanto a volume) | Quantidade não é o problema — qualidade/formalização é (ver linhas abaixo) |
| Fotografias profissionais | Risco hipotetizado | "Não, só fotos de celular" | VALIDADA (risco confirmado) | Priorizar sessão de fotos antes do lançamento do portfólio |
| Depoimentos de clientes | Risco hipotetizado | "Não tenho" | VALIDADA (risco confirmado) | Sem prova social pronta; não inventar depoimentos |
| Autorização de publicação | Risco hipotetizado (alto) | "Não tenho isso formalizado" | VALIDADA (risco confirmado) | Bloqueante para publicar qualquer projeto — `[VALIDAR PROFISSIONALMENTE]` |
| Nome pessoal x nome de escritório | `[AGUARDANDO RESPOSTA]` | "Meu nome (Mayara Rocha)" | VALIDADA | Define domínio, e-mail, redes e todo material com o nome pessoal |
| Logotipo | `[AGUARDANDO RESPOSTA]` | Só em imagem (PNG/JPG), sem vetor | PARCIALMENTE VALIDADA | Recriar em vetor antes de aplicar em materiais grandes/impressos |
| Identidade visual (cores/tipografia) | `[AGUARDANDO RESPOSTA]` | Definida de forma informal | PARCIALMENTE VALIDADA | ETAPA de marca ainda necessária, mas não do zero absoluto |
| Domínio próprio | `[AGUARDANDO RESPOSTA]` | Não tem | VALIDADA (pendência confirmada) | Registrar domínio é tarefa de curto prazo |
| LinkedIn como canal B2B ativo | Hipótese de canal já em uso | "Não tenho" | REFUTADA | Estratégia de LinkedIn parte do zero, não de uma base existente |
| Instagram profissional | `[AGUARDANDO RESPOSTA]` | Não informado (campo em branco) | AINDA PENDENTE | Confirmar existência e @ antes de planejar conteúdo/tráfego |
| Aparecer em vídeo / Reels | Hipótese de alta disposição para conteúdo em vídeo | "Prefiro não" gravar Reels com regularidade | PARCIALMENTE VALIDADA | Estratégia de conteúdo não pode depender de Reels pessoais recorrentes |
| Objetivo nº 1 do site | Múltiplas hipóteses (portfólio, leads, venda) | Vender plantas prontas | VALIDADA | Define prioridade de UX e conteúdo nas próximas etapas |
| CTA principal | `[AGUARDANDO RESPOSTA]` | Comprar uma planta | VALIDADA | CTA primário do site inteiro |
| Venda de plantas: lançamento x fase 2 | Pendência crítica (K4) | "Sim, já no lançamento" | VALIDADA | Ver tensão jurídica/operacional na seção 2.2 e 6 |
| Quantidade de plantas prontas | `[FATO]` vago ("algumas") | Mais de 10 | ATUALIZAÇÃO DE FATO | Catálogo maior do que o Discovery inicial sugeria |
| Estado das plantas | `[AGUARDANDO RESPOSTA]` | Precisam de pequenos ajustes | VALIDADA | Não estão 100% prontas — planejar tempo de preparação |
| Arquivos existentes | `[AGUARDANDO RESPOSTA]` | PDF, DWG, 3D, renders | VALIDADA | Bom nível de detalhamento técnico já disponível |
| Categorização por quartos/piscina | Hipótese do briefing original | Não perguntado/respondido neste formulário (só tamanho/tipologia) | AINDA PENDENTE | Completar na conversa curta antes de estruturar filtros do catálogo |
| Estilo do catálogo | Hipótese de múltiplos estilos | Só contemporâneo | PARCIALMENTE VALIDADA | Catálogo é mono-estilo por ora; simplifica filtros do catálogo |
| Personalização pós-venda | Hipótese de upsell estruturado (fachada, 3D, interiores) | "Pequenos ajustes inclusos" | PARCIALMENTE VALIDADA | Upsell explícito de fachada/3D/interiores ainda não confirmado como oferta formal |
| Preço da planta | `[AGUARDANDO RESPOSTA]` | R$ 500 a R$ 1.500 | VALIDADA (estimativa interna) | Não publicar sem validação final |
| Modelo de compra | Hipótese "automática ou com contato" | "Automática, com contato depois" | VALIDADA | Modelo híbrido — ver tensão jurídica na seção 2.2 |
| Direitos de uso da planta | Pendência crítica/legal | "Uso livre para o comprador" | PARCIALMENTE VALIDADA / `[VALIDAR PROFISSIONALMENTE]` | Preferência inicial da cliente, não decisão jurídica válida |
| Qualidade dos renders | Hipótese "diferencial forte" | Nota 9/10 (autoavaliação) | VALIDADA | Reforça 3D como eixo central de comunicação |
| Vídeos de passeio 3D | Oportunidade hipotetizada | "Talvez" | PARCIALMENTE VALIDADA | Interesse existe, mas sem compromisso de produção regular |
| Interesse em IA no marketing | Hipótese de uso de IA no processo | 4 de 5 | VALIDADA COM CONDIÇÃO | Uso de IA avança, mas depende de anonimização (linha abaixo) |
| Necessidade de anonimização | Pendência (Bloco L) | "Sim, vários" projetos | VALIDADA | Política de anonimização é pré-requisito para qualquer uso de IA |
| Orçamento de mídia | `[AGUARDANDO RESPOSTA]` | Até R$ 500/mês | VALIDADA | Planejamento de tráfego deve ser realista para esse teto |
| Objetivo dos anúncios | `[AGUARDANDO RESPOSTA]` | Vendas de plantas | VALIDADA | Alinhado ao objetivo do site — mas ver tensão de métrica (2.1) |
| Métrica principal de sucesso | `[AGUARDANDO RESPOSTA]` | Seguidores e alcance | PARCIALMENTE VALIDADA / `[PONTO DE ALINHAMENTO]` | Ver seção 2.1 |
| Meta de contatos/mês | `[AGUARDANDO RESPOSTA]` | 6 a 15 | VALIDADA | ~2 a 3x o volume atual (0 a 5) |
| Meta de projetos novos/mês | `[AGUARDANDO RESPOSTA]` | 1 a 2 | VALIDADA | Compatível com a capacidade de atendimento declarada |
| Uso de contrato | `[AGUARDANDO RESPOSTA]` / `[VALIDAR PROFISSIONALMENTE]` | "Às vezes" | PARCIALMENTE VALIDADA | Padronizar contrato é ainda mais urgente com a venda de plantas |

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
- **Taxa de conversão:** **não informada** — `[AGUARDANDO RESPOSTA DA CLIENTE]`. Não foi estimada nem inventada.

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
- Personalização: **pequenos ajustes inclusos** no preço `[FATO — CLIENTE]`.

### Pendências antes de comercializar

Todos os itens abaixo têm resposta ainda incompleta ou pendente de validação — **nenhum deles deve ser tratado como resolvido só porque a venda foi confirmada "para o lançamento".**

- Definição exata do que o comprador recebe (quais arquivos, em qual formato, com ou sem memorial). `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Licença de uso da planta vendida. `[VALIDAR PROFISSIONALMENTE]` — hoje só há a preferência declarada "uso livre para o comprador" (seção 2.2).
- Direitos autorais do projeto arquitetônico licenciado. `[VALIDAR PROFISSIONALMENTE]` — citado pela própria cliente como uma de suas maiores dúvidas.
- Responsabilidade técnica / necessidade de RRT na venda de projeto pronto e/ou na adaptação. `[VALIDAR PROFISSIONALMENTE]`
- Limites exatos do que está incluso em "pequenos ajustes" (o que é grátis, o que vira serviço pago). `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Quantidade de revisões incluídas nesses ajustes. `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Escopo e prazo do suporte ao comprador — citado pela própria cliente como uma de suas maiores dúvidas. `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Política de reembolso de um produto digital. `[VALIDAR PROFISSIONALMENTE]` (direito de arrependimento em compra online / CDC).
- Termos de uso e contrato de licença do produto digital. `[VALIDAR PROFISSIONALMENTE]`
- Processo de entrega dos arquivos (download imediato, e-mail, área do cliente). `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Forma de pagamento aceita para a compra automática (Pix, cartão, parcelamento). `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Emissão fiscal do produto digital e enquadramento tributário. `[VALIDAR PROFISSIONALMENTE]`
- Tratamento de dados pessoais dos compradores (LGPD). `[VALIDAR PROFISSIONALMENTE]`

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
- **Instagram profissional não informado** no formulário — status real desconhecido `[AGUARDANDO RESPOSTA DA CLIENTE]`.

**Confirmado sobre a marca:**
- Nome: **"Mayara Rocha"** (nome pessoal, não nome de escritório) `[FATO — CLIENTE]`.

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

| Risco | Severidade | Evidência / atualização |
|---|---|---|
| Venda de plantas confirmada para o lançamento sem regras jurídicas/comerciais definidas (licença, RRT, reembolso, termos) | **CRÍTICO** | `[FATO — CLIENTE]` (quer vender já) + 6+ itens ainda pendentes na seção 6 `[VALIDAR PROFISSIONALMENTE]` |
| Ausência de autorização formal para publicar o portfólio existente | **CRÍTICO** | `[FATO — CLIENTE]`: "não tenho isso formalizado" — sem isso, nada do acervo de >10 projetos pode ser publicado com segurança |
| Falta de prova social (fotos profissionais e depoimentos) | **ALTO** | `[FATO — CLIENTE]` em ambos os itens |
| Capacidade operacional de apenas 1–2 projetos simultâneos frente a metas de leads maiores | **ALTO** | Ver gargalo descrito na seção 4 |
| "Pequenos ajustes inclusos" no preço da planta, sem limite definido, pode gerar carga operacional não remunerada | **ALTO** | `[FATO — CLIENTE]` + pendência de limites (seção 6) |
| Métrica de sucesso desalinhada com o objetivo comercial (seguidores/alcance x vendas) | **MÉDIO** | Ver seção 2.1 |
| Ausência de domínio próprio | **MÉDIO** | `[FATO — CLIENTE]` — resolvível rapidamente, mas trava publicação e e-mail profissional |
| Orçamento de mídia limitado (até R$ 500/mês) frente à meta de vendas de plantas + leads de serviço | **MÉDIO** | `[FATO — CLIENTE]` — exige foco em um único objetivo de campanha por vez |
| Segurança/privacidade dos arquivos digitais vendidos (DWG/3D) contra cópia ou redistribuição não autorizada | **MÉDIO** | Decorre do modelo "uso livre" + venda automática (seção 2.2); sem controle técnico definido |
| Instagram profissional não confirmado | **BAIXO** | `[AGUARDANDO RESPOSTA DA CLIENTE]` — fácil de resolver na conversa curta |

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

## 11. Pendências para conversa curta

Lista curta — só perguntas que **bloqueiam decisões** e que **não foram respondidas** no formulário:

1. **Qual é, especificamente, a cidade/região de atuação?** (o formulário confirmou "minha cidade e região", mas não qual cidade.)
2. **Qual o Instagram profissional dela** (campo ficou em branco)?
3. **O que exatamente significa "uso livre" para o comprador da planta** — pode construir quantas vezes quiser? Pode revender o projeto? Pode adaptar livremente?
4. **Quais são os limites dos "pequenos ajustes" incluídos no preço da planta** — o que entra de graça, o que vira serviço pago à parte?
5. **Como funciona o suporte ao comprador na prática** — por quanto tempo, por qual canal, para que tipo de dúvida?
6. **Qual forma de pagamento ela quer aceitar** na compra automática (Pix, cartão, parcelamento)?
7. **Quais arquivos exatos o comprador recebe** ao finalizar a compra (só PDF? PDF + DWG? memorial junto?)?
8. **Qual a política de revisão e de reembolso** do produto digital?
9. **Ela confirma que vai formalizar autorização de publicação** para o portfólio existente — e como pretende fazer isso (termo por WhatsApp, documento assinado, etc.)?
10. **Qual deveria ser, na visão dela, a métrica principal do negócio** (não de rede social) — para resolver o ponto de alinhamento da seção 2.1?

Não repete nenhuma pergunta já respondida no formulário.

---

## Gate de encerramento da ETAPA 01

| Item | Classificação | Justificativa |
|---|---|---|
| Objetivo do negócio | **PRONTO COM RESSALVAS** | Objetivo nº 1 do site confirmado (vender plantas); ressalva: métrica de sucesso desalinhada (seção 2.1) |
| Público inicial | **PRONTO COM RESSALVAS** | Cliente ideal descrito ("pessoas construindo/comprando imóvel próprio") e tipos de projeto priorizados; falta detalhar região exata |
| Oferta (serviços + produto) | **PRONTO COM RESSALVAS** | Hierarquia clara entre produto (plantas), serviço de demanda (projeto) e serviço de rentabilidade (interiores); pendência de esclarecer "plantas sob medida" |
| Portfólio | **PRONTO COM RESSALVAS** | Volume confirmado (>10 projetos); mas sem fotos profissionais, depoimentos ou autorização formal — pode avançar em paralelo enquanto isso é resolvido |
| Comercialização das plantas | **BLOQUEADO** | Decisão de vender "já no lançamento" está confirmada, mas licença de uso, responsabilidade técnica, reembolso, suporte, entrega e pagamento seguem indefinidos — não é seguro estruturar a loja sem isso |
| Marca | **PRONTO COM RESSALVAS** | Nome definido (Mayara Rocha); identidade visual informal e sem domínio — resolvível em paralelo, não bloqueia o Discovery |
| Marketing | **PRONTO COM RESSALVAS** | Orçamento e objetivo definidos; métrica principal precisa de alinhamento (seção 2.1) |
| Aspectos profissionais/jurídicos | **BLOQUEADO** | Múltiplos itens `[VALIDAR PROFISSIONALMENTE]` ainda em aberto (RRT, direitos autorais, LGPD, fiscal, reembolso) — nenhum foi validado com profissional habilitado |

### Conclusão

**B) É necessária uma conversa complementar antes do encerramento formal da ETAPA 01.**

Justificativa: a maior parte dos blocos de posicionamento, público e oferta de serviços está **pronta com ressalvas** — daria para avançar. Mas os dois itens marcados **BLOQUEADO** (comercialização das plantas e aspectos jurídicos/profissionais) são justamente os que sustentam a decisão mais arriscada do projeto: vender um produto digital de arquitetura **já no lançamento**, com **compra automática** e **"uso livre"** declarado, sem responsabilidade técnica nem licença de uso definidas. Fechar o Discovery sem resolver isso transferiria um risco jurídico/comercial real para as etapas seguintes.

A conversa complementar não precisa ser longa: a lista da seção 11 tem **10 perguntas objetivas**, a maioria de resposta rápida (a de mais fôlego é a validação profissional de direitos/RRT, que pode ser encaminhada em paralelo, fora dessa conversa, a um profissional do CAU e/ou assessoria jurídica).

**Não iniciar a ETAPA 02** até que, no mínimo, os itens **BLOQUEADO** avancem para **PRONTO COM RESSALVAS**.

---

## Git

Criado apenas: `docs/discovery/05-discovery-findings.md`. Nenhum outro arquivo foi alterado. Nenhum merge, push, PR ou commit foi executado.

Sugestão de commit:

```text
docs: consolidate discovery findings
```
