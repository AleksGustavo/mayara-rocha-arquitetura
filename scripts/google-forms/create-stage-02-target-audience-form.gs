/**
 * create-stage-02-target-audience-form.gs
 * -----------------------------------------------------------------------------
 * Projeto: Mayara Rocha Arquitetura — Website e Ecossistema Digital
 * ETAPA 02 — Público-alvo
 *
 * O QUE ESTE SCRIPT FAZ
 *   Cria automaticamente, no Google Forms, o questionário
 *   "ETAPA 02 — Validação do Público-alvo | Mayara Rocha Arquitetura",
 *   a partir da especificação de docs/target-audience/04-validation-questions.md
 *   (perguntas reescritas em tom conversacional). Também cria uma planilha e a
 *   define como destino das respostas.
 *
 * LOCAL DO ARQUIVO
 *   Mantido em scripts/google-forms/ para ficar junto do gerador de formulário
 *   da ETAPA 01 (create-discovery-form.gs) — mesma natureza (Google Apps Script,
 *   FormApp). O caminho citado no prompt (scripts/) foi ajustado para essa
 *   convenção já existente no repositório.
 *
 * COMO USAR (passo a passo completo em docs/target-audience/05-form-guide.md)
 *   1. Abra https://script.google.com/ e crie um novo projeto.
 *   2. Apague o Code.gs e cole TODO este arquivo.
 *   3. Deixe CONFIG.CONFIRM_CREATION = true.
 *   4. Selecione a função  createTargetAudienceForm  e clique em Executar.
 *   5. Autorize as permissões (Google Forms + Google Sheets / Drive).
 *   6. Abra "Registro de execução" (Ver > Registros) e copie as 3 URLs.
 *   7. Revise o formulário, faça 1 resposta de teste e apague-a.
 *   8. Envie apenas a URL pública para a Mayara.
 *
 * IMPORTANTE
 *   - CADA EXECUÇÃO CRIA UM NOVO FORMULÁRIO E UMA NOVA PLANILHA. O script nunca
 *     apaga, edita ou acessa formulários/planilhas existentes.
 *   - Depois de gerar com sucesso, volte CONFIG.CONFIRM_CREATION para false para
 *     não criar duplicatas por engano.
 *   - Sem bibliotecas externas, npm, APIs de terceiros, credenciais ou chamadas HTTP.
 *   - O script NÃO envia nada para a Mayara. O envio é manual, após revisão.
 *   - Este formulário é 100% linear (sem navegação condicional), então a
 *     pendência técnica OD-012 do Discovery não se aplica aqui.
 * -----------------------------------------------------------------------------
 */

/** Configuração de segurança / execução. */
var CONFIG = {
  FORM_TITLE: 'ETAPA 02 — Validação do Público-alvo | Mayara Rocha Arquitetura',
  RESPONSES_SPREADSHEET_NAME: 'ETAPA 02 — Respostas Público-alvo — Mayara Rocha',
  // Trava de segurança. Enquanto for false, o script não cria nada.
  CONFIRM_CREATION: true
};

/* ===========================================================================
 * 1. CONFIGURAÇÃO DO FORMULÁRIO (fonte única de verdade)
 *    Espelha docs/target-audience/04-validation-questions.md, em tom conversacional.
 * ---------------------------------------------------------------------------
 * Tipos por questão: 'PARAGRAPH_TEXT' | 'SHORT_TEXT' | 'CHECKBOX' | 'MULTIPLE_CHOICE'
 * Campos de uma questão:
 *   code        (string)  identificador (ex.: 'Q1') — só para rastreio
 *   type        (string)  um dos tipos acima
 *   title       (string)  enunciado exibido para a Mayara
 *   help        (string)  texto de ajuda / descrição (opcional)
 *   required    (boolean)
 *   options     (string[]) para CHECKBOX / MULTIPLE_CHOICE
 *   otherOption (boolean)  habilita o campo "Outro" (CHECKBOX / MULTIPLE_CHOICE)
 * Campo de seção:
 *   title, description, questions[]
 * =========================================================================== */

