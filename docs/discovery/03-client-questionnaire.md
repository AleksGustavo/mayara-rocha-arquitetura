# 03 — Questionário para a cliente (especificação do Google Forms)

**Projeto:** Mayara Rocha Arquitetura — Website e Ecossistema Digital
**Etapa:** ETAPA 01 — Discovery do Negócio
**Natureza deste arquivo:** especificação **fonte** do Google Forms. **Não** enviar este Markdown para a Mayara. O que ela recebe é o link do formulário gerado pelo script [`scripts/google-forms/create-discovery-form.gs`](../../scripts/google-forms/create-discovery-form.gs).

---

## Metas de experiência

- Tempo de preenchimento: **12 a 15 minutos** no caminho comum; **até ~18 minutos** se a Mayara escolher detalhar a venda de plantas prontas.
- Predominam múltipla escolha, caixas de seleção, listas e escalas. Resposta longa só nos 4 casos em que é realmente necessária.
- Sem upload de arquivos (evita exigência de login). Materiais são solicitados depois — ver seção final "Materiais solicitados fora do formulário".
- Sem coleta de e-mail obrigatória, sem perguntas sensíveis (senhas, tokens, chaves, dados bancários, documentos).

## Convenções

- **Tipos permitidos:** `SHORT_TEXT`, `PARAGRAPH`, `MULTIPLE_CHOICE`, `CHECKBOX`, `DROPDOWN`, `LINEAR_SCALE`.
- Temas legais/regulatórios aparecem para a cliente em linguagem simples ("será validado profissionalmente"); no planejamento continuam marcados `[VALIDAR PROFISSIONALMENTE]`.
- "Seção" abaixo corresponde a uma página do formulário (page break), exceto a Seção 1, que é o cabeçalho/descrição do formulário.

---

## Introdução do formulário (texto para a Mayara)

> **Discovery — Mayara Rocha Arquitetura**
>
> Oi, Mayara! Estas perguntas nos ajudam a planejar o seu site e a sua presença digital do jeito certo — com base no seu trabalho real, e não em achismo.
>
> São cerca de **12 a 15 minutos**. Responda com o que você já sabe hoje; **não precisa ter todas as respostas perfeitas**. O que ficar em aberto a gente conversa depois, numa call rápida.
>
> Nada aqui é definitivo: é um ponto de partida. Pode ser sincera — quanto mais real, melhor fica o resultado.
>
> Não pedimos nenhum dado sensível e você não precisa anexar arquivos agora.

---

# Seção 1 — Boas-vindas

Página inicial do formulário. Sem perguntas. Usa o texto de introdução acima como descrição do formulário.

---

# Seção 2 — Sobre você

### FORM-Q01
**Seção:** Sobre você
**Pergunta:** Há quanto tempo você atua profissionalmente com arquitetura?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Menos de 2 anos
- 2 a 5 anos
- 5 a 10 anos
- Mais de 10 anos
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q02
**Seção:** Sobre você
**Pergunta:** Você tem registro ativo no CAU?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim
- Em processo
- Não
**Obrigatória:** Sim
**Ajuda/descrição:** Só para entendermos o que pode ser comunicado no site. Esse ponto é validado profissionalmente depois.
**Lógica condicional:** Nenhuma

### FORM-Q03
**Seção:** Sobre você
**Pergunta:** Em quais regiões você atende atualmente?
**Tipo:** CHECKBOX
**Opções:**
- Minha cidade e região
- Todo o estado
- Todo o Brasil, de forma remota
- Outro
**Obrigatória:** Sim
**Ajuda/descrição:** Pode marcar mais de uma.
**Lógica condicional:** Nenhuma

