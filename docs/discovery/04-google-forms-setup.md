# 04 — Guia de execução do Google Forms

**Objetivo:** rodar um script e obter um Google Forms pronto para enviar à Mayara, **sem cadastrar perguntas manualmente**.

**Tempo estimado:** 5 minutos.
**Pré-requisito:** estar logado em uma Conta Google (a mesma onde o formulário e as respostas devem ficar).
**Arquivo do script:** [`scripts/google-forms/create-discovery-form.gs`](../../scripts/google-forms/create-discovery-form.gs)
**Função a executar:** `createDiscoveryForm`

---

## Passo a passo

### Passo 1 — Abrir o Apps Script
Acesse: **https://script.google.com/**

### Passo 2 — Criar um novo projeto
Clique em **Novo projeto**. Vai abrir um editor com um arquivo `Code.gs`.

### Passo 3 — Apagar o código inicial
No arquivo `Code.gs`, selecione tudo (`Ctrl+A`) e apague.

### Passo 4 — Colar o script
Abra `scripts/google-forms/create-discovery-form.gs` deste repositório, copie **todo** o conteúdo e cole no `Code.gs`. Salve (`Ctrl+S`).

> Opcional: renomeie o projeto para `Discovery Form — Mayara Rocha` (canto superior esquerdo).

### Passo 5 — Executar a função principal
Na barra do editor, no seletor de função, escolha **`createDiscoveryForm`** e clique em **Executar** (▶).

> A trava `CONFIG.CONFIRM_CREATION` já vem como `true` no script, então ele vai criar o formulário. Se estiver `false`, a execução para com uma mensagem pedindo para colocar `true`.

### Passo 6 — Autorizar as permissões
Na primeira execução o Google pede autorização:

1. **Revisar permissões** → escolha sua conta.
2. Aparece "O Google não verificou este app" → **Avançado** → **Acessar Discovery Form (não seguro)**.
   (É seguro: o script é seu, roda na sua conta e não envia dados para fora. Ele pede acesso ao Google Forms/Drive apenas para **criar** o formulário.)
3. **Permitir**.

O script executa de novo automaticamente após a autorização.

### Passo 7 — Abrir os logs e copiar as URLs
Menu **Ver → Registros** (ou `Ctrl+Enter`). Você verá um bloco assim:

```text
==================== FORMULARIO CRIADO COM SUCESSO ====================
Titulo........: Discovery — Mayara Rocha Arquitetura
ID............: 1AbC...xyz
URL de edicao.: https://docs.google.com/forms/d/1AbC...xyz/edit
URL de resposta (enviar para a Mayara): https://docs.google.com/forms/d/e/1FAIpQL.../viewform
=====================================================================
```

- **URL de edição** — para você revisar/ajustar o formulário.
- **URL de resposta** — é a que você envia para a Mayara.
- **ID** — identificador do formulário (guarde para referência).

O formulário também já aparece no seu Google Drive e no Google Forms.

### Passo 8 — Fazer uma resposta de teste
Abra a **URL de resposta**, responda o formulário inteiro uma vez (inclusive testando os dois caminhos de "plantas prontas" — ver checklist abaixo) e envie. Confira em **Respostas**, na URL de edição, se a resposta de teste chegou. Depois apague a resposta de teste.

### Passo 9 — Enviar para a cliente
Envie **somente a URL de resposta** para a Mayara (WhatsApp, e-mail). Não é preciso ela ter conta Google nem instalar nada.

> Depois de tudo certo, abra o script e volte `CONFIG.CONFIRM_CREATION` para `false`. Assim, uma execução acidental não cria formulários duplicados. **Cada execução cria um formulário novo** — o script nunca altera ou apaga formulários já existentes.

---

## Checklist de teste do formulário

Faça no navegador do computador **e** no celular.

- [ ] O formulário abre pela URL de resposta.
- [ ] O título está correto: **Discovery — Mayara Rocha Arquitetura**.
- [ ] A introdução (texto de boas-vindas) aparece e está correta.
- [ ] As seções aparecem nesta ordem: Sobre você → Seus serviços → Clientes e público desejado → Portfólio → Marca e presença digital → Site → (Plantas) → 3D e Inteligência Artificial → Marketing e objetivos → Encerramento.
- [ ] Perguntas obrigatórias impedem o avanço quando vazias.
- [ ] Perguntas de **múltipla escolha** funcionam (uma opção só).
- [ ] **Caixas de seleção** permitem marcar várias opções.
- [ ] As **escalas** (renders 1–10; interesse em IA 1–5) aparecem com os rótulos nas pontas.
- [ ] **Lógica das plantas — caminho curto:** ao responder **"Não pretendo no momento"** na pergunta "Você pretende comercializar plantas prontas pelo site?", o formulário **pula direto** para "3D e Inteligência Artificial" (nenhuma pergunta de plantas aparece).
- [ ] **Lógica das plantas — caminho resumido:** ao responder **"Sim, mas em uma segunda fase"** ou **"Ainda estou avaliando"**, aparecem **apenas 2 perguntas** de plantas (seção "resumido") e depois segue para "3D e Inteligência Artificial".
- [ ] **Lógica das plantas — caminho detalhado:** ao responder **"Sim, já no lançamento"**, aparecem as **9 perguntas** da seção "Plantas prontas (detalhado)" e, ao final, o formulário vai para "3D e Inteligência Artificial" (a seção "resumido" **não** aparece).
- [ ] O formulário funciona bem no **celular** (rolagem, toque nas opções, escalas).
- [ ] Tempo de preenchimento no caminho comum ficou em torno de **12–15 min** (até ~18 min no caminho detalhado de plantas).
- [ ] Ao enviar, aparece a **mensagem final** ("Obrigado, Mayara! ...").
- [ ] A **resposta de teste** aparece na aba **Respostas** (e foi apagada depois).

---

## Ajustes manuais opcionais (não obrigatórios)

O script já entrega o formulário funcional e com a ramificação de plantas configurada. Estes ajustes são só se você quiser refinar:

- **Campo "qual é o domínio" condicionado ao "Sim":** hoje ele é uma pergunta **opcional** com instrução no enunciado. Se quiser que só apareça para quem respondeu "Sim" em "você tem domínio registrado?", crie no editor uma página entre essas duas perguntas e configure a navegação por resposta. (Detalhe da limitação em [`03-client-questionnaire.md`](03-client-questionnaire.md), seção "Lógica condicional".)
- **Imagem de cabeçalho / tema:** dá para adicionar no editor do Forms (Personalizar tema) sem mexer no script.
- **Reordenar perguntas:** arraste no editor. Se for reordenar a pergunta de desvio ("plantas prontas"), ela precisa continuar sendo a **última** da sua página para a ramificação funcionar.

---

## Se precisar recriar o formulário

1. Abra o script no Apps Script.
2. Se `CONFIG.CONFIRM_CREATION` estiver `false`, coloque `true`.
3. Execute `createDiscoveryForm` de novo — um **novo** formulário é criado (o anterior não é tocado).
4. Apague o formulário antigo manualmente pelo Google Drive, se não for mais usar.
5. Volte `CONFIG.CONFIRM_CREATION` para `false`.