var FORM_CONFIG = {
  title: CONFIG.FORM_TITLE,

  description: [
    'Estamos na segunda etapa do desenvolvimento do seu projeto digital: a definicao do publico-alvo.',
    '',
    'O Discovery ja nos mostrou bastante sobre o negocio. Agora precisamos entender um pouco melhor quem sao os clientes que voce ja atende, quais gostaria de atrair e como eles normalmente chegam ate voce.',
    '',
    'Nao existem respostas certas ou erradas. Responda com base na sua experiencia.',
    '',
    'Tempo estimado: 5 a 8 minutos.'
  ].join('\n'),

  confirmationMessage: [
    'Obrigado! Suas respostas vao nos ajudar a concluir a definicao do publico-alvo e orientar',
    'as proximas etapas do site, da comunicacao e da estrategia de divulgacao.'
  ].join(' '),

  sections: [
    /* ---------------------------------------------------- SEÇÃO 1 */
    {
      title: 'Seus clientes hoje',
      description: 'Pensando nos clientes que voce ja atendeu ate agora.',
      questions: [
        {
          code: 'Q1', type: 'PARAGRAPH_TEXT', required: true,
          title: 'Pensando nos clientes que voce ja atendeu, existe alguma caracteristica que costuma se repetir?',
          help: 'Pode ser o momento em que estao vivendo, o tipo de imovel, se estao construindo pela primeira vez, reformando, comprando apartamento, o nivel de investimento na obra, ou qualquer outra coisa que voce perceba.'
        },
        {
          code: 'Q2', type: 'CHECKBOX', required: true, otherOption: true,
          title: 'Quais sao os motivos mais comuns que fazem uma pessoa procurar voce?',
          help: 'Marque quantos quiser.',
          options: [
            'Vai construir uma casa do zero',
            'Comprou um imovel e quer fazer alteracoes',
            'Quer reformar',
            'Quer planejar os interiores',
            'Quer melhorar ou criar uma fachada',
            'Precisa visualizar o projeto em 3D',
            'Procura uma solucao mais economica',
            'Procura uma solucao personalizada'
          ]
        },
        {
          code: 'Q2b', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Se quiser, conte quais desses motivos aparecem com mais frequencia.'
        },
        {
          code: 'Q3', type: 'MULTIPLE_CHOICE', required: true,
          title: 'Na sua experiencia, quem procura projeto arquitetonico costuma ter o mesmo perfil de quem procura design de interiores?',
          options: [
            'Sim, geralmente e o mesmo tipo de cliente',
            'Sao parecidos, mas existem algumas diferencas',
            'Sao publicos bem diferentes',
            'Ainda nao tenho experiencia suficiente para perceber'
          ]
        },
        {
          code: 'Q3b', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Se voce percebe diferencas entre esses dois publicos, quais sao?'
        },
        {
          code: 'Q4', type: 'CHECKBOX', required: true, otherOption: true,
          title: 'Quais duvidas aparecem com mais frequencia antes de uma pessoa contratar voce?',
          help: 'Marque quantas quiser.',
          options: [
            'Preco',
            'Prazo',
            'O que esta incluso',
            'Quantidade de alteracoes / revisoes',
            'Como funciona o processo',
            'Forma de pagamento',
            'Atendimento presencial ou online',
            'Aprovacao / documentacao',
            'Execucao da obra'
          ]
        },
        {
          code: 'Q5', type: 'CHECKBOX', required: true, otherOption: true,
          title: 'Quando alguem pede orcamento e acaba nao contratando, qual costuma ser o motivo?',
          help: 'Marque quantos quiser.',
          options: [
            'Preco',
            'A pessoa ainda nao estava pronta para comecar',
            'Escolheu outro profissional',
            'Mudou ou adiou o projeto',
            'Prazo',
            'Queria algo fora do servico que ofereco',
            'Nao sei / normalmente nao recebo esse retorno'
          ]
        }
      ]
    },

    /* ---------------------------------------------------- SEÇÃO 2 */
    {
      title: 'Arquitetura, interiores e plantas prontas',
      description: '',
      questions: [
        {
          code: 'Q6', type: 'CHECKBOX', required: true, otherOption: true,
          title: 'Pensando nas conversas que voce ja teve, que tipo de pessoa parece demonstrar mais interesse em comprar uma planta pronta?',
          help: 'Marque quantos quiser.',
          options: [
            'Quem vai construir a primeira casa',
            'Quem ja possui um terreno',
            'Quem quer economizar na etapa de projeto',
            'Quem tem pressa para comecar',
            'Quem nao precisa de um projeto totalmente personalizado',
            'Pessoas de fora de Leme',
            'Ainda nao percebi um padrao'
          ]
        },
        {
          code: 'Q6b', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Se voce lembrar de algum caso ou exemplo, pode contar aqui.'
        },
        {
          code: 'Q7', type: 'CHECKBOX', required: true, otherOption: true,
          title: 'Se voce pudesse escolher, qual tipo de cliente ou projeto gostaria de receber com mais frequencia?',
          help: 'Marque quantos quiser.',
          options: [
            'Compradores de plantas prontas',
            'Projeto arquitetonico de casa terrea',
            'Projeto arquitetonico de sobrado',
            'Apartamentos / reformas',
            'Design de interiores',
            'Fachadas',
            'Visualizacao / renderizacao 3D'
          ]
        },
        {
          code: 'Q7b', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Por que voce gostaria de receber mais desse tipo de cliente ou projeto?'
        },
        {
          code: 'Q8', type: 'CHECKBOX', required: true, otherOption: true,
          title: 'Pela sua experiencia, quais tipos de trabalho costumam compensar mais financeiramente, considerando o valor recebido e o tempo / esforco necessario?',
          help: 'Nao precisa informar valores. Marque quantos quiser.',
          options: [
            'Projeto arquitetonico',
            'Design de interiores',
            'Fachadas',
            'Renderizacao / 3D',
            'Plantas prontas (considerando potencial de vendas em volume)',
            'Ainda nao consigo avaliar'
          ]
        },
        {
          code: 'Q8b', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Se quiser, explique rapidamente a sua escolha.'
        }
      ]
    },

    /* ---------------------------------------------------- SEÇÃO 3 */
    {
      title: 'Atendimento e localizacao',
      description: '',
      questions: [
        {
          code: 'Q9', type: 'PARAGRAPH_TEXT', required: true,
          title: 'Alem de Leme, de quais cidades ou regioes seus clientes ja vieram?',
          help: 'Se a maioria for de Leme, pode escrever isso normalmente.'
        },
        {
          code: 'Q10', type: 'CHECKBOX', required: true, otherOption: true,
          title: 'Pensando na qualidade do seu trabalho, quais servicos voce acredita que conseguiria realizar totalmente a distancia?',
          help: 'Marque quantos quiser.',
          options: [
            'Venda de plantas prontas',
            'Pequenos ajustes em plantas prontas',
            'Projeto arquitetonico',
            'Design de interiores',
            'Fachadas',
            'Renderizacao / 3D',
            'Nenhum deles totalmente a distancia',
            'Ainda preciso avaliar'
          ]
        },
        {
          code: 'Q10b', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Existe algum servico que, para voce, obrigatoriamente precisa de atendimento presencial? Qual e por que?'
        }
      ]
    },

    /* ---------------------------------------------------- SEÇÃO 4 */
    {
      title: 'Direcao que voce quer para o negocio',
      description: 'Esta parte ajuda a definir a prioridade entre plantas prontas, projeto arquitetonico e design de interiores.',
      questions: [
        {
          code: 'Q11', type: 'MULTIPLE_CHOICE', required: true,
          title: 'Pensando nos proximos anos, qual dessas opcoes mais se aproxima do negocio que voce gostaria de construir?',
          options: [
            'Quero que a venda de plantas prontas seja a principal fonte de crescimento do negocio.',
            'Quero continuar tendo projetos arquitetonicos personalizados como principal atividade, usando as plantas prontas como uma renda complementar.',
            'Quero aumentar principalmente os projetos de design de interiores.',
            'Quero equilibrar plantas prontas, projetos arquitetonicos e interiores.',
            'Ainda nao sei e gostaria de decidir isso com base nos resultados do site e das vendas.'
          ]
        },
        {
          code: 'Q11b', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Se quiser, explique como voce imagina esse equilibrio.'
        },
        {
          code: 'Q12', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Existe algum tipo de cliente, projeto ou situacao que voce prefere nao atender?',
          help: 'Ja sabemos que comercio e foco B2B nao sao prioridades. Aqui voce pode citar outros casos, comportamentos ou tipos de projeto que gostaria de evitar.'
        }
      ]
    },

    /* ---------------------------------------------------- SEÇÃO 5 (opcional) */
    {
      title: 'Perguntas extras (opcionais)',
      description: 'Nenhuma pergunta aqui e obrigatoria. Se estiver sem tempo, pode enviar o formulario direto.',
      questions: [
        {
          code: 'Q13', type: 'CHECKBOX', required: false, otherOption: false,
          title: 'Voce gostaria de oferecer ativamente servicos extras para quem comprar uma planta pronta?',
          options: [
            'Fachada personalizada',
            'Renderizacao / 3D personalizada',
            'Design de interiores',
            'Alteracoes maiores / adaptacao da planta mediante novo orcamento',
            'Nao quero trabalhar com servicos extras nesse momento',
            'Ainda quero avaliar'
          ]
        },
        {
          code: 'Q14', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Ha algum estilo arquitetonico, alem do contemporaneo, que voce gostaria de trabalhar futuramente nas plantas prontas?'
        },
        {
          code: 'Q15', type: 'PARAGRAPH_TEXT', required: false,
          title: 'Existe algum projeto do seu portfolio que represente muito bem o tipo de cliente ou trabalho que voce gostaria de atrair?',
          help: 'Pode citar o projeto; nao e necessario enviar os arquivos agora.'
        }
      ]
    }
  ]
};