### FORM-Q04
**Seção:** Sobre você
**Pergunta:** Você aceita fazer projetos 100% à distância (remoto)?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, sem problema
- Sim, com algumas limitações
- Prefiro não
- Nunca fiz
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q05
**Seção:** Sobre você
**Pergunta:** Em poucas linhas, quais são seus 3 maiores diferenciais como profissional?
**Tipo:** PARAGRAPH
**Obrigatória:** Sim
**Ajuda/descrição:** Do jeito que vier à cabeça. A gente lapida depois.
**Lógica condicional:** Nenhuma

---

# Seção 3 — Seus serviços

### FORM-Q06
**Seção:** Seus serviços
**Pergunta:** Quais serviços você oferece hoje?
**Tipo:** CHECKBOX
**Opções:**
- Projeto arquitetônico
- Plantas sob medida
- Design de interiores
- Fachadas
- Vistas 3D internas
- Vistas 3D externas
- Renderização
- Personalização de projetos
- Consultoria
- Acompanhamento de obra
- Outro
**Obrigatória:** Sim
**Ajuda/descrição:** Marque tudo o que se aplica.
**Lógica condicional:** Nenhuma

### FORM-Q07
**Seção:** Seus serviços
**Pergunta:** Qual serviço é o MAIS PROCURADO pelos clientes?
**Tipo:** DROPDOWN
**Opções:**
- Projeto arquitetônico
- Plantas sob medida
- Design de interiores
- Fachadas
- Vistas 3D
- Renderização
- Personalização de projetos
- Consultoria
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q08
**Seção:** Seus serviços
**Pergunta:** Qual serviço é o MAIS RENTÁVEL para você?
**Tipo:** DROPDOWN
**Opções:** (mesmas de FORM-Q07)
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q09
**Seção:** Seus serviços
**Pergunta:** Qual serviço você MAIS GOSTA de fazer?
**Tipo:** DROPDOWN
**Opções:** (mesmas de FORM-Q07)
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q10
**Seção:** Seus serviços
**Pergunta:** Você usa contrato nos seus projetos?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, modelo próprio
- Sim, modelo de terceiros
- Às vezes
- Não uso
**Obrigatória:** Sim
**Ajuda/descrição:** A parte jurídica do contrato é revisada profissionalmente numa etapa posterior.
**Lógica condicional:** Nenhuma

### FORM-Q11
**Seção:** Seus serviços
**Pergunta:** Quantos projetos você consegue atender ao mesmo tempo, com qualidade?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- 1 a 2
- 3 a 4
- 5 a 6
- Mais de 6
**Obrigatória:** Sim
**Ajuda/descrição:** Isso ajuda a definir metas realistas de contatos por mês.
**Lógica condicional:** Nenhuma

---

# Seção 4 — Clientes e público desejado

### FORM-Q12
**Seção:** Clientes e público desejado
**Pergunta:** Como seus clientes costumam chegar até você hoje?
**Tipo:** CHECKBOX
**Opções:**
- Indicação
- Instagram
- Google
- WhatsApp
- LinkedIn
- Já me conheciam
- Outro
**Obrigatória:** Sim
**Ajuda/descrição:** Pode marcar mais de uma.
**Lógica condicional:** Nenhuma

### FORM-Q13
**Seção:** Clientes e público desejado
**Pergunta:** Qual a faixa de honorário predominante dos seus projetos hoje?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Até R$ 5 mil
- R$ 5 mil a R$ 15 mil
- R$ 15 mil a R$ 40 mil
- Acima de R$ 40 mil
- Prefiro não dizer
**Obrigatória:** Sim
**Ajuda/descrição:** Valor aproximado do seu honorário por projeto (não o custo da obra).
**Lógica condicional:** Nenhuma

### FORM-Q14
**Seção:** Clientes e público desejado
**Pergunta:** Quantos contatos de possíveis clientes você recebe por mês, em média?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- 0 a 5
- 6 a 15
- 16 a 30
- Mais de 30
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q15
**Seção:** Clientes e público desejado
**Pergunta:** Que tipo de cliente você quer atrair nos próximos 2 a 3 anos?
**Tipo:** SHORT_TEXT
**Obrigatória:** Sim
**Ajuda/descrição:** Uma frase basta. Ex.: "famílias construindo a primeira casa em terreno próprio".
**Lógica condicional:** Nenhuma

