# 01 — Business Discovery

**Projeto:** Website e ecossistema digital — Mayara Rocha Arquitetura
**Etapa:** ETAPA 01 — Discovery do Negócio
**Documento:** `docs/discovery/01-business-discovery.md`
**Versão:** 0.1 (rascunho inicial de Discovery)
**Data de criação:** 2026-09-01
**Status geral:** Em aberto — a maior parte das informações depende de entrevista com a cliente.

---

## Convenções deste documento

| Marcação | Significado |
|---|---|
| `[FATO]` | Informação confirmada na conversa inicial. Não inventada. |
| `[AGUARDANDO RESPOSTA DA CLIENTE]` | Informação ainda não fornecida. Precisa ser coletada na entrevista. |
| `[HIPÓTESE — NECESSITA VALIDAÇÃO]` | Suposição de trabalho usada apenas para orientar o Discovery. Nunca tratada como fato. |
| `[VALIDAR PROFISSIONALMENTE]` | Tema legal, regulatório ou de responsabilidade técnica que deve ser validado por profissional habilitado (arquiteto(a) responsável e/ou assessoria jurídica). |

> **Regra fundamental aplicada:** nada sobre a Mayara foi inventado. Tudo o que não veio da conversa inicial está explicitamente marcado como pendente ou como hipótese.

---

# 1. Identificação do projeto

| Campo | Valor | Origem |
|---|---|---|
| Nome provisório do projeto | Mayara Rocha Arquitetura — Website e ecossistema digital | `[FATO]` (nomenclatura do próprio briefing) |
| Nome da profissional | Mayara Rocha | `[FATO]` |
| Profissão | Arquiteta e Urbanista | `[FATO]` |
| Idade | 27 anos | `[FATO]` |
| Objetivo geral do projeto | Estruturar a presença digital da profissional, apresentar o portfólio de arquitetura, captar leads qualificados e viabilizar futuramente a comercialização de plantas prontas e serviços complementares. | `[FATO]` parcial + `[HIPÓTESE — NECESSITA VALIDAÇÃO]` quanto à prioridade entre "portfólio", "captação" e "venda" |
| Canais digitais planejados | Site / landing page; Instagram; LinkedIn; tráfego pago; SEO; Google Analytics; Google Tag Manager; Meta Pixel; captação de leads; contato via WhatsApp; possível venda de produtos digitais. | `[FATO]` (todos citados no briefing como planejamento futuro) |
| Ferramentas de IA previstas para auxiliar no desenvolvimento | Claude Code (construção e organização do projeto); ChatGPT (planejamento, análise e documentação); Google Stitch (prototipação e exploração de interfaces); Canva (materiais visuais e apresentações); outras ferramentas de IA poderão ser incorporadas durante o projeto. | `[FATO]` |

**Observações:**

- O nome do projeto é provisório. `[AGUARDANDO RESPOSTA DA CLIENTE]` sobre existir uma marca/escritório com nome próprio ou uso do nome pessoal (ver Bloco G).
- A ordem de prioridade entre os objetivos (portfólio × geração de leads × venda de plantas) ainda não foi definida pela cliente e é decisiva para a ETAPA 02.

---

# 2. Visão inicial do negócio

Descrição construída **somente** a partir das informações disponíveis. Fatos e hipóteses estão separados.

## 2.1 Área de atuação

- `[FATO]` Arquitetura e urbanismo, com forte componente de projeto residencial e de representação visual (3D / renderização).
- `[AGUARDANDO RESPOSTA DA CLIENTE]` Se atua também em projetos comerciais, corporativos, reformas, regularização, acompanhamento de obra, interiores para terceiros etc.
- `[AGUARDANDO RESPOSTA DA CLIENTE]` Cidades/regiões atendidas e se há atendimento remoto.

## 2.2 Serviços conhecidos

Citados explicitamente na conversa inicial como atividades que a profissional já exerce:

- `[FATO]` Projetos arquitetônicos.
- `[FATO]` Criação de plantas.
- `[FATO]` Design de interiores.
- `[FATO]` Criação de fachadas.
- `[FATO]` Vistas 3D internas.
- `[FATO]` Vistas 3D externas.
- `[FATO]` Renderizações e apresentações visuais de projetos.

> O nível de profundidade, entregáveis, prazos e preços de cada serviço **não** foram informados. Ver seção 4 e Bloco B.

## 2.3 Possíveis produtos digitais

- `[FATO]` A cliente **já possui algumas plantas prontas**.
- `[FATO]` A cliente **considera** criar um modelo digital para comercialização desses materiais.
- `[HIPÓTESE — NECESSITA VALIDAÇÃO]` Catálogo de plantas prontas categorizado por: tamanho do terreno, casa térrea, sobrado, quantidade de quartos, presença de piscina, estilo arquitetônico e outras características.
- `[HIPÓTESE — NECESSITA VALIDAÇÃO]` Serviços complementares vendidos **após** a compra de uma planta: fachada personalizada, vistas 3D personalizadas, design de interiores, adaptação do projeto, atendimento personalizado.
- `[HIPÓTESE — NECESSITA VALIDAÇÃO]` Uso de imagens e vídeos 3D de alto impacto (incluindo vídeos de "passeio" pelo imóvel, estilo câmera/drone) como diferencial de apresentação e de mídia.
- `[AGUARDANDO RESPOSTA DA CLIENTE]` Quantidade, formatos, nível de detalhamento e documentação das plantas já existentes.

## 2.4 Possível modelo de aquisição de clientes

- `[HIPÓTESE — NECESSITA VALIDAÇÃO]` Funil: conteúdo orgânico (Instagram/LinkedIn) + tráfego pago → site/landing page → captação de lead (formulário/WhatsApp) → atendimento comercial → fechamento de serviço de projeto.
- `[HIPÓTESE — NECESSITA VALIDAÇÃO]` Funil paralelo de produto: SEO + anúncios → página de catálogo de plantas → compra do produto digital → oferta de serviços complementares (upsell).
- `[AGUARDANDO RESPOSTA DA CLIENTE]` Como a cliente capta clientes **hoje** (indicação, redes sociais, marketplace, etc.).

## 2.5 Relação entre site, Instagram, LinkedIn e mídia paga