/* ===========================================================================
 * 2. FUNÇÃO PRINCIPAL
 * =========================================================================== */

/**
 * Função a executar no editor do Apps Script.
 * Cria um novo Google Forms completo + planilha de respostas vinculada.
 */
function createTargetAudienceForm() {
  if (CONFIG.CONFIRM_CREATION !== true) {
    throw new Error(
      'CONFIG.CONFIRM_CREATION esta como false. Coloque true para criar o formulario ' +
      'e execute novamente. Depois de criar, volte para false para nao gerar duplicatas.'
    );
  }

  var form = createForm(FORM_CONFIG);

  FORM_CONFIG.sections.forEach(function (section) {
    addSection(form, section.title, section.description);
    section.questions.forEach(function (q) {
      addQuestion(form, q);
    });
  });

  var spreadsheetUrl = attachResponsesSpreadsheet(form);

  logInfo(form, spreadsheetUrl);
  return form;
}

/* ===========================================================================
 * 3. FUNÇÕES REUTILIZÁVEIS
 * =========================================================================== */

/** Cria o formulario base (titulo, descricao, mensagem final, opcoes gerais). */
function createForm(config) {
  var form = FormApp.create(config.title);
  form.setTitle(config.title);
  form.setDescription(config.description);
  form.setConfirmationMessage(config.confirmationMessage);

  // Opcoes leves; se algum metodo for descontinuado, e ignorado sem interromper.
  trySet(function () { form.setCollectEmail(false); });
  trySet(function () { form.setRequireLogin(false); });
  trySet(function () { form.setProgressBar(true); });
  trySet(function () { form.setAllowResponseEdits(true); });
  trySet(function () { form.setShowLinkToRespondAgain(false); });
  trySet(function () { form.setLimitOneResponsePerUser(false); });

  return form;
}

