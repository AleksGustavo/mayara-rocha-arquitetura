# ETAPA 02 — Guia do formulário de validação do público-alvo

**Objetivo:** rodar um script e obter um Google Forms pronto para enviar à Mayara — **sem cadastrar perguntas manualmente**.

**Tempo de setup:** ~5 minutos.
**Pré-requisito:** estar logado em uma Conta Google (onde o formulário e as respostas devem ficar).
**Arquivo do script:** [`scripts/google-forms/create-stage-02-target-audience-form.gs`](../../scripts/google-forms/create-stage-02-target-audience-form.gs)
**Função a executar:** `createTargetAudienceForm`

> **Nota sobre o local do script:** o prompt sugeriu `scripts/create-stage-02-target-audience-form.gs`. Ele foi colocado em `scripts/google-forms/` para ficar junto do gerador da ETAPA 01 (`create-discovery-form.gs`), que é da mesma natureza. Nada muda no uso.

---

## Passo a passo

### Passo 1 — Abrir o Apps Script
Acesse **https://script.google.com/**.

### Passo 2 — Criar um novo projeto
Clique em **Novo projeto**. Abre um editor com o arquivo `Code.gs`.

### Passo 3 — Colar o código
No `Code.gs`, selecione tudo (`Ctrl+A`), apague, e cole **todo** o conteúdo de
`scripts/google-forms/create-stage-02-target-audience-form.gs`. Salve (`Ctrl+S`).

> Opcional: renomeie o projeto para `Form ETAPA 02 — Público-alvo — Mayara Rocha`.

### Passo 4 — Executar a função principal
No seletor de função (barra superior), escolha **`createTargetAudienceForm`** e clique em **Executar** (▶).

> A trava `CONFIG.CONFIRM_CREATION` já vem como `true`. Se estiver `false`, a execução para com uma mensagem pedindo para colocar `true`.

### Passo 5 — Autorizar as permissões
Na primeira execução o Google pede autorização:

1. **Revisar permissões** → escolha sua conta.
2. "O Google não verificou este app" → **Avançado** → **Acessar (não seguro)**.
   (É seguro: o script é seu, roda na sua conta, não envia dados para fora. Ele pede
   acesso ao **Google Forms** e ao **Google Sheets/Drive** apenas para **criar** o
   formulário e a planilha de respostas.)
3. **Permitir**.

O script roda de novo automaticamente após a autorização.

### Passo 6 — Localizar as URLs
Menu **Ver → Registros** (ou `Ctrl+Enter`). Você verá:

```text
============== FORMULARIO DA ETAPA 02 CRIADO COM SUCESSO ==============
Titulo........: ETAPA 02 — Validação do Público-alvo | Mayara Rocha Arquitetura
ID do form....: 1AbC...
URL de edicao.: https://docs.google.com/forms/d/1AbC.../edit
URL de resposta (enviar para a Mayara): https://docs.google.com/forms/d/e/1FAIpQL.../viewform
Planilha de respostas: https://docs.google.com/spreadsheets/d/1XyZ.../edit
=====================================================================
```

- **URL de edição** — para você revisar/ajustar.
- **URL de resposta** — a que você envia para a Mayara.
- **Planilha de respostas** — onde as respostas cairão (uma aba nova é criada na primeira resposta).

Se a linha "Planilha de respostas" disser que não foi criada, vincule à mão:
formulário → aba **Respostas** → ícone verde de planilha → **Criar planilha**.

### Passo 7 — Revisar o formulário antes de enviar
Abra a **URL de edição** e confira:

- título e introdução corretos;
- 5 seções na ordem: *Seus clientes hoje* → *Arquitetura, interiores e plantas prontas* → *Atendimento e localização* → *Direção que você quer para o negócio* → *Perguntas extras (opcionais)*;
- as perguntas com "Outro" habilitado (Q2, Q4, Q5, Q6, Q7, Q8, Q10);
- as obrigatórias marcadas (ver tabela no fim deste guia);
- barra de progresso ligada.