- `[HIPÓTESE — NECESSITA VALIDAÇÃO]` **Site/landing page:** ativo central e destino de todo o tráfego; concentra portfólio, prova social, oferta de serviços, catálogo de plantas e conversão (WhatsApp/formulário).
- `[HIPÓTESE — NECESSITA VALIDAÇÃO]` **Instagram:** topo e meio de funil; portfólio visual, bastidores, Reels de projetos 3D, autoridade estética.
- `[HIPÓTESE — NECESSITA VALIDAÇÃO]` **LinkedIn:** autoridade profissional, relacionamento B2B (construtoras, investidores, incorporadoras, outros arquitetos), conteúdo de processo.
- `[HIPÓTESE — NECESSITA VALIDAÇÃO]` **Mídia paga (Google/Meta):** aceleração de tráfego para o site, tanto para serviços quanto para o catálogo de plantas, mensurada via GA4 + GTM + Meta Pixel.
- `[AGUARDANDO RESPOSTA DA CLIENTE]` Contas de Instagram e LinkedIn já existentes, com quantos seguidores e qual histórico de conteúdo.

---

# 3. Objetivos de negócio

> Os itens abaixo são **hipóteses de objetivo** levantadas a partir do briefing. Nenhum está confirmado como prioridade pela cliente. Coluna "Evidência" indica o que sustenta cada linha.

| Objetivo | Status | Evidência | Necessita validação? |
|---|---|---|---|
| Apresentar portfólio de projetos de arquitetura | Hipótese | Briefing cita portfólio, renders, vídeos 3D e "apresentações visuais de projetos" | Sim — confirmar como objetivo primário ou secundário |
| Aumentar autoridade profissional / posicionamento | Hipótese | Presença planejada em LinkedIn e Instagram; foco em conteúdo 3D de alto impacto | Sim |
| Gerar novos clientes para serviços de projeto | Hipótese | Ecossistema de captação (tráfego pago, SEO, WhatsApp, leads) descrito no briefing | Sim — confirmar meta e capacidade de atendimento |
| Captar leads qualificados | Hipótese | Briefing cita "captação de leads" e "contato via WhatsApp" | Sim — definir o que é um lead qualificado para a Mayara |
| Gerar solicitações de orçamento | Hipótese | Decorrente do modelo de serviço sob demanda | Sim |
| Vender plantas prontas (produto digital) | Hipótese | `[FATO]` de que já há plantas prontas + `[FATO]` de que "considera" um modelo digital | Sim — é intenção declarada, **não** decisão tomada |
| Divulgar e vender serviços de design de interiores | Hipótese | Interiores citado como serviço atual | Sim |
| Divulgar projetos arquitetônicos e fachadas | Hipótese | Serviços citados no briefing | Sim |
| Usar conteúdo 3D (imagens e vídeos de passeio) como diferencial competitivo | Hipótese | Briefing dá destaque explícito a "imagens e vídeos 3D de alto impacto" | Sim — validar viабilidade de produção recorrente |
| Vender serviços complementares após a compra da planta (upsell) | Hipótese | Briefing lista fachada/3D/interiores/adaptação como serviços "após a compra" | Sim |
| Construir base de contatos para remarketing e relacionamento | Hipótese | Presença de Meta Pixel, GA4, GTM no ecossistema planejado | Sim |
| Estruturar mensuração de marketing (GA4, GTM, Pixel) | Hipótese | Ferramentas citadas explicitamente no briefing | Sim — confirmar contas e responsável pela operação |

**Pendências transversais para todos os objetivos:**

- `[AGUARDANDO RESPOSTA DA CLIENTE]` Metas quantitativas (quantos leads/mês, quantos contratos/mês, faturamento-alvo).
- `[AGUARDANDO RESPOSTA DA CLIENTE]` Prazo desejado para os primeiros resultados.
- `[AGUARDANDO RESPOSTA DA CLIENTE]` Capacidade atual de atendimento (quantos projetos simultâneos a Mayara consegue entregar).

---

# 4. Serviços

> Todos os serviços abaixo aparecem no briefing como atividades que a profissional exerce, **mas** escopo, entregáveis, prazo, preço e público não foram detalhados. Onde falta confirmação explícita de que o serviço será **oferecido no site**, o item é tratado como hipótese de oferta.