### FORM-Q16
**Seção:** Clientes e público desejado
**Pergunta:** Que tipos de projeto você quer priorizar?
**Tipo:** CHECKBOX
**Opções:**
- Casa térrea
- Sobrado
- Apartamento / reforma
- Comércio
- Alto padrão
- Médio padrão
- Construção nova
- Reforma
- Projetos para investidores / construtoras
**Obrigatória:** Sim
**Ajuda/descrição:** Marque os principais.
**Lógica condicional:** Nenhuma

### FORM-Q17
**Seção:** Clientes e público desejado
**Pergunta:** Qual ticket médio por projeto você gostaria de alcançar?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Até R$ 10 mil
- R$ 10 mil a R$ 25 mil
- R$ 25 mil a R$ 50 mil
- Acima de R$ 50 mil
- Ainda não sei
**Obrigatória:** Sim
**Ajuda/descrição:** Isso orienta o posicionamento do site. Não vira preço público.
**Lógica condicional:** Nenhuma

---

# Seção 5 — Portfólio

### FORM-Q18
**Seção:** Portfólio
**Pergunta:** Quantos projetos você pode divulgar publicamente hoje?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Nenhum ainda
- 1 a 3
- 4 a 10
- Mais de 10
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q19
**Seção:** Portfólio
**Pergunta:** Desses projetos, quantos foram realmente construídos?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Nenhum
- 1 a 3
- 4 a 10
- Mais de 10
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q20
**Seção:** Portfólio
**Pergunta:** Você tem fotografias profissionais de obras concluídas?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, de vários projetos
- De 1 ou 2 projetos
- Não, só fotos de celular
- Não tenho
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q21
**Seção:** Portfólio
**Pergunta:** Você tem depoimentos de clientes?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, por escrito
- Sim, em vídeo
- Alguns prints de conversa
- Não tenho
**Obrigatória:** Sim
**Ajuda/descrição:** Não precisa anexar agora.
**Lógica condicional:** Nenhuma

### FORM-Q22
**Seção:** Portfólio
**Pergunta:** Você tem autorização dos clientes para publicar os projetos (imagens e, às vezes, localização)?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, da maioria
- De alguns
- Não tenho isso formalizado
- Não sei
**Obrigatória:** Sim
**Ajuda/descrição:** A parte formal de autorização é organizada e validada profissionalmente depois.
**Lógica condicional:** Nenhuma

---

# Seção 6 — Marca e presença digital

### FORM-Q23
**Seção:** Marca e presença digital
**Pergunta:** Você já tem logotipo?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, em arquivo vetorial (AI, SVG, PDF)
- Sim, só em imagem (PNG/JPG)
- Tenho algo provisório
- Não tenho
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q24
**Seção:** Marca e presença digital
**Pergunta:** Você já tem cores e tipografia definidas para a sua marca?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, com manual de marca
- Sim, mas de forma informal
- Não
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q25
**Seção:** Marca e presença digital
**Pergunta:** Você quer usar o seu próprio nome ou criar um nome de escritório?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Meu nome (Mayara Rocha)
- Um nome de escritório
- Ainda não decidi
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q26
**Seção:** Marca e presença digital
**Pergunta:** Você já tem um domínio próprio registrado (ex.: seunome.com.br)?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim
- Não
- Não sei
**Obrigatória:** Sim
**Ajuda/descrição:** Se tiver, você pode informar qual na próxima pergunta.
**Lógica condicional:** Nenhuma

### FORM-Q27
**Seção:** Marca e presença digital
**Pergunta:** Se você já tem domínio, qual é? (opcional)
**Tipo:** SHORT_TEXT
**Obrigatória:** Não
**Ajuda/descrição:** Deixe em branco se não tiver.
**Lógica condicional:** Depende de FORM-Q26 (responder só se "Sim"). Implementada como pergunta opcional com instrução no texto — ver seção "Lógica condicional" abaixo.

