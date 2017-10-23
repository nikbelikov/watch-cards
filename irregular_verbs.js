// список неправильных глаголов
words = [
  // { forms: ['abide', 'abided', 'abided'], translate: ['обитать', 'пребывать'] },
  // { forms: ['arise', 'arose', 'arisen'], translate: ['возникать', 'появляться'] },
  // { forms: ['awake', 'awoke', 'awoken'], translate: ['будить', 'просыпаться'] },
  // { forms: ['be', 'was, were', 'been'], translate: ['быть', 'находиться'] },
  // { forms: ['bear', 'bore', 'borne'], translate: ['носить', 'выносить'] },
  // { forms: ['beat', 'beat', 'beaten'], translate: ['бить'] },
  // { forms: ['become', 'became', 'become'], translate: ['становиться'], popular: true },
  // { forms: ['begin', 'began', 'begun'], translate: ['начинать(ся)'] },
  // { forms: ['behold', 'beheld', 'beheld'], translate: ['видеть','замечать'] },
  // { forms: ['bend', 'bent', 'bent'], translate: ['гнуть(ся)'] },
  // { forms: ['bet', 'bet', 'bet'], translate: ['держать пари'] },
  // { forms: ['bid', 'bid/bade', 'bidden'], translate: ['велеть', 'просить'] },
  // { forms: ['bind', 'bound', 'bound'], translate: ['связывать'] },
  // { forms: ['bite', 'bit', 'bitten'], translate: ['кусать'] },
  // { forms: ['bleed', 'bled', 'bled'], translate: ['кровоточить'] },
  // { forms: ['blow', 'blew', 'blown'], translate: ['дуть'] },
  // { forms: ['break', 'broke', 'broken'], translate: ['ломать'], popular: true },
  // { forms: ['bring', 'brought', 'brought'], translate: ['принести'], popular: true },
  // { forms: ['build', 'built', 'built'], translate: ['строить'], popular: true },
  // { forms: ['burn', 'burned/burnt', 'burned/burnt'], translate: ['жечь', 'гореть'] },
  // { forms: ['burst', 'burst', 'burst'], translate: ['взорваться'] },
  // { forms: ['bust', 'busted/bust', 'busted/bust'], translate: ['разорить(ся)'] },
  // { forms: ['buy', 'bought', 'bought'], translate: ['купить'], popular: true },
  // { forms: ['cast', 'cast', 'cast'], translate: ['бросать', 'кидать'] },
  // { forms: ['catch', 'caught', 'caught'], translate: ['ловить'] },
  // { forms: ['choose', 'chose', 'chosen'], translate: ['выбирать'], popular: true },
  // { forms: ['cleave', 'cleft', 'cleft'], translate: ['рассечь'] },
  // { forms: ['cling', 'clung', 'clung'], translate: ['цеплять(ся)'] },
  // { forms: ['clothe', 'clothed/clad', 'clothed/clad'], translate: ['одеть(ся)'] },
  // { forms: ['come', 'came', 'come'], translate: ['приходить'], popular: true },
  // { forms: ['cost', 'cost', 'cost'], translate: ['стоить'] },
  // { forms: ['creep', 'crept', 'crept'], translate: ['ползать'] },
  // { forms: ['cut', 'cut', 'cut'], translate: ['резать'], popular: true },
  // { forms: ['deal', 'dealt', 'dealt'], translate: ['торговать'] },
  // { forms: ['dig', 'dug', 'dug'], translate: ['копать'] },
  // { forms: ['disprove', 'disproved', 'disproved/disproven'], translate: ['опровергать'] },
  // { forms: ['dive', 'dove/dived', 'dived'], translate: ['нырять', 'погружаться'] },
  // { forms: ['do', 'did', 'done'], translate: ['делать'], popular: true },
  // { forms: ['draw', 'drew', 'drawn'], translate: ['рисовать', 'тащить'], popular: true },
  // { forms: ['dream', 'dreamed/dreamt', 'dreamed/dreamt'], translate: ['видеть сны', 'мечтать'] },
  // { forms: ['drink', 'drank', 'drunk'], translate: ['пить'] },
  // { forms: ['drive', 'drove', 'driven'], translate: ['водить', 'гнать'], popular: true },
  // { forms: ['dwell', 'dwelt/dwelled', 'dwelt/dwelled'], translate: ['обитать'] },
  // { forms: ['eat', 'ate', 'eaten'], translate: ['есть (пищу)'] },
  // { forms: ['fall', 'fell', 'fallen'], translate: ['падать'], popular: true },
  // { forms: ['feed', 'fed', 'fed'], translate: ['кормить(ся)'] },
  // { forms: ['feel', 'felt', 'felt'], translate: ['чувствовать'], popular: true },
  // { forms: ['fight', 'fought', 'fought'], translate: ['бороться'] },
  // { forms: ['find', 'found', 'found'], translate: ['находить'], popular: true },
  // { forms: ['fit', 'fit/fitted', 'fit/fitted'], translate: ['подходить', 'подгонять (об одежде)'] },
  // { forms: ['flee', 'fled', 'fled'], translate: ['бежать', 'спасаться'] },
  // { forms: ['fling', 'flung', 'flung'], translate: ['швырять'] },
  // { forms: ['fly', 'flew', 'flown'], translate: ['летать'] },
  // { forms: ['forbid', 'forbade', 'forbidden'], translate: ['запретить'] },
  // { forms: ['forgo', 'forewent', 'foregone'], translate: ['предшествовать', 'воздерживаться'] },
  // { forms: ['foresee', 'foresaw', 'foreseen'], translate: ['предвидеть'] },
  // { forms: ['foretell', 'foretold', 'foretold'], translate: ['предсказывать'] },
  // { forms: ['forget', 'forgot', 'forgotten'], translate: ['забыть'] },
  // { forms: ['forgive', 'forgave', 'forgiven'], translate: ['простить'] },
  // { forms: ['forsake', 'forsook', 'forsaken'], translate: ['покидать'] },
  // { forms: ['freeze', 'froze', 'frozen'], translate: ['замерзать'] },
  // { forms: ['get', 'got', 'gotten/got'], translate: ['получать', 'становиться'], popular: true },
  // { forms: ['gild', 'gilt', 'gilt'], translate: ['позолотить'] },
  // { forms: ['give', 'gave', 'given'], translate: ['давать'], popular: true },
  // { forms: ['go', 'went', 'gone'], translate: ['идти', 'ехать'], popular: true },
  // { forms: ['grind', 'ground', 'ground'], translate: ['точить', 'молоть'] },
  // { forms: ['grow', 'grew', 'grown'], translate: ['расти', 'выращивать'], popular: true },
  // { forms: ['hang', 'hung', 'hung'], translate: ['висеть', 'повесить'] },
  // { forms: ['have', 'had', 'had'], translate: ['иметь'], popular: true },
  // { forms: ['hear', 'heard', 'heard'], translate: ['слышать'], popular: true },
  // { forms: ['heave', 'heaved/hove', 'heaved/hove'], translate: ['поднимать'] },
  // { forms: ['hew', 'hewed', 'hewn/hewed'], translate: ['рубить', 'тесать'] },
  // { forms: ['hide', 'hid', 'hidden'], translate: ['прятать(ся)'] },
  // { forms: ['hit', 'hit', 'hit'], translate: ['ударить'] },
  // { forms: ['hold', 'held', 'held'], translate: ['держать', 'проводить'], popular: true },
  // { forms: ['hurt', 'hurt', 'hurt'], translate: ['ранить', 'обижать'] },
  // { forms: ['inlay', 'inlaid', 'inlaid'], translate: ['вкладывать', 'инкрустировать'] },
  // { forms: ['input', 'input', 'input'], translate: ['вводить (данные)'] },
  // { forms: ['interweave', 'interwove', 'interwoven'], translate: ['сплетать'] },
  // { forms: ['keep', 'kept', 'kept'], translate: ['держать'], popular: true },
  // { forms: ['knit', 'knit', 'knit'], translate: ['вязать'] },
  // { forms: ['know', 'knew', 'known'], translate: ['знать'], popular: true },
  // { forms: ['lay', 'laid', 'laid'], translate: ['класть'] },
  // { forms: ['lead', 'led', 'led'], translate: ['вести'] },
  // { forms: ['lean', 'leant', 'leant'], translate: ['опираться'] },
  // { forms: ['leap', 'leapt', 'leapt'], translate: ['прыгать'] },
  // { forms: ['learn', 'learned/learnt', 'learnt'], translate: ['учить(ся)'] },
  // { forms: ['leave', 'left', 'left'], translate: ['оставлять', 'уезжать'], popular: true },
  // { forms: ['lend', 'lent', 'lent'], translate: ['давать взаймы'] },
  // { forms: ['let', 'let', 'let'], translate: ['позволять'], popular: true },
  // { forms: ['lie', 'lay', 'lain'], translate: ['лежать'], popular: true },
  // { forms: ['light', 'lit/lighted', 'lit/lighted'], translate: ['зажигать', 'освещать'] },
  // { forms: ['lose', 'lost', 'lost'], translate: ['терять'], popular: true },
  // { forms: ['make', 'made', 'made'], translate: ['делать', 'создавать'], popular: true },
  // { forms: ['mean', 'meant', 'meant'], translate: ['означать'], popular: true },
  // { forms: ['meet', 'met', 'met'], translate: ['встретить'], popular: true },
  // { forms: ['mistake', 'mistook', 'mistaken'], translate: ['ошибаться'] },
  // { forms: ['overcome', 'overcame', 'overcome'], translate: ['преодолевать'] },
  // { forms: ['pay', 'paid', 'paid'], translate: ['платить'], popular: true },
  // { forms: ['plead', 'pleaded/pled', 'pleaded/pled'], translate: ['заявлять'] },
  // { forms: ['prove', 'proved', 'proven/proved'], translate: ['доказывать'] },
  // { forms: ['put', 'put', 'put'], translate: ['класть'], popular: true },
  // { forms: ['read', 'read', 'read'], translate: ['читать'], popular: true },
  // { forms: ['relay', 'relaid', 'relaid'], translate: ['терять'] },
  // { forms: ['ring', 'rang', 'rung'], translate: ['звонить'] },
  // { forms: ['rise', 'rose', 'risen'], translate: ['подниматься'], popular: true },
  // { forms: ['run', 'ran', 'run'], translate: ['бежать'], popular: true },
  // { forms: ['say', 'said', 'said'], translate: ['сказать'], popular: true },
  // { forms: ['see', 'saw', 'seen'], translate: ['видеть'], popular: true },
  // { forms: ['seek', 'sought', 'sought'], translate: ['искать'] },
  // { forms: ['sell', 'sold', 'sold'], translate: ['продавать'] },
  // { forms: ['send', 'sent', 'sent'], translate: ['посылать'], popular: true },
  // { forms: ['set', 'set', 'set'], translate: ['ставить'] },
  // { forms: ['sew', 'sewed', 'sewn'], translate: ['шить'] },
  // { forms: ['shake', 'shook', 'shaken'], translate: ['трясти'] },
  // { forms: ['shave', 'shaved', 'shaved/shaven'], translate: ['брить(ся)'] },
  // { forms: ['shake', 'shook', 'shaken'], translate: ['трясти'] },
  // { forms: ['shear', 'sheared', 'sheared/shorn'], translate: ['стричь'] },
  // { forms: ['shine', 'shone', 'shone'], translate: ['светить', 'сиять'] },
  // { forms: ['shoot', 'shot', 'shot'], translate: ['стрелять'] },
  // { forms: ['show', 'showed', 'shown'], translate: ['показывать'], popular: true },
  // { forms: ['shrink', 'shrank', 'shrunk'], translate: ['сжиматься'] },
  // { forms: ['shut', 'shut', 'shut'], translate: ['закрывать'] },
  // { forms: ['sing', 'sang', 'sung'], translate: ['петь'] },
  // { forms: ['sit', 'sat', 'sat'], translate: ['сидеть'], popular: true },
  // { forms: ['sleep', 'slept', 'slept'], translate: ['спать'] },
  // { forms: ['slide', 'slid', 'slid'], translate: ['скользить'] },
  // { forms: ['smell', 'smelt', 'smelt'], translate: ['пахнуть', 'нюхать'] },
  // { forms: ['speak', 'spoke', 'spoken'], translate: ['разговаривать'], popular: true },
  // { forms: ['spell', 'spelt', 'spelt'], translate: ['писать', 'читать по буквам'] },
  // { forms: ['spend', 'spent', 'spent'], translate: ['тратить', 'проводить (время)'], popular: true },
  // { forms: ['stand', 'stood', 'stood'], translate: ['стоять'], popular: true },
  // { forms: ['steal', 'stole', 'stolen'], translate: ['красть'] },
  // { forms: ['swim', 'swam', 'swum'], translate: ['плыть'] },
  // { forms: ['swing', 'swung', 'swung'], translate: ['раскачивать(ся)'] },
  // { forms: ['take', 'took', 'taken'], translate: ['брать'], popular: true },
  // { forms: ['teach', 'taught', 'taught'], translate: ['обучать'] },
  { forms: ['tell', 'told', 'told'], translate: ['говорить', 'рассказывать'], popular: true },
  // { forms: ['think', 'thought', 'thought'], translate: ['думать'], popular: true },
  // { forms: ['throw', 'threw', 'thrown'], translate: ['бросать'] },
  // { forms: ['understand', 'understood', 'understood'], translate: ['понимать'] },
  { forms: ['undo', 'undid', 'undone'], translate: ['уничтожать сделанное'] },
  // { forms: ['wake', 'woke/waked', 'woken/waked'], translate: ['просыпаться'] },
  // { forms: ['wear', 'wore', 'worn'], translate: ['носить'], popular: true },
  // { forms: ['wet', 'wet', 'wet'], translate: ['мочить'] },
  // { forms: ['win', 'won', 'won'], translate: ['выигрывать', 'побеждать'] },
  // { forms: ['wring', 'wrung', 'wrung'], translate: ['выкручивать'] },
  // { forms: ['write', 'wrote', 'written'], translate: ['писать'], popular: true }
];