| Serviço | Confirmado? | Descrição inicial | Público possível | Informação pendente |
|---|---|---|---|---|
| Projeto arquitetônico | Exerce: sim `[FATO]` / Oferta no site: hipótese | Concepção e desenvolvimento de projeto de edificação (provavelmente residencial). | `[HIPÓTESE]` Pessoas físicas construindo residência; possivelmente investidores/construtoras | Escopo (estudo preliminar, anteprojeto, executivo, complementares?), prazo, nº de revisões, entregáveis, faixa de preço, se inclui aprovação em prefeitura |
| Plantas (projeto sob medida) | Exerce: sim `[FATO]` / Oferta no site: hipótese | Elaboração de plantas baixas personalizadas. | `[HIPÓTESE]` Clientes residenciais | Diferença entre "planta sob medida" e "planta pronta"; entregáveis; formatos |
| Plantas prontas (produto digital) | Intenção declarada `[FATO]` / Decisão: não confirmada | Venda de projetos pré-elaborados via catálogo online. | `[HIPÓTESE]` Autoconstrutores, casais jovens, investidores, público de menor ticket e maior volume | Ver seção 5 (bloco dedicado) — muitas pendências |
| Fachadas | Exerce: sim `[FATO]` / Oferta no site: hipótese | Criação e personalização de fachadas, inclusive como serviço avulso pós-compra de planta. | `[HIPÓTESE]` Quem já tem planta e quer diferenciar a fachada | Se é vendido isolado; entregáveis (elevações, render); prazo; preço |
| Design de interiores | Exerce: sim `[FATO]` / Oferta no site: hipótese | Projeto de ambientes internos, mobiliário, acabamentos, iluminação. | `[HIPÓTESE]` Residencial de médio/alto padrão; reforma e construção | Escopo (layout, detalhamento, marcenaria, execução?); cobrança por ambiente ou projeto completo; prazo |
| Vistas 3D internas | Exerce: sim `[FATO]` / Oferta no site: hipótese | Imagens tridimensionais de ambientes internos para apresentação. | `[HIPÓTESE]` Clientes de projeto; outros arquitetos (terceirização) | Se vende para outros profissionais; quantidade de imagens por pacote; qualidade/estilo; prazo; preço |
| Vistas 3D externas | Exerce: sim `[FATO]` / Oferta no site: hipótese | Imagens 3D de fachada/implantação/volumetria. | `[HIPÓTESE]` Clientes de projeto; construtoras; outros arquitetos | Igual acima |
| Renderização | Exerce: sim `[FATO]` / Oferta no site: hipótese | Produção de imagens finais realistas a partir do modelo 3D. | `[HIPÓTESE]` Clientes de projeto; terceirização para colegas | Software utilizado; nível de realismo; prazo; preço; se aceita modelo pronto do cliente |
| Personalização / adaptação de projetos | Hipótese de oferta | Ajuste de planta pronta a terreno, município, necessidades da família. | `[HIPÓTESE]` Compradores de plantas prontas | Limites da adaptação; responsabilidade técnica; ART/RRT `[VALIDAR PROFISSIONALMENTE]`; preço |
| Consultoria | Hipótese de oferta | Orientação pontual (viabilidade, layout, escolhas de projeto) sem projeto completo. | `[HIPÓTESE]` Quem está em dúvida antes de contratar projeto; público de menor ticket | Se a Mayara tem interesse em oferecer; formato (call, presencial, relatório); duração; preço |
| Vídeos de passeio 3D / tour virtual | Hipótese de oferta | Vídeos animados percorrendo o imóvel (estilo câmera/drone) e/ou tours interativos. | `[HIPÓTESE]` Clientes de projeto premium; construtoras; conteúdo de marketing | Software; custo de produção; tempo; se é add-on pago ou material de marketing |
| Acompanhamento / compatibilização de obra | `[AGUARDANDO RESPOSTA DA CLIENTE]` | Não citado no briefing. | — | Confirmar se a Mayara oferece |
| Regularização / aprovação legal | `[AGUARDANDO RESPOSTA DA CLIENTE]` | Não citado no briefing. | — | Confirmar se a Mayara oferece |

**Pendências gerais de serviços:** hierarquia (serviço "carro-chefe"), serviço mais procurado, mais lucrativo, preferido, e serviços que a Mayara **não** quer oferecer (ver Bloco B).

---

# 5. Produtos digitais — Venda de plantas prontas

> Seção dedicada a investigar a comercialização digital de plantas. **Nenhum dado abaixo está confirmado**, exceto o que está marcado `[FATO]`. Temas legais estão marcados para validação profissional e **não** constituem afirmação jurídica.

## 5.1 O que já sabemos

- `[FATO]` A Mayara já possui **algumas** plantas prontas (quantidade não informada).
- `[FATO]` Existe **intenção** de criar um modelo digital para comercializar esses materiais.
- `[FATO]` Foi cogitado categorizar o catálogo por: tamanho do terreno, casa térrea/sobrado, nº de quartos, piscina, estilo arquitetônico, entre outros.
- `[FATO]` Foi cogitado oferecer serviços complementares pós-compra.

## 5.2 Perguntas de investigação (a responder com a cliente)

### Acervo e formato
- Quais plantas já existem hoje? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Quantas estão realmente prontas para venda (sem retrabalho)? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Quais os tamanhos (área construída / terreno) e tipologias (térrea, sobrado, geminada)? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Em quais formatos os arquivos existem (DWG, PDF, SKP, RVT, imagens)? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Qual o nível de detalhamento (apenas planta baixa? cortes? elevações? cotas? layout? executivo?)? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Que documentação acompanha o projeto (memorial, planilha de áreas, especificações)? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Existem imagens/vídeos 3D já produzidos para cada planta? Quantos? `[AGUARDANDO RESPOSTA DA CLIENTE]`

### Comercialização
- Há disposição de vender 100% online, sem contato prévio, ou é necessário falar com o cliente antes da compra? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Compra unitária, pacotes ou assinatura/catálogo? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Faixa de preço imaginada por planta? `[AGUARDANDO RESPOSTA DA CLIENTE]` — **não definir preço sem validação da cliente.**
- O mesmo projeto pode ser vendido várias vezes (não exclusivo) ou haverá exclusividade por região/comprador? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Haverá limite de revisões ou de downloads? `[AGUARDANDO RESPOSTA DA CLIENTE]`

### Pós-compra e suporte
- Como os arquivos serão entregues (download imediato, e-mail, área do cliente)? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Qual o processo pós-compra (onboarding, orientações de uso, canal de dúvidas)? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Haverá suporte ao comprador? Por quanto tempo e por qual canal? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Política de revisão do material adquirido? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Política de reembolso para produto digital? `[AGUARDANDO RESPOSTA DA CLIENTE]` `[VALIDAR PROFISSIONALMENTE]` (Código de Defesa do Consumidor / direito de arrependimento em compras online).

### Adaptação técnica
- Uma planta pronta precisa de adaptação obrigatória por terreno, topografia e legislação municipal antes de construir? `[AGUARDANDO RESPOSTA DA CLIENTE]` `[HIPÓTESE — NECESSITA VALIDAÇÃO]` de que sim, na maioria dos casos.
- A Mayara fará essa adaptação como serviço pago, indicará um profissional local, ou o comprador se vira? `[AGUARDANDO RESPOSTA DA CLIENTE]`
- Quais as limitações técnicas declaradas ao comprador (ex.: projeto não considera sondagem do solo, não inclui projetos complementares)? `[AGUARDANDO RESPOSTA DA CLIENTE]`

### Aspectos legais e de responsabilidade — `[VALIDAR PROFISSIONALMENTE]`
> Registros abaixo são **pontos a validar com o CAU/BR e com assessoria jurídica**, não conclusões.
- Responsabilidade técnica: quem responde tecnicamente por um projeto pronto vendido e depois construído? `[VALIDAR PROFISSIONALMENTE]`
- Necessidade e momento de emissão de **RRT** (Registro de Responsabilidade Técnica – CAU) para venda de projeto e/ou para adaptação. `[VALIDAR PROFISSIONALMENTE]`
- Propriedade intelectual / direitos autorais do projeto arquitetônico: o que é licenciado ao comprador e o que a autora retém. `[VALIDAR PROFISSIONALMENTE]`
- Modelo de licença de uso: uso único (uma construção), uso múltiplo, revenda proibida, cessão de direitos. `[VALIDAR PROFISSIONALMENTE]`
- Termos de uso e contrato de licença do produto digital. `[VALIDAR PROFISSIONALMENTE]`
- Tratamento de dados pessoais dos compradores (LGPD). `[VALIDAR PROFISSIONALMENTE]`
- Emissão fiscal (nota fiscal de produto digital / serviço) e enquadramento tributário. `[VALIDAR PROFISSIONALMENTE]`