/** Executa uma configuracao opcional; loga aviso se indisponivel. */
function trySet(fn) {
  try {
    fn();
  } catch (e) {
    Logger.log('Aviso: opcao de formulario ignorada (' + e + ')');
  }
}

/** Adiciona uma nova pagina/secao. */
function addSection(form, title, description) {
  var pageBreak = form.addPageBreakItem().setTitle(title);
  if (description) {
    pageBreak.setHelpText(description);
  }
  return pageBreak;
}

/** Dispatcher: cria a pergunta conforme o tipo. */
function addQuestion(form, q) {
  switch (q.type) {
    case 'PARAGRAPH_TEXT':  return addParagraph(form, q);
    case 'SHORT_TEXT':      return addText(form, q);
    case 'CHECKBOX':        return addCheckbox(form, q);
    case 'MULTIPLE_CHOICE': return addMultipleChoice(form, q);
    default:
      throw new Error('Tipo de pergunta desconhecido: "' + q.type + '" (' + q.code + ')');
  }
}

function addParagraph(form, q) {
  var item = form.addParagraphTextItem().setTitle(q.title).setRequired(!!q.required);
  if (q.help) { item.setHelpText(q.help); }
  return item;
}

function addText(form, q) {
  var item = form.addTextItem().setTitle(q.title).setRequired(!!q.required);
  if (q.help) { item.setHelpText(q.help); }
  return item;
}