### FORM-Q28
**Seção:** Marca e presença digital
**Pergunta:** Qual o seu Instagram profissional e quantos seguidores, aproximadamente? (opcional)
**Tipo:** SHORT_TEXT
**Obrigatória:** Não
**Ajuda/descrição:** Ex.: "@meuperfil — cerca de 2 mil". Deixe em branco se não usa.
**Lógica condicional:** Nenhuma

### FORM-Q29
**Seção:** Marca e presença digital
**Pergunta:** Você tem LinkedIn e o usa profissionalmente?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, uso com frequência
- Tenho, mas uso pouco
- Tenho parado
- Não tenho
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q30
**Seção:** Marca e presença digital
**Pergunta:** Você topa gravar vídeos curtos / Reels com alguma regularidade?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, tranquilamente
- Sim, com um roteiro pronto
- Prefiro não
- Não
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

---

# Seção 7 — Site

### FORM-Q31
**Seção:** Site
**Pergunta:** Na sua visão, qual é o objetivo número 1 do site?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Gerar contatos e pedidos de orçamento
- Mostrar portfólio e passar credibilidade
- Vender plantas prontas
- Divulgar serviços de design de interiores
- Ainda não sei
**Obrigatória:** Sim
**Ajuda/descrição:** Escolha o principal, mesmo que existam outros.
**Lógica condicional:** Nenhuma

### FORM-Q32
**Seção:** Site
**Pergunta:** Qual a ação principal que você quer que o visitante realize?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Chamar no WhatsApp
- Preencher um formulário de orçamento
- Comprar uma planta
- Agendar uma conversa
- Seguir no Instagram
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q33
**Seção:** Site
**Pergunta:** Quais seções são obrigatórias para você no site?
**Tipo:** CHECKBOX
**Opções:**
- Portfólio
- Serviços
- Sobre mim
- Depoimentos
- Perguntas frequentes (FAQ)
- Blog
- Loja de plantas
- Contato
- Preços
**Obrigatória:** Sim
**Ajuda/descrição:** Marque as que não podem faltar.
**Lógica condicional:** Nenhuma

### FORM-Q34
**Seção:** Site
**Pergunta:** Você já tem textos escritos (sobre, serviços) ou começamos do zero?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Já tenho boa parte
- Tenho rascunhos
- Começar do zero
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q35
**Seção:** Site
**Pergunta:** Você quer um blog para aparecer no Google?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, e posso ajudar com temas
- Sim, mas não tenho tempo de escrever
- Não por enquanto
**Obrigatória:** Não
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q36  ← PERGUNTA DE DESVIO (última da Seção 7)
**Seção:** Site
**Pergunta:** Você pretende comercializar plantas prontas pelo site?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, já no lançamento
- Sim, mas em uma segunda fase
- Ainda estou avaliando
- Não pretendo no momento
**Obrigatória:** Sim
**Ajuda/descrição:** Não tem resposta certa. Isso só define quanto vamos detalhar o assunto agora.
**Lógica condicional:**
- "Sim, já no lançamento" → ir para **Seção 8A — Plantas prontas (detalhado)**
- "Sim, mas em uma segunda fase" → ir para **Seção 8B — Plantas prontas (resumido)**
- "Ainda estou avaliando" → ir para **Seção 8B — Plantas prontas (resumido)**
- "Não pretendo no momento" → ir para **Seção 9 — 3D e Inteligência Artificial** (pula a Seção 8)

---

# Seção 8A — Plantas prontas (detalhado)

> Só é exibida se a resposta de FORM-Q36 for "Sim, já no lançamento".
> Ao final desta seção, o formulário segue para a Seção 9 (pula a Seção 8B).