---

# Entrevista de Discovery — Mayara Rocha

> Questionário para conduzir a entrevista com a cliente. Perguntas objetivas, agrupadas por bloco.
> Cada pergunta recebe uma **prioridade**: `CRÍTICA` (destrava a ETAPA 02), `IMPORTANTE` (necessária antes de UX/UI e conteúdo), `COMPLEMENTAR` (enriquece, pode ficar para depois).
> Perguntas redundantes entre blocos foram unificadas — ver notas "↔".

## Bloco A — Sobre a profissional

- A1. Qual sua formação e ano de conclusão? Fez pós, especialização ou cursos relevantes? `IMPORTANTE`
- A2. Há quanto tempo atua profissionalmente com arquitetura? `IMPORTANTE`
- A3. Possui registro ativo no CAU? `CRÍTICA` (impacta o que pode ser oferecido e comunicado)
- A4. Tem alguma área de especialização ou tipo de projeto em que se considera mais forte? `CRÍTICA`
- A5. Quais cidades/regiões você atende presencialmente? `CRÍTICA`
- A6. Você atende clientes remotamente (projeto à distância)? Em todo o Brasil? `CRÍTICA`
- A7. Onde trabalhou antes / como é sua trajetória (escritórios, autônoma, construtora)? `COMPLEMENTAR`
- A8. Quais são, na sua visão, seus 3 maiores diferenciais como profissional? `IMPORTANTE`
- A9. Trabalha sozinha ou tem equipe/parceiros (3D, estrutural, etc.)? `IMPORTANTE`

## Bloco B — Serviços

- B1. Liste todos os serviços que você oferece **hoje**. `CRÍTICA`
- B2. Qual serviço é o **mais procurado** pelos clientes? `CRÍTICA`
- B3. Qual serviço é o **mais lucrativo** para você? `CRÍTICA`
- B4. Qual serviço você **mais gosta** de fazer? `IMPORTANTE`
- B5. Qual serviço você **não quer** mais oferecer (ou nunca quis)? `IMPORTANTE`
- B6. Descreva o passo a passo do seu atendimento, do primeiro contato à entrega. `IMPORTANTE`
- B7. Qual o prazo médio de cada serviço principal? `IMPORTANTE`
- B8. Quantas revisões estão incluídas por padrão? `IMPORTANTE`
- B9. O que exatamente o cliente recebe ao final (lista de entregáveis por serviço)? `CRÍTICA`
- B10. Quais softwares você usa em cada etapa (projeto, 3D, render, apresentação)? `IMPORTANTE` ↔ unificada com L1
- B11. Você já terceiriza 3D/render para outros arquitetos, ou tem interesse nisso? `COMPLEMENTAR`

## Bloco C — Clientes atuais

- C1. Descreva o perfil típico de quem te contrata hoje (idade aproximada, ocupação, momento de vida). `CRÍTICA`
- C2. Onde estão localizados a maioria dos seus clientes? `IMPORTANTE`
- C3. Qual o poder aquisitivo predominante (faixa de ticket dos projetos)? `CRÍTICA`
- C4. Que tipo de imóvel eles constroem/reformam (casa térrea, sobrado, apê, comércio)? `IMPORTANTE`
- C5. Quais as principais necessidades e dores que eles trazem? `CRÍTICA`
- C6. Quais as dúvidas mais comuns antes de fechar? `IMPORTANTE`
- C7. Quais as objeções mais comuns (preço, prazo, confiança, "faço com engenheiro")? `CRÍTICA`
- C8. Como os clientes chegam até você hoje? (indicação, Instagram, Google, etc.) `CRÍTICA` ↔ unificada com I1
- C9. Quando fecham, por que escolhem você? `IMPORTANTE`
- C10. Quando **não** fecham, qual o motivo mais frequente? `IMPORTANTE`

## Bloco D — Público desejado

- D1. Quem você **gostaria** de atender nos próximos 2–3 anos? Descreva o cliente ideal. `CRÍTICA`
- D2. Qual ticket médio você quer alcançar por projeto? `CRÍTICA` — resposta orienta posicionamento, **não** vira preço público sem validação.
- D3. Em que região quer atuar (local, estado, nacional, remoto)? `CRÍTICA`
- D4. Que tipo de trabalho quer priorizar? (marque) residências / apartamentos / comércio / alto padrão / médio padrão / construção nova / reforma. `CRÍTICA`
- D5. Tem interesse em clientes B2B: investidores, construtoras, incorporadoras, outros arquitetos? `IMPORTANTE`
- D6. Há algum tipo de cliente ou projeto que você **não** quer atrair? `IMPORTANTE`

## Bloco E — Plantas prontas

> ↔ Este bloco complementa a seção 5. Responder aqui resolve a seção 5.

- E1. Quantas plantas você tem realmente prontas para vender hoje? `CRÍTICA`
- E2. Quais tamanhos (área/terreno) e tipologias elas cobrem? `CRÍTICA`
- E3. Quais estilos arquitetônicos (contemporâneo, colonial, industrial, etc.)? `IMPORTANTE`
- E4. Quais os diferenciais dessas plantas em relação ao que já se vende por aí? `IMPORTANTE`
- E5. Que arquivos existem para cada uma (DWG, PDF, 3D, render, memorial)? `CRÍTICA`
- E6. Quantas imagens/vídeos 3D já existem por planta? `IMPORTANTE`
- E7. Você aceita personalizar a planta após a venda? Até que ponto? `CRÍTICA`
- E8. Qual faixa de preço você imagina por planta? `IMPORTANTE` — registrar como referência interna, não publicar sem validação.
- E9. Venda unitária, pacotes ou combos com serviços? `IMPORTANTE`
- E10. Que direitos o comprador teria (uso único? construir quantas vezes? revender?)? `CRÍTICA` `[VALIDAR PROFISSIONALMENTE]`
- E11. Haverá exclusividade (ex.: "vendida no máximo 3 vezes" ou "exclusiva por bairro")? `IMPORTANTE`
- E12. As plantas serão atualizadas com o tempo? Comprador antigo recebe atualização? `COMPLEMENTAR`
- E13. Haverá suporte pós-venda? Qual escopo e prazo? `IMPORTANTE`
- E14. Você quer permitir compra 100% self-service ou exigir contato antes? `CRÍTICA`
- E15. Você se sente confortável em assumir a responsabilidade técnica pela venda desses projetos? `CRÍTICA` `[VALIDAR PROFISSIONALMENTE]`