### Passo 8 — Testar uma resposta
Abra a **URL de resposta**, responda o formulário inteiro uma vez (pelo **celular**, de preferência) e envie. Confira se a resposta apareceu na **planilha**.

### Passo 9 — Apagar a resposta de teste
Na planilha, apague a linha da resposta de teste. (Ou, no formulário → aba Respostas → menu ⋮ → **Excluir todas as respostas** enquanto só houver a de teste.)

### Passo 10 — Enviar para a Mayara
Envie **somente a URL de resposta** (WhatsApp/e-mail). Ela **não** precisa de conta Google nem instalar nada.

> Depois de tudo certo, abra o script e volte `CONFIG.CONFIRM_CREATION` para `false` para não gerar formulários/planilhas duplicados. **Cada execução cria novos** — o script nunca altera nem apaga os existentes.

---

## Checklist de revisão (faça no celular)

- [ ] Formulário abre pela URL de resposta.
- [ ] Título: **ETAPA 02 — Validação do Público-alvo | Mayara Rocha Arquitetura**.
- [ ] Introdução correta; tempo estimado 5–8 min visível.
- [ ] 5 seções na ordem certa.
- [ ] Perguntas obrigatórias impedem o avanço quando vazias.
- [ ] Caixas de seleção permitem marcar várias opções.
- [ ] Campo "Outro" aparece em Q2, Q4, Q5, Q6, Q7, Q8, Q10.
- [ ] Nenhuma pergunta pede número de mercado, idade/renda de "público em geral", etc.
- [ ] Q11 deixa clara a escolha entre plantas prontas × arquitetura × interiores.
- [ ] Seção 5 fica claramente marcada como opcional.
- [ ] Mensagem final aparece ao enviar.
- [ ] Resposta de teste chegou na planilha (e foi apagada).
- [ ] Tempo real de preenchimento ficou perto de 5–8 min.

---

## O que cada bloco resolve do Gate intermediário (doc `04`)

| Seção / Pergunta | Lacuna do Gate que ajuda a fechar |
|---|---|
| Q1 | Características recorrentes dos clientes atuais |
| Q2, Q2b | Necessidades e motivos de procura |
| Q3, Q3b | Diferença de perfil entre arquitetura e interiores → sustenta S02 × S03 |
| Q4 | Dúvidas antes de contratar → critérios de decisão / objeções |
| Q5 | Motivos de não fechamento → objeções |
| Q6, Q6b | Interesse percebido em plantas prontas → sustenta S01 e a hipótese H7 |
| Q7, Q7b | Cliente que a Mayara prefere → ajuda a definir público primário |
| Q8, Q8b | Rentabilidade percebida por tipo de trabalho → tensão S01/S02/S03 |
| Q9 | Origem geográfica dos clientes → geografia |
| Q10, Q10b | Limites do atendimento remoto por serviço → geografia / alcance |
| Q11, Q11b | **Direção estratégica** entre plantas prontas, arquitetura e interiores → destrava a priorização definitiva |
| Q12 | Públicos que ela não deseja atrair → recorte negativo do público-alvo |
| Q13 | Interesse em upsell pós-compra (relaciona-se a OD-004) |
| Q14 | Estilos além do contemporâneo (hipótese H6) |
| Q15 | Projeto do portfólio que representa o cliente desejado (insumo para a ETAPA 03 — Personas) |

---

## Estrutura do formulário

| Métrica | Valor |
|---|---|
| Seções | 5 (4 principais + 1 opcional) |
| Perguntas obrigatórias | 11 (Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11) |
| Perguntas opcionais | 11 (Q2b, Q3b, Q6b, Q7b, Q8b, Q10b, Q11b, Q12, Q13, Q14, Q15) |
| Total de itens | 22 |
| Abertas (parágrafo) | Q1 e Q9 obrigatórias; as demais abertas são opcionais |
| Tempo estimado | 5–8 minutos (até ~9 se responder todas as opcionais) |
| Navegação condicional | Nenhuma (formulário linear) |