// виды наборов
config = [
  { watch: '38mm', position: 'top', highlightColor: 'ffea00' },
  { watch: '38mm', position: 'bottom', highlightColor: 'ffea00' },
  { watch: '42mm', position: 'top', highlightColor: 'ffea00' },
  { watch: '42mm', position: 'bottom', highlightColor: 'ffea00' },
]

for (configItem = 0; configItem < config.length; configItem += 1) {
  // параметры документа
  watch = config[configItem].watch; // '38mm' || '42mm'

  width = watch === '38mm' ? 272 : 312;
  height = watch === '38mm' ? 340 : 390;
  resolution = 72;
  docName = config[configItem].watch + '-' + config[configItem].position + '-' + config[configItem].highlightColor;
  docMode = NewDocumentMode.RGB;
  mainFont = 'Rubik-Regular';

  // цвета
  bgColor = new SolidColor();
  bgColor.rgb.hexValue = '000000';

  mainColor = new SolidColor();
  mainColor.rgb.hexValue = 'ffffff';

  highlightColor = new SolidColor();
  highlightColor.rgb.hexValue = config[configItem].highlightColor;

  fadeColor = new SolidColor();
  fadeColor.rgb.hexValue = '868686';

  // шрифты
  fontSizeExtraSmall = watch === '38mm' ? 22 : 24;
  fontSizeSmall = watch === '38mm' ? 24 : 26;
  fontSizeNormal = watch === '38mm' ? 28 : 30;
  fontSizeLarge = watch === '38mm' ? 35 : 37;

  // позиции тектовых блоков
  textsPosition = config[configItem].position;
  paddingLeft = 12;
  translateTop = textsPosition === 'top' ? 60 : height - 143;
  wordTop = textsPosition === 'top' ? 118 : height - 85;
  formsTop = textsPosition === 'top' ? 155 : height - 48;

  savePath = Folder('/Users/nikbelikov/Downloads/' + docName);
  if(!savePath.exists) {
    savePath.create();
  }

  resetBackground = function () {
    // заливаем фон
    doc.selection.selectAll();
    doc.selection.fill(bgColor);
    doc.selection.deselect();
  };

  drawTranslation = function() {
    // рисуем перевод
    translationText = words[cardNumber].translate[0];
    additionalTranslate = words[cardNumber].translate[1];
    delim = ', ';

    if (additionalTranslate) {
      if (translationText.length + delim.length + additionalTranslate.length <= 20) {
        translationText += delim + additionalTranslate;
      }
    }

    translationLayer = doc.artLayers.add();
    translationLayer.kind = LayerKind.TEXT;
    translationLayer.name = 'translate';
    translationLayer.textItem.contents = translationText;
    translationLayer.textItem.font = mainFont;
    translationLayer.textItem.size = translationText.length > 18 ? fontSizeExtraSmall : fontSizeSmall;
    translationLayer.textItem.color = fadeColor;
    translationLayer.textItem.position = [paddingLeft, translateTop];
  };

  drawWord = function () {
    // рисуем слово
    wordLayer = doc.artLayers.add();
    wordLayer.kind = LayerKind.TEXT;
    wordLayer.name = 'word';
    wordLayer.textItem.contents = words[cardNumber].forms[0];
    wordLayer.textItem.font = mainFont;
    wordLayer.textItem.size = fontSizeLarge;
    wordLayer.textItem.color = highlightColor;
    wordLayer.textItem.position = [paddingLeft, wordTop];
  };

  drawForms = function () {
    // рисуем 2 и 3 форму глагола
    secondForm = words[cardNumber].forms[1];
    thirdForm = words[cardNumber].forms[2];

    formsText = secondForm;
    formsText += '\r';
    formsText += thirdForm;

    fontSize = formsText.length > secondForm.length > 16 || thirdForm.length > 16 ? fontSizeSmall : fontSizeNormal;

    formsLayer = doc.artLayers.add();
    formsLayer.kind = LayerKind.TEXT;
    formsLayer.name = 'forms';
    formsLayer.textItem.contents = formsText;
    formsLayer.textItem.font = mainFont;
    formsLayer.textItem.size = fontSize;
    formsLayer.textItem.color = mainColor;
    formsLayer.textItem.position = [paddingLeft, formsTop];
  };

  saveFile = function () {
    // сохраняем PNG
    saveOptions = new ExportOptionsSaveForWeb();
    saveOptions.format = SaveDocumentType.PNG;
    saveOptions.PNG8 = false;
    saveOptions.quality = 100;

    fileName = savePath;
    fileName += '/';
    fileName += cardNumber.toString();
    fileName += '.png';

    pngFile = new File(fileName);
    app.activeDocument.exportDocument(pngFile, ExportType.SAVEFORWEB, saveOptions);
  };

  resetLayers = function () {
    // удаляем все созданные слои
    translationLayer.remove();
    wordLayer.remove();
    formsLayer.remove();
  };

  // создаем документ
  doc = app.documents.add(width, height, resolution, docName, docMode);

  resetBackground();

  // рисуем карточки
  for (cardNumber = 0; cardNumber < words.length; cardNumber += 1) {
    drawTranslation();
    drawWord();
    drawForms();
    saveFile();
    resetLayers();
  }

  // закрываем документ
  app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