## Bloco F — Portfólio

- F1. Quantos projetos você pode divulgar publicamente hoje? `CRÍTICA`
- F2. Desses, quantos foram **construídos** e quantos são **apenas render/estudo**? `CRÍTICA`
- F3. Você tem fotografias profissionais de obras concluídas? De quantos projetos? `CRÍTICA`
- F4. Tem plantas, renders e vídeos organizados por projeto? `IMPORTANTE`
- F5. Você tem **autorização dos clientes** para publicar cada projeto (imagem, endereço, nome)? `CRÍTICA` `[VALIDAR PROFISSIONALMENTE]`
- F6. Tem pares de "antes e depois" (reformas)? `IMPORTANTE`
- F7. Tem depoimentos de clientes? Podem ser publicados com nome/foto? `CRÍTICA` — **não inventar depoimentos.**
- F8. Qual projeto você mais gostaria de destacar como cartão de visitas? `IMPORTANTE`

## Bloco G — Marca

- G1. Você já tem logotipo? Em quais formatos (vetor, PNG)? `CRÍTICA`
- G2. Já tem paleta de cores e tipografia definidas? `IMPORTANTE`
- G3. Existe algum manual de marca ou identidade visual? `IMPORTANTE`
- G4. Você quer usar seu **próprio nome** ("Mayara Rocha Arquitetura") ou criar um nome de escritório? `CRÍTICA`
- G5. Que sensação o site deve transmitir? (ex.: sofisticado, acolhedor, técnico, minimalista, autoral) `CRÍTICA`
- G6. Cite 2–3 arquitetos/escritórios cuja **identidade visual** você admira. `IMPORTANTE`
- G7. Tem alguma referência de estética que você **rejeita**? `COMPLEMENTAR`
- G8. Tem fotos suas profissionais para a seção "Sobre"? `IMPORTANTE`

## Bloco H — Concorrência

- H1. Quem você considera seus concorrentes diretos (nome/cidade)? `IMPORTANTE`
- H2. Quais profissionais de arquitetura você admira no digital? `COMPLEMENTAR`
- H3. Cite perfis de Instagram de referência (bons de conteúdo ou de venda). `COMPLEMENTAR`
- H4. Cite sites de arquitetos que você acha bons. `IMPORTANTE`
- H5. O que esses profissionais fazem que você considera um diferencial real? `IMPORTANTE`
- H6. O que você **não** gostaria de copiar deles? `COMPLEMENTAR`
- H7. Você conhece quem já vende plantas prontas online? Quem faz bem isso? `IMPORTANTE`

## Bloco I — Comercial

- I1. Por quais canais você recebe contatos hoje? (WhatsApp, Instagram DM, formulário, telefone, indicação) `CRÍTICA` ↔ unificada com C8
- I2. Em quanto tempo você costuma responder um novo contato? `IMPORTANTE`
- I3. Como você monta e envia um orçamento hoje (ferramenta, formato, prazo)? `IMPORTANTE`
- I4. Você usa contrato? Modelo próprio, de terceiros, ou nenhum? `CRÍTICA` `[VALIDAR PROFISSIONALMENTE]`
- I5. Como recebe pagamento (Pix, cartão, transferência)? Parcela? Em quantas vezes? `IMPORTANTE`
- I6. Você faz follow-up de quem pediu orçamento e não respondeu? Como? `IMPORTANTE`
- I7. Usa algum CRM ou planilha para acompanhar leads? `IMPORTANTE`
- I8. Quantos contatos/mês você recebe hoje, aproximadamente? `CRÍTICA`
- I9. Qual sua taxa de fechamento aproximada (de 10 orçamentos, quantos fecham)? `IMPORTANTE`

## Bloco J — Marketing

- J1. Qual o @ do seu Instagram atual e quantos seguidores? `CRÍTICA`
- J2. Você tem LinkedIn? Qual o link e com que frequência publica? `IMPORTANTE`
- J3. Com que frequência você posta hoje (Instagram)? `IMPORTANTE`
- J4. Que tipos de conteúdo você já publica (projeto pronto, processo, bastidor, dicas)? `IMPORTANTE`
- J5. Que material bruto você tem hoje (fotos, vídeos, renders, plantas)? `CRÍTICA` ↔ relacionada a F3/F4
- J6. Você topa aparecer em vídeo (falando para a câmera)? `IMPORTANTE`
- J7. Você topa gravar Reels com frequência? `IMPORTANTE`
- J8. Qual orçamento mensal você pode investir em mídia paga? `CRÍTICA` — orienta a ETAPA de tráfego, não será executada agora.
- J9. Em que região(ões) os anúncios devem rodar? `IMPORTANTE`
- J10. Qual o objetivo principal dos anúncios: leads de projeto, venda de plantas, seguidores, autoridade? `CRÍTICA`

## Bloco K — Site

- K1. Na sua visão, qual é o **objetivo número 1** do site? `CRÍTICA`
- K2. Qual a ação principal que você quer que o visitante realize? (chamar no WhatsApp, pedir orçamento, comprar planta, agendar) `CRÍTICA`
- K3. Quais seções são obrigatórias para você? (portfólio, serviços, sobre, depoimentos, FAQ, blog, loja de plantas, contato) `CRÍTICA`
- K4. Você quer venda de plantas **no lançamento** do site ou numa fase 2? `CRÍTICA`
- K5. Quer oferecer agendamento online de reunião? `IMPORTANTE`
- K6. Quer blog / conteúdo para SEO? Tem disposição de alimentar? `IMPORTANTE`
- K7. Quer área do cliente (login) para entrega de arquivos? `COMPLEMENTAR`
- K8. Tem domínio próprio registrado? Qual? `IMPORTANTE`
- K9. Tem e-mail profissional no domínio? `COMPLEMENTAR`
- K10. Há textos já escritos (sobre, serviços) ou tudo será produzido do zero? `IMPORTANTE`