function addCheckbox(form, q) {
  var item = form.addCheckboxItem().setTitle(q.title).setRequired(!!q.required);
  if (q.help) { item.setHelpText(q.help); }
  item.setChoiceValues(q.options);
  if (q.otherOption) { item.showOtherOption(true); }
  return item;
}

function addMultipleChoice(form, q) {
  var item = form.addMultipleChoiceItem().setTitle(q.title).setRequired(!!q.required);
  if (q.help) { item.setHelpText(q.help); }
  item.setChoiceValues(q.options);
  if (q.otherOption) { item.showOtherOption(true); }
  return item;
}

/**
 * Cria uma planilha e a define como destino das respostas.
 * Se algo falhar, o formulario continua valido; o log explica como vincular a mao.
 */
function attachResponsesSpreadsheet(form) {
  try {
    var ss = SpreadsheetApp.create(CONFIG.RESPONSES_SPREADSHEET_NAME);
    form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
    return ss.getUrl();
  } catch (e) {
    Logger.log(
      'Aviso: nao foi possivel criar/vincular a planilha automaticamente (' + e + '). ' +
      'Vincule manualmente: abra o formulario > aba "Respostas" > icone verde de planilha > "Criar planilha".'
    );
    return null;
  }
}

/** Imprime no Registro de execucao as informacoes uteis. */
function logInfo(form, spreadsheetUrl) {
  var linhas = [
    '',
    '============== FORMULARIO DA ETAPA 02 CRIADO COM SUCESSO ==============',
    'Titulo........: ' + form.getTitle(),
    'ID do form....: ' + form.getId(),
    'URL de edicao.: ' + form.getEditUrl(),
    'URL de resposta (enviar para a Mayara): ' + form.getPublishedUrl(),
    'Planilha de respostas: ' + (spreadsheetUrl || '(nao criada — ver aviso acima; vincular manualmente)'),
    '=====================================================================',
    'Dica: revise o formulario e faca 1 resposta de teste antes de enviar.',
    'Dica: volte CONFIG.CONFIRM_CREATION para false para evitar duplicatas.',
    ''
  ];
  var texto = linhas.join('\n');
  Logger.log(texto);
  if (typeof console !== 'undefined' && console.log) {
    console.log(texto);
  }
}