### FORM-Q37
**Seção:** Plantas prontas (detalhado)
**Pergunta:** Quantas plantas você tem realmente prontas para vender hoje?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Nenhuma 100% pronta ainda
- 1 a 3
- 4 a 10
- Mais de 10
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q38
**Seção:** Plantas prontas (detalhado)
**Pergunta:** Qual o estado desses projetos?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Prontos para vender como estão
- Precisam de pequenos ajustes
- Precisam de bastante retrabalho
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q39
**Seção:** Plantas prontas (detalhado)
**Pergunta:** Que arquivos existem para essas plantas?
**Tipo:** CHECKBOX
**Opções:**
- PDF
- DWG (CAD)
- Arquivo 3D (SketchUp, Revit, etc.)
- Renders / imagens 3D
- Memorial descritivo
- Só imagens
**Obrigatória:** Sim
**Ajuda/descrição:** Marque tudo o que existe hoje.
**Lógica condicional:** Nenhuma

### FORM-Q40
**Seção:** Plantas prontas (detalhado)
**Pergunta:** Quais tamanhos e tipologias essas plantas cobrem?
**Tipo:** CHECKBOX
**Opções:**
- Térrea pequena (até 80 m²)
- Térrea média (80 a 150 m²)
- Térrea grande (acima de 150 m²)
- Sobrado
- Geminada
- Terreno pequeno (até 200 m²)
- Terreno grande (acima de 200 m²)
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q41
**Seção:** Plantas prontas (detalhado)
**Pergunta:** Quais estilos essas plantas têm?
**Tipo:** CHECKBOX
**Opções:**
- Contemporâneo
- Moderno
- Colonial / tradicional
- Industrial
- Rústico / natural
- Outro
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q42
**Seção:** Plantas prontas (detalhado)
**Pergunta:** Você aceitaria personalizar a planta depois da compra?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, como serviço pago à parte
- Sim, pequenos ajustes inclusos
- Não, vendida como está
- Ainda não sei
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q43
**Seção:** Plantas prontas (detalhado)
**Pergunta:** Qual faixa de preço você imagina por planta?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Até R$ 500
- R$ 500 a R$ 1.500
- R$ 1.500 a R$ 3.000
- R$ 3.000 a R$ 6.000
- Acima de R$ 6.000
- Não faço ideia
**Obrigatória:** Sim
**Ajuda/descrição:** É só uma estimativa para orientar o planejamento. Nada é publicado sem a sua validação.
**Lógica condicional:** Nenhuma

### FORM-Q44
**Seção:** Plantas prontas (detalhado)
**Pergunta:** A compra deve ser automática ou você quer falar com a pessoa antes?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- 100% automática
- Automática, com contato depois
- Sempre falar antes de vender
- Não sei
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q45
**Seção:** Plantas prontas (detalhado)
**Pergunta:** Sobre direitos de uso e responsabilidade técnica da planta vendida, o que faz mais sentido para você hoje?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Uso único: uma construção por compra
- Uso livre para o comprador
- Preciso de orientação para decidir
- Ainda não pensei nisso
**Obrigatória:** Sim
**Ajuda/descrição:** Esse ponto é validado profissionalmente junto ao CAU e a uma assessoria jurídica. Sua resposta aqui é só um ponto de partida.
**Lógica condicional:** Nenhuma

---

# Seção 8B — Plantas prontas (resumido)

> Exibida se a resposta de FORM-Q36 for "Sim, mas em uma segunda fase" ou "Ainda estou avaliando".
> Ao final, o formulário segue para a Seção 9.

### FORM-Q46
**Seção:** Plantas prontas (resumido)
**Pergunta:** Você já tem plantas que poderiam virar produto no futuro?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, várias
- Algumas
- Poucas
- Não ainda
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q47
**Seção:** Plantas prontas (resumido)
**Pergunta:** Qual a sua maior dúvida sobre vender plantas prontas?
**Tipo:** CHECKBOX
**Opções:**
- Preço
- Direitos autorais
- Responsabilidade técnica
- Personalização
- Suporte ao comprador
- Concorrência
- Outro
**Obrigatória:** Não
**Ajuda/descrição:** Pode marcar mais de uma. Os pontos legais são validados profissionalmente.
**Lógica condicional:** Nenhuma