## Bloco L — Conteúdo 3D e IA

- L1. Quais softwares você usa para 3D e render? `IMPORTANTE` ↔ unificada com B10
- L2. Em quais formatos os renders/vídeos são exportados e em que resolução? `COMPLEMENTAR`
- L3. Como você avalia a qualidade atual dos seus renders (0–10) e onde quer chegar? `IMPORTANTE`
- L4. Você já produziu vídeo de "passeio" pelo imóvel? Quanto tempo leva para fazer um? `IMPORTANTE`
- L5. Tem interesse em usar **vídeos gerados por IA** para marketing? `IMPORTANTE`
- L6. Existe algum limite ético/estético que você **não** quer ultrapassar com IA? `IMPORTANTE`
- L7. Você autoriza usar seus projetos como entrada em ferramentas de IA (imagem/vídeo/texto)? `CRÍTICA` `[VALIDAR PROFISSIONALMENTE]`
- L8. Algum projeto precisa ser **anonimizado** (sem nome do cliente/endereço) antes de qualquer uso? `CRÍTICA` `[VALIDAR PROFISSIONALMENTE]`
- L9. Tem interesse em tours virtuais interativos (360°/navegável) no site? `COMPLEMENTAR`

## Bloco M — Resultados e métricas

- M1. Daqui a 6 meses, o que faria você dizer "o site valeu a pena"? `CRÍTICA`
- M2. Qual a métrica principal de sucesso: leads, orçamentos enviados, contratos fechados, vendas de planta, faturamento? `CRÍTICA`
- M3. Quantos **leads/mês** seriam um bom resultado? `CRÍTICA`
- M4. Quantos **contratos/mês** você quer e consegue atender? `CRÍTICA`
- M5. Qual meta de **vendas de plantas/mês** (se o produto entrar)? `IMPORTANTE`
- M6. Metas de redes sociais importam? (seguidores, alcance) `COMPLEMENTAR`
- M7. Você acompanha algum número hoje (visitas, contatos, faturamento)? Como? `IMPORTANTE`
- M8. Qual retorno sobre investimento em mídia você consideraria satisfatório? `IMPORTANTE`

---

# 6. Priorização das perguntas

Classificação para permitir a entrevista **em ondas**, caso não haja tempo de responder tudo de uma vez.

## Onda 1 — CRÍTICA (destrava a ETAPA 02: posicionamento, escopo do site e do MVP)

| Bloco | Perguntas |
|---|---|
| A | A3, A4, A5, A6 |
| B | B1, B2, B3, B9 |
| C | C1, C3, C5, C7, C8 |
| D | D1, D2, D3, D4 |
| E | E1, E2, E5, E7, E10, E14, E15 |
| F | F1, F2, F3, F5, F7 |
| G | G1, G4, G5 |
| I | I1, I4, I8 |
| J | J1, J5, J8, J10 |
| K | K1, K2, K3, K4 |
| L | L7, L8 |
| M | M1, M2, M3, M4 |

## Onda 2 — IMPORTANTE (necessária antes de UX/UI, conteúdo e identidade)

Blocos A (A1, A2, A8, A9) · B (B4, B5, B6, B7, B8, B10) · C (C2, C4, C6, C9, C10) · D (D5, D6) · E (E3, E4, E6, E8, E9, E11, E13) · F (F4, F6, F8) · G (G2, G3, G6, G8) · H (H1, H4, H5, H7) · I (I2, I3, I5, I6, I7, I9) · J (J2, J3, J4, J6, J7, J9) · K (K5, K6, K8, K10) · L (L1, L3, L4, L5, L6) · M (M5, M7, M8)

## Onda 3 — COMPLEMENTAR (enriquece; pode ficar para follow-up)

Blocos A (A7) · B (B11) · E (E12) · G (G7) · H (H2, H3, H6) · K (K7, K9) · L (L2, L9) · M (M6)

**Recomendação de condução:** Onda 1 em uma call de ~45–60 min; Ondas 2 e 3 por formulário assíncrono ou segunda call.

---

# 7. Matriz de informações

| Informação | Conhecida | Desconhecida | Hipótese | Fonte |
|---|:--:|:--:|:--:|---|
| Nome da profissional (Mayara Rocha) | ✓ | | | conversa inicial |
| Idade (27) | ✓ | | | conversa inicial |
| Profissão (Arquiteta e Urbanista) | ✓ | | | conversa inicial |
| Registro ativo no CAU | | ✓ | | cliente |
| Serviços que já exerce (projeto, plantas, interiores, fachadas, 3D interno/externo, render, apresentações) | ✓ | | | conversa inicial |
| Escopo/entregáveis/prazo de cada serviço | | ✓ | | cliente |
| Serviço mais procurado / mais lucrativo / preferido | | ✓ | | cliente |
| Serviços que **não** quer oferecer | | ✓ | | cliente |
| Cidades/regiões atendidas | | ✓ | | cliente |
| Atendimento remoto | | ✓ | | cliente |
| Possui plantas prontas | ✓ | | | conversa inicial |
| Quantidade de plantas prontas | | ✓ | | cliente |
| Formatos e nível de detalhamento das plantas | | ✓ | | cliente |
| Intenção de vender plantas online | ✓ | | | conversa inicial |
| Decisão confirmada de vender plantas online | | ✓ | | cliente |
| Categorização do catálogo (terreno, térrea/sobrado, quartos, piscina, estilo) | | | ✓ | hipótese (ideia citada) |
| Serviços complementares pós-compra | | | ✓ | hipótese (ideia citada) |
| Faixa de preço de plantas e serviços | | ✓ | | cliente |
| Licença de uso / direitos autorais / exclusividade | | ✓ | | cliente + validação profissional |
| Responsabilidade técnica / RRT na venda de plantas | | ✓ | | validação profissional (CAU) |
| Política de reembolso / revisão | | ✓ | | cliente + validação profissional |
| Uso de vídeos 3D de "passeio" como diferencial | | | ✓ | hipótese (destaque no briefing) |
| Nº de projetos divulgáveis / construídos / renderizados | | ✓ | | cliente |
| Fotografias profissionais de obras | | ✓ | | cliente |
| Autorização de clientes para publicação | | ✓ | | cliente + validação profissional |
| Depoimentos disponíveis | | ✓ | | cliente |
| Logotipo / identidade visual existente | | ✓ | | cliente |
| Nome pessoal vs. nome de escritório | | ✓ | | cliente |
| Referências estéticas admiradas | | ✓ | | cliente |
| Concorrentes diretos | | ✓ | | cliente + pesquisa futura |
| Canais de contato atuais | | ✓ | | cliente |
| Uso de contrato / CRM / follow-up | | ✓ | | cliente |
| Volume de contatos/mês e taxa de fechamento | | ✓ | | cliente |
| Instagram atual (@ e seguidores) | | ✓ | | cliente |
| LinkedIn atual | | ✓ | | cliente |
| Frequência e tipo de conteúdo atual | | ✓ | | cliente |
| Disposição para aparecer em vídeo / Reels | | ✓ | | cliente |
| Orçamento para mídia paga | | ✓ | | cliente |
| Objetivo principal dos anúncios | | ✓ | | cliente |
| Objetivo nº 1 do site | | ✓ | | cliente |
| Ação principal desejada do visitante | | ✓ | | cliente |
| Seções obrigatórias do site | | ✓ | | cliente |
| Venda de plantas no lançamento vs. fase 2 | | ✓ | | cliente |
| Domínio registrado | | ✓ | | cliente |
| Textos já existentes | | ✓ | | cliente |
| Softwares de 3D/render utilizados | | ✓ | | cliente |
| Autorização para uso de projetos em ferramentas de IA | | ✓ | | cliente + validação profissional |
| Necessidade de anonimização de projetos | | ✓ | | cliente + validação profissional |
| Interesse em tours virtuais | | ✓ | | cliente |
| Métricas de sucesso e metas quantitativas | | ✓ | | cliente |
| Capacidade de atendimento (projetos simultâneos) | | ✓ | | cliente |
| Ferramentas de IA do projeto (Claude Code, ChatGPT, Stitch, Canva) | ✓ | | | conversa inicial |
| Canais digitais planejados (lista do briefing) | ✓ | | | conversa inicial |
| Prioridade entre portfólio × leads × venda | | ✓ | ✓ | cliente (hipótese enquanto não respondido) |

**Resumo quantitativo:** ~10 informações conhecidas · ~5 hipóteses ativas · ~45 informações a coletar (maioria na entrevista).

---

# 8. Riscos identificados no Discovery

| Risco | Impacto | Probabilidade | Mitigação sugerida |
|---|---|---|---|
| Ausência de posicionamento definido (para quem e para quê) | Alto | Alta | Fechar Onda 1 (Blocos A, C, D, K, M) antes de qualquer decisão de UX/UI. Definir 1 público primário e 1 objetivo primário. |
| Excesso de serviços sem hierarquia | Alto | Alta | Usar B2/B3/B4 para eleger 1 serviço carro-chefe e 2 de apoio; demais entram como "sob consulta". |
| Falta de material de portfólio (fotos, projetos construídos, autorizações) | Alto | Média | Levantar em F1–F5 o que existe hoje; se insuficiente, priorizar projetos renderizados e planejar sessão de fotos das obras entregues. |
| Falta de autorização dos clientes para publicação de projetos e depoimentos | Alto | Média | Criar termo de autorização de imagem/uso antes de publicar qualquer projeto. `[VALIDAR PROFISSIONALMENTE]` |
| Dificuldade de precificação (serviços e plantas) | Médio | Alta | Não publicar preços no lançamento; usar "solicite orçamento". Definir preço de plantas só após E1–E10 e validação. |
| Complexidade operacional e legal da venda de plantas prontas | Alto | Alta | Tratar a loja como **fase 2**. No lançamento, usar "lista de espera / catálogo com contato" para validar demanda sem risco. `[VALIDAR PROFISSIONALMENTE]` |
| Questões regulatórias e de responsabilidade técnica (CAU/RRT, direitos autorais, LGPD, emissão fiscal) | Alto | Média | Consultar CAU/BR e assessoria jurídica/contábil antes de vender qualquer produto digital. Registrar decisões neste repositório. |
| Uso inadequado de IA (projetos de clientes em ferramentas de IA sem consentimento; renders enganosos) | Alto | Média | Coletar L7/L8; criar política interna de uso de IA; anonimizar projetos sensíveis; sinalizar imagens de IA quando não representarem projeto real. |
| Site tentando atender públicos demais (autoconstrutor de baixo ticket + alto padrão + B2B) | Médio | Alta | Definir público primário na Onda 1; públicos secundários viram páginas específicas na fase 2, não a home. |
| Tráfego pago antes de existir mensuração e processo comercial | Alto | Média | Só iniciar mídia após GA4 + GTM + Pixel instalados, eventos de conversão definidos e SLA de resposta a leads acordado. |
| Ausência de processo comercial estruturado (orçamento, contrato, follow-up, CRM) | Alto | Alta | Mapear I1–I9; definir fluxo mínimo (modelo de orçamento, contrato padrão, cadência de follow-up, planilha/CRM) antes de gerar volume de leads. |
| Dependência de uma única pessoa para produção (projeto + 3D + conteúdo + comercial) | Médio | Alta | Avaliar em A9/B11 gargalos de capacidade; planejar terceirização de 3D/edição e automações de atendimento. |
| Expectativa de resultado desalinhada com investimento e prazo | Médio | Média | Alinhar metas realistas em M1–M8; registrar premissas de prazo e orçamento neste documento. |
| Conteúdo do repositório público expõe estratégia de negócio da cliente | Baixo | Média | Repositório definido como público pelo responsável do projeto. Manter dados de terceiros (clientes finais) fora do repositório; anonimizar materiais de divulgação. |

---

# 9. Oportunidades iniciais