---

# Seção 9 — 3D e Inteligência Artificial

### FORM-Q48
**Seção:** 3D e Inteligência Artificial
**Pergunta:** Como você avalia a qualidade atual dos seus renders?
**Tipo:** LINEAR_SCALE
**Escala:** 1 a 10 (1 = "bem básica", 10 = "nível de revista")
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q49
**Seção:** 3D e Inteligência Artificial
**Pergunta:** Você tem interesse em vídeos de "passeio" pelo imóvel (câmera/drone percorrendo a casa)?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, muito
- Talvez
- Não
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q50
**Seção:** 3D e Inteligência Artificial
**Pergunta:** Qual o seu interesse em usar imagens/vídeos gerados por Inteligência Artificial no marketing?
**Tipo:** LINEAR_SCALE
**Escala:** 1 a 5 (1 = "nenhum", 5 = "muito")
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q51
**Seção:** 3D e Inteligência Artificial
**Pergunta:** Você autoriza usar os seus projetos como base em ferramentas de IA (imagem, vídeo, texto)?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim
- Sim, desde que anonimizados (sem nome/endereço do cliente)
- Preciso pensar melhor
- Não
**Obrigatória:** Sim
**Ajuda/descrição:** Você pode mudar de ideia depois. Isso é registrado formalmente e validado profissionalmente.
**Lógica condicional:** Nenhuma

### FORM-Q52
**Seção:** 3D e Inteligência Artificial
**Pergunta:** Algum projeto precisa ser anonimizado (sem nome ou endereço do cliente) antes de qualquer uso?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Sim, vários
- Alguns
- Não
- Não sei
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

---

# Seção 10 — Marketing e objetivos

### FORM-Q53
**Seção:** Marketing e objetivos
**Pergunta:** Qual orçamento mensal você poderia investir em anúncios?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Ainda nenhum
- Até R$ 500
- R$ 500 a R$ 1.500
- R$ 1.500 a R$ 3.000
- Acima de R$ 3.000
**Obrigatória:** Sim
**Ajuda/descrição:** Nada será investido agora. É só para planejar.
**Lógica condicional:** Nenhuma

### FORM-Q54
**Seção:** Marketing e objetivos
**Pergunta:** Qual o objetivo principal dos anúncios, quando começarem?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Contatos para projetos
- Vendas de plantas
- Ganhar seguidores
- Autoridade e reconhecimento
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q55
**Seção:** Marketing e objetivos
**Pergunta:** Qual a métrica mais importante para você medir o sucesso do site?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Número de contatos / leads
- Orçamentos enviados
- Contratos fechados
- Vendas de plantas
- Faturamento
- Seguidores e alcance
**Obrigatória:** Sim
**Ajuda/descrição:** Escolha a principal.
**Lógica condicional:** Nenhuma

### FORM-Q56
**Seção:** Marketing e objetivos
**Pergunta:** Quantos contatos de clientes por mês seriam um bom resultado?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- Até 5
- 6 a 15
- 16 a 30
- Mais de 30
**Obrigatória:** Sim
**Ajuda/descrição:** —
**Lógica condicional:** Nenhuma

### FORM-Q57
**Seção:** Marketing e objetivos
**Pergunta:** Quantos projetos novos por mês você quer fechar?
**Tipo:** MULTIPLE_CHOICE
**Opções:**
- 1 a 2
- 3 a 4
- 5 a 6
- Mais de 6
**Obrigatória:** Sim
**Ajuda/descrição:** Considere a sua capacidade real de entrega.
**Lógica condicional:** Nenhuma

---

# Seção 11 — Encerramento

### FORM-Q58
**Seção:** Encerramento
**Pergunta:** Tem algo importante sobre o seu trabalho ou seus objetivos que a gente não perguntou?
**Tipo:** PARAGRAPH
**Obrigatória:** Não
**Ajuda/descrição:** Campo livre. Pode deixar em branco.
**Lógica condicional:** Nenhuma

### FORM-Q59
**Seção:** Encerramento
**Pergunta:** Qual a melhor forma e horário para uma conversa rápida de complemento?
**Tipo:** SHORT_TEXT
**Obrigatória:** Não
**Ajuda/descrição:** Ex.: "WhatsApp, à tarde" ou "ligação, de manhã".
**Lógica condicional:** Nenhuma

---

# Mensagem final do formulário (confirmação)

> Obrigado, Mayara! Suas respostas vão direto para o planejamento da próxima fase do projeto. Se algum ponto precisar de mais detalhe, a gente resolve numa conversa rápida. 🙌

---

# Lógica condicional — resumo de implementação

| Situação | Como é implementada no Google Forms |
|---|---|
| **Desvio principal (FORM-Q36 — plantas prontas)** | Navegação nativa por resposta (`setChoices` com destino de página). FORM-Q36 é a última pergunta da Seção 7. Cada opção leva a uma página diferente (8A, 8B ou 9). |
| **Seção 8A não deve cair na 8B** | A página 8A tem "ir para" configurado para a Seção 9 (`setGoToPage`), pulando a 8B. |
| **Seção 8B → Seção 9** | Fluxo natural (página seguinte). |
| **"Não pretendo no momento"** | FORM-Q36 envia direto para a Seção 9. Caminho curto: a pessoa não vê nenhuma pergunta de plantas. |
| **Domínio (FORM-Q26 → FORM-Q27)** | **Não** vira página separada (evita fragmentar o formulário). FORM-Q27 é opcional, com instrução "Se você já tem domínio, qual é?". Ver limitação abaixo. |
| **Instagram / LinkedIn / vídeos / tráfego pago** | Tratados como perguntas objetivas diretas (com opção "Não tenho" / "Não"), sem ramificação de página, para não deixar o formulário cansativo. |

### Limitação assumida (documentada, não disfarçada)

O Google Forms via Apps Script só faz **navegação condicional confiável a partir de perguntas de múltipla escolha que sejam a última pergunta de uma página**. Micro-condicionais do tipo "mostrar o campo X só se marcou Sim em Y" (ex.: FORM-Q27 depender de FORM-Q26) **não** são implementadas como ramificação — seria necessário criar uma página só para isso, o que aumenta o cansaço sem ganho real. Solução adotada: a pergunta dependente vira **opcional** e o enunciado deixa claro quando responder. Nenhum ajuste manual é obrigatório; se no futuro quiser transformar isso em ramificação, basta adicionar uma página antes de FORM-Q27 no editor do Forms.

---

# Materiais solicitados fora do formulário

> **Não** pedir upload dentro do Google Forms nesta versão (evita exigência de login e trava o preenchimento pelo celular). Solicitar depois, por WhatsApp ou pasta compartilhada, na fase de produção de conteúdo:

- Logotipo (arquivo vetorial e PNG) e manual de marca, se houver.
- Renders e imagens 3D em alta resolução, organizados por projeto.
- Fotografias profissionais de obras concluídas.
- Plantas e materiais técnicos dos projetos que entrarão no portfólio.
- Lista dos projetos a divulgar, com status (construído / render) e link se houver.
- Depoimentos de clientes (texto, print ou vídeo) e respectivas autorizações. `[VALIDAR PROFISSIONALMENTE]`
- Autorizações de imagem/uso dos clientes para cada projeto publicado. `[VALIDAR PROFISSIONALMENTE]`
- Referências visuais (sites, perfis, prints) que a Mayara admira.
- Acessos/links: domínio registrado, Google Analytics, Instagram, LinkedIn (quando for a hora).