> Itens marcados `[VALIDAR]` dependem de confirmação da cliente e/ou de validação profissional.

| Oportunidade | Descrição | Precisa validar? |
|---|---|---|
| Visualização 3D como diferencial central | Poucos concorrentes locais entregam apresentação 3D de alto impacto; usar isso como âncora de posicionamento e de home. | `[VALIDAR]` qualidade atual e capacidade de produção recorrente (L3, L4) |
| Projetos como conteúdo para redes sociais | Cada projeto vira múltiplos ativos (carrossel de plantas, Reel de passeio 3D, antes/depois, story de bastidor). Reduz custo de conteúdo. | `[VALIDAR]` autorização dos clientes (F5) e disposição para gravar (J6, J7) |
| Catálogo de plantas prontas | Produto digital escalável, ticket de entrada menor, alcance nacional (atendimento remoto). | `[VALIDAR]` acervo real (E1–E6), modelo de licença e RRT `[VALIDAR PROFISSIONALMENTE]` |
| Plantas prontas como porta de entrada para serviços personalizados | Comprou a planta → oferta de fachada personalizada, 3D, interiores e adaptação (upsell/escada de valor). | `[VALIDAR]` interesse da cliente em operar o upsell (E7, E9) |
| SEO para buscas de "planta de casa" | Demanda de busca alta e recorrente ("planta casa 3 quartos", "planta sobrado terreno 10x20"). Blog + páginas de catálogo podem capturar tráfego qualificado e barato. | `[VALIDAR]` disposição de manter conteúdo (K6) |
| Vídeos curtos de projetos para anúncios | Passeios 3D de 15–30s como criativos de tráfego pago — alto CTR potencial no nicho. | `[VALIDAR]` orçamento e objetivo de mídia (J8, J10) |
| WhatsApp como motor de conversão | Nicho de arquitetura converte bem em conversa 1:1; CTA de WhatsApp com mensagem pré-preenchida por serviço. | `[VALIDAR]` SLA de resposta e capacidade de atendimento (I2, M4) |
| Prova social estruturada | Depoimentos em vídeo, estudos de caso "projeto → obra", números ("X projetos entregues"). Aumenta conversão do site. | `[VALIDAR]` existência de material e autorização (F3, F5, F7) |
| Posicionamento por nicho de tipologia ou estilo | Ex.: "arquitetura residencial contemporânea acessível" ou "casas para terrenos pequenos". Facilita marca, SEO e anúncios. | `[VALIDAR]` alinhamento com o público desejado (D1, D4) |
| LinkedIn para B2B | Relacionamento com construtoras/investidores/incorporadoras para contratos maiores e recorrentes. | `[VALIDAR]` interesse em B2B (D5) |
| Lista de espera / pré-lançamento do catálogo | Validar demanda por plantas prontas antes de construir a loja completa (reduz risco técnico e legal). | `[VALIDAR]` aceitação da cliente do faseamento |

---

# 10. Critério de conclusão desta tarefa

| # | Verificação | Situação |
|---|---|---|
| 1 | Arquivo bem formatado em Markdown | OK — headings, tabelas e listas válidos |
| 2 | Fatos e hipóteses claramente separados | OK — convenção `[FATO]` / `[HIPÓTESE — NECESSITA VALIDAÇÃO]` / `[AGUARDANDO RESPOSTA DA CLIENTE]` / `[VALIDAR PROFISSIONALMENTE]` aplicada em todo o documento |
| 3 | Nenhuma informação sobre a Mayara inventada | OK — apenas nome, idade, profissão e lista de serviços exercidos são tratados como fato; todo o resto está marcado como pendente ou hipótese |
| 4 | Questionário utilizável em entrevista real | OK — perguntas objetivas, agrupadas em 13 blocos, com redundâncias unificadas (marcador ↔) |
| 5 | Perguntas redundantes removidas | OK — C8↔I1 (canais de contato), B10↔L1 (softwares), seção 5↔Bloco E (plantas), J5↔F3/F4 (material bruto) |
| 6 | Perguntas priorizadas | OK — CRÍTICA / IMPORTANTE / COMPLEMENTAR + proposta de condução em 3 ondas |
| 7 | Resumo do que foi criado | Ver abaixo |

## Resumo do que foi criado

- **1 documento:** `docs/discovery/01-business-discovery.md` (este arquivo).
- **Estrutura criada:** `docs/discovery/`.
- **Conteúdo:** identificação do projeto; visão inicial do negócio (fatos × hipóteses); 12 objetivos de negócio em tabela (todos como hipótese a validar); 13 serviços avaliados em tabela; seção dedicada a produtos digitais (plantas prontas) com bloco de temas legais a validar profissionalmente; questionário de Discovery com 13 blocos (A–M) e ~110 perguntas priorizadas; proposta de entrevista em 3 ondas; matriz de informações (conhecida/desconhecida/hipótese/fonte); 14 riscos com impacto, probabilidade e mitigação; 11 oportunidades com marcação do que precisa ser validado.
- **O que NÃO foi feito (por restrição da etapa):** landing page, cores finais, persona, wireframes, banco de dados, API, autenticação, arquitetura definitiva, personas, preços definitivos, campanhas. Nenhum depoimento, cliente, experiência ou ferramenta foi inventado.

---

# 11. Git

- **Repositório:** este projeto está em um repositório Git (inicializado nesta etapa).
- **Arquivos criados nesta execução:**
  - `docs/discovery/01-business-discovery.md`
- Não foi feito merge, não foi enviado para `main` sem autorização explícita, e nenhum código de aplicação foi criado ou alterado.

**Sugestão de commit (Conventional Commits):**

```text
docs: create initial business discovery
```

---

# 12. Próximos passos sugeridos (fora do escopo desta etapa)

1. Conduzir a **Entrevista de Discovery — Onda 1** com a Mayara e registrar as respostas neste diretório (`docs/discovery/02-interview-answers.md`).
2. Consolidar posicionamento (público primário + objetivo primário do site).
3. Validar com CAU/BR e assessoria jurídica/contábil os pontos marcados `[VALIDAR PROFISSIONALMENTE]`.
4. Decidir escopo do MVP do site e se a venda de plantas entra no lançamento ou em fase 2.
5. Só então iniciar a ETAPA 02 (UX/arquitetura de informação).
